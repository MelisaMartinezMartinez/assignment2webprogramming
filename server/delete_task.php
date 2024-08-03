<?php
include '../database/connection.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $stmt = $conn->prepare("DELETE FROM tasks WHERE id = :id");
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo "Task deleted successfully!";
    } else {
        echo "Error: " . $stmt->errorInfo()[2];
    }
}
?>
