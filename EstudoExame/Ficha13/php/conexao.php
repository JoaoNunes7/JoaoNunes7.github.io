<?php
try {
    $pdo = new PDO("mysql:host=estga-dev.clients.ua.pt;port:3306;dbname=ptw", 'ptw', 'ptw');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die($e->getMessage());
}
