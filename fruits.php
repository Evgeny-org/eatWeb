<?php
	$name = $_POST['name'];
	$connection = new PDO('mysql:host=localhost; dbname=eatWeb; charset=utf8', 'root', '');

	$search = $connection->query("SELECT * FROM `fruits`");

	while($row = $search->fetch()){
		// echo $row['id'] . ' ' . $row['name'] . "<br>";
		// print_r($row);
		if ($name == $row['name']) {
			alert("True");
			header("Location: index.php");
		}
	};
	

?>