<?php
session_start();
require_once 'config.php'; // Connects to Neon/PostgreSQL

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status'=>'error','message'=>'Invalid request']);
    exit;
}

$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';

if (empty($username) || empty($password)) {
    echo json_encode(['status'=>'error','message'=>'Please enter username and password']);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT id, username, email, password_hash, role FROM users WHERE username = :username LIMIT 1");
    $stmt->execute(['username'=>$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password_hash'])) {
        // Successful login
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['role'] = $user['role'];
        echo json_encode(['status'=>'success','message'=>'Login successful']);
    } else {
        echo json_encode(['status'=>'error','message'=>'Invalid username or password']);
    }
} catch (PDOException $e) {
    echo json_encode(['status'=>'error','message'=>'Database error: '.$e->getMessage()]);
}
