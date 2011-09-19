<?php

/**
 * This file contains the ModelNameMap class
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
 *  The class provides a means to convert an ETI API DB response format to something resembling an ETI API format.
 * @package       eti
 * @subpackage    eti.utils.model_name_map
 */
class ModelNameMap
{

    /**
     * @var     array   $tables   An array of table objects
     * @access  protected
     */
    protected $tables = array();
    /**
     * @var     string   $clause    A SQL clause
     * @access  protected
     */
    protected $clause;
    /**
     *
     * @var     string
     */
    protected $limit;
    /**
     * Used to created the API response structure we want
     * @var String
     */
    private $response;
    /**
     * Used to created the API response structure we want
     * @var String
     */
    private $list;
    /**
     * Used to created the API response structure we want
     * @var String
     */
    private $object;

    public function __construct()
    {
        App::import('Vendor', 'eti/util/model_name_map/table');
        App::import('Vendor', 'eti/util/model_name_map/column');
    }

    /**
     *  Adds a database table name to the map
     * @param   string  $table_name The name of a database table
     * @param   string  $alias      The alias for the table
     */
    public function addTable($tableName, $alias)
    {
        $table = new Table($tableName, $alias);
        $this->tables[$tableName] = $table;
    }

    /**
     *  Adds a column for a particular table in the map
     * @param   string  $table_name The name of the table that the column belongs to
     * @param   string  $col_name   The name of the column
     * @param   string  $label      The ETI API style label for the column
     */
    public function addColumn($tableName, $colName, $label)
    {
        $this->tables[$tableName]->addColumn($colName, $label);
    }

    /**
     *
     * @param   string  $clause The SQL clause for the query
     */
    public function addClause($clause)
    {
        $this->clause = ' ' . $clause;
    }

    public function addLimit($limit)
    {
        $this->limit = $limit;
    }

    /**
     * Converts a model_name_map to a SQL query
     * @method		mapToQuery
     * @return 		string      The SQL query
     */
    public function mapToQuery()
    {
        $select = 'SELECT ';

        if ($this->limit)
        {
            $select .= $this->limit . ' ';
        }

        $from = ' FROM ';
        $f1 = true;
        $f2 = true;
        foreach ($this->tables as $table)
        {
            /*
             * If its not the first table
             * And there is more than one table
             * place a comma at the start of the string
             */
            if ((!$f1))
            {
                $from .= ', ';
            }
            // Add the table and the table alias
            $from .= $table->name . ' ' . $table->alias;

            foreach ($table->columns as $col)
            {
                /*
                 * If its not the first column
                 * or the there is only one column
                 * add a comma to start of the string
                 */
                if ((!$f2) && ($this->column_count() > 1))
                {
                    $select .= ', ';
                }
                // Add the table alias and the column name
                $select .= $table->alias . '.' . $col->name;
                $f2 = false;
            }
            $f1 = false;
        }
        return $select . $from . $this->clause;
    }

    /**
     * @param APIDBResponse $DBResponse
     * @return transactionResult | DBResponse
     */
    public function dbResponseConverter($DBResponse)
    {
        $transactionResult = new stdClass();
        $transactionResult->id = $DBResponse->id;
        $transactionResult->resultCode = $DBResponse->resultCode;

        $response = $this->response;
        $list = $this->list;
        $object = $this->object;

        $transactionResult->$response->$list->$object = array();

        if ($DBResponse->resultCode == 0)
        {
            foreach ($DBResponse->QueryDatabaseRsp->DatabaseRowList->DatabaseRow as $row)
            {
                $r = new stdClass ();

                foreach ($row->DatabaseColumn as $col)
                {
                    foreach ($this->tables as $table)
                    {
                        foreach ($table->columns as $column)
                        {
                            if ($column->name == trim($col->ColumnName))
                            {
                                $nc = $column->label;
                                $r->$nc = $col->ColumnValue;
                            }
                        }
                    }
                }
                $array[] = $r;
            }

            $transactionResult->$response->$list->$object = $array;
        }
        else
        {
            return $DBResponse; // This is a real error
        }

        return $transactionResult;
    }

    /**
     * This method returns the count of all columns in all tables
     * @method	column_count
     * @return int
     */
    private function column_count()
    {
        $cols = 0;
        foreach ($this->tables as $table)
        {
            foreach ($table->columns as $column)
            {
                $cols++;
            }
        }
        return $cols;
    }

    /**
     * Creates a SQL clause string from a structured array
     *
     * @param Array $data array(fieldName => array('caseInsensitive' => [true|false], 'value' => fieldValue))
     * @param String $alias A single upper case character, must match the alias in your query
     * @return String
     */
    public function createClauseFromArray($data, $alias)
    {
        $first = true;
        $clause = '';
        foreach ($data as $field => $arr)
        {
            if ($arr['value'] != '')
            {
                if (!$first)
                {
                    $clause .= ' AND ';
                }
                if ($arr['caseSensitive'])
                {
                    // Case Sensitive
                    $clause .= " $alias." . $field . " LIKE '%" . $arr['value'] . "%'";
                }
                else
                {
                    // Case Insensitive
                    $clause .= " lower($alias." . $field . ") LIKE lower('%" . $arr['value'] . "%')";
                }
                $first = false;
            }
        }
        return $clause;
    }

    public function getTables()
    {
        return $this->tables;
    }

    public function setTables($tables)
    {
        $this->tables = $tables;
    }

    public function getClause()
    {
        return $this->clause;
    }

    public function setClause($clause)
    {
        $this->clause = $clause;
    }

    public function getLimit()
    {
        return $this->limit;
    }

    public function setLimit($limit)
    {
        $this->limit = $limit;
    }

    public function getResponse()
    {
        return $this->response;
    }

    public function setResponse($response)
    {
        $this->response = $response;
    }

    public function getList()
    {
        return $this->list;
    }

    public function setList($list)
    {
        $this->list = $list;
    }

    public function getObject()
    {
        return $this->object;
    }

    public function setObject($object)
    {
        $this->object = $object;
    }

}

?>