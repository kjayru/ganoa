<?php 
require'inc/config.php';
require'inc/mysql.php';
require'inc/functions.php';
require'inc/class.phpmailer.php';

$nombres	= getParam($_POST['name'], "");
$correo		= getParam($_POST['email'], "");
$telefono		= getParam($_POST['phone'], "");
$mensaje		= getParam($_POST['message'], "");



$cnx=new MySQL();


						
			$consulta = sprintf("INSERT INTO contactos(nombres, correo, telefono, comentario) 
								 VALUES (%s, %s, %s, %s)", 
								getSQL($nombres, "text"),
								getSQL($correo, "text"),
								getSQL($telefono, "text"),
								getSQL($mensaje, "text"));
			$cnx->execute($consulta);
			$cuerpo ="
			<html>
			
			<body>
			
			<p>
			NOMBRES: $nombres<br>
			CORREO: $correo<br>
			TELEFONO: $telefono<br>
			COMENTARIO: $mensaje<br>
			
			
			</p>
			</body>
			</html>
			";
			$mail = new phpmailer();
			$mail->From = "info@wiletinoco.com";
			$mail->FromName = "System DYDWEBS.COM";
			$mail->AddAddress("wiltinoco@gmail.com");
			$mail->Subject = "CONTACTO WILE.COM";
			$mail->IsHTML(true);
			$mail->Body = utf8_decode($cuerpo);
			if($mail->Send()){
				echo json_encode(array("rpta" => "ok"));
			}else{
				//	echo "Ocurrió un error al enviar el correo electrónico.";
				//echo "<br/><strong>Información:</strong><br/>".$mail->ErrorInfo;
			}
		?>
