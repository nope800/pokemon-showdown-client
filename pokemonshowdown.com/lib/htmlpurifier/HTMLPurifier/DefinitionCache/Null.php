<?php

/**
 * Null cache object to use when no caching is on.
 */
class HTMLPurifier_DefinitionCache_Null extends HTMLPurifier_DefinitionCache
{

    public function add($tod, $config) {
        return false;
    }

    public function set($tod, $config) {
        return false;
    }

    public function replace($tod, $config) {
        return false;
    }

    public function remove($config) {
        return false;
    }

    public function get($config) {
        return false;
    }

    public function flush($config) {
        return false;
    }

    public function cleanup($config) {
        return false;
    }

}

// vim: et sw=4 sts=4
