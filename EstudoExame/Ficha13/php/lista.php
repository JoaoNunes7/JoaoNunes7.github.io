<?php
header('ContentType: application/json');
include('conexao.php');

try{
    global $pdo;
    $q = "SELECT CatUtilizadores.nome as nomeCat, Utilizadores.* FROM ptw.Utilizadores
    INNER JOIN ptw.CatUtilizadores WHERE ptw.Utilizadores.categoria = ptw.CatUtilizadores.id";
    $stmt = $pdo->prepare($q);
    $stmt->execute();
    $json['utilizadores']= $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($json);


}catch(PDOException $e){
    die($e->getMessage());
}  
?>