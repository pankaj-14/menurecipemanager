<?php

/**
 * IngredientTypesController class
 *
 * @uses          AppController
 * @package       mongodb
 * @subpackage    mongodb.samples.controllers
 */
class IngredientTypesController extends AppController
{

    public $IngredientType;

    /**
     * name property
     *
     * @var string 'Ingredients'
     * @access public
     */
    public $name = 'IngredientTypes';

    public function __construct()
    {
        parent::__construct();
    }

    
    public function ingredientTypeList()
    {
        $type = '';
        if(!empty($this->params['url']['type']))
        {
            $type = $this->params['url']['type'];
        }
        
        foreach ($this->IngredientType->find('list') as $k => $v)
        {
            $ar[$v] = $v;
        }
        ksort($ar);
        $this->set('response', $ar);
        $this->render('../elements/ajax_response');
    }
}