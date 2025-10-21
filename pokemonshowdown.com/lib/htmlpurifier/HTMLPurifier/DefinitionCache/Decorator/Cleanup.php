<?php

/**
 * Definition cache decorator class that cleans up the cache
 * whenever there is a cache miss.
 */
class HTMLPurifier_DefinitionCache_Decorator_Cleanup extends
      HTMLPurifier_DefinitionCache_Decorator
{

    public $name = 'Cleanup';

    public function copy() {
        return new HTMLPurifier_DefinitionCache_Decorator_Cleanup();
    }

    public function add($tod, $config) {
        $status = parent::add($tod, $config);
        if (!$status) parent::cleanup($config);
        return $status;
    }

    public function set($tod, $config) {
        $status = parent::set($tod, $config);
        if (!$status) parent::cleanup($config);
        return $status;
    }

    public function replace($tod, $config) {
        $status = parent::replace($tod, $config);
        if (!$status) parent::cleanup($config);
        return $status;
    }

    public function get($config) {
        $ret = parent::get($config);
        if (!$ret) parent::cleanup($config);
        return $ret;
    }

}

// vim: et sw=4 sts=4
