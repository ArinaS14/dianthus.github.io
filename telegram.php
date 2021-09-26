<?php

/* https://api.telegram.org/bot2004377143:AAEA-sNSNuoPNQ8CoXBnnJbNSG46W1-cXUg/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "2004377143:AAEA-sNSNuoPNQ8CoXBnnJbNSG46W1-cXUg";
$chat_id = "-529640801";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  $('.overlay-thanks, #modal-thanks').fadeIn('slow');
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
} else {
  echo "Error";
}
?>