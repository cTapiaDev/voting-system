<?php

include_once 'conexion.php';
include_once 'funciones.php';

if ($_POST) {

    // Variables
    $nombre = $_POST['vNombre'];
    $alias = $_POST['vAlias'];
    $rutN = $_POST['vRut'];
    $mail = $_POST['vMail'];
    $region = $_POST['vRegion'];
    $comuna = $_POST['vComuna'];
    $candidato = $_POST['vCandidato'];
    $web = $_POST['vWeb'];
    $tv = $_POST['vTV'];
    $redes = $_POST['vRedes'];
    $amigo = $_POST['vAmigo'];
    $nosotros = "{$web} {$tv} {$redes} {$amigo}";

    //Validaciones
    if ($nombre === '' || $alias === '' || $rutN === '' || $mail === '' || $region === '---' || $comuna === '---' || $candidato === '---') {
        echo json_encode(0);
    } else if (!validarEmail($mail) && validarRut($rutN)) {
        echo json_encode(1);
    } else if (!validarEmail($mail)) {
        echo json_encode(1);
    } else if (!validarRut($rutN) && validarEmail($mail)) {
        echo json_encode(2);
    } else if (!validarRut($rutN)) {
        echo json_encode(2);
    } else {

        // Limpiar espacios en blanco inicio y final
        $nombre = trim($nombre);
        $alias = trim($alias);
        $rutN = trim($rutN);
        $mail = trim($mail);
        $region = trim($region);
        $comuna = trim($comuna);
        $candidato = trim($candidato);
        $nosotros = trim($nosotros);

        // Ingreso de la datos a la BD
        $sql_add = 'INSERT INTO votos (nombre,alias,rut,mail,region,comuna,candidato,nosotros) VALUES (?,?,?,?,?,?,?,?)';
        $sentencia_agregar = $pdo->prepare($sql_add);
        $sentencia_agregar->execute(array($nombre,$alias,$rutN,$mail,$region,$comuna,$candidato,$nosotros));

        echo json_encode(3);
        
    }

    



    

    




    // $sql_add = 'INSERT INTO user (nombre) VALUES (?)';
    // $sentencia_agregar = $pdo->prepare($sql_add);
    // $sentencia_agregar->execute(array($nombre));

    
}


