<?php
include('conexao.php');
header('ContentType: application/json');

$data = json_decode($_POST['json']);
$userAntigo = $data->userAntigo;


try{
    global $pdo;
    $q = "DELETE FROM ptw.Utilizadores WHERE utilizador LIKE '$userAntigo'";
    $stmt = $pdo->prepare($q);
    $stmt->execute();

}catch(PDOException $e){
    die($e->getMessage());

}
?>