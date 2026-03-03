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
- JavaScript (ES6+): bahasa pemrograman yang menjadi "otak" di balik interaksi website

# Penjelasan Program

* File index.html
    Halaman ini merupakan beranda utama untuk sistem manajemen PCB-KAL yang berfokus pada layanan cetak papan sirkuit atau PCB dan penjualan perangkat keras teknologi internet untuk segala. Tampilan situs menggunakan kerangka desain modern sehingga terlihat rapi dan nyaman diakses melalui ponsel maupun komputer. Bagian atas halaman dilengkapi dengan menu navigasi yang berisi tautan beranda, fitur pesanan cetak, tombol daftar keinginan, serta tombol untuk mengubah tema warna menjadi mode gelap.

    Di bawah bagian menu, terdapat judul besar yang menjelaskan identitas perusahaan sebagai penyedia komponen asli dan jasa pembuatan papan sirkuit presisi. Pengunjung kemudian disuguhkan dengan panel statistik yang menampilkan jumlah total produk, stok yang tersedia, dan kategori barang. Bagian utama halaman ini memajang berbagai produk unggulan seperti komputer mini, modul pengendali, serta bahan papan sirkuit polos lengkap dengan gambar, deskripsi singkat, sisa stok, dan harganya.

    Setiap kartu produk memiliki tombol untuk melakukan pembelian langsung atau memasukkan barang ke dalam daftar keinginan. Fitur daftar keinginan tersebut dapat dibuka melalui jendela kecil yang muncul di tengah layar untuk memantau barang yang sudah ditandai. Bagian paling bawah ditutup dengan keterangan hak cipta tahun dua ribu dua puluh enam. Secara keseluruhan, kode ini membangun antarmuka toko daring yang fungsional dan interaktif bagi para pecinta elektronika.

* File cetakPcb.html
    Halaman web ini menyediakan formulir khusus untuk memesan pembuatan papan sirkuit cetak atau PCB sesuai dengan desain keinginan pengguna. Antarmuka halaman ini dirancang secara profesional dengan navigasi yang menyertakan menu utama, daftar keinginan, serta tombol untuk mengganti tema tampilan menjadi gelap atau terang. Fokus utama halaman ini terletak pada kartu formulir di bagian tengah yang memungkinkan pelanggan memasukkan spesifikasi teknis untuk proyek mereka secara mendalam.

    Dalam formulir tersebut, pengguna dapat mencantumkan nama proyek atau berkas desain mereka serta memilih jumlah lapisan papan mulai dari satu hingga banyak lapisan. Tersedia juga kolom pengisian untuk menentukan dimensi lebar dan panjang papan dalam satuan milimeter serta jumlah kepingan yang ingin dipesan. Selain itu, pelanggan bebas memilih variasi warna pelindung papan seperti hijau, biru, merah, hitam, atau ungu, serta menentukan tingkat ketebalan bahan papan sirkuit yang diinginkan.

    Halaman ini juga dilengkapi dengan kolom catatan tambahan bagi teknisi produksi dan sebuah peringatan informasi mengenai sistem perhitungan harga otomatis. Terdapat tombol utama yang menonjol untuk mengirimkan data pesanan serta tombol navigasi untuk kembali ke halaman utama. Di bagian bawah, situs ditutup dengan kaki halaman yang mencantumkan identitas perusahaan sebagai penyedia manufaktur presisi tinggi. Secara keseluruhan, kode ini berfungsi untuk memudahkan proses pemesanan teknis secara daring dan terstruktur.

* File style.css
    ini merupakan kumpulan aturan desain atau gaya yang digunakan untuk mempercantik tampilan situs web PCB-KAL. Secara umum, kode ini mengatur agar halaman memiliki jenis tulisan yang modern serta warna latar belakang abu-abu terang yang bisa berubah menjadi gelap secara halus. Terdapat pengaturan khusus untuk bagian spanduk utama yang menggunakan gambar latar belakang dengan efek transparan hitam agar tulisan di atasnya tetap mudah dibaca.

    Bagian kartu produk diatur agar memiliki sudut yang membulat dan memberikan efek interaktif saat disentuh atau disorot oleh kursor. Jika kursor diletakkan di atas gambar produk, kartu akan sedikit terangkat dan gambar akan membesar secara perlahan untuk memberikan kesan dinamis. Begitu pula dengan kartu panel pantau yang menampilkan angka-angka statistik, semuanya didesain agar memiliki bayangan halus dan perubahan warna bingkai saat pengguna berinteraksi dengannya.

    Kode ini juga menyediakan pengaturan lengkap untuk mode malam yang secara otomatis mengubah warna latar belakang menjadi hitam pekat dan menyesuaikan warna teks serta kotak masukan menjadi lebih redup agar nyaman di mata. Selain itu, terdapat aturan responsif yang memastikan tampilan situs tetap rapi saat dibuka melalui perangkat dengan layar kecil seperti ponsel, di mana ukuran tulisan dan tinggi gambar akan menyesuaikan secara otomatis. Secara keseluruhan, kode ini berfungsi untuk memberikan pengalaman visual yang menarik dan fungsional bagi pengunjung situs.

* File script.js
     Didalam sini berisi logika utama atau otak di balik fungsi interaktif pada situs web PCB-KAL. Fungsi pertama yang dijalankan adalah pengatur tema warna, di mana sistem akan mengingat pilihan pengguna apakah ingin menggunakan mode terang atau gelap melalui penyimpanan lokal pada peramban. Jika tombol lampu ditekan, tampilan seluruh halaman akan berubah warna dan ikon tombol akan berganti secara otomatis.

    Bagian kedua dari kode ini mengelola daftar keinginan atau wishlist. Sistem ini bekerja dengan menyimpan data barang yang Anda pilih ke dalam memori sementara peramban. Setiap kali Anda menekan tombol wishlist pada suatu produk, sistem akan memeriksa apakah barang tersebut sudah ada di daftar atau belum guna menghindari penggandaan. Selain produk toko, formulir pesanan kustom papan sirkuit juga bisa disimpan ke dalam daftar keinginan ini lengkap dengan detail spesifikasi teknisnya.

    Selain mengelola daftar, kode ini juga menangani aksi pembelian produk secara sederhana. Saat tombol beli ditekan, sistem akan otomatis mengurangi angka stok yang tertera di layar dan memberikan pesan konfirmasi kepada pengguna. Terdapat juga fungsi untuk menghapus barang satu per satu dari daftar keinginan atau membersihkan seluruh daftar sekaligus melalui tombol hapus semua.

    Terakhir, tersedia fitur untuk mengosongkan kembali formulir pesanan kustom jika pengguna ingin memulai pengisian dari awal. Semua data yang ditampilkan pada lencana angka di bagian menu navigasi akan selalu diperbarui secara otomatis setiap kali ada perubahan data. Secara keseluruhan, skrip ini memastikan semua tombol dan formulir di situs web dapat berfungsi dengan baik dan memberikan tanggapan langsung kepada pengguna.