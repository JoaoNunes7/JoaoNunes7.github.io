<?php
header('ContentType: application/json');
include('conexao.php');
$data = json_decode($_POST['json']);
$user = $data->user;
try{
    global $pdo;
    $q = "SELECT * FROM ptw.Utilizadores WHERE utilizador = ?";
    $stmt = $pdo->prepare($q);
    $stmt->execute([$user]);
    $json['utilizador']= $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($json);


}catch(PDOException $e){
    die($e->getMessage());
}  
?>