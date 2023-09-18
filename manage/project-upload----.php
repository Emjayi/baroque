<?php

require_once('authenticate.php');

// -----------------------
//  parameters 
// -----------------------
ini_set("memory_limit", "99M");
ini_set('post_max_size', '20M');
ini_set('max_execution_time', 1200);
define('IMAGE_MEDIUM_SIZE', 1000);


$max_size      = 50000000;
$upload_status = 'serverError';

$temp_dir   = "../DATA/temp/";

// -----------------------
// check uploaded file is client or project 
// -----------------------
$sender_php = 'project-add.php';

if ( $_POST['section'] == 'project' ) {
	$target_dir = "../DATA/projects/";

} else if (  $_POST['section'] == 'client' ) {
	$target_dir = "../DATA/team/";
	$sender_php = 'client-add.php';

} else {
	header("Location: $sender_php?upload=$upload_status"); 
	die();
}


// -----------------------
// create a temp folder if not exists
// -----------------------
function createDir($path){		
	if (!file_exists($path)) {
		$old_mask = umask(0);
		mkdir($path, 0777, TRUE);
		umask($old_mask);
	}
}
createDir($temp_dir);



// -----------------------
// upload zip file to a temporary folder
// -----------------------

// set the target directory
$target_file = $temp_dir . basename($_FILES["upload_file"]["name"]);

$uploadOk = 1;
$zip_is_uploaded = false; 

// Check if file already exists
if (file_exists($target_file)) {
	$uploadOk = 0;
	$upload_status = 'fileExists';
}
// Check file size
if ($_FILES["upload_file"]["size"] > $max_size) {
	$uploadOk = 0;
	$upload_status = 'filesize';
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 1) {
	// create directory with 777 permission if not exist
	createDir($target_dir);
	if (move_uploaded_file($_FILES["upload_file"]["tmp_name"], $target_file)) {
		$zip_is_uploaded = true; 
	} else {
		// respond : Sorry, there was an error uploading your file.
		$upload_status = 'errorUploading';
	}
}



// -----------------------
// unzip the zip file to a main folder
// -----------------------
$fileUnzipped = false;
if ( $zip_is_uploaded ) {
	
	$file = $target_file;

	// get the absolute path to $file
	$path = pathinfo(realpath($file), PATHINFO_DIRNAME);

	$zip = new ZipArchive;
	$res = $zip->open($file);
	
	
	if ($res === TRUE) {
		// extract it to the path 
		$zip->extractTo($path);
		$zip->close();
		
		$fileUnzipped = true;
	} else {
		$upload_status = 'zipExtractError';
	}
}


// -----------------------
// check if extracted zip is ok , then move to the main dir
// -----------------------
if ( $fileUnzipped ) {
	
	$unzippedfolders = glob( $temp_dir.'*' , GLOB_ONLYDIR );

	if ( sizeof( $unzippedfolders ) > 1 ) {
		$upload_status = 'zipStructure';
	} else {
		
		// get name of the unzipped folder (remove everything before last '/' character)
		function folderNameFromPath($pathh) {
			$pathhIndex = strripos($pathh,'/');
			return substr($pathh, $pathhIndex + 1 );
		}
		$target = folderNameFromPath($unzippedfolders[0]);
		
		// remove spaces from uploaded folder name
		$target_wothoutSpace = str_replace( ' ' , '-' , $target);
		
		// check the name of project is valid ( witout forbidden characters ) 
		if ( strpos(',', $target) !== false &&
			 strpos('"', $target) !== false &&
			 strpos("'", $target) !== false &&
			 strpos("`", $target) !== false &&
			 substr_count ('.', $target ) > 1 
		   ) $folderNameValid = false; 
		else {
			$folderNameValid = true; 
			$upload_status = 'folderNameInvalid';
		}
		
		// check the name of project is not used before 
		$folderNameExists = false; 
		$existingProjectFolders = glob ( $target_dir.'*' , GLOB_ONLYDIR );
		foreach ( $existingProjectFolders as $existingProjectFolder ) {
			$existingProjectFolderName = folderNameFromPath($existingProjectFolder);
			if ( $existingProjectFolderName == $target ||
				 $existingProjectFolderName == $target_wothoutSpace
			) {
				$folderNameExists = true;
				$upload_status = 'folderNameExists';
			}
		}
		
		// move unzipped folder to the target 
		if ( $folderNameValid && !$folderNameExists ) {
			rename( $unzippedfolders[0] ,  $target_dir.$target_wothoutSpace);
			$upload_status = 'ok';
		}
		
	}

	// define delete function ( delete every thing in the folder )
	function delete_directory($dirname) {
		if (is_dir($dirname))
			$dir_handle = opendir($dirname);
		if (!$dir_handle)
			return false;
		while ($file = readdir($dir_handle)) {
			if ($file != "." && $file != "..") {
				if (!is_dir($dirname . "/" . $file))
					 unlink($dirname . "/" . $file);
				else
					 delete_directory($dirname . '/' . $file);
			}
		}
		closedir($dir_handle);
		rmdir($dirname);
		return true;
	}

	// delete temp folder ( unzipped files )
	delete_directory( $temp_dir );
	

}


// -----------------------
// send respond 
// -----------------------
header("Location: $sender_php?upload=$upload_status"); 
?>	