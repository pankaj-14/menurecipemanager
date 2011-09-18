<?php

/**
 * UnitsController class
 *
 * @uses          AppController
 * @package       mongodb
 * @subpackage    mongodb.samples.controllers
 */
class UnitsController extends AppController
{

    public $Unit;
    public $paginate = array(
        'limit' => 15,
        'order' => array(
            'Unit.l_name' => 'asc'
        )
    );
    /**
     * name property
     *
     * @var string 'Units'
     * @access public
     */
    public $name = 'Units';

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
        $results = $this->paginate('Unit');
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

            $this->Unit->create();
            if ($this->Unit->save($this->data))
            {
                $this->flash(__('Unit saved.', true), array('action' => 'index'));
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
            $this->flash(__('Invalid Unit', true), array('action' => 'index'));
        }
        if (!empty($this->data))
        {

            if ($this->Unit->save($this->data))
            {
                $this->flash(__('The Unit has been saved.', true), array('action' => 'index'));
            }
            else
            {

            }
        }
        if (empty($this->data))
        {
            $this->data = $this->Unit->read(null, $id);
            //$this->data = $this->Unit->find('first', array('conditions' => array('_id' => $id)));
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
            $this->flash(__('Invalid Unit', true), array('action' => 'index'));
        }
        if ($this->Unit->delete($id))
        {
            $this->flash(__('Unit deleted', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Unit deleted Fail', true), array('action' => 'index'));
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
        if ($this->Unit->deleteAll($conditions))
        {
            $this->flash(__('Unit deleteAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Unit deleteAll Fail', true), array('action' => 'index'));
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

        if ($this->Unit->updateAll($field, $conditions))
        {
            $this->flash(__('Unit updateAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Unit updateAll Fail', true), array('action' => 'index'));
        }
    }

    public function createindex()
    {
        $mongo = ConnectionManager::getDataSource($this->Unit->useDbConfig);
        $mongo->ensureIndex($this->Unit, array('title' => 1));
    }

    public function getUnits()
    {
        $response = array();
        $params = array(
            'fields' => array('Unit.l_name', 'Unit.s_name')
        );
        $units = $this->Unit->find('list', $params);

        foreach ($units as $l_name => $s_name)
        {
            $r = new stdClass();
            $r->value = $s_name;
            $r->label = $s_name . ' | ' . $l_name;
            $response[$l_name] = $r;
        }
        ksort($response);
        $response = array_values($response);
        $this->set('response', $response);
        $this->render('/elements/ajax_response', 'ajax');
    }

}