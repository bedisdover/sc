<?php

include "../../dao/UserDao.php";
include "../../data/UserData.php";
include "../../model/User.php";
include "../../model/Message.php";
include "../../util/DbConn.php";

/**
 * Created by PhpStorm.
 * User: song
 * Date: 16-9-17
 * Time: 下午9:03
 *
 * 注册
 */
$userName = $_POST['userName'];
$password = $_POST['password'];

// To protect javaScript injection
$userName = htmlspecialchars($userName);
$password = htmlspecialchars($password);

// To protect MySQL injection
$username = stripslashes($userName);
$password = stripslashes($password);

$userDao = UserDao::getInstance();

$message = $userDao->signUp($userName, $password);

echo json_encode($message);
