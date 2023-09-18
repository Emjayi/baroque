<?php

// usename and password
require_once('authenticate.php');

// load site informatin
require ('../config.php');
$the_site_url  =
	/* remove last "/" charachter */
	substr($site_url, 0, -1); 


// ------ setting parameters 
// ------------------------
$the_root_path = '../';


// main sections 
$site_main_folders = [
    'about',
    'projects',
    'awards',
    'contact'
];



// ------ funtions and main parameters 
// ------------------------


// wrhite txt file function
function wrhiteFile(  $file_name,  $file_content)
{
    $myfile = fopen( $file_name , "w");
    fwrite($myfile, $file_content);
    fclose($myfile);
}

// a function that removes everything before last '/' character
function folderNameFromPath($pathh) {
	$pathhIndex = strripos($pathh,'/');
	return substr($pathh, $pathhIndex + 1 );
}

// a founction that corects project foldernames uploaded by user 
function editfolderNAme($txt,$changeLetterToLowerCase) {
	$txt = str_replace( ' ' , '-' , $txt);
	$txt = str_replace( '.' , '' , $txt);
	$txt = str_replace( "'" , '' , $txt);
	$txt = str_replace( '"' , '' , $txt);
	$txt = str_replace( '`' , '' , $txt);
	$txt = str_replace( '`S' , '' , $txt);
	$txt = str_replace( '--' , '-' , $txt);
	$txt = str_replace( '--' , '-' , $txt);
	if ($changeLetterToLowerCase) $txt = strtolower($txt);
	return $txt;
}



// xml starting tag
$sitemap_header = '<?xml version="1.0" encoding="UTF-8"?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
	http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" >';

// xml ending tag
$sitemap_footer = '
</urlset>';


// ------------------------------
// ------ xml body tags generator
// ------------------------------

function xml_body(
	$the_url, 
	$priority = '0.80',
	$has_alt_lang = false, 
	$changle_path = true,
	$changefreq = 'monthly'
){
	global $site_lang, $the_site_url,$the_root_path;
	if ( $changle_path )
		$the_final_url = str_replace( $the_root_path , $the_site_url , $the_url);
	else 
		$the_final_url = $the_url;
	
	$return ='
		<url>
			<loc>'.$the_final_url.'</loc>
			<lastmod>'.date(DATE_ATOM).'</lastmod>
			<changefreq>'.$changefreq.'</changefreq>
			<priority>'.$priority.'</priority>';
	$return .= '
		</url>';
	return $return;
}


// ------ build the xml sitemap text , and add main homepage to it
$xml_text = $sitemap_header;
$xml_text .= xml_body($the_site_url.'/','1.00',false);


// ------ add base folders to the xml text 
$site_main_folders_size = sizeof($site_main_folders);

$theSearchUrl = $the_root_path.'/';
for ( $i = 0 ; $i < $site_main_folders_size ; $i++ ){
	$main_folders_url =
		$theSearchUrl.$site_main_folders[$i];
	if ( file_exists($theSearchUrl.'index.php') ) {
		$xml_text .=
			xml_body($main_folders_url.'/','0.90',true);
	}
}


// ------ add projects to the xml text 
$projects_folders = glob('../'.$dataFolder.'/projects/*', GLOB_ONLYDIR);
foreach ( $projects_folders as $projects_folder ) {
		
	//get from folder name 
	/*$projectName = folderNameFromPath( $projects_folder );*/
	
	// get from info.txt
	$projectTxt = 
		file($projects_folder.'/info.txt', FILE_IGNORE_NEW_LINES);
	$projectName = $projectTxt[1];
	
	
	$projectNameFinalURL =
		$the_root_path.'/projects/'.editfolderNAme($projectName,true) ; 
	$xml_text .=
		xml_body($projectNameFinalURL,'0.80',true);
}


// ------ add ending tag to the xml text 
$xml_text.= $sitemap_footer;

/*
echo '<pre><code>';
echo $xml_text;
echo '</code></pre>';
*/


// ------ save the xml file
wrhiteFile(  $the_root_path.'sitemap.xml',  $xml_text);

// ------ send ok signal to the host file 
header("Location: sitemap.php?status=ok"); 
?>