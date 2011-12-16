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
        $this->Session->destroy();
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
            if ($this->data['User']['secret_ingredient'] == Configure::read('SECRET_INGREDIENT'))
            {
                if ($this->data['User']['password'] == $this->Auth->password($this->data['User']['password_confirm']))
                {
                    $this->User->create();
                    if ($this->User->save($this->data))
                    {
                        $this->flash(__('Account Created.', true), array('action' => 'login'));
                    }
                }
            }
            else
            {
                $this->cakeError('login', array('title' => 'Secret Ingredient', 'msg' => 'You need a secret ingredient in order to create an account.'));
            }
        }
    }

    public function retrievePassword()
    {
        
    }

}

?>
