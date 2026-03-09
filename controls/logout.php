<?php
session_start();
session_unset();
session_destroy();
setcookie('user_login', '', time() - 3600, "/");
setcookie('user_key', '', time() - 3600, "/");

header("Location: ../index.php");
exit;
?>