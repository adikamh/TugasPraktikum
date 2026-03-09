document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    const alertPlaceholder = document.getElementById("alert-placeholder");
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    const eyeIcon = document.querySelector('#eyeIcon');

    if (togglePassword && password && eyeIcon) {
        togglePassword.addEventListener('click', function () {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            eyeIcon.classList.toggle('bi-eye');
            eyeIcon.classList.toggle('bi-eye-slash');
        });
    }

    const showAlert = (message, type = 'danger') => {
        if (!alertPlaceholder) return;
        
        const titles = {
            danger: 'Danger Alert',
            success: 'Success Alert',
            warning: 'Warning Alert',
            info: 'Info Alert'
        };

        const icons = {
            danger: 'bi-x-lg',
            success: 'bi-check-lg',
            warning: 'bi-exclamation-lg',
            info: 'bi-info-lg'
        };

        const wrapper = document.createElement('div');
        wrapper.className = 'custom-alert-card';
        wrapper.innerHTML = `
            <div class="alert-icon-circle icon-${type}">
                <i class="bi ${icons[type]}"></i>
            </div>
            <div class="alert-title title-${type}">${titles[type]}</div>
            <div class="alert-message">${message}</div>
            <button class="btn-alert-ok icon-${type}" id="close-alert-btn">OK</button>
        `;

        alertPlaceholder.style.display = 'flex';
        alertPlaceholder.innerHTML = '';
        alertPlaceholder.append(wrapper);

        const closeBtn = wrapper.querySelector('#close-alert-btn');
        closeBtn.onclick = () => {
            alertPlaceholder.style.display = 'none';
            alertPlaceholder.innerHTML = '';
        };
    };

    const syncFormTheme = () => {
        const isDark = document.body.classList.contains("dark-mode");
        document.querySelectorAll('.form-control, .form-select, .input-group-text, .modal-content, .list-group-item').forEach(el => {
            if (isDark) {
                el.style.backgroundColor = "#2b2b2b";
                el.style.color = "white";
                el.style.borderColor = "#444";
            } else {
                el.style.backgroundColor = "";
                el.style.color = "";
                el.style.borderColor = "";
            }
        });
    };

    if (themeBtn) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            themeBtn.innerHTML = '<i class="bi bi-sun"></i>';
            syncFormTheme();
        }

        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeBtn.innerHTML = isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
            syncFormTheme();
        });
    }

    const checkAuth = (customMessage = "Silakan login terlebih dahulu untuk mengakses fitur ini.") => {
        const loggedIn = document.body.getAttribute("data-login") === "true";
        if (!loggedIn) {
            showAlert(customMessage, 'warning');
            return false;
        }
        return true;
    };

    window.checkLoginBeforeRedirect = (target) => {
        if (checkAuth("Anda harus login untuk melakukan pemesanan custom!")) {
            window.location.href = target;
        } else {
            setTimeout(() => {
                window.location.href = "controls/login.php";
            }, 2000);
        }
    };

    const badge = document.getElementById("wishlist-badge");
    const container = document.getElementById("wishlist-container");

    const updateWishlistUI = () => {
        const items = JSON.parse(sessionStorage.getItem("wishlist")) || [];
        if (badge) badge.innerText = items.length;
        if (container) {
            container.innerHTML = items.length ? "" : '<li class="list-group-item text-center text-muted">Wishlist masih kosong.</li>';
            items.forEach((item, idx) => {
                const li = document.createElement("li");
                li.className = "list-group-item d-flex justify-content-between align-items-center";
                if (typeof item === 'object' && item !== null) {
                    li.innerHTML = `
                        <div>
                            <strong>${item.project || 'PCB Custom'}</strong><br>
                            <small>${item.layer || '-'} | ${item.ukuran || '-'} | ${item.warna || '-'}</small>
                        </div>
                        <button class="btn btn-sm btn-outline-danger remove-item" data-index="${idx}">Hapus</button>
                    `;
                } else {
                    li.innerHTML = `<span>${item}</span><button class="btn btn-sm btn-outline-danger remove-item" data-index="${idx}">Hapus</button>`;
                }
                container.appendChild(li);
            });
        }
        syncFormTheme();
    };

    document.querySelectorAll(".btn-wishlist").forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (!checkAuth("Login diperlukan untuk menambah wishlist.")) return;
            const cardBody = e.target.closest(".card-body");
            if (!cardBody) return;
            const nameEl = cardBody.querySelector(".product-name");
            if (!nameEl) return;
            const name = nameEl.innerText;
            const items = JSON.parse(sessionStorage.getItem("wishlist")) || [];
            const isDuplicate = items.some(item => typeof item === 'string' && item === name);
            
            if (isDuplicate) {
                showAlert(`"${name}" sudah ada di wishlist!`, 'info');
                return;
            }
            items.push(name);
            sessionStorage.setItem("wishlist", JSON.stringify(items));
            updateWishlistUI();
            showAlert(`"${name}" berhasil ditambahkan!`, 'success');
        });
    });

    const formCetak = document.getElementById("form-cetak");
    if (formCetak) {
        formCetak.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!checkAuth("Maaf, Anda harus login terlebih dahulu untuk mengirim form produksi!")) return;
            
            const projectName = document.getElementById("projectName")?.value || "Tanpa Nama";
            const layerCount = document.getElementById("layerCount")?.value || "-";
            const lebar = document.getElementById("lebar")?.value || "0";
            const panjang = document.getElementById("panjang")?.value || "0";
            const jumlah = document.getElementById("jumlah")?.value || "1";
            const warna = document.getElementById("warna")?.value || "-";
            const ketebalan = document.getElementById("ketebalan")?.value || "-";
            
            if (!projectName || lebar === "0" || panjang === "0") {
                showAlert("Harap isi Nama Project, Lebar, dan Panjang dengan benar!", 'danger');
                return;
            }
            
            const pcbItem = {
                project: projectName,
                layer: layerCount,
                ukuran: `${lebar} x ${panjang} mm (${jumlah} pcs)`,
                warna: warna,
                ketebalan: ketebalan,
                type: "pcb"
            };
            
            const items = JSON.parse(sessionStorage.getItem("wishlist")) || [];
            const isDuplicate = items.some(item => {
                return typeof item === 'object' && item !== null && item.type === 'pcb' && item.project === projectName;
            });
            
            if (isDuplicate) {
                showAlert(`Project "${projectName}" sudah ada di wishlist!`, 'info');
                return;
            }
            
            items.push(pcbItem);
            sessionStorage.setItem("wishlist", JSON.stringify(items));
            updateWishlistUI();
            showAlert(`Project "${projectName}" ditambahkan ke wishlist!`, 'success');
        });
    }

    const clearBtn = document.getElementById("clear-wishlist");
    if (clearBtn) {
        clearBtn.onclick = () => {
            if (confirm("Hapus semua item dari wishlist?")) {
                sessionStorage.removeItem("wishlist");
                updateWishlistUI();
                showAlert("Wishlist telah dikosongkan.", 'info');
            }
        };
    }

    window.removeItem = (idx) => {
        const items = JSON.parse(sessionStorage.getItem("wishlist")) || [];
        items.splice(idx, 1);
        sessionStorage.setItem("wishlist", JSON.stringify(items));
        updateWishlistUI();
    };

    if (container) {
        container.addEventListener("click", (e) => {
            const removeBtn = e.target.closest(".remove-item");
            if (removeBtn) {
                const index = removeBtn.getAttribute("data-index");
                if (index !== null) window.removeItem(parseInt(index));
            }
        });
    }

    document.querySelectorAll(".btn-buy").forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (!checkAuth("Login diperlukan untuk membeli produk.")) return;
            const cardBody = e.target.closest(".card-body");
            if (!cardBody) return;
            const stockEl = cardBody.querySelector(".stock-count");
            if (!stockEl) return;
            
            let stock = parseInt(stockEl.innerText);
            if (stock > 0) {
                stockEl.innerText = --stock;
                showAlert("Pesanan Diterima! Silakan cek menu transaksi.", 'success');
            } else {
                showAlert("Maaf, stok produk ini telah habis!", 'danger');
            }
        });
    });

    const getCookie = (name) => {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    };

    const savedUser = getCookie('user_login');
    const usernameInput = document.querySelector('input[name="username"]');
    if (savedUser && usernameInput) {
        usernameInput.value = savedUser;
        const rememberCheckbox = document.getElementById('remember');
        if (rememberCheckbox) rememberCheckbox.checked = true;
    }

    const loginForm = document.querySelector('form[action="login_process.php"]') || document.querySelector('form[action="controls/login_process.php"]');
    if (loginForm) {
        loginForm.addEventListener("submit", function() {
            const btn = this.querySelector('.btn-login');
            if (btn) {
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = 'login';
                hiddenInput.value = 'true';
                this.appendChild(hiddenInput);
                
                btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Loading...';
            }
        });
    }

    const resetFormBtn = document.getElementById("resetForm");
    if (resetFormBtn) {
        resetFormBtn.addEventListener("click", () => {
            if (confirm("Apakah Anda yakin ingin membersihkan semua field form?")) {
                document.getElementById("form-cetak").reset();
                showAlert("Form telah direset.", 'info');
            }
        });
    }

    updateWishlistUI();
});