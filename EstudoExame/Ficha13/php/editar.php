<?php
include('conexao.php');
header('ContentType: application/json');

$data = json_decode($_POST['json']);
$userAntigo = $data->userAntigo;
$user = $data->user;
$nome = $data->nome;
$password = $data->pass;
$idade = $data->idade;
$categoria = $data->categoria;


try{
    global $pdo;
    $q = "UPDATE ptw.Utilizadores SET utilizador = ?, nome = ?, password = ?, idade = ?, categoria = ? WHERE utilizador LIKE '$userAntigo'";
    $stmt = $pdo->prepare($q);
    $stmt->execute([$user, $nome, $password, $idade, $categoria]);

}catch(PDOException $e){
    die($e->getMessage());

}
?>