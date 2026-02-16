<?php
header('Content-Type: text/plain');
header('Access-Control-Allow-Origin: *');

require_once dirname(__DIR__, 2) . '/config.php';

try {
    $pdo = new PDO(
        sprintf('mysql:host=%s;dbname=%s;charset=utf8', DB_HOST, DB_NAME),
        DB_USER,
        DB_PASSWORD
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->exec("
        INSERT INTO curl_counter (id, count, last_updated)
        VALUES (1, 1, NOW())
        ON DUPLICATE KEY UPDATE
            count = count + 1,
            last_updated = NOW()
    ");

    $row = $pdo->query("SELECT count FROM curl_counter WHERE id = 1")->fetch();
    echo $row ? $row['count'] : "???";
} catch (Exception $e) {
    error_log("Counter API error: " . $e->getMessage());
    echo "???";
}
