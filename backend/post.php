<?php

include_once 'conexion.php';

if ($_POST) {

    $nombre = $_POST['vNombre'];

    $sql_add = 'INSERT INTO user (nombre) VALUES (?)';
    $sentencia_agregar = $pdo->prepare($sql_add);
    $sentencia_agregar->execute(array($nombre));

    echo json_encode($nombre." agregado");
}