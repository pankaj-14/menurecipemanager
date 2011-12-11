<?php

/**
 * Lowercase behavior
 */
class StringManipulationBehavior extends ModelBehavior
{

    /**
     * Used for runtime configuration of model
     * 
     * @var array
     */
    var $runtime = array();

    /**
     * Callback
     */
    function setup(&$model, $config = array())
    {
        $this->config = $config;
        $this->model = $model;
        $this->settings[$model->alias] = array();
        $this->runtime[$model->alias] = array('fields' => array());
    }

    /**
     * public $actsAs = array('StringManipulation' => array(
            'fields' => array(
                'operation' => array([fields])
                )
            )
      );
     * 
     * public $actsAs = array('StringManipulation' => array(
            'fields' => array(
                'lowercase' => array('ingredient', 'type')
                )
            )
      );
     * 
     * Applies the operation to all the fields
     * 
     * @param type $model 
     */
    public function beforeSave(&$model)
    {
        parent::beforeSave($model);

        foreach ($this->config['fields'] as $op => $fields)
        {
            foreach ($fields as $field)
            {
                if(empty($this->model->data[$this->model->name][$field]))
                {
                    break;
                }
                
                switch ($op)
                {
                    case 'lowercase':
                        $this->model->data[$this->model->name][$field] = strtolower($this->model->data[$this->model->name][$field]);
                        break;
                }
            }
        }
    }

    /**
     * Cleanup Callback unbinds bound translations and deletes setting information.
     *
     * @param Model $model Model being detached.
     * @return void
     * @access public
     */
    function cleanup(&$model)
    {
        unset($this->settings[$model->alias]);
        unset($this->runtime[$model->alias]);
    }

}
