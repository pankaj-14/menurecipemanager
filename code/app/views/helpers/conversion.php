<?php

class ConversionHelper extends AppHelper
{

    var $helpers = array('Session');

    public function decimalToFraction($decimal, $return = false)
    {
        $str = '';
        $fractionsToDecimals = $this->Session->read('Conversions.fractionsToDecimals');

        $split = explode('.', $decimal);

        if ($split[0] != 0)
        {
            $str .= $split[0] . ' ';
        }

        $str .= $fractionsToDecimals['0.' . $split[1]];

        if ($return)
        {
            return $str;
        }
        else
        {
            echo $str;
        }
    }

    public function fractionToDecimal($fraction)
    {
        
    }

}

?>
