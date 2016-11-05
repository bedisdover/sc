<?php
/**
 * Created by PhpStorm.
 * User: song
 * Date: 16-11-4
 * Time: 下午3:19
 */

class News_model extends CI_Model
{
    /**
     * News_model constructor.
     */
    public function __construct()
    {
//        $this->load->database();
    }

    public function get_news($slug = FALSE)
    {
        return 'test';
//        if ($slug === FALSE)
//        {
//            $query = $this->db->get('news');
//            return $query->result_array();
//        }
//
//        $query = $this->db->get_where('news', array('slug' => $slug));
//        return $query->row_array();
    }
}