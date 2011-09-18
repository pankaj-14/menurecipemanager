<?php

class Ingredient extends AppModel
{

    public $displayField = 'ingredient';
    public $hasOne = 'IngredientType';

    public $mongoSchema = array(
        'ingredient' => array('type' => 'string'),
        'type' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime'),
    );

}
