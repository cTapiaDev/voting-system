<?php

$link = 'mysql:host=localhost;dbname=sistema_votos';
$usuario = "root";
$password = "root";

try {
    $pdo = new PDO($link, $usuario, $password);

} catch (PDOException $e) {
    print "Error: " . $e->getMessage() . "<br/>";
    die();
}