<?php
session_start();
require_once 'config.php';

// Only admin/chairman can view
if (!isset($_SESSION['role']) || !in_array($_SESSION['role'], ['admin', 'chairman'])) {
    http_response_code(403);
    exit;
}

$stmt = $pdo->query("SELECT * FROM announcements ORDER BY created_at DESC");
$announcements = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($announcements);
?>
