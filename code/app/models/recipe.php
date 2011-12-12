<?php

class Recipe extends AppModel
{

    public $hasMany = array(
        'Tag' => array('className' => 'Tag'),
        'Ingredient' => array('className' => 'Ingredient'),
        'IngredientInstruction' => array('className' => 'IngredientInstruction'),
        'Unit' => array('className' => 'Unit')
    );
    var $mongoSchema = array(
        'name' => array('type' => 'string'),
        'servings' => array('type' => 'string'),
        'prep_time' => array('type' => 'string'),
        'cook_time' => array('type' => 'string'),
        'tags' => array('type' => 'array'), // TODO change to a string
        'description' => array('type' => 'string'),
        'instructions' => array('type' => 'string'),
        'ingredients' => array('type' => 'array'),
        'source' => array('type' => 'string'),
        'nutritional_info' => array('type' => 'array'),
        'access' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime')
    );

    public function beforeSave()
    {
        //var_dump($this->data['Recipe']);
        /*
         * This hack is because any sub document that is a an array of objects
         * seems to be associative array where the keys are string integers. Notice that
         * the arrays start their numbering at '1' and not '0'. I'm not sure where
         * this is coming from but I suspect its in cake somewhere. I tested the
         * theory by manually inserting a recipe using PHP's Mongo driver. The result
         * was correct in that the arrays were numeric and not associative.
         *
         * If you dont do the below conversions you end up with an object of objects
         * where the property names are string integers. What you want is a numeric
         * array of objects.
         */
        $this->data['Recipe']['ingredients'] = array_values($this->data['Recipe']['ingredients']);

        //var_dump($this->data['Recipe']);
        return true;
    }

    public function afterSave($created)
    {
        $this->saveNewIngredient();
        $this->saveNewTag();
        $this->saveNewIngredientInstruction();
        $this->saveNewUnit();
    }

    private function saveNewIngredient()
    {
        foreach ($this->data['Recipe']['ingredients'] as $newIng)
        {
            $ingredients = array();
            $params = array(
                'conditions' => array('Ingredient.ingredient' => $newIng['ingredient'])
            );

            $this->Ingredient->create();

            $ingredients = $this->Ingredient->find('all', $params);
            if (empty($ingredients))
            {
                $ingredient = array(
                    'Ingredient' =>
                    array(
                        'ingredient' => $newIng['ingredient'],
                        'type' => ''));
                $this->Ingredient->save($ingredient);
            }
        }
    }

    private function saveNewIngredientInstruction()
    {
        foreach ($this->data['Recipe']['ingredients'] as $newIng)
        {
            $instructions = array();
            $params = array(
                'conditions' => array('IngredientInstruction.instruction' => $newIng['instruction'])
            );

            $this->IngredientInstruction->create();

            $instructions = $this->IngredientInstruction->find('all', $params);

            if (empty($instructions))
            {
                $instruction = array(
                    'IngredientInstruction' =>
                    array(
                        'instruction' => $newIng['instruction'],
                        'type' => ''));
                $this->IngredientInstruction->save($instruction);
            }
        }
    }

    private function saveNewUnit()
    {
        foreach ($this->data['Recipe']['ingredients'] as $ingredient)
        {
            if (!empty($ingredient['unit']))
            {
                $instructions = array();
                $params = array(
                    'conditions' => array(
                        '$or' => array(
                            array('Unit.l_name' => $ingredient['unit']),
                            array('Unit.s_name' => $ingredient['unit'])
                    ))
                );

                $this->Unit->create();

                $units = $this->Unit->find('all', $params);

                if (empty($units))
                {
                    $unit = array(
                        'Unit' =>
                        array(
                            'l_name' => $ingredient['unit'],
                            's_name' => $ingredient['unit']));
                    $this->Unit->save($unit);
                }
            }
        }
    }

    private function saveNewTag()
    {
        foreach (explode(', ', $this->data['Recipe']['tags']) as $newTag)
        {
            $tags = array();
            $params = array(
                'conditions' => array('Tag.tag' => $newTag)
            );

            $this->Tag->create();

            $tags = $this->Tag->find('all', $params);
            if (empty($tags))
            {
                $tag = array(
                    'Tag' =>
                    array(
                        'tag' => $newTag,
                        'type' => ''));
                $this->Tag->save($tag);
            }
        }
    }

}