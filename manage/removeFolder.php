<?php

// usename and password
require_once('authenticate.php');

// get delete delete Path from POST 
$deleteItem = $_POST['deleteItem'];

// check what folder to delete 
$target = $_GET['target'];


if ( $target == 'project' || $target == 'projects') {
	$uploader_script = 'project-delete.php';
	$sort_File   = '../DATA/projects-sort.txt';
	$projectsDir = '../DATA/projects';
	
} else if ( $target == 'client' || $target == 'clients' ) {
	$uploader_script = 'client-delete.php';
	$sort_File   = '../DATA/team-sort.txt';
	$projectsDir = '../DATA/team';
	
} else {
	header("Location: project-delete.php?status=sendError"); 
	die();
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


//error handler function
function customError($errno, $errstr) {
	global $status;
	$status  = 'error';
}

//set error handler
set_error_handler("customError");





// -----------------------
// re-build the sort file array 
// -----------------------

$sortFile_exsist = false;
//$sort_File and $projectsDir are definned in the begining
if ( file_exists($sort_File) ) {
	$sortFileData = file( $sort_File , FILE_IGNORE_NEW_LINES);
	$sortFile_exsist = true;;
}
$projectsDirArray = glob ( $projectsDir.'/*' , GLOB_ONLYDIR);

function rebuildSortTxtFile( $projecttoRemove ){
	global $sort_File,$sortFile_exsist,$sortFileData,$projectsDirArray;
	if (!$sortFile_exsist) return false;

	// find which sort_file_item should be removed 
	$target_index = 'false';
	$Index = 0;
	foreach ( $sortFileData as $sortFileIndx ) {
		if ( $projecttoRemove == $projectsDirArray[$sortFileIndx] )
			$target_index = $Index;
		$Index++;
	}
	if ( $target_index == 'false' ) return;

	// build a new array that not have deleting project 
	$Index_to_remove = $sortFileData[$target_index];
	$sortFileArray = array();
	$projectsDirArray_len = sizeof($projectsDirArray);
	foreach ( $sortFileData as $sortFileIndx ) {
		if ( $sortFileIndx == $Index_to_remove ) continue;
		if ( $sortFileIndx > $Index_to_remove )
			$sortFileIndx_new = $sortFileIndx - 1;
		else $sortFileIndx_new = $sortFileIndx;
		if ( $sortFileIndx_new != $projectsDirArray_len - 1)
			array_push($sortFileArray , $sortFileIndx_new );
	}

	// write new sort txt file 
	$newSortArray = implode(PHP_EOL,$sortFileArray);
	$myfile = fopen( $sort_File , "w");
	if ( $myfile) {
		fwrite($myfile, $newSortArray);
		fclose($myfile);
	}
}


// -----------------------
// perform delete opration 
// -----------------------

// check the path in POST is sent 
if ( strlen($deleteItem) > 1 ) {
	$target_folder = $deleteItem;

	// check the folder name exists , run delete function 
	if(file_exists($target_folder)) { 
		
		// perform delete opration 
		delete_directory($target_folder);
		// re-build the sort file array 
		rebuildSortTxtFile($target_folder);
		
		$status = 'ok';
	} else {
		$status = 'noFolderExists';
	}
} else $status  = 'sendError';
 

// send the status to the base 
header("Location: $uploader_script?status=$status"); 
