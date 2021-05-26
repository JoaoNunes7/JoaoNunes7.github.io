<?php
    header('Content-Type: application/json');
    $pdo = new PDO("mysql:host=estga-dev.clients.ua.pt;port:3306;dbname=ptw", 'ptw', 'ptw');

    $data = json_decode($_POST['json']);
    $user = $data->user;
    $nome = $data->nome;
    $pass = $data->pass;
    $idade = $data->idade;
    $categoria = $data->categoria;
    try{
        $q = "UPDATE ptw.Utilizadores SET nome = '$nome', password = '$pass',idade = '$idade',categoria = '$categoria' WHERE utilizador = '$user'";
        $statement = $pdo->prepare($q);
        $statement->execute();
    }catch(PDOException $e){
        echo json_encode($e->getMessage());
    }
?>