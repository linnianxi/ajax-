<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita41479335ef43b326d486176555f6c50
{
    public static $prefixLengthsPsr4 = array (
        't' => 
        array (
            'think\\composer\\' => 15,
        ),
        'a' => 
        array (
            'app\\' => 4,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'think\\composer\\' => 
        array (
            0 => __DIR__ . '/..' . '/topthink/think-installer/src',
        ),
        'app\\' => 
        array (
            0 => __DIR__ . '/../..' . '/application',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita41479335ef43b326d486176555f6c50::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita41479335ef43b326d486176555f6c50::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
