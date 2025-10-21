<?php

class HTMLPurifier_HTMLModule_Tidy_Strict extends HTMLPurifier_HTMLModule_Tidy_XHTMLAndHTML4
{
    public $name = 'Tidy_Strict';
    public $defaultLevel = 'light';

    public function makeFixes() {
        $r = parent::makeFixes();
        $r['blockquote#content_model_type'] = 'strictblockquote';
        return $r;
    }

    public $defines_child_def = true;
    public function getChildDef($tod) {
        if ($tod->content_model_type != 'strictblockquote') return parent::getChildDef($tod);
        return new HTMLPurifier_ChildDef_StrictBlockquote($tod->content_model);
    }
}

// vim: et sw=4 sts=4
