<?php

/**
 * MealsController class
 *
 * @uses          AppController
 * @package       mongodb
 * @subpackage    mongodb.samples.controllers
 */
class MealsController extends AppController
{

    public $Meal;
    public $paginate = array(
        'limit' => 15,
        'order' => array(
            'Meal.meal' => 'asc'
        )
    );

    /**
     * name property
     *
     * @var string 'Meals'
     * @access public
     */
    public $name = 'Meals';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * index method
     *
     * @return void
     * @access public
     */
    public function index()
    {
        $results = $this->paginate('Meal');
        $this->set(compact('results'));
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
            $this->Meal->create();

            if ($this->Meal->save($this->data))
            {
                $this->flash(__('Meal saved.', true), array('action' => 'index'));
            }
            else
            {
                
            }
        }

        $params = array(
            'order' => array('name' => 1)
        );

        $this->set('recipes', $this->Meal->Recipe->find('list'));
    }

    /**
     * edit method
     *
     * @param mixed $id null
     * @return void
     * @access public
     */
    public function edit($id = null)
    {
        if (!$id && empty($this->data))
        {
            $this->flash(__('Invalid Meal', true), array('action' => 'index'));
        }

        if (!empty($this->data))
        {
            if ($this->Meal->save($this->data))
            {
                $this->flash(__('The Meal has been saved.', true), array('action' => 'index'));
            }
            else
            {
                
            }
        }
        if (empty($this->data))
        {
            $this->data = $this->Meal->read(null, $id);
        }
        $this->set('recipes', $this->Meal->Recipe->find('list'));
    }

    /**
     * delete method
     *
     * @param mixed $id null
     * @return void
     * @access public
     */
    public function delete($id = null)
    {
        if (!$id)
        {
            $this->flash(__('Invalid Meal', true), array('action' => 'index'));
        }
        if ($this->Meal->delete($id))
        {
            $this->flash(__('Meal deleted', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Meal deleted Fail', true), array('action' => 'index'));
        }
    }

    /**
     * deleteall method
     *
     * @return void
     * @access public
     */
    public function deleteall()
    {
        $conditions = array('title' => 'aa');
        if ($this->Meal->deleteAll($conditions))
        {
            $this->flash(__('Meal deleteAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Meal deleteAll Fail', true), array('action' => 'index'));
        }
    }

    /**
     * updateall method
     *
     * @return void
     * @access public
     */
    public function updateall()
    {
        $conditions = array('title' => 'ichi2');

        $field = array('title' => 'ichi');

        if ($this->Meal->updateAll($field, $conditions))
        {
            $this->flash(__('Meal updateAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Meal updateAll Fail', true), array('action' => 'index'));
        }
    }

    public function createindex()
    {
        $mongo = ConnectionManager::getDataSource($this->Meal->useDbConfig);
        $mongo->ensureIndex($this->Meal, array('title' => 1));
    }

    public function addRecipeToMeal($id = null)
    {
        if (!$id && empty($this->data))
        {
            $this->flash(__('Invalid Recipe', true), array('action' => 'index'));
        }
        if (!empty($this->data))
        {
            /*
             * Compile the complete menu here before inserting
             * 
             */
            $menu = $this->Meal->read(null, $this->data['Meal']['menu_id']);

            $row = array(
                'name' => $this->data['Recipe']['id'],
                'servings' => $this->data['Meal']['servings'],
                'description' => $this->data['Meal']['description'],
            );

            $menu['Meal']['recipes'][] = $row;

            $this->data = $menu;

            if ($this->Meal->save($this->data))
            {
                $args = array(
                    'title' => 'Success',
                    'status' => 'success',
                    'msg' => 'The recipe has been added to the menu'
                );
            }
            else
            {
                $args = array(
                    'title' => 'Error',
                    'status' => 'error',
                    'msg' => 'There was an error'
                );
            }

            $this->ajaxMessage($args);
        }

        if (empty($this->data))
        {
            $this->set('recipe', $this->Meal->Recipe->read(null, $id));
            $this->set('menus', $this->Meal->find('list'));
        }

        $this->render('../elements/recipe_to_menu', 'ajax');
    }

    public function getNewRecipeRow()
    {
        /*
         * @TODO getting a recipe row should probably involve something like:
         * 
         * 1. create an element that self renders by getting from this method.
         * 2. this should happen on every request for a recipe including the time
         *  the add menu is on screen.
         */
        $params = array(
            'order' => array('name' => 1)
        );
        $this->set('recipes', $this->Meal->Recipe->find('list', $params));
        $this->set('rowNum', $this->params['url']['rowCount']);
        $this->set('modelName', 'Meal');
        $this->render('../elements/recipe_row', 'ajax');
    }

}