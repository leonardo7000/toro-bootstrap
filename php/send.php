<?php 

if(isset($_POST['submit'])){
    $to = "info@mail.com"; // Tutaj musisz napisać e-mail, na który będą przychodzić listy
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $subject = "Forma wysyłania wiadomości ze strony";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " zostawił wiadomość:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
	
    mail($to,$subject,$message,$headers);
   // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Wyłączone!
    echo "Twoja wiadomość została wysłana. Dziękuję " . $first_name . ", wkrótce skontaktujemy się z Tobą.";
	echo "<br /><br /><a href='https://yoursait.com'>Wróć na stronę.</a>";

}

/* Dodatkowy kod dla - Przekazywanie do głównej strony witryny, w 3 sekundy */
/* <script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://yoursait.com/");}
window.setTimeout("changeurl();",3000);
</script> */