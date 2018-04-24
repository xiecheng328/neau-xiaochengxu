<?php
/**
 * Created by PhpStorm.
 * User: xiecheng
 * Date: 2018/4/23
 * Time: 下午7:36
 */

use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Job_model extends CI_Model {

    public function get_list()
    {
        return DB::select('t_job', ['*']);
    }

    public function insert_apply($jobid, $userid)
    {
        return DB::insert('t_apply', [
            'job_id' => $jobid,
            'user_id' => $userid
        ]);
    }

}