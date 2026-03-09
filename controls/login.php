<?php
session_start();
if (isset($_SESSION['login'])) {
    header("Location: ../index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Electronics Store</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="login-wrapper">
        <div class="login-card card">
            <div class="card-body p-4">
                <div class="login-header">
                    <h2>Halo..</h2>
                    <p class="text-muted">Silahkan login ke akun Anda</p>
                </div>

                <?php if (isset($_GET['pesan']) && $_GET['pesan'] == 'gagal') : ?>
                    <div class="alert alert-danger alert-dismissible fade show border-0 shadow-sm" role="alert" style="border-radius: 10px;">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-exclamation-triangle-fill me-2"></i>
                            <div>
                                <strong>Login Gagal!</strong> Username atau password salah.
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                <?php endif; ?>

                <form action="login_process.php" method="POST">
                    <div class="mb-3">
                        <label class="form-label">Username</label>
                        <input type="text" name="username" class="form-control" 
                            value="<?php echo isset($_COOKIE['user_login']) ? $_COOKIE['user_login'] : ''; ?>" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <div class="input-group">
                            <input type="password" name="password" id="password" class="form-control" required>
                            <span class="input-group-text" id="togglePassword" style="cursor: pointer;">
                                <i class="bi bi-eye" id="eyeIcon"></i>
                            </span>
                        </div>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" name="remember" class="form-check-input" id="remember">
                        <label class="form-check-label" for="remember">Remember me</label>
                    </div>
                    <button type="submit" name="login" class="btn btn-login w-100">Login</button>
                </form>

                <div class="text-center mt-4 d-flex justify-content-center gap-2">
                    <a href="../index.php" class="btn btn-sm btn-outline-primary">
                        <i class="bi bi-house-door"></i> Kembali ke Beranda
                    </a>
                    <button id="theme-toggle" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-moon-stars"></i> Ganti Tema
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../script.js"></script>
</body>
</html>