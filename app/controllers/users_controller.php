<?php

class UsersController extends AppController
{

    public function __construct()
    {
        parent::__construct();
        $this->layout = 'user';
    }

    function beforeFilter()
    {
        parent::beforeFilter();
        $this->Auth->allow('add', 'retrievePassword');
    }

    function login()
    {

    }

    function logout()
    {
        $this->redirect($this->Auth->logout());
    }

    /**
     * add method
     *
     * @return void
     * @access public
     */
    public function add()
    {
        if (!empty($this->data))
        {

            $this->User->create();
var_dump($this->data);
exit();
            if ($this->User->save($this->data))
            {
                $this->flash(__('User saved.', true), array('action' => 'index'));
            }
            else
            {

            }
        }
    }

    public function retrievePassword()
    {
        
    }

}

?>
