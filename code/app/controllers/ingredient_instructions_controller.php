<?php

/**
 * IngredientInstructionsController class
 *
 * @uses          AppController
 * @package       mongodb
 * @subpackage    mongodb.samples.controllers
 */
class IngredientInstructionsController extends AppController
{

    public $IngredientInstruction;
    /**
     * name property
     *
     * @var string 'IngredientInstructions'
     * @access public
     */
    public $name = 'IngredientInstructions';

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
        $params = array();
        /*
          $params = array(
          'fields' => array('title', 'body'),
          //'fields' => array('IngredientInstruction.title', ),
          //'conditions' => array('title' => 'hehe'),
          //'conditions' => array('hoge' => array('$gt' => '10', '$lt' => '34')),
          //'order' => array('title' => 1, 'body' => 1),
          //'order' => array('_id' => -1),
          //'limit' => 35,
          //'page' => 1,
          );
         *
         */
        $results = $this->IngredientInstruction->find('all', $params);
        //$result = $this->IngredientInstruction->find('count', $params);
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

            $this->IngredientInstruction->create();
            if ($this->IngredientInstruction->save($this->data))
            {
                $this->flash(__('IngredientInstruction saved.', true), array('action' => 'index'));
            }
            else
            {

            }
        }
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
            $this->flash(__('Invalid IngredientInstruction', true), array('action' => 'index'));
        }
        if (!empty($this->data))
        {

            if ($this->IngredientInstruction->save($this->data))
            {
                $this->flash(__('The IngredientInstruction has been saved.', true), array('action' => 'index'));
            }
            else
            {

            }
        }
        if (empty($this->data))
        {
            $this->data = $this->IngredientInstruction->read(null, $id);
            //$this->data = $this->IngredientInstruction->find('first', array('conditions' => array('_id' => $id)));
        }
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
            $this->flash(__('Invalid IngredientInstruction', true), array('action' => 'index'));
        }
        if ($this->IngredientInstruction->delete($id))
        {
            $this->flash(__('IngredientInstruction deleted', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('IngredientInstruction deleted Fail', true), array('action' => 'index'));
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
        if ($this->IngredientInstruction->deleteAll($conditions))
        {
            $this->flash(__('IngredientInstruction deleteAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('IngredientInstruction deleteAll Fail', true), array('action' => 'index'));
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

        if ($this->IngredientInstruction->updateAll($field, $conditions))
        {
            $this->flash(__('IngredientInstruction updateAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('IngredientInstruction updateAll Fail', true), array('action' => 'index'));
        }
    }

    public function createindex()
    {
        $mongo = ConnectionManager::getDataSource($this->IngredientInstruction->useDbConfig);
        $mongo->ensureIndex($this->IngredientInstruction, array('title' => 1));
    }

    public function getIngredientInstructions()
    {
        $params = array('fields' => array('IngredientInstruction.instruction'));
        $this->set('response', array_values($this->IngredientInstruction->find('list', $params)));
        $this->render('/elements/ajax_response', 'ajax');
    }

}