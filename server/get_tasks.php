<?php
include '../database/connection.php';

$stmt = $conn->prepare("SELECT * FROM tasks WHERE user_id = 1"); // Assuming a logged-in user with id 1 for simplicity
$stmt->execute();
$tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($tasks);
?>
