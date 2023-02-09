<?php
	$login = $_POST['login'];
	$password = $_POST['pass'];

	$connection = new PDO('mysql:host=localhost; dbname=eatWeb; charset=utf8', 'root', '');

	$sth = $connection->prepare("INSERT INTO `auth` (`id`, `FIO`, `password`) VALUES (NULL, '$login', '$password')");
	$sth->execute();

	header("Location: index.php");
?>