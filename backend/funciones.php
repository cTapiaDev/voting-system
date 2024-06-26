<?php

include_once 'conexion.php';

function validarEmail($email) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

function validarRut($rut) {
    
    if (!preg_match("/^[0-9.]+[-]?+[0-9kK]{1}/", $rut)) {
        return false;
    }

    $rut = preg_replace('/[\.\-]/i', '', $rut);
    $dv = substr($rut, -1);
    $numero = substr($rut, 0, strlen($rut) - 1);
    $i = 2;
    $suma = 0;

    foreach (array_reverse(str_split($numero)) as $v) {
        if ($i == 8) {
            $i = 2;
        }
        $suma += $v * $i;
        ++$i;
    }

    $dvr = 11 - ($suma % 11);

    if ($dvr == 11) {
        $dvr = 0;
    }
    if ($dvr == 10) {
        $dvr = 'K';
    }

    if ($dvr == strtoupper($dv)) {
        return true;
    } else {
        return false;
    }
}


    