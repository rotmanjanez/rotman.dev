# Counter API (`count.php`)

Increments a counter each time someone runs `curl https://rotman.dev/sh | sh`.

## Setup

### 1. Config file

Create `/rotman.dev/config.php` on the server (one level above `httpdocs`):

```php
<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_database');
define('DB_USER', 'your_user');
define('DB_PASSWORD', 'your_password');
```

This file is outside the deploy path and won't be overwritten.

### 2. Database table

Connect to MySQL and run:

```sql
CREATE TABLE IF NOT EXISTS curl_counter (
    id INTEGER PRIMARY KEY DEFAULT 1,
    count INTEGER NOT NULL DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT IGNORE INTO curl_counter (id, count) VALUES (1, 0);
```

## Testing

```bash
curl https://rotman.dev/api/count.php
```

Each call increments and returns the current count.

## Deployment

The `api/` directory is deployed by GitHub Actions alongside the main site to `rotman.dev/httpdocs/api/`.
