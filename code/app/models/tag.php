<?php

class Tag extends AppModel
{

    public $displayField = 'tag';
    public $mongoSchema = array(
        'tag' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime'),
    );
    public $actsAs = array('StringManipulation' => array(
            'fields' => array(
                'lowercase' => array('tag')
            )
        )
    );
    public $validate = array(
        'tag' => array(
            'isUnique' => array(
                'rule' => 'isUnique',
                'required' => true,
                'message' => 'Duplicate Tag',
            )
        )
    );

}
