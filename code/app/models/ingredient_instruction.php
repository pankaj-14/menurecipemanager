<?php

class IngredientInstruction extends AppModel
{

    public $displayField = 'instruction';
    public $mongoSchema = array(
        'instruction' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime')
    );
}
