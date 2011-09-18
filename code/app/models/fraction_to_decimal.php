<?php

class FractionToDecimal extends AppModel
{
    public $displayField = 'fraction';
    public $mongoSchema = array(
        'fraction' => array('type' => 'string'),
        'decimal' => array('type' => 'string')
    );
}
