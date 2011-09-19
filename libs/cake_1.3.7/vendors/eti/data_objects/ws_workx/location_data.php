<?php
/**
 * Description of location
 *
 * @author SWright
 */
class LocationData extends EtiDataObj
{
    private $id;
    private $headendCode;
    private $netLocCode;
    private $address1;
    private $address2;
    private $city;
    private $state;
    private $zip;
    private $customFieldList = array();


    public function __construct()
    {

    }

    public function setData($data)
    {
        $this->setId($data->LocationId);
        $this->setHeadendCode($data->HeadendCode);
        $this->setNetLocCode($data->NetLocCode);
        $this->setAddress1( $data->Address1);
        $this->setAddress2( $data->Address2);
        $this->setCity( $data->City);
        $this->setState( $data->State);
        $this->setZip($data->Zip);

        if(!empty($data->CustomFieldList->CustomField))
        {
            $this->setCustomFieldList( $this->loadCustomFields($data->CustomFieldList->CustomField) );
        }
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getHeadendCode()
    {
        return $this->headendCode;
    }

    public function setHeadendCode($headendCode)
    {
        $this->headendCode = $headendCode;
    }

    public function getNetLocCode()
    {
        return $this->netLocCode;
    }

    public function setNetLocCode($netLocCode)
    {
        $this->netLocCode = $netLocCode;
    }

    public function getAddress1()
    {
        return $this->address1;
    }

    public function setAddress1($address1)
    {
        $this->address1 = $address1;
    }

    public function getAddress2()
    {
        return $this->address2;
    }

    public function setAddress2($address2)
    {
        $this->address2 = $address2;
    }

    public function getCity()
    {
        return $this->city;
    }

    public function setCity($city)
    {
        $this->city = $city;
    }

    public function getState()
    {
        return $this->state;
    }

    public function setState($state)
    {
        $this->state = $state;
    }

    public function getZip()
    {
        return $this->zip;
    }

    public function setZip($zip)
    {
        $this->zip = $zip;
    }

    public function getCustomFieldList()
    {
        return $this->customFieldList;
    }

    public function setCustomFieldList($customFieldList)
    {
        $this->customFieldList = $customFieldList;
    }


}
?>
