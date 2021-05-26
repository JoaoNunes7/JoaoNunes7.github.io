<?php
    header('Content-Type: application/json');
    $pdo = new PDO("mysql:host=estga-dev.clients.ua.pt;port:3306;dbname=ptw", 'ptw', 'ptw');

    try{
        $q = "SELECT CatUtilizadores.nome as nomeCat, Utilizadores.* FROM ptw.Utilizadores
        INNER JOIN ptw.CatUtilizadores WHERE ptw.Utilizadores.categoria = ptw.CatUtilizadores.id
        ORDER BY Utilizadores.nome";
        $statement = $pdo->prepare($q);
        $statement->execute();
        $json['utilizadores'] = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($json);
        
    }catch(PDOException $e){
        echo json_encode($e->getMessage());
    }
?>