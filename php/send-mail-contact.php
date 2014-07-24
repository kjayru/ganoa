<?php
	$addres = "wiltinoco@gmail.com"; /*Your Email*/
	$subject = "Mensaje enviado desde el website"; /*Issue*/
	$date = date ("l, F jS, Y"); 
	$time = date ("h:i A"); 	
	$email=$_REQUEST['Email'];
	$nombres=$_REQUEST['Nombres'];
	$message=$_REQUEST['Message'];
	$telefono=$_REQUEST['Telefono'];

	$msg="
	Name: $nombres
	Email: $email
	Telefono: $telefono
	mensaje Enviado desde el website -  $date, hour: $time.\n
	Mensaje: $message";

	if ($email=="") {
		echo "<div class='alert alert-danger'>Ingrese su email</div>";
	}
	else{
		mail($addres, $subject, $msg, "From:$email");
		echo "<div class='alert alert-success'>Gracias por enviar su mensaje..</div>";	
	}
	
?>
