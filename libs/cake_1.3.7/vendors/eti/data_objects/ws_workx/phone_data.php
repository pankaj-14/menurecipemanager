<?php
/**
 * Description of phone
 *
 * @author SWright
 */
class PhoneData extends EtiDataObj
{
    public $phoneNumber;
    public $serviceEnabled;
    public $interfaceGroup;
    public $CRV;
    public $deviceId;
    public $switchId;
    public $DSLEquipNumber1;
    public $DSLEquipNumber2;
    public $SIPUserName;
    public $SIPPassword;
    public $CIDLocalName;
    public $primaryNumber;
    public $ringCadence;
    public $PIC1;
    public $PIC2;
    public $PIC3;
    public $lineType;
    public $RADIUSUserName;
    public $RADIUSUserPswd;
    public $RADIUSFramedIP;
    public $serviceList = array();

    public function __construct()
    {
    }

    public function setData($data)
    {
        $this->setPhoneNumber($data->PhoneNumber);
        $this->setServiceEnabled($data->ServiceEnabled);
        $this->setInterfaceGroup($data->InterfaceGroup);
        $this->setCRV($data->CRV);
        $this->setDeviceId($data->DeviceId);
        $this->setSwitchId($data->SwitchId);
        $this->setDSLEquipNumber1($data->DSLEquipNumber);
        $this->setDSLEquipNumber2($data->DSLEquipNumber2);
        $this->setSIPUserName($data->SIPUserName);
        $this->setSIPPassword($data->SIPPassword);
        $this->setCIDLocalName($data->CIDLocalName);
        $this->setPrimaryNumber($data->PrimaryNumber);
        $this->setRingCadence($data->RingCadence);
        $this->setPIC1($data->PIC1);
        $this->setPIC2($data->PIC2);
        $this->setPIC3($data->PIC3);
        $this->setLineType($data->LineType);
        $this->setRADIUSUserName($data->RADIUSUserName);
        $this->setRADIUSUserPswd($data->RADIUSUserPswd);
        $this->setRADIUSFramedIP($data->RADIUSFramedIP);

        if(!empty($data->ServiceList->Service))
        {
            $serviceList = array();
            foreach($data->ServiceList->Service as $s)
            {
                $service = new ServiceData();
                $service->setData($s);
                $serviceList[] = $service;
            }
            $this->setServiceList($serviceList);
        }
    }

    public function getPhoneNumber()
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber($phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;
    }

    public function getServiceEnabled()
    {
        return $this->serviceEnabled;
    }

    public function setServiceEnabled($serviceEnabled)
    {
        $this->serviceEnabled = $serviceEnabled;
    }

    public function getInterfaceGroup()
    {
        return $this->interfaceGroup;
    }

    public function setInterfaceGroup($interfaceGroup)
    {
        $this->interfaceGroup = $interfaceGroup;
    }

    public function getCRV()
    {
        return $this->CRV;
    }

    public function setCRV($CRV)
    {
        $this->CRV = $CRV;
    }

    public function getDeviceId()
    {
        return $this->deviceId;
    }

    public function setDeviceId($deviceId)
    {
        $this->deviceId = $deviceId;
    }

    public function getSwitchId()
    {
        return $this->switchId;
    }

    public function setSwitchId($switchId)
    {
        $this->switchId = $switchId;
    }

    public function getDSLEquipNumber1()
    {
        return $this->DSLEquipNumber1;
    }

    public function setDSLEquipNumber1($DSLEquipNumber)
    {
        $this->DSLEquipNumber1 = $DSLEquipNumber;
    }

    public function getDSLEquipNumber2()
    {
        return $this->DSLEquipNumber2;
    }

    public function setDSLEquipNumber2($DSLEquipNumber2)
    {
        $this->DSLEquipNumber2 = $DSLEquipNumber2;
    }

    public function getSIPUserName()
    {
        return $this->SIPUserName;
    }

    public function setSIPUserName($SIPUserName)
    {
        $this->SIPUserName = $SIPUserName;
    }

    public function getSIPPassword()
    {
        return $this->SIPPassword;
    }

    public function setSIPPassword($SIPPassword)
    {
        $this->SIPPassword = $SIPPassword;
    }

    public function getCIDLocalName()
    {
        return $this->CIDLocalName;
    }

    public function setCIDLocalName($CIDLocalName)
    {
        $this->CIDLocalName = $CIDLocalName;
    }

    public function getPrimaryNumber()
    {
        return $this->primaryNumber;
    }

    public function setPrimaryNumber($primaryNumber)
    {
        $this->primaryNumber = $primaryNumber;
    }

    public function getRingCadence()
    {
        return $this->ringCadence;
    }

    public function setRingCadence($ringCadence)
    {
        $this->ringCadence = $ringCadence;
    }

    public function getPIC1()
    {
        return $this->PIC1;
    }

    public function setPIC1($PIC1)
    {
        $this->PIC1 = $PIC1;
    }

    public function getPIC2()
    {
        return $this->PIC2;
    }

    public function setPIC2($PIC2)
    {
        $this->PIC2 = $PIC2;
    }

    public function getPIC3()
    {
        return $this->PIC3;
    }

    public function setPIC3($PIC3)
    {
        $this->PIC3 = $PIC3;
    }

    public function getLineType()
    {
        return $this->lineType;
    }

    public function setLineType($lineType)
    {
        $this->lineType = $lineType;
    }

    public function getRADIUSUserName()
    {
        return $this->RADIUSUserName;
    }

    public function setRADIUSUserName($RADIUSUserName)
    {
        $this->RADIUSUserName = $RADIUSUserName;
    }

    public function getRADIUSUserPswd()
    {
        return $this->RADIUSUserPswd;
    }

    public function setRADIUSUserPswd($RADIUSUserPswd)
    {
        $this->RADIUSUserPswd = $RADIUSUserPswd;
    }

    public function getRADIUSFramedIP()
    {
        return $this->RADIUSFramedIP;
    }

    public function setRADIUSFramedIP($RADIUSFramedIP)
    {
        $this->RADIUSFramedIP = $RADIUSFramedIP;
    }

    public function getServiceList()
    {
        return $this->serviceList;
    }

    public function setServiceList($serviceList)
    {
        $this->serviceList = $serviceList;
    }


}
?>
