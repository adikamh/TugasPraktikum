document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            themeBtn.innerHTML = '<i class="bi bi-sun"></i>';
        }

        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeBtn.innerHTML = isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
        });
    }

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
                        <button class="btn btn-sm btn-outline-danger remove-item" data-index="${idx}">
                            Hapus
                        </button>
                    `;
                } else {
                    li.innerHTML = `
                        <span>${item}</span>
                        <button class="btn btn-sm btn-outline-danger remove-item" data-index="${idx}">
                            Hapus
                        </button>
                    `;
                }
                container.appendChild(li);
            });
        }
    };

    document.querySelectorAll(".btn-wishlist").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const cardBody = e.target.closest(".card-body");
            if (!cardBody) return;
            
            const nameEl = cardBody.querySelector(".product-name");
            if (!nameEl) return;
            
            const name = nameEl.innerText;
            const items = JSON.parse(sessionStorage.getItem("wishlist")) || [];
            
            const isDuplicate = items.some(item => {
                if (typeof item === 'string') {
                    return item === name;
                }
                return false;
            });
            
            if (isDuplicate) {
                alert(`"${name}" sudah ada di wishlist!`);
                return;
            }
            
            items.push(name);
            sessionStorage.setItem("wishlist", JSON.stringify(items));
            updateWishlistUI();
            alert(name + " ditambahkan ke wishlist!");
        });
    });

    const formCetak = document.getElementById("form-cetak");
    if (formCetak) {
        formCetak.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const projectName = document.getElementById("projectName")?.value || "Tanpa Nama";
            const layerCount = document.getElementById("layerCount")?.value || "-";
            const lebar = document.getElementById("lebar")?.value || "0";
            const panjang = document.getElementById("panjang")?.value || "0";
            const jumlah = document.getElementById("jumlah")?.value || "1";
            const warna = document.getElementById("warna")?.value || "-";
            const ketebalan = document.getElementById("ketebalan")?.value || "-";
            
            if (!projectName || lebar === "0" || panjang === "0") {
                alert("Harap isi Nama Project, Lebar, dan Panjang dengan benar!");
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
                if (typeof item === 'object' && item !== null && item.type === 'pcb') {
                    return item.project === projectName && 
                           item.layer === layerCount && 
                           item.ukuran === `${lebar} x ${panjang} mm (${jumlah} pcs)` && 
                           item.warna === warna && 
                           item.ketebalan === ketebalan;
                }
                return false;
            });
            
            if (isDuplicate) {
                alert(`Project "${projectName}" dengan spesifikasi yang sama sudah ada di wishlist!`);
                return;
            }
            
            items.push(pcbItem);
            sessionStorage.setItem("wishlist", JSON.stringify(items));
            updateWishlistUI();
            alert(`Project "${projectName}" ditambahkan ke wishlist!`);
            
        });
    }

    const clearBtn = document.getElementById("clear-wishlist");
    if (clearBtn) {
        clearBtn.onclick = () => {
            if (confirm("Hapus semua item dari wishlist?")) {
                sessionStorage.removeItem("wishlist");
                updateWishlistUI();
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
                if (index !== null) {
                    window.removeItem(parseInt(index));
                }
            }
        });
    }

    document.querySelectorAll(".btn-buy").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const cardBody = e.target.closest(".card-body");
            if (!cardBody) return;
            
            const stockEl = cardBody.querySelector(".stock-count");
            if (!stockEl) return;
            
            let stock = parseInt(stockEl.innerText);
            if (stock > 0) {
                stockEl.innerText = --stock;
                alert("Pesanan Diterima!");
            } else {
                alert("Stok Habis!");
            }
        });
    });

    const resetFormBtn = document.getElementById("resetForm");
    if (resetFormBtn) {
        resetFormBtn.addEventListener("click", () => {
            if (confirm("Apakah Anda yakin ingin membersihkan semua field form?")) {
                document.getElementById("form-cetak").reset();
                if (document.getElementById("layerCount")) document.getElementById("layerCount").value = "Double Layer (2-Layer)";
                if (document.getElementById("warna")) document.getElementById("warna").value = "Hijau";
                if (document.getElementById("ketebalan")) document.getElementById("ketebalan").value = "1.6 mm";
                if (document.getElementById("jumlah")) document.getElementById("jumlah").value = "5";
            }
        });
    }

    updateWishlistUI();
});