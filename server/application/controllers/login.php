<?php

include "../../dao/UserDao.php";
include "../../data/UserData.php";
include "../../models/User.php";
include "../../model/Message.php";
include "../../util/DbConn.php";

/**
 * Created by PhpStorm.
 * User: song
 * Date: 16-9-17
 * Time: 下午8:56
 *
 * 登录
 */
session_start();

$userName = $_POST['userName'];
$password = $_POST['password'];

// To protect javaScript injection
$userName = htmlspecialchars($userName);
$password = htmlspecialchars($password);

// To protect MySQL injection
$userName = stripslashes($userName);
$password = stripslashes($password);

if (isset($_SESSION["userName"])) {
    echo json_encode(new Message(0, "用户已登录", null));
} else {
    $userDao = UserDao::getInstance();

    $message = $userDao->logIn($userName, $password);

    echo json_encode($message);

    if ($message->getState() === 1) {
        $_SESSION["userName"] = $userName;
    }
}
