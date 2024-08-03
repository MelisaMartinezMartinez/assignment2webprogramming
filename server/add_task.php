<?php
include '../database/connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $priority = $_POST['priority'];
    $due_date = $_POST['due_date'];
    $status = $_POST['status'];
    $user_id = 1; // Assuming a logged-in user with id 1 for simplicity

    $stmt = $conn->prepare("INSERT INTO tasks (user_id, title, description, priority, due_date, status) VALUES (:user_id, :title, :description, :priority, :due_date, :status)");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':priority', $priority);
    $stmt->bindParam(':due_date', $due_date);
    $stmt->bindParam(':status', $status);

    if ($stmt->execute()) {
        echo "Task added successfully!";
    } else {
        echo "Error: " . $stmt->errorInfo()[2];
    }
}
?>
