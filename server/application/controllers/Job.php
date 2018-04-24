<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Job extends CI_Controller {

	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function get_job_list()
    {
        $this -> load -> model('job_model');
        $result = $this -> job_model -> get_list();
        echo json_encode($result);
    }

    public function apply_job()
    {
        $jobid = $this -> input -> get('jobid');
        $userid = $this -> input -> get('userid');
        $this -> load -> model('job_model');
        $result = $this -> job_model -> insert_apply($jobid, $userid);
        echo $result;
    }
}
