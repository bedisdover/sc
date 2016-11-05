<?php

include "../../model/Message.php";

/**
 * Created by PhpStorm.
 * User: song
 * Date: 16-9-17
 * Time: 下午9:04
 *
 * 登出
 */
session_start();

if (isset($_SESSION["userName"])) {
    unset($_SESSION["userName"]);

    echo json_encode(new Message(1, "登出成功", null));
} else {
    echo json_encode(new Message(0, "用户未登录", null));
}
