<?php
/**
 * This file contains the Column class for use with the Model Name Map
 * PHP version 5*
 *
 * ETI-Software
 *
 * Copyright 2010, ETI-Software Incorporated
 *
 * @filesource
 * @copyright
 * @link
 * @package       eti
 * @subpackage    eti.utils
 * @since
 * @version       $Revision: 7945 $
 * @license
 */
/**
 *  The class uses a column name and a corresponding label to name a DB column usually in the form of $name = subscriber_id, $label = SubscriberId
 * @package       eti
 * @subpackage    eti.utils.model_name_map
 */
class Column
{
        /**#@+
         * @access  public
         * @var     string
         */
	public $name;
	public $label;

	public function __construct($name, $label)
	{
		$this->name = $name;
		$this->label = $label;
	}
}
?>