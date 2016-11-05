<?php

/**
 * Created by PhpStorm.
 * User: song
 * Date: 16-9-17
 * Time: 下午9:14
 *
 * 通讯消息
 */
class Message
{
    public $state, $info, $object;

    /**
     * Message constructor.
     * @param $state
     * 状态码，  1 ----- 成功；
     *         0 ----- 失败
     * @param $info
     * 状态信息
     * @param $object
     * 消息内容
     */
    public function __construct($state, $info, $object)
    {
        $this->state = $state;
        $this->info = urlencode($info);
        $this->object = $object;
    }

    /**
     * @return mixed
     */
    public function getInfo()
    {
        return $this->info;
    }

    /**
     * @return mixed
     */
    public function getObject()
    {
        return $this->object;
    }

    /**
     * @return mixed
     */
    public function getState()
    {
        return $this->state;
    }
}