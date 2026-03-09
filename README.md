PCB-KAL Management System (Version 2.0 - Dynamic PHP)
PCB-KAL adalah platform web manajemen manufaktur PCB (Printed Circuit Board) yang menyediakan katalog produk mikrokontroler original dan jasa cetak PCB presisi tinggi. Pada versi terbaru ini, sistem telah ditingkatkan menjadi website dinamis dengan fitur autentikasi pengguna.

Fitur Utama
Sistem Autentikasi (New): Login dan Logout menggunakan manajemen $_SESSION PHP untuk keamanan akses halaman.

Remember Me (New): Fitur penyimpanan data login menggunakan Cookies dan hashing SHA256 agar user tidak perlu login berulang kali.

Katalog Produk IoT: Menampilkan berbagai development board populer (Raspberry Pi, Arduino, ESP32, dll).

Jasa Cetak Custom: Layanan pesanan khusus untuk desain PCB dengan validasi akses (hanya untuk user yang sudah login).

UI Modern & Responsif: Menggunakan Bootstrap 5 dengan dukungan Mode Gelap (Dark Mode) dan feedback visual menggunakan Bootstrap Alerts.

Struktur Folder
Proyek ini menggunakan struktur folder terorganisir untuk memisahkan logika backend dan tampilan:

Plaintext
PCB-KAL/
├── assets/             # Gambar produk dan icon
├── css/                # File stylesheet (style.css)
├── controls/           # Logika Backend (login_process.php, logout.php)
├── pages/              # Halaman fungsional (cetakPcb.php, login.php)
├── index.php           # Halaman Utama (Landing Page & Dashboard)
├── script.js           # Logika Frontend (Wishlist, Theme Toggle, Cookies handling)
└── README.md           # Dokumentasi proyek
Teknologi yang Digunakan
PHP: Bahasa sisi server untuk mengelola Session, Cookies, dan logika autentikasi.

HTML5 & CSS3: Struktur konten dan kustomisasi desain responsif.

Bootstrap 5: Framework UI untuk grid system, komponen navigasi, dan Alert.

JavaScript (ES6+): Mengelola interaksi client-side, Web Storage, dan manipulasi DOM.

Bootstrap Icons: Library ikon grafis untuk antarmuka pengguna.

Penjelasan Program Terbaru
1. Modul Autentikasi (login.php & login_process.php)
Sistem ini sekarang memiliki pintu masuk resmi. User harus memasukkan username dan password yang divalidasi di sisi server.

Session: Digunakan untuk menjaga status login user selama berpindah halaman.

Cookies: Jika opsi "Remember Me" dicentang, sistem menyimpan username secara aman di browser menggunakan enkripsi hash.

Bonus Feature: Jika login gagal, sistem tidak lagi menggunakan alert() JavaScript, melainkan menampilkan komponen Bootstrap Alert berwarna merah yang lebih elegan.

2. Halaman Utama Dinamis (index.php)
Halaman utama kini mendeteksi status user. Jika user sudah login (baik melalui session aktif atau cookie "Remember Me"), navbar akan berubah secara dinamis menampilkan nama pengguna dan tombol logout. Jika belum login, tombol login akan muncul sebagai gantinya.

3. Proteksi Halaman (cetakPcb.php)
Halaman pemesanan custom kini bersifat privat. Sistem akan mengecek variabel session; jika pengunjung mencoba mengakses halaman ini tanpa login, mereka akan diarahkan secara otomatis kembali ke halaman login.

4. Logout (logout.php)
Fitur ini berfungsi untuk membersihkan seluruh data session yang aktif dan menghapus jejak login di server, kemudian mengarahkan user kembali ke halaman beranda atau login dengan aman.

5. Logika Frontend (script.js & style.css)
Mode Gelap: Masih dipertahankan dengan kemampuan menyimpan preferensi user di localStorage.

Wishlist & Stok: Logika pengurangan stok produk dan penyimpanan daftar keinginan tetap berjalan secara interaktif di sisi client.

© 2026 PCB-KAL Management System - Adika Muhammad Haikal

Tips Penggunaan:
Pastikan kamu menjalankan file ini di lingkungan server lokal (seperti XAMPP atau Laragon) karena PHP tidak bisa berjalan jika hanya dibuka via klik file .html biasa.

Username default: haikal | Password default: 12345.