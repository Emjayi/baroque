<?php

function salt($user,$Pass) {
	$Pass = md5($Pass.'peji');
	$user = md5($user.'peji');
	$return = md5($user.$Pass) ;
	$md5PasLen = strlen($Pass) / 2 ;
	$md5UsrLen = strlen($user) / 2 ;
	$Pass = substr($Pass,$md5PasLen);
	$user = substr($Pass,$md5UsrLen);
	return $return.$Pass.$user;
}