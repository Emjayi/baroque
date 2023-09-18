<?php 

$file_name 	   = 'functions/user-pass.txt';
$senderPhpFile = 'create-pass.php';

require('functions/salt.php');

$respond = 'false';

if ( isset($_POST['smb'] )) {
	
	$name = $_POST['name'];
	$pass1 = $_POST['pass1'];
	$pass2 = $_POST['pass2'];
	
	if ( strlen($name) > 4 && strlen($pass1) > 4 && strlen($pass2) > 4  ) {
		if ( $pass1 == $pass2 ) {

			// make txt file content 
			$userPass  = salt(
				$name,
				$pass1
			);
			
			// write txt file 
			$myfile = fopen( $file_name , "w");
			fwrite($myfile, $userPass);
			fclose($myfile);
			
			$respond = 'ok';
			
		} else {
			$respond = 'error';
		}
	} else {
		$respond = 'short';
	}

	
}

if ($respond == 'ok') {
	session_start();
	$_SESSION["authenticated"] = 'true';
	
	header("Location: index.php"); 
	
} else {
	
	header("Location: $senderPhpFile?status=$respond"); 

}
