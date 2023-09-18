<?php 


// size of the tumbnails that created 
$newTmbSize = 200;

// form sender php 
$senderPhpFile = 'project-tmb.php';


// ------------------------------------

// load functions
require('functions/img-tmb-functions.php'); 

function respondSend($txt) {
	if ( isset( $_POST['ajax'] ) ) echo $txt;
	else header( 'Location: '.$txt );
}

// dont run if not trigred by form 
if ( !isset($_POST['projectName']) ){
	respondSend("$senderPhpFile?status=sendError"); 
	die();
}

// ------------------------------------

// set targetFolder for uploading
$senderProject = $_POST['projectName'];
$targetFolder = urldecode($senderProject);

// ------------------------------------

$tmbFoder = $targetFolder.'/tmb';
$imgFoder = $targetFolder.'/slides';

// ------------------------------------

function deleteFilesInDir($dirname) {
    if (is_dir($dirname))
        $dir_handle = opendir($dirname);
    if (!$dir_handle)
        return false;
    while ($file = readdir($dir_handle)) {
        if ($file != "." && $file != "..") {
            if (!is_dir($dirname . "/" . $file))
                 unlink($dirname . "/" . $file);
            else
                 deleteFilesInDir($dirname . '/' . $file);
        }
    }
    closedir($dir_handle);
    return true;
}

// create directory with 777 permission if not exist, or make it empty 
if ( !file_exists($tmbFoder) )
	createDir($tmbFoder);
else 
	deleteFilesInDir($tmbFoder);

// ------------------------------------

// a function that removes everything before last '/' character
function folderNameFromPath($pathh) {
	$pathhIndex = strripos($pathh,'/');
	return substr($pathh, $pathhIndex + 1 );
}

// ------------------------------------

// search images folder  
$imgFoderArray =
	glob( $imgFoder.'/*[jpg,Jpg,JPG,png,Png,PNG,gif,Gif,GIF]');

// Sort the arrays using a case insensitive "natural order" algorithm
natcasesort($imgFoderArray);

// check if there is any inage in the source folder 
if ( sizeof($imgFoderArray) < 1 ){
	respondSend("$senderPhpFile?status=noFolderExists"); 
	die();
}

// do the job 
foreach ( $imgFoderArray as $Srcimg) {


	// get the name form the source file 
	$destinationName =
		folderNameFromPath($Srcimg);

	if ( preg_match("/jpg|JPG|jpeg|JPEG/", $destinationName) ) 
		$sourceImageFormat  = 'jpg';
	elseif ( preg_match("/png|PNG/", $destinationName) ) 
		$sourceImageFormat  = 'png';
	elseif ( preg_match("/gif|GIF/", $destinationName) ) 
		$sourceImageFormat  = 'gif';

	if (// check if there is any error creating the tumbnail

		// create the tumbnail
		!createThumb(
			$Srcimg, //source picture
			$tmbFoder.'/'.$destinationName, //destination
			$sourceImageFormat,
			$newTmbSize, //$new_w
			$newTmbSize, // $new_h
			$jpg_quality = 50
		)

	){
		// respond: there is an error creating tumbnails 
		respondSend("$senderPhpFile?status=createTmbError");
		die();
    }

}// end loop 

// respond: everything is ok
respondSend("$senderPhpFile?status=ok"); 

