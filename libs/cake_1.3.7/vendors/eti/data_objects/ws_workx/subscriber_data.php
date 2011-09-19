<?php
/**
 * Description of subscriber
 *
 * @author SWright
 */
class SubscriberData extends EtiDataObj
{
    private $id;
    private $name;
    private $phone;
    private $PINRequired;
    private $billCycle;
    private $ratePlan;
    private $taxClass;
    private $emailAddress;
    private $serviceEnabled;
    private $PPVPrivileges;
    private $PPVCap;
    private $pendingWorkorderCount;
    private $workOrderList = array();
    private $location;
    private $customFieldList = array();
    private $serviceList = array();
    private $deviceList = array();
    private $phoneList = array();

    public function __construct()
    {
    }

    public function setData($data)
    {
        // var_dump($data);
        $this->setId($data->SubscriberId);

        $sb = $data->SubBasics;
        $this->setName($sb->SubscriberName);
        $this->setPhone( $sb->Phone );
        $this->setPINRequired( $sb->PINRequired );
        $this->setBillCycle( $sb->BillCycle );
        $this->setRatePlan( $sb->RatePlan );
        $this->setTaxClass( $sb->TaxClass );
        $this->setEmailAddress( $sb->EmailAddress );
        $this->setServiceEnabled( $sb->ServiceEnabled );
        $this->setPPVPrivileges($sb->PPVPrivileges );
        $this->setPPVCap( $sb->PPVCap );
        $this->setPendingWorkorderCount( $sb->PendingWOCnt );

        if(!empty($sb->CustomFieldList->CustomField))
        {
            $this->setCustomFieldList( $this->loadCustomFields($sb->CustomFieldList->CustomField) );
        }

        $location = new LocationData();
        if(!empty($data->Location))
        {
            $location->setData($data->Location);
        }
        $this->setLocation($location);

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

        if(!empty($data->DeviceList->Device))
        {
            $deviceList = array();
            foreach($data->DeviceList->Device as $d)
            {
                $device = new DeviceData();
                $device->setData($d);
                $deviceList[] = $device;
            }
            $this->setDeviceList($deviceList);
        }

        if(!empty($data->PhoneList->Phone))
        {
            $phoneList = array();
            foreach($data->PhoneList->Phone as $p)
            {
                $phone = new PhoneData();
                $phone->setData($p);
                $phoneList[] = $phone;
            }
            $this->setPhoneList($phoneList);
        }

        if(!empty($data->SubBasics->PendingWOList->WorkOrder))
        {
            $workOrderList = array();
            foreach($data->SubBasics->PendingWOList->WorkOrder as $w)
            {
                $workOrder = new WorkOrderData();
                $workOrder->setData($w);
                $workOrderList[] = $workOrder;
            }
            $this->workOrderList = $workOrderList;
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

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    public function getPINRequired()
    {
        return $this->PINRequired;
    }

    public function setPINRequired($PINRequired)
    {
        $this->PINRequired = $PINRequired;
    }

    public function getBillCycle()
    {
        return $this->billCycle;
    }

    public function setBillCycle($billCycle)
    {
        $this->billCycle = $billCycle;
    }

    public function getRatePlan()
    {
        return $this->ratePlan;
    }

    public function setRatePlan($ratePlan)
    {
        $this->ratePlan = $ratePlan;
    }

    public function getTaxClass()
    {
        return $this->taxClass;
    }

    public function setTaxClass($taxClass)
    {
        $this->taxClass = $taxClass;
    }

    public function getEmailAddress()
    {
        return $this->emailAddress;
    }

    public function setEmailAddress($emailAddress)
    {
        $this->emailAddress = $emailAddress;
    }

    public function getServiceEnabled()
    {
        return $this->serviceEnabled;
    }

    public function setServiceEnabled($serviceEnabled)
    {
        $this->serviceEnabled = $serviceEnabled;
    }

    public function getPPVPrivileges()
    {
        return $this->PPVPrivileges;
    }

    public function setPPVPrivileges($PPVPrivileges)
    {
        $this->PPVPrivileges = $PPVPrivileges;
    }

    public function getPPVCap()
    {
        return $this->PPVCap;
    }

    public function setPPVCap($PPVCap)
    {
        $this->PPVCap = $PPVCap;
    }

    public function getPendingWorkorderCount()
    {
        return $this->pendingWorkorderCount;
    }

    public function setPendingWorkorderCount($pendingWorkorderCount)
    {
        $this->pendingWorkorderCount = $pendingWorkorderCount;
    }

    public function getLocation()
    {
        return $this->location;
    }

    public function setLocation($location)
    {
        $this->location = $location;
    }

    public function getCustomFieldList()
    {
        return $this->customFieldList;
    }

    public function setCustomFieldList($customFieldList)
    {
        $this->customFieldList = $customFieldList;
    }

    public function getServiceList()
    {
        return $this->serviceList;
    }

    public function setServiceList($serviceList)
    {
        $this->serviceList = $serviceList;
    }

    public function getDeviceList()
    {
        return $this->deviceList;
    }

    public function setDeviceList($deviceList)
    {
        $this->deviceList = $deviceList;
    }

    public function getPhoneList()
    {
        return $this->phoneList;
    }

    public function setPhoneList($phoneList)
    {
        $this->phoneList = $phoneList;
    }

    public function getWorkOrderList()
    {
        return $this->workOrderList;
    }

    public function setWorkOrderList($workOrderList)
    {
        $this->workOrderList = $workOrderList;
    }
}
?>
