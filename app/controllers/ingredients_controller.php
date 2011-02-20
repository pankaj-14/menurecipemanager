<?php

/**
 * IngredientsController class
 *
 * @uses          AppController
 * @package       mongodb
 * @subpackage    mongodb.samples.controllers
 */
class IngredientsController extends AppController
{

    public $Ingredient;
    public $paginate = array(
        'limit' => 15,
        'order' => array(
            'Ingredient.type' => 'asc',
            'Ingredient.ingredient' => 'asc'
        )
    );
    /**
     * name property
     *
     * @var string 'Ingredients'
     * @access public
     */
    public $name = 'Ingredients';

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
        $ingredientTypesList = array();
        $ingredientTypes = $this->Ingredient->IngredientType->find('list', array(
                    'order' => array(
                        'IngredientType.ingredient_type' => 'ASC'
                        )));
        foreach ($ingredientTypes as $type)
        {
            $ingredientTypesList[$type] = $type;
        }
        $this->set('ingredientTypes', $ingredientTypesList);
        $results = $this->paginate('Ingredient');
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

            $this->Ingredient->create();
            if ($this->Ingredient->save($this->data))
            {
                $this->flash(__('Ingredient saved.', true), array('action' => 'index'));
            }
            else
            {

            }
        }

        foreach ($this->Ingredient->IngredientType->find('list') as $k => $v)
        {
            $ar[$v] = $v;
        }

        ksort($ar);

        $this->set('ingredientTypes', $ar);
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
            $this->flash(__('Invalid Ingredient', true), array('action' => 'index'));
        }
        if (!empty($this->data))
        {

            if ($this->Ingredient->save($this->data))
            {
                $this->flash(__('The Ingredient has been saved.', true), array('action' => 'index'));
            }
            else
            {

            }
        }
        if (empty($this->data))
        {
            $this->data = $this->Ingredient->read(null, $id);
            //$this->data = $this->Ingredient->find('first', array('conditions' => array('_id' => $id)));
        }

        foreach ($this->Ingredient->IngredientType->find('list') as $k => $v)
        {
            $ar[$v] = $v;
        }
        ksort($ar);
        $this->set('ingredientTypes', $ar);
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
            $this->flash(__('Invalid Ingredient', true), array('action' => 'index'));
        }
        if ($this->Ingredient->delete($id))
        {
            $this->flash(__('Ingredient deleted', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Ingredient deleted Fail', true), array('action' => 'index'));
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
        if ($this->Ingredient->deleteAll($conditions))
        {
            $this->flash(__('Ingredient deleteAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Ingredient deleteAll Fail', true), array('action' => 'index'));
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

        if ($this->Ingredient->updateAll($field, $conditions))
        {
            $this->flash(__('Ingredient updateAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Ingredient updateAll Fail', true), array('action' => 'index'));
        }
    }

    public function createindex()
    {
        $mongo = ConnectionManager::getDataSource($this->Ingredient->useDbConfig);
        $mongo->ensureIndex($this->Ingredient, array('title' => 1));
    }

    public function getIngredients()
    {
        $response = array();
        $params = array(
            'fields' => array('Ingredient.ingredient', 'Ingredient.type'),
            'order' => array('Ingredient.ingredient' => 'DESC')
        );
        $ingredients = $this->Ingredient->find('all', $params);
        $temp = array();
        foreach ($ingredients as $ingredient)
        {
            $i = new stdClass();
            if (empty($ingredient['Ingredient']['type']))
            {
                $i->category = 'unknown';
            }
            else
            {
                $i->category = $ingredient['Ingredient']['type'];
            }

            $i->label = $ingredient['Ingredient']['ingredient'];
            $temp[$i->category][] = $i;
        }

        ksort($temp);
        foreach ($temp as $v)
        {
            $response = array_merge($response, $v);
        }

        $this->set('response', $response);
        $this->render('/elements/ajax_response', 'ajax');
    }

    public function updateIngredientType()
    {
        $data['Ingredient']['type'] = $this->params['url']['ingredient_type'];
        $data['Ingredient']['_id'] = new MongoId($this->params['url']['ingredient_id']);
        if ($this->Ingredient->save($data))
        {
            $response = array('title' => 'Success', 'status' => 'success', 'msg' => 'ingredient type updated');
        }
        else
        {
            $response = array('title' => 'Error', 'status' => 'error', 'msg' => 'could not update ingredient');
        }
        $this->set('response', $response);
        $this->render('/elements/ajax_response', 'ajax');
    }

}