<?php
session_start();

$user_asli = "haikal";
$pass_asli = "12345";

if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $remember = isset($_POST['remember']);

    if ($username === $user_asli && $password === $pass_asli) {
        $_SESSION['login'] = true;
        $_SESSION['user'] = $username;

        if ($remember) {
            setcookie('user_login', $username, time() + 3600, "/");
            setcookie('user_key', hash('sha256', $username), time() + 3600, "/");
        }

        header("Location: ../index.php");
        exit;
    } else {
        header("Location: login.php?pesan=gagal");
        exit;
    }
} else {
    header("Location: login.php");
    exit;
}