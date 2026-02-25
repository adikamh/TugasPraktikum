# PCB-KAL Management System

PCB-KAL adalah platform web manajemen manufaktur PCB (Printed Circuit Board) yang menyediakan katalog produk mikrokontroler original dan jasa cetak PCB presisi tinggi menggunakan mesin CNC.

# Fitur Utama
- Katalog Produk IoT    : Menampilkan berbagai development board populer (Raspberry Pi, Arduino, ESP32, dll).
- Jasa Cetak Custom     : Layanan pesanan khusus untuk desain PCB Gerber pengguna.
- Layout Responsif      : Tampilan yang optimal di berbagai perangkat (Desktop, Tablet, dan Smartphone).
- UI Modern             : Menggunakan Bootstrap 5 dengan efek visual hover dan sistem grid yang simetris.

# Struktur Folder
Proyek ini disusun dengan struktur yang rapi sesuai standar pengembangan web:
PCB-KAL/
- assets/           : Folder gambar produk dan latar belakang
- css/              : Folder file stylesheet (style.css)
- index.html        : Halaman utama (Landing Page & Katalog)
- cetakPcb.html     : Halaman manajemen pesanan / form cetak

# Teknologi yg dipake
- HTML5: Struktur konten web.
- CSS3: Kustomisasi desain, efek hover, dan background overlay.
- Bootstrap 5: Framework CSS untuk grid sistem dan komponen UI responsif.
- Bootstrap Icons: Library ikon grafis bertema teknologi.

# Penjelasan Program

* File index.html
1. Bagian Head (Metadata & Library)
- Line 1-3: Deklarasi tipe dokumen HTML5, pembukaan tag HTML dengan bahasa Indonesia, dan tag head untuk menampung metadata.

- Line 4-6: Pengaturan karakter set (UTF-8) untuk mendukung berbagai simbol, pengaturan viewport agar website Responsive (nyaman dibuka di HP), dan pemberian judul tab browser "PCB-KAL".

- Line 7: Menghubungkan framework Bootstrap 5 melalui CDN untuk layout dan komponen instan.

- Line 8: Menghubungkan Bootstrap Icons untuk menampilkan ikon grafis (seperti ikon CPU).

- Line 9-11: Menghubungkan file CSS Eksternal (style.css) untuk kustomisasi desain buatan sendiri dan penutup bagian head.

2. Bagian Navigasi (Navbar)
- Line 12-13: Pembukaan tag body dan pembuatan Navbar dengan tema gelap (bg-dark) yang tetap berada di atas saat di-scroll (sticky-top).

- Line 14-15: Kontainer navbar dan pembuatan logo/brand "PCB-KAL" menggunakan ikon CPU dan teks tebal.

- Line 16-18: Pembuatan tombol "Hamburger" yang muncul secara otomatis saat website dibuka di layar HP (fitur responsif).

- Line 19-25: Daftar menu navigasi yang diletakkan di sebelah kanan (ms-auto), berisi link ke halaman "Beranda" (aktif) dan halaman "Cetak PCB".

3. Bagian Hero Section (Header)
- Line 28: Pembukaan tag header dengan class .hero untuk menampilkan gambar latar belakang dan padding vertikal (py-5).

- Line 29-32: Wadah teks utama yang berisi judul besar (display-4) "PCB Manufaktur Sistem" dan deskripsi singkat sebagai pengantar layanan.

4. Bagian Katalog Produk (Grid & Card)
- Line 35-36: Kontainer utama konten dengan jarak padding dan judul "Katalog Produk Utama" yang berada di tengah.

- Line 38: Inisialisasi sistem Grid Bootstrap dengan baris (row) dan jarak antar kartu yang lebar (g-5).

- Line 39-41: Pengaturan kolom untuk kartu produk (lebar 4 dari 12 kolom pada layar laptop) dan pembuatan Card dengan bayangan tipis (shadow-sm) tanpa border.

- Line 42: Menampilkan gambar produk dengan tinggi tetap 200px dan object-fit: cover agar gambar tidak gepeng.

- Line 43-46: Pembukaan body kartu menggunakan Flexbox (d-flex flex-column) agar konten di dalamnya bisa diatur secara vertikal. Berisi judul produk dan deskripsi singkat.

- Line 47-50: Penggunaan mt-auto untuk mendorong harga dan tombol ke posisi paling bawah secara otomatis agar Simetris dengan kartu lainnya.

- Line 51-54: Penutup kartu dan kolom produk pertama.

- Line 56-113: Pengulangan struktur kartu yang sama untuk produk NodeMCU, Arduino, ESP32, PCB Polos, dan Jasa Cetak PCB (total 6 produk).

5. Bagian Footer & Script
- Line 117-119: Pembuatan Footer dengan latar belakang gelap, teks putih, dan informasi hak cipta (copyright) 2026.

- Line 121: Menghubungkan file JavaScript Bootstrap agar fitur interaktif (seperti menu navigasi mobile) dapat berfungsi.

- Line 122-123: Penutup tag body dan html.

* File cetakPcb.html
1. Bagian Head & Konfigurasi (Line 1-11)
- Line 1-3: Inisialisasi dokumen HTML5, pengaturan bahasa (Indonesia), dan pembukaan elemen head.

- Line 4-6: Pengaturan meta charset untuk pengkodean karakter, meta viewport agar tampilan Responsif di layar ponsel, dan penulisan judul halaman pada tab browser.

- Line 7-8: Menghubungkan library eksternal via CDN, yaitu Bootstrap 5 (untuk layout/tombol) dan Bootstrap Icons (untuk ikon alat dan info).

- Line 9-11: Menghubungkan file CSS Eksternal buatan sendiri agar desain konsisten dengan halaman utama, serta penutup bagian head.

2. Navigasi (Line 12-23)
- Line 12-13: Pembukaan tag body dengan latar belakang abu-abu muda (bg-light) dan pembuatan bilah navigasi gelap (bg-dark).

- Line 14-15: Kontainer navbar dan pembuatan logo "PCB-KAL" yang menggunakan ikon CPU sebagai identitas visual.

- Line 16-21: Menu navigasi yang diletakkan di sebelah kanan (ms-auto), di mana menu "Cetak PCB" diberi class active untuk menandakan posisi halaman saat ini.
- Line 22-23: Penutup struktur navbar.

3. Layout Utama & Judul Form (Line 25-34)
- Line 25-27: Penggunaan kontainer Bootstrap dengan margin vertikal (my-5) dan sistem grid untuk memposisikan form di tengah layar laptop (justify-content-center).

- Line 28-30: Pembuatan elemen Card putih yang bersih tanpa border, dengan bayangan halus (shadow-sm) sebagai wadah utama form.

- Line 31-34: Bagian header di dalam kartu yang berisi judul besar berwarna hijau (text-success) dengan ikon perkakas, serta teks instruksi kecil untuk pengguna.

4. Input Data Teknis - Baris 1 & 2 (Line 36-61)
- Line 36-37: Pembukaan tag form dan baris pertama untuk input data.

- Line 38-41: Input teks untuk nama proyek atau file Gerber. Dilengkapi dengan atribut required agar form tidak bisa - dikirim jika kosong.

- Line 42-49: Input pilihan (select) untuk jumlah lapisan PCB (layer), mulai dari satu hingga banyak lapisan.

- Line 52-61: Baris kedua yang berisi tiga kolom input angka untuk dimensi Lebar, Panjang, dan Jumlah Pcs. Terdapat batas minimum min="10" untuk ukuran pcb demi validasi teknis.

5. Konfigurasi Material & Catatan (Line 63-83)
- Line 63-64: Pembukaan baris ketiga untuk detail material.

- Line 65-74: Pilihan dropdown untuk Warna Solder Mask (lapisan cat pelindung) dengan berbagai variasi warna industri.

- Line 75-81: Pilihan dropdown untuk menentukan Ketebalan Papan standar industri (0.8mm hingga 2.0mm).

- Line 84-87: Area teks (textarea) untuk pengguna memberikan instruksi khusus atau catatan tambahan kepada tim teknisi manufaktur.

6. Informasi Biaya & Tombol Aksi (Line 89-97)
- Line 89-91: Penggunaan komponen Alert Info berwarna biru sebagai pengingat otomatis bahwa harga bersifat kalkulatif berdasarkan luas area pcb.

- Line 93-97: Bagian akhir form yang berisi tombol submit besar berwarna hijau (btn-lg) dan tombol sekunder untuk membatalkan serta kembali ke halaman dashboard utama.

7. Footer & Script (Line 101-105)
- Line 101-103: Bagian kaki halaman (footer) dengan desain gelap yang mencantumkan hak cipta tahun 2026.

- Line 105-107: Pemanggilan JavaScript Bootstrap untuk mendukung interaksi elemen, serta penutup dokumen HTML.

* File tyle.css
1. Pengaturan Dasar & Tipografi (Line 1-5)
- Line 1-5: Mengatur tampilan dasar seluruh halaman (body). Menggunakan font 'Segoe UI' agar terlihat modern dan profesional. background-color disetel abu-abu sangat muda agar mata tidak cepat lelah, dan warna teks utama disetel abu-abu gelap (#333) untuk kontras yang baik.

2. Navigasi & Hero Section (Line 7-23)
- Line 7-9: Memberikan efek bayangan halus (box-shadow) pada Navbar agar terlihat terpisah dari konten saat pengguna melakukan scrolling.

- Line 11-20: Mengatur area Hero (header utama). Di sini digunakan teknik linear-gradient untuk menumpuk warna hitam transparan di atas gambar background.png. Ini berfungsi sebagai overlay agar teks tetap terbaca jelas. Properti display: flex digunakan untuk memastikan konten teks berada tepat di tengah area header.

- Line 22-25: Menambahkan efek bayangan teks (text-shadow) pada judul utama agar lebih menonjol dan memberikan jarak antar huruf (letter-spacing) untuk kesan desain premium.

3. Desain Kartu Produk & Animasi (Line 27-40)
- Line 27-31: Mengatur tampilan Card produk. transition disiapkan agar saat ada perubahan (seperti hover), gerakannya halus. border-radius: 10px membuat sudut kartu membulat, dan overflow: hidden memastikan gambar di dalamnya tidak keluar dari sudut bulat tersebut.

- Line 33-36: Mengatur efek Hover (saat kursor di atas kartu). Kartu akan bergerak ke atas sejauh 10px (translateY) dan bayangannya menjadi lebih tebal. Ini memberikan pengalaman interaktif yang modern bagi pengguna.

- Line 38-40: Memberikan ruang napas (padding) di dalam badan kartu agar teks tidak menempel ke pinggir.

4. Tipografi Produk & Tombol (Line 42-59)
- Line 42-45: Mengatur ukuran font judul produk agar konsisten di angka 1.2rem dan memberikan jarak bawah agar tidak terlalu rapat dengan deskripsi.

- Line 47-52: Kustomisasi tombol Success. Warna hijau diubah menjadi hijau tua khas PCB (#2d5a27). Tombol dibuat lebih tebal dan diberikan efek transisi agar terasa responsif saat diklik.

- Line 54-57: Mengatur perilaku tombol saat disentuh kursor (hover). Warna hijau akan menjadi lebih gelap dan muncul bayangan di bawah tombol untuk memberikan efek kedalaman.

5. Form Interaktif & Footer (Line 61-68)
- Line 61-64: Mengatur tampilan Input dan Select saat sedang diketik (focus). Garis pinggir dan bayangan akan berubah menjadi hijau tua. Ini membantu pengguna mengetahui bagian mana yang sedang mereka isi (UX yang baik).

- Line 66-68: Memberikan aksen garis hijau tua di bagian atas Footer untuk mempertegas batas akhir halaman dan menjaga konsistensi identitas warna brand PCB-KAL.
