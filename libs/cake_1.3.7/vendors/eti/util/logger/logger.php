<?php
/**
 * This file contains the logger class for use with the CakePHP framework
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
 *
 * @package       eti
 * @subpackage    eti.utils
 */
class Logger
{
    /**
     * Checks the size of the current <b>log</b> file. If the log file is larger than
     * size defined in app_config then the file is remamed with a datestamp
     * and a new file is created
     *
     * @method      checkLogSize
     * @return      void
     */
    public function checkLogSize()
    {
        $logname = Configure::read('LOGGING.LOG_FILE');

        $logfile = LOGS.$logname.'.log';

        $newname  = LOGS.$logname.'.'.date("mdY-H-i-s");

        if ( (file_exists($logfile)) && (filesize($logfile) > Configure::read('LOGGING.LOGFILESIZE')) )
        {
            rename($logfile,$newname );
        }
    }

    /**
     * Writes to the log defined in app_config or to the file specified in $log
     * @method		write
     * @param           string      $title
     * @param 		mixed       $msg
     * @param           int         $lvl
     * @param 		string      $log [optional] (LOG_DEBUG | LOG_ERROR | LOG_APP)
     * @return  	void
     *
     */
    public function write($title, $msg, $lvl, $log = null)
    {
        if($log === null)
        {
            $log = Configure::read('LOGGING.LOG_FILE');
        }

        $line_start = "\n\t";
        $seperator =  "\n\n------------------------------------------------\n";

        if(Configure::read('LOGGING.LEVEL') != 0 && $lvl <= Configure::read('LOGGING.LEVEL'))
        {
            $str = '';
            $str .= "$line_start Title:\t" . $title;

            $str .= "$line_start Msg:\t";
            if(is_string($msg))
            {
                $str .= $msg;
            }
            elseif(is_array($msg))
            {
                $str .= var_export($msg, true);
            }
            elseif(is_object($msg))
            {
                $str .= var_export($msg, true);
            }
            else
            {
                $str .= $msg;
            }

            $str .= $seperator;

            Logger::checkLogSize();

            $this->log($str, $log);
        }
    }
}
?>