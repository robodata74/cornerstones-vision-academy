<?php
require 'config.php';

$action = $_POST['action'] ?? '';

if ($action === 'add') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $stmt = $pdo->prepare("INSERT INTO articles (title, content) VALUES (:title, :content)");
    $stmt->execute(['title'=>$title, 'content'=>$content]);
    echo json_encode(['status'=>'success']);
} elseif ($action === 'delete') {
    $id = $_POST['id'];
    $stmt = $pdo->prepare("DELETE FROM articles WHERE id=:id");
    $stmt->execute(['id'=>$id]);
    echo json_encode(['status'=>'deleted']);
} elseif ($action === 'edit') {
    $id = $_POST['id'];
    $title = $_POST['title'];
    $content = $_POST['content'];
    $stmt = $pdo->prepare("UPDATE articles SET title=:title, content=:content WHERE id=:id");
    $stmt->execute(['id'=>$id,'title'=>$title,'content'=>$content]);
    echo json_encode(['status'=>'updated']);
} else {
    echo json_encode(['status'=>'unknown action']);
}
?>
