<?php
session_start();
require_once 'config.php';
header('Content-Type: application/json');

// Only logged-in admins/chairman
if (!isset($_SESSION['user_id']) || !in_array($_SESSION['role'], ['admin','chairman'])) {
    echo json_encode(['status'=>'error','message'=>'Unauthorized']);
    exit;
}

$title = trim($_POST['title'] ?? '');
$content = trim($_POST['content'] ?? '');

if (!$title || !$content) {
    echo json_encode(['status'=>'error','message'=>'Title and content are required']);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO announcements (title, content, created_by, created_at) VALUES (:title, :content, :created_by, NOW())");
    $stmt->execute([
        'title' => $title,
        'content' => $content,
        'created_by' => $_SESSION['user_id']
    ]);

    echo json_encode(['status'=>'success','message'=>'Announcement created']);
} catch (PDOException $e) {
    echo json_encode(['status'=>'error','message'=>'Database error: '.$e->getMessage()]);
}
