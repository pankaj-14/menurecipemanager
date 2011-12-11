<?php

class IngredientType extends AppModel
{

    public $displayField = 'ingredient_type';
    public $mongoSchema = array(
        'ingredient_type' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime'),
    );
    public $actsAs = array('StringManipulation' => array(
            'fields' => array(
                'lowercase' => array('ingredient_type')
            )
        )
    );

}
