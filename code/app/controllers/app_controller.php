<?php

/**
 * RecipesController class
 *
 * @uses          AppController
 * @package       mongodb
 * @subpackage    mongodb.samples.controllers
 */
class AppController extends Controller
{

    public $helpers = array('Form', 'Javascript', 'Html', 'Conversion', 'Session');
    public $components = array('RequestHandler', 'Session', 'Auth');

    public function __construct()
    {


        parent::__construct();
    }

    public function beforeFilter()
    {
        parent::beforeFilter();
        Security::setHash('md5');
        $this->Auth->loginRedirect = array('controller' => 'recipes', 'action' => 'index');
    }

    public function beforeRender()
    {
        //$this->set('Auth', $this->Session->read('Auth'));
    }

    public function ajaxMessage($args)
    {
        $response = array();
        $msg = array('title', 'msg', 'status', 'params');
        foreach ($msg as $m)
        {
            if (!empty($args[$m]))
            {
                $response[$m] = $args[$m];
            }
        }
        $this->set('response', $response);
        $this->render('../elements/ajax_response');
    }

}