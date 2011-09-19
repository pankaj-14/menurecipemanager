<?php
/**
 * Description of eti_api_obj
 *
 * @author SWright
 */
class EtiDataObj
{
    public function __construct()
    {

    }

    public function loadCustomFields($customFields)
    {
        $arr = array();
        foreach($customFields as $cf)
        {
            $arr[$cf->FieldLabel] = $cf->FieldValue;
        }
        return $arr;
    }
}
?>
