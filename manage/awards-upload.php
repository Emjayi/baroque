<?php
// -----------------------
//  load php files 
// -----------------------

// run the page only the user is logged in 
require_once('authenticate.php');

// load functions
include('functions/img-tmb-functions.php');


// -----------------------
//  parameters 
// -----------------------
ini_set("memory_limit", "99M");
ini_set('post_max_size', '20M');
ini_set('max_execution_time', 1200);


$targetBaseDir = '../DATA/awards/';
$senderPhpFile = 'award-add.php';


// -----------------------
// count folder item and name the directories
// -----------------------
$newFolderName  = sizeof( glob($targetBaseDir.'*' , GLOB_ONLYDIR) );
$newFolderName  += 1 ;

$target_dir     = $targetBaseDir.$newFolderName;
$textFileName   = $target_dir.'/info.txt';


// -----------------------
// a function for sending status to the sender 
// -----------------------
function sendStatus($respond) {
	global $senderPhpFile;
	header("Location: $senderPhpFile?status=$respond"); 
}


// -----------------------
// get the form data
// -----------------------
if(
	!isset($_POST["title"])    ||
	!isset($_POST["subTitle"]) ||
	!isset($_POST["year"])
){
	sendStatus('formPostError');
	die();
}

$title    = $_POST["title"];
$subTitle = $_POST["subTitle"];
$year     = $_POST["year"];

if (
	strlen($title) < 5 || 
	strlen($subTitle) < 5 
){
	sendStatus('lenghtError');
	die();
}


// create directory with 777 permission if not exist - start
createDir($target_dir);


// -----------------------
// prepare and write the text file 
// -----------------------

$textToWrite  = '------ title ------ '.PHP_EOL;
$textToWrite .= $title.PHP_EOL;
$textToWrite .= '------ subtitle ------'.PHP_EOL;
$textToWrite .= $subTitle.PHP_EOL;
$textToWrite .= '------ year ------'.PHP_EOL;
$textToWrite .= $year.PHP_EOL;
$textToWrite .= PHP_EOL;

wrhiteFile( $textFileName, $textToWrite);


// -----------------------
// check if upload file checkbox is cheked upload the file
// -----------------------

if ( !isset($_POST['HasImage']) ) {
	sendStatus('defaultImgOK');
	die();
}


// -----------------------
// check if image file is sent and do the functions
// -----------------------

$max_size  = 15000;

set_time_limit(0);

$allowedImageType =
	array("image/png","image/x-png");

// set the target directory
$target_file =
	$target_dir .'/'. removeSpace(basename($_FILES["upload_file"]["name"]));


if (file_exists($target_file)) {
	// file already exists
	sendStatus  ('fileexists');
	die();
}
if ($_FILES["upload_file"]["size"] > $max_size) {
	 // file size is large 
	sendStatus  ('filesize');
	die();
}
if ($_FILES["upload_file"]["error"] > 0) {
	// output= Error in image File
	sendStatus('imgfileerror');
	die();
}
if (!in_array($_FILES["upload_file"]["type"], $allowedImageType)) {
	// output= You can only upload PNG 
	sendStatus('imgformat');
	die();
}

// create directory with 777 permission if not exist

if (
	move_uploaded_file($_FILES["upload_file"]["tmp_name"], $target_file)
){
	// respond : ok
	sendStatus  ('ok');
} else {
	// respond : Sorry, there was an error uploading your file.
	sendStatus  ('error');
}


