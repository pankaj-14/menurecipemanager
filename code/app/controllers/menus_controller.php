<?php

/**
 * MenusController class
 *
 * @uses          AppController
 * @package       mongodb
 * @subpackage    mongodb.samples.controllers
 */
class MenusController extends AppController
{

    public $Menu;
    public $paginate = array(
        'limit' => 15,
        'order' => array(
            'Menu.menu' => 'asc'
        )
    );

    /**
     * name property
     *
     * @var string 'Menus'
     * @access public
     */
    public $name = 'Menus';

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
        $results = $this->paginate('Menu');
        $this->set(compact('results'));
    }

    public function shoppingList($id = null)
    {
        $recipes = array();
        $ingredientsToType = $this->Menu->Recipe->Ingredient->find('list', array('fields' => array('ingredient', 'type'))
        );
        /*
         * Fetch the fractionsToDecimal conversions
         */
        $params = array('fields' => array('decimal', 'fraction'));
        $fractionsToDecimals = $this->Menu->FractionToDecimal->find('list', $params);
        $this->Session->write('Conversions.fractionsToDecimals', $fractionsToDecimals);
        /*
         * Get the menu
         */
        $menu = $this->Menu->read(null, $id);
        /*
         * Get the recipes for the menu
         */
        foreach ($menu['Menu']['recipes'] as $r)
        {
            $recipe = $this->Menu->Recipe->read(null, $r['name']);
            $recipe['Recipe']['desired_servings'] = $r['servings'];
            $recipes[] = $recipe;
        }
        // var_dump($recipes);
        /*
         * divide the ingredient amount by the recipe's servings and
         * multiply the result by the desired number of servings
         */
        $ingredientList = array();
        /*
         * Get each ingredient for each recipe and put it in the shopping list
         */
        foreach ($recipes as $recipe)
        {
            $recipe_servings = $recipe['Recipe']['servings'];
            $desired_servings = $recipe['Recipe']['desired_servings'];
            foreach ($recipe['Recipe']['ingredients'] as $i)
            {
                if (!$decimal = array_search($i['fraction'], $fractionsToDecimals))
                {
                    $decimal = 0;
                }
                $amount = $i['whole'] + $decimal;
                $adjustedAmount = ($amount / $recipe_servings) * $desired_servings;
                $i['adjusted_amount'] = $adjustedAmount;
                $ingredientList[$i['ingredient']][] = $i;
            }
        }

        $shoppingList = array();
        /*
         * Compact the like ingredients
         */
        foreach ($ingredientList as $ingredient => $list)
        {
            $item = new stdClass();
            $item->ingredient = $ingredient;
            $item->amount = 0;
            $item->unit = '';
            foreach ($list as $i)
            {
                $item->unit = $i['unit'];
                // This is alredy converted to a decimal in the code block
                // above.
                $item->amount = $item->amount + $i['adjusted_amount'];
            }

            if (!empty($ingredientsToType[$ingredient]))
            {
                $category = $ingredientsToType[$ingredient];
            }
            else
            {
                $category = 'unknown';
            }

            $shoppingList[$category][] = $item;
        }

        ksort($shoppingList);
        $this->layout = 'printable';
        $this->set('shoppingList', $shoppingList);
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
            $this->Menu->create();
            if ($this->Menu->save($this->data))
            {
                $this->flash(__('Menu saved.', true), array('action' => 'index'));
            }
            else
            {
                
            }
        }

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
        
        $this->set('recipes', $this->Menu->Recipe->find('list'));
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
            $this->flash(__('Invalid Menu', true), array('action' => 'index'));
        }
        if (!empty($this->data))
        {
            if ($this->Menu->save($this->data))
            {
                $this->flash(__('The Menu has been saved.', true), array('action' => 'index'));
            }
            else
            {
                
            }
        }
        if (empty($this->data))
        {
            $this->data = $this->Menu->read(null, $id);
        }
        $this->set('recipes', $this->Menu->Recipe->find('list'));
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
            $this->flash(__('Invalid Menu', true), array('action' => 'index'));
        }
        if ($this->Menu->delete($id))
        {
            $this->flash(__('Menu deleted', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Menu deleted Fail', true), array('action' => 'index'));
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
        if ($this->Menu->deleteAll($conditions))
        {
            $this->flash(__('Menu deleteAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Menu deleteAll Fail', true), array('action' => 'index'));
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

        if ($this->Menu->updateAll($field, $conditions))
        {
            $this->flash(__('Menu updateAll success', true), array('action' => 'index'));
        }
        else
        {
            $this->flash(__('Menu updateAll Fail', true), array('action' => 'index'));
        }
    }

    public function createindex()
    {
        $mongo = ConnectionManager::getDataSource($this->Menu->useDbConfig);
        $mongo->ensureIndex($this->Menu, array('title' => 1));
    }

    public function addRecipeToMenu()
    {
        $recipe_id = $this->params[''];
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
        $this->set('recipes', $this->Menu->Recipe->find('list', $params));
        $this->set('rowNum', $this->params['url']['rowCount']);
        $this->render('../elements/recipe_row', 'ajax');
    }

}