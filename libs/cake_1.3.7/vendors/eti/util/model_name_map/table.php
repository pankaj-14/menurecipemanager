<?php
/**
 * This file contains the Table class
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
 *  The class contains the Table class for use with the Model Name Map class
 * @package       eti
 * @subpackage    eti.utils.model_name_map
 */
class Table
{
	/**
	 * @var     string  $table	The database table name
         * @access  public
	 */
	public $name;
	/**
	 * @var     string  $alias	The table alias to use in the query
         * @access  public
	 */
	public $alias;
	/**
	 * @var     array   $columns	An array of column objects for this table
         * @access  public
	 */
	public $columns = array();
	
	public function __construct($name, $alias)
	{
		$this->name = $name;
		$this->alias = $alias;
	}
	/**
         * Add a column to this table
         * @param   string   $name
         * @param   string   $label
         */
	public function addColumn($name, $label)
	{
		$col = new Column($name, $label);
		$this->columns[] = $col;
	}

}
?>