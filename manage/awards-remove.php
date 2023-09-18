<?php

// usename and password
require_once('authenticate.php');

$awardsFolder  = 'DATA/awards/';
$target_folder = '../'.$awardsFolder.'*';
$senderPhpFile = 'awards-delete.php';

// define delete function
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

// get the files and count it
$target_folder = glob($target_folder, GLOB_BRACE);
$count         = count($target_folder);

// sort folders by name
natsort($target_folder);
$target_folder = array_values($target_folder);


$respound = false;

if ( isset($_POST['deleteItem']) ) {
	
	// set the name of the path that will be deleted
	$delete_path = $count - 1;

	if ($count > 0 ) {
		// delete the folder
		delete_directory ($target_folder[$delete_path]);
		// respond: last item deleted
		header("Location: $senderPhpFile?status=deleted"); 
	} else {
		// respond: all item deleted
		header("Location: $senderPhpFile?status=deletedall"); 
	}

}
