<?php

// form sender php 
$senderPhpFile = 'video-add.php';

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

// ---------- get video file ----------

// The file name
$fileName     = $_FILES["fileVideo"]["name"];
// File in the PHP tmp folder
$fileTmpLoc   = $_FILES["fileVideo"]["tmp_name"];
// The type of file it is
$fileType     = $_FILES["fileVideo"]["type"]; 
// File size in bytes
$fileSize     = $_FILES["fileVideo"]["size"]; 
// 0 for false... and 1 for true
$fileErrorMsg = $_FILES["fileVideo"]["error"]; 


// ------------------------------------

if (!$fileTmpLoc) { // if video file not chosen
    // echo "ERROR: Please browse for a file before clicking the upload button.";
	respondSend("$senderPhpFile?project=$senderProject&status=selectFile"); 

    die();
}

// ------------------------------------

// create directory with 777 permission if not exist - start
createDir($targetFolder.'/video');

// set a name for uploaded video
$projectName = file ( $targetFolder.'/info.txt');
$projectName = removeSpace($projectName[1]);
	
// now we use 'video' directory inside the target folder
$targetFolder .= '/video';

// ------------------------------------

if(
	move_uploaded_file($fileTmpLoc, $targetFolder.'/'.$projectName.'.mp4')
){
    // echo "$fileName upload is complete";
} else {
    respondSend("$senderPhpFile?project=$senderProject&status=videoError"); 
	die();
}



// ------------ image file ------------

// The file name
$imgfileName     = $_FILES["fileImg"]["name"];
// File in the PHP tmp folder
$imgfileTmpLoc   = $_FILES["fileImg"]["tmp_name"];
// 0 for false... and 1 for true
$imgfileErrorMsg = $_FILES["fileImg"]["error"]; 


// define images
$file = pathinfo($imgfileName);
$fileType = $file["extension"];

$newIMGfileName = $targetFolder . "/video.jpg";
$newTMBfileName = $targetFolder . "/tmb.jpg";



// ------- write the images file ------

if (
	createThumb($imgfileTmpLoc,$newIMGfileName, $fileType, 1000, 1000,55) &&
	createThumb($imgfileTmpLoc,$newTMBfileName, $fileType, 200, 600,35) 
) {
	// respond: everything is ok
	respondSend("$senderPhpFile?status=ok"); 

} else {
	respondSend("$senderPhpFile?project=$senderProject&status=imgError"); 

}
