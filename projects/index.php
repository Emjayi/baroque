<?php

// path of php script
$path = '../';

// load the basic varibles anf function 
require ($path.'php/intro.php');

// ------------ check URL and show project Page 
$showAllProjects = true;
$projectsIndoxToShow = false;
$projectsIndoxToShowNotFound = true;
if (isset($_GET['post'])) {
	if ( strlen($_GET['post']) == 0 || $_GET['post'] == 'index.php') {
		$showAllProjects = true;
	} else {
		$showAllProjects = false;
		$urlName = $_GET['post'];
	}
}

// --------------------------------------------
// ---------- scan projects folder ------------
// --------------------------------------------
$projectsFolderPath =
	$path.'DATA/projects/';
$txtFileName = 
	'info.txt';

// search projects folder
$projectsFolderArray =
	glob($projectsFolderPath.'*',GLOB_ONLYDIR);

// sort project folders by name 
$projectsFolderArray1 = array();
foreach ( $projectsFolderArray as $projectsFolderArrayItem )
	array_push($projectsFolderArray1,$projectsFolderArrayItem);
$projectsFolderArray = $projectsFolderArray1;


$projectsFolderCount =
	sizeof($projectsFolderArray);

// a function that removes everything before last '/' character
function folderNameFromPath($pathh) {
	$pathhIndex = strripos($pathh,'/');
	return substr($pathh, $pathhIndex + 1 );
}


function removeUnwantedCharacterss($txt) {
	$txt = trim($txt);
	$txt = str_replace( ' ' , '-' , $txt);
	$txt = str_replace( '.' , '' , $txt);
	$txt = str_replace( "'" , '' , $txt);
	$txt = str_replace( '"' , '' , $txt);
	$txt = str_replace( '`' , '' , $txt);
	$txt = str_replace( '`s' , '' , $txt);
	$txt = str_replace( '--' , '-' , $txt);
	$txt = str_replace( '--' , '-' , $txt);
	$txt = trim( $txt , '-');
	return $txt;
}


// --------------------------------------------
// -- read txt file and put theme in arrays ---
// --------------------------------------------
$allProjectsTxtArray = array();
$theTitleArray = array();
for ( $i=0 ; $i < $projectsFolderCount ; $i++ ) {

	$projectTxtArray = 
		file($projectsFolderArray[$i].'/'.$txtFileName, FILE_IGNORE_NEW_LINES);

	$theTitle = $projectTxtArray[1];
	$theTitle = str_replace( ' ' , '-' , $theTitle);
	$theTitle = strtolower($theTitle);
	
	if ( !$showAllProjects ) {
		if (removeUnwantedCharacterss($urlName) == removeUnwantedCharacterss($theTitle) ) {
			$projectsIndoxToShowNotFound = false;
			$projectsIndoxToShow = $i;
		}
	}
	array_push($allProjectsTxtArray, $projectTxtArray );
	array_push($theTitleArray, $theTitle );
}

if ( $showAllProjects ) {
	// -------------------------------------------------
	// ------------------ grid page --------------------
	// -------------------------------------------------

	// header parameters
	$pageClass = 'works';
	$pageTitle = 'Projects';
	
	// generate page description
	$page_description = 'view all projects, ' . $description;

	
} else if ( !$showAllProjects && $projectsIndoxToShowNotFound) {
	// -------------------------------------------------
	// if url not math any project name, show error page
	// -------------------------------------------------
	require($path.'error/index.php');
	die();
	
	
} else {
	// -------------------------------------------------
	// -------------- view project page ----------------
	// -------------------------------------------------

	// generate header parameters
	$pageClass = 'project';
	$pageTexts = $allProjectsTxtArray[$projectsIndoxToShow];
	$pageTextsTitle = $pageTexts[1];
	$pageTextsTitle = str_replace( '  ' , ' ' , $pageTextsTitle);
	$pageTextsTitle = str_replace( '-' , ' ' , $pageTextsTitle);
	$pageTextsTitle = str_replace( '--' , ' ' , $pageTextsTitle);
	$pageTitle = $pageTextsTitle.' | Projects';

	// generate page description
	$page_description =
		'Details and images of '.
		$pageTextsTitle. /* project title */
		' , '.
		$pageTexts[7]. /* project type  */
		' architecture project, which is '.
		$pageTexts[9]. /* project status  */
		'. design and development in '.
		$pageTexts[3]. /* project year  */
		' by MRK Office.';
	
	// remove multiply spaces from description text
	$page_description =
		preg_replace('/\s+/', ' ',$page_description);
	
	// set og image
	$pageOGimage =
		glob($projectsFolderArray[$projectsIndoxToShow].'/*.jpg')[0];
	$pageOGimage =
		makePathAbs($pageOGimage);
	
}

// --------------------------------------------
// ------ common functions and varibles -------
// --------------------------------------------

// a function for detecting that Img is Land Scape Or Portrait
function isImgLandScapeOrPortrait($img) {
	list($tbm_width, $tmb_height) =
		getimagesize($img);
	if ($tbm_width < $tmb_height) return 'port';
	else return 'land';
}

// function for calculatimg style property (padding right) of img parent 
function calculateImgRatio($img) {
	list($tbm_width, $tmb_height) =
		getimagesize($img);
	$ratio = $tbm_width / $tmb_height;
	echo $ratio; 
}

// lazy load placeholder
$loading_img=
	'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';


// --------------------------------------------
// -------------- load the page ---------------
// --------------------------------------------


// load the header 
require ($path.'php/header.php');

// load page content 
if ( $showAllProjects ) require('grid.php');
if ( !$showAllProjects ) require('project.php');

//  load the footer 
require ($path.'php/footer.php');

