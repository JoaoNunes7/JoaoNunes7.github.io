<?php
    header('Content-Type: application/json');
    $pdo = new PDO("mysql:host=estga-dev.clients.ua.pt;port:3306;dbname=ptw", 'ptw', 'ptw');
    $data = json_decode($_POST['json']);
    $user = $data->user;
    try{
        $q = "DELETE FROM ptw.Utilizadores where utilizador = '$user'";
        $statement = $pdo->prepare($q);
        $statement->execute();
    }catch(PDOException $e){
        echo json_encode($e->getMessage());
    }