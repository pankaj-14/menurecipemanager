<?php

class IngredientType extends AppModel
{

    public $displayField = 'ingredient_type';
    public $mongoSchema = array(
        'ingredient_type' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime'),
    );

}
