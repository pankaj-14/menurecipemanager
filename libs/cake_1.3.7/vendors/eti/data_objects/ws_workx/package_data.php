<?php
/**
 * Description of package
 *
 * @author SWright
 */
class PackageData extends EtiDataObj
{

    private $contentClassName;
    private $numberStd;
    private $minOpt;
    private $maxOpt;
    private $packageContentList = array();

    public function __construct()
    {

    }

    public function setData($data)
    {
        //  var_dump($data);
        $this->contentClassName = $data->ContClassName;
        $this->numberStd = $data->NumberStd;
        $this->minOpt = $data->MinOpt;
        $this->maxOpt = $data->MaxOpt;

        if (!empty($data->PkgContentList->PkgContent))
        {
            $packageContentList = array();
            foreach ($data->PkgContentList->PkgContent as $p)
            {
                $packageContent = new PackageContentData();
                $packageContent->setData($p);
                $packageContentList[] = $packageContent;
            }
            $this->packageContentList = $packageContentList;
        }
    }

    public function provisionedOptionalContentCount()
    {
        $c = 0;
        if (!empty($this->packageContentList))
        {
            foreach ($this->packageContentList as $packageContent)
            {
                if($packageContent->getProvisioned() == true && $packageContent->getOptional() == 'Y')
                {
                    $c++;
                }
            }
        }

        return $c;
    }

    public function getContentClassName()
    {
        return $this->contentClassName;
    }

    public function setContentClassName($contentClassName)
    {
        $this->contentClassName = $contentClassName;
    }

    public function getNumberStd()
    {
        return $this->numberStd;
    }

    public function setNumberStd($numberStd)
    {
        $this->numberStd = $numberStd;
    }

    public function getMinOpt()
    {
        return $this->minOpt;
    }

    public function setMinOpt($minOpt)
    {
        $this->minOpt = $minOpt;
    }

    public function getMaxOpt()
    {
        return $this->maxOpt;
    }

    public function setMaxOpt($maxOpt)
    {
        $this->maxOpt = $maxOpt;
    }

    public function getPackageContentList()
    {
        return $this->packageContentList;
    }

    public function setPackageContentList($packageContentList)
    {
        $this->packageContentList = $packageContentList;
    }

}

?>
