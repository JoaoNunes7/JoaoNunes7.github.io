<?php
include('conexao.php');
header('ContentType: application/json');

$data = json_decode($_POST['json']);
$user = $data->user;
$nome = $data->nome;
$password = $data->pass;
$idade = $data->idade;
$categoria = $data->categoria;

try{
    global $pdo;
    $q = "INSERT INTO ptw.Utilizadores(utilizador, nome, password, idade, categoria)  VALUES (?,?,?,?,?)";
    $stmt = $pdo->prepare($q);
    $stmt->execute([$user, $nome, $password, $idade, $categoria]);

}catch(PDOException $e){
    die($e->getMessage());

}
?>