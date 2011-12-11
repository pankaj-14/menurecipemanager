<?php

/**
 * TagsController class
 *
 * @uses          AppController
 * @package       mongodb
 * @subpackage    mongodb.samples.controllers
 */
class TagsController extends AppController
{

    public $Tag;
    public $paginate = array(
        'limit' => 15,
        'order' => array(
            'Tag.tag' => 'asc'
        )
    );

    /**
     * name property
     *
     * @var string 'Tags'
     * @access public
     */
    public $name = 'Tags';

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
        $results = $this->paginate('Tag');
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

            $this->Tag->create();

            if ($this->Tag->validates())
            {
                if ($this->Tag->save($this->data, array('validate' => false)))
                {
                    $this->flash(__('Tag saved.', true), array('action' => 'index'));
                }
                else
                {
                    
                }
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
            $this->flash(__('Invalid Tag', true), array('action' => 'index'));
        }
        if (!empty($this->data))
        {

            if ($this->Tag->save($this->data))
            {
                $this->flash(__('The Tag has been saved.', true), array('action' => 'index'));
            }
            else
            {
                
            }
        }
        if (empty($this->data))
        {
            $this->data = $this->Tag->read(null, $id);
            //$this->data = $this->Tag->find('first', array('conditions' => array('_id' => $id)));
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
            $this->flash(__('Invalid Tag', true), array('action' => 'index'));
        }
        if ($this->Tag->delete($id))
        {
            $this->flash(__('Tag deleted', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Tag deleted Fail', true), array('action' => 'index'));
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
        if ($this->Tag->deleteAll($conditions))
        {
            $this->flash(__('Tag deleteAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Tag deleteAll Fail', true), array('action' => 'index'));
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

        if ($this->Tag->updateAll($field, $conditions))
        {
            $this->flash(__('Tag updateAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Tag updateAll Fail', true), array('action' => 'index'));
        }
    }

    public function createindex()
    {
        $mongo = ConnectionManager::getDataSource($this->Tag->useDbConfig);
        $mongo->ensureIndex($this->Tag, array('title' => 1));
    }

    public function getTags()
    {
        $term = $this->params['url']['term'];
        $return = array();
        $params = array('fields' => array('Tag.tag'));

        $tags = $this->Tag->find('list', $params);

        foreach ($tags as $tag)
        {
            if (preg_match("/^$term*/i", $tag))
            {
                $return[] = $tag;
            }
        }

        $this->set('response', $return);
        $this->render('/elements/ajax_response', 'ajax');
    }

}