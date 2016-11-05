<?php

/**
 * Created by PhpStorm.
 * User: song
 * Date: 16-11-5
 * Time: 下午1:51
 */
class Docs extends CI_Controller
{
    public function index()
    {
        show_404();
    }

    /**
     * 需求规格说明文档
     */
    public function requirements()
    {
        echo 'require';
    }

    /**
     * 详细设计文档
     */
    public function structure()
    {
        $this->load->view('docs/structure.html');
    }
}