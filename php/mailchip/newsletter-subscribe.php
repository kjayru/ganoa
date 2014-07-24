<?php
//This Example shows how to Subscribe a New Member to a List using the MCAPI.php 
require_once 'inc/MCAPI.class.php';
require_once 'inc/config.inc.php'; //contains apikey

$api = new MCAPI($apikey);

// By default this sends a confirmation email - you will not see new members
// until the link contained in it is clicked!
$retval = $api->listSubscribe( $listId, $_GET['email'] );

if ($api->errorCode){
	echo "<div class='alert alert-danger'>Unable to load listSubscribe()!</div>\n";
	echo "\tCode=".$api->errorCode."\n";
	echo "\tMsg=".$api->errorMessage."\n";
} else {
    echo "<div class='alert alert-success'>Subscribed - look for the confirmation email!</div>\n";
}

?>
