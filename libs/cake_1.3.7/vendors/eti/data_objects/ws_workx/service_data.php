<?php
/**
 * Description of service
 *
 * @author SWright
 */
class ServiceData extends EtiDataObj
{

    private $name;
    private $description;
    private $className;
    private $type;
    private $units;
    private $rate;
    private $rateOverride;
    private $minimumServiceDate;
    private $promoExpires;
    private $provisioned = false;
    private $packageList = array();


    public function __construct()
    {

    }

    public function setData($data)
    {
        $this->setname($data->ServiceName);
        $this->setDescription($data->ServiceDesc);
        $this->setClassName($data->ServClassName);
        $this->setType($data->ServiceType);
        $this->setUnits($data->Units);
        $this->setRate($data->Rate);
        $this->setRateOverride($data->RateOverride);
        $this->setMinimumServiceDate($data->MinServiceDate);

        if (!empty($data->PackageList->PkgContClass))
        {
            $packageList = array();
            foreach ($data->PackageList->PkgContClass as $p)
            {
                $package = new PackageData();
                $package->setData($p);
                $packageList[] = $package;
            }
            $this->packageList = $packageList;
        }
        else if (!empty($data->PkgContentList->PkgContent))
        {
            /*
             * This handles the fact that subscriber packages dont come listed
             * in their classes.
            */

            // First we organize the content into package classes
            $t_packages_by_class = array();
            foreach ($data->PkgContentList->PkgContent as $pc)
            {
                $packageContent = new PackageContentData();
                $packageContent->setData($pc);
                $packageContent->setProvisioned(true);
                $t_packages_by_class[$pc->ContClassName][] = $packageContent;
                unset($packageContent);
            }

            // Now we can add the packages properly
            $packageList = array();
            foreach($t_packages_by_class as $class => $content)
            {
                $package = new PackageData();
                $package->setContentClassName($class);
                $package->setPackageContentList($content);
                $packageList[] = $package;
            }
            $this->packageList = $packageList;
        }
    }

    public function getProvisionedOptionalContentCount()
    {
        $c = 0;
        if( !empty($this->packageList) )
        {
            foreach($this->getPackageList() as $package)
            {
                $c = $c + $package->provisionedOptionalContentCount();
            }
        }
        return $c;
    }

    public function getPromoExpires()
    {
        return $this->promoExpires;
    }

    public function setPromoExpires($promoExpires)
    {
        $this->promoExpires = $promoExpires;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getClassName()
    {
        return $this->className;
    }

    public function setClassName($className)
    {
        $this->className = $className;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getUnits()
    {
        return $this->units;
    }

    public function setUnits($units)
    {
        $this->units = $units;
    }

    public function getRate()
    {
        return $this->rate;
    }

    public function setRate($rate)
    {
        $this->rate = $rate;
    }

    public function getRateOverride()
    {
        return $this->rateOverride;
    }

    public function setRateOverride($rateOverride)
    {
        $this->rateOverride = $rateOverride;
    }

    public function getMinimumServiceDate()
    {
        return $this->minimumServiceDate;
    }

    public function setMinimumServiceDate($minimumServiceDate)
    {
        $this->minimumServiceDate = $minimumServiceDate;
    }

    public function getPackageList()
    {
        return $this->packageList;
    }

    public function setPackageList($packageList)
    {
        $this->packageList = $packageList;
    }
    
    public function getProvisioned()
    {
        return $this->provisioned;
    }

    public function setProvisioned($provisioned)
    {
        $this->provisioned = $provisioned;
    }


}

?>
