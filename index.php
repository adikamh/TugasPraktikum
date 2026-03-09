<?php
session_start();

if (!isset($_SESSION['login'])) {
    if (isset($_COOKIE['user_login']) && isset($_COOKIE['user_key'])) {
        $user_login = $_COOKIE['user_login'];
        $user_key = $_COOKIE['user_key'];
    
        if ($user_key === hash('sha256', $user_login)) {
            $_SESSION['login'] = true;
            $_SESSION['user'] = $user_login;
        }
    }
}

$isLoggedIn = isset($_SESSION['login']) ? 'true' : 'false';
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PCB-KAL - Beranda</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body data-login="<?php echo $isLoggedIn; ?>">
    <div id="alert-placeholder"></div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.php"><i class="bi bi-cpu"></i> PCB-KAL</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link active" href="index.php">Beranda</a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="./pages/cetakPcb.php">Cetak PCB</a>
                    </li>
                    <li class="nav-item ms-lg-3">
                        <button class="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target="#wishlistModal">
                            <i class="bi bi-cart-fill"></i> Wishlist 
                            <span id="wishlist-badge" class="badge bg-danger rounded-pill">0</span>
                        </button>
                    </li>
                    <li class="nav-item ms-lg-2">
                        <button id="theme-toggle" class="btn btn-sm btn-outline-light">
                            <i class="bi bi-moon-stars"></i>
                        </button>
                    </li>
                    <li class="nav-item ms-lg-3">
                        <?php if (isset($_SESSION['login'])) : ?>
                            <div class="dropdown">
                                <button class="btn btn-success btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    <i class="bi bi-person-circle"></i> <?php echo $_SESSION['user']; ?>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item text-danger" href="controls/logout.php"><i class="bi bi-box-arrow-right"></i> Logout</a></li>
                                </ul>
                            </div>
                        <?php else : ?>
                            <a href="controls/login.php" class="btn btn-success btn-sm px-4">Login</a>
                        <?php endif; ?>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="hero text-center text-white py-5">
        <div class="container">
            <h1 class="display-4 fw-bold">PCB Manufaktur Sistem</h1>
            <p class="lead">Penyedia Main Board IoT Original dan Jasa Cetak PCB Presisi.</p>
        </div>
    </header>

    <div class="container mt-5">
        <div class="row text-center">
            <div class="col-md-4 mb-3">
                <div class="card dashboard-card">
                    <div class="card-body">
                        <h5>Total Produk</h5>
                        <h2>12</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card dashboard-card">
                    <div class="card-body">
                        <h5>Stok Tersedia</h5>
                        <h2>85</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card dashboard-card">
                    <div class="card-body">
                        <h5>Kategori</h5>
                        <h2>3</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container py-5">
        <h3 class="mb-5 text-center fw-bold">Daftar Produk</h3>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <img src="./assets/raspberry_pi.jpg" class="card-img-top" alt="Raspberry Pi">
                    <div class="card-body d-flex flex-column">
                        <h5 class="fw-bold product-name">Raspberry Pi 4 Model B</h5>
                        <p class="text-muted small">High-performance 64-bit quad-core processor.</p>
                        <p class="text-muted small">Stok: <span class="stock-count">10</span></p>
                        <div class="mt-auto">
                            <p class="fw-bold text-success">Rp 1.250.000</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-success w-100 btn-buy">Beli</button>
                                <button class="btn btn-outline-danger w-100 btn-wishlist">♥ Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <img src="./assets/nodemcu.jpg" class="card-img-top" alt="NodeMCU">
                    <div class="card-body d-flex flex-column">
                        <h5 class="fw-bold product-name">NodeMCU ESP8266</h5>
                        <p class="text-muted small">Open-source firmware and development kit for IoT.</p>
                        <p class="text-muted small">Stok: <span class="stock-count">25</span></p>
                        <div class="mt-auto">
                            <p class="fw-bold text-success">Rp 45.000</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-success w-100 btn-buy">Beli</button>
                                <button class="btn btn-outline-danger w-100 btn-wishlist">♥ Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <img src="./assets/arduino.jpg" class="card-img-top" alt="Arduino Uno">
                    <div class="card-body d-flex flex-column">
                        <h5 class="fw-bold product-name">Arduino Uno R3</h5>
                        <p class="text-muted small">The most used and documented board of the family.</p>
                        <p class="text-muted small">Stok: <span class="stock-count">15</span></p>
                        <div class="mt-auto">
                            <p class="fw-bold text-success">Rp 185.000</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-success w-100 btn-buy">Beli</button>
                                <button class="btn btn-outline-danger w-100 btn-wishlist">♥ Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <img src="./assets/esp32.jpg" class="card-img-top" alt="ESP32">
                    <div class="card-body d-flex flex-column">
                        <h5 class="fw-bold product-name">ESP32 DevKit V1</h5>
                        <p class="text-muted small">Integrated Wi-Fi and dual-mode Bluetooth.</p>
                        <p class="text-muted small">Stok: <span class="stock-count">20</span></p>
                        <div class="mt-auto">
                            <p class="fw-bold text-success">Rp 75.000</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-success w-100 btn-buy">Beli</button>
                                <button class="btn btn-outline-danger w-100 btn-wishlist">♥ Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <img src="./assets/pcb_polos.jpg" class="card-img-top" alt="PCB Polos">
                    <div class="card-body d-flex flex-column">
                        <h5 class="fw-bold product-name">PCB Polos FR4</h5>
                        <p class="text-muted small">High quality fiber glass single sided board.</p>
                        <p class="text-muted small">Stok: <span class="stock-count">50</span></p>
                        <div class="mt-auto">
                            <p class="fw-bold text-success">Rp 15.000</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-success w-100 btn-buy">Beli</button>
                                <button class="btn btn-outline-danger w-100 btn-wishlist">♥ Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <img src="./assets/mesin_pcb.jpg" class="card-img-top" alt="Jasa Cetak PCB">
                    <div class="card-body d-flex flex-column">
                        <h5 class="fw-bold product-name">Jasa Cetak PCB Custom</h5>
                        <p class="text-muted small">Produksi cepat menggunakan mesin CNC ukir presisi tinggi.</p>
                        <p class="text-muted small">Min. Pemesanan: 1 pcs</p>
                        <div class="mt-auto">
                            <p class="fw-bold text-success">Mulai Rp 500/cm²</p>
                            <a href="./pages/cetakPcb.php" class="btn btn-success w-100">Custom Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="wishlistModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold">Daftar Wishlist</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ul id="wishlist-container" class="list-group list-group-flush"></ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id="clear-wishlist">Hapus Semua</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>

    <footer class="bg-dark text-white text-center py-4">
        <p class="mb-0">&copy; 2026 PCB-KAL Management System.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>