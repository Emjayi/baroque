<?php

// ----------------------------
// create directory
// ----------------------------
function createDir($path){		
	if (!file_exists($path)) {
		$old_mask = umask(0);
		mkdir($path, 0777, TRUE);
		umask($old_mask);
	}
}

// ----------------------------
// clean file name
// ----------------------------
function removeSpace($txt) {
	$txt = trim($txt);
	$txt = strtolower($txt);
	// replace whitepace with '-' 
	$txt = str_replace( ' ' , '-' , $txt);
	$txt = str_replace( '--' , '-' , $txt);
	$txt = str_replace( '---' , '-' , $txt);
	$txt = str_replace( "'" , '' , $txt);
	$txt = str_replace( '"' , '' , $txt);
	$txt = str_replace( '`' , '' , $txt);
	$txt = str_replace( '`S' , '' , $txt);
	return $txt;
}


// ----------------------------
// create txt file 
// ----------------------------
function wrhiteFile(  $file_name,  $file_content)
{
  $myfile = fopen( $file_name , "w");
  fwrite($myfile, $file_content);
  fclose($myfile);
}

// ----------------------------
// create image 
// ----------------------------
function createThumb(
  $path1,
  $path2,
  $file_type,
  $new_w = '',
  $new_h ='',
  $jpg_quality = 90,
  $squareSize = ''
) {
	/* read the source image */
	$source_image = FALSE;
	
	if (preg_match("/jpg|JPG|jpeg|JPEG/", $file_type)) {
		$source_image = imagecreatefromjpeg($path1);
	}
	elseif (preg_match("/png|PNG/", $file_type)) {
		
		if (!$source_image = @imagecreatefrompng($path1)) {
			$source_image = imagecreatefromjpeg($path1);
		}
	}
	elseif (preg_match("/gif|GIF/", $file_type)) {
		$source_image = imagecreatefromgif($path1);
	}		
	if ($source_image == FALSE) {
		$source_image = imagecreatefromjpeg($path1);
	}
	
	// get image dimentions from given image 
	$orig_w = imageSX($source_image);
	$orig_h = imageSY($source_image);
	
	// if the target dimentions is bigger than the image dimentions, no nothing 
	if ($orig_w < $new_w && $orig_h < $new_h) {
		$desired_width = $orig_w;
		$desired_height = $orig_h;
	// if the target dimentions is smaller , scale down the image 
	} else {
		$scale = min($new_w / $orig_w, $new_h / $orig_h);
		$desired_width = ceil($scale * $orig_w);
		$desired_height = ceil($scale * $orig_h);
	}
 
  	// make square image , if the last parameter of function in not emply 
	if ($squareSize != '') {
		$desired_width = $desired_height = $squareSize;
	}

	/* create a new, "virtual" image */
	$virtual_image = imagecreatetruecolor($desired_width, $desired_height);
	
	// for PNG background white-----------
	$kek = imagecolorallocate($virtual_image, 255, 255, 255);
	imagefill($virtual_image, 0, 0, $kek);
	
	// make the image --------------------
	// normal mode 
	if ($squareSize == '') { 
		imagecopyresampled(
			$virtual_image,
			$source_image,
			0, 0, 0, 0,
			$desired_width,
			$desired_height,
			$orig_w,
			$orig_h
		);
	// squaire mode
	} else {
		// copy source image at a resized size 
		// crop the image inorder to make it square 
		$wm = $orig_w / $squareSize;
		$hm = $orig_h / $squareSize;
		$h_height = $squareSize / 2;
		$w_height = $squareSize / 2;
		
		if ($orig_w > $orig_h) { // landscape 
			$adjusted_width = $orig_w / $hm;
			$half_width = $adjusted_width / 2;
			$int_width = $half_width - $w_height;
			imagecopyresampled(
				$virtual_image,
				$source_image,
				-$int_width,
				0, 0, 0,
				$adjusted_width,
				$squareSize,
				$orig_w,
				$orig_h
			);
		}
		elseif (($orig_w <= $orig_h)) { // portrait
			$adjusted_height = $orig_h / $wm;
			$half_height = $adjusted_height / 2;
			imagecopyresampled(
				$virtual_image,
				$source_image,
				0,0, 0, 0,
				$squareSize,
				$adjusted_height,
				$orig_w,
				$orig_h
			);
		}
		else { // default
			imagecopyresampled(
				$virtual_image,
				$source_image,
				0, 0, 0, 0,
				$squareSize,
				$squareSize,
				$orig_w,
				$orig_h
			);
		}
	}
	
	if (@imagejpeg($virtual_image, $path2, $jpg_quality)) {
		imagedestroy($virtual_image);
		imagedestroy($source_image);
		return TRUE;
	} else {
		return FALSE;
	}
}	
