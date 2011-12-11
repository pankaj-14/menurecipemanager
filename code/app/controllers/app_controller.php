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
        /*
         * Convenience var so that I can dynamically set the model for the search
         * form
         */
        $this->set('modelName', $this->modelClass);
    }

    public function beforeRender()
    {
        $this->set('Auth', $this->Session->read('Auth'));
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

    /**
     * Utility method to lower case a field in a record
     * 
     * Accepts args in 1 of 2 forms.
     * 
     * 1. http://recipe-manager/ingredients/set_to_lower_case/field:ingredient
     * 
     * Will update Model.ingredient
     * 
     * 2. http://recipe-manager/recipes/set_to_lower_case/field:ingredients.ingredient
     * 
     * Will update Model[field][n]['ingredient']
     * 
     */
    public function set_to_lower_case()
    {
        if (empty($this->params['named']['field']))
        {
            echo 'You must enter a field to work with. recipe-manager/ingredients/set_to_lower_case/field:ingredient';
            exit();
        }

        if (strpos($this->params['named']['field'], '.'))
        {
            $fields = explode('.', $this->params['named']['field']);
        }
        else
        {
            $fields[] = $this->params['named']['field'];
        }

        var_dump($fields);

        $params = array(
                //'conditions' => array('Model.field' => $thisValue), //array of conditions
                //'recursive' => 1, //int
                //'fields' => array($this->modelClass . '.' . $field), //array of field names
                //'order' => array('Model.created', 'Model.field3 DESC'), //string or array defining order
                //'group' => array('Model.field'), //fields to GROUP BY
                //'limit' => n, //int
                //'page' => n, //int
                //'offset' => n, //int
                //'callbacks' => true //other possible values are false, 'before', 'after'
        );

        $result = $this->{$this->modelClass}->find('all', $params);

        foreach ($result as &$item)
        {
            var_dump(count($fields));
            if (count($fields) == 1)
            {
                var_dump('Single Item');
                var_dump($item[$this->modelClass][$fields[0]]);
                $item[$this->modelClass][$fields[0]] = strtolower($item[$this->modelClass][$fields[0]]);
                var_dump($item[$this->modelClass][$fields[0]]);
            }
            else if (count($fields) == 2)
            {
                var_dump('Nested Item');
                foreach ($item[$this->modelClass][$fields[0]] as &$array)
                {
                    var_dump($array[$fields[1]]);
                    $array[$fields[1]] = strtolower($array[$fields[1]]);
                    var_dump($array[$fields[1]]);
                }
            }
            var_dump($item);

            if (!$this->{$this->modelClass}->save($item))
            {
                exit('Error');
            }
        }
        exit('Done');
    }

    /*
     * Util method to delete duplicate records by a field. Given the following
     * argument:
     * http://recipe-manager/ingredients/set_to_lower_case/field:ingredient
     * 
     * Will search for records Model.ingredient
     * 
     * If the search returns an array of more than one item then all but the first
     * item will deleted from the DB.
     * 
     * 
     */

    public function delete_duplicates()
    {
        if (empty($this->params['named']['field']))
        {
            echo 'You must enter a field to work with. http://recipe-manager/ingredients/delete_duplicates/field:ingredient';
            exit();
        }

        $field = $this->params['named']['field'];

        var_dump($field);

        $params = array();
        $result = $this->{$this->modelClass}->find('all', $params);


        foreach ($result as $item)
        {
            $params = array(
                    'conditions' => array($this->modelClass . '.' . $field => $item[$this->modelClass][$field]), //array of conditions
            );
            $r = $this->{$this->modelClass}->find('all', $params);

            if(count($r) == 2)
            {
                 while(count($r) > 1)
                 {
                     $t = array_pop($r);
                     var_dump($t[$this->modelClass]['_id']);
                     $this->{$this->modelClass}->delete($t[$this->modelClass]['_id']);
                 }
            }
        }


        exit('done');
    }

}