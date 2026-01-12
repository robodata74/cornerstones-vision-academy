<?php
require 'config.php';

$title = $_POST['title'];
$content = $_POST['content'];
$author = $_POST['author']; // Optional: validate against blogger emails

$stmt = $pdo->prepare("INSERT INTO articles (title, content, author) VALUES (:title, :content, :author)");
$stmt->execute([
    'title'=>$title,
    'content'=>$content,
    'author'=>$author
]);

echo json_encode(['status'=>'submitted']);
?>
