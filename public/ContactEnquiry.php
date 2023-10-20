<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    
    $name    = $_POST["name"];
	$email   = $_POST["email"];
	$message = $_POST["message"];

    if (empty($name) && empty($email) && empty($message)) die();

    if ($_POST) {
        // set response code - 200 OK
        http_response_code(200);

        $to = "arlan.viray@creativewiz.net";
        $subject = "FangShi: Contact Enquiry";
        $from = $email;

        // data
        $msg = "";
        $msg.= "Name: ". $name ."\r\n";
        $msg.= "Email: ". $email ."\r\n";
        $msg.= "Message:\r\n". $message ."\r\n";

        // send email
        mail($to, $subject, $msg, "From: ". $from);
        
        // success message
        echo json_encode(["sent" => true, "message" => "Thank you [". $name ."] for contacting me!<br>I'll get back to you very soon."]);
    }
    else {
        // error message
        echo json_encode(["sent" => false, "message" => "Something went wrong!<br>Please try again later."]);
    }

?>