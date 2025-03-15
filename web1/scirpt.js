document.addEventListener("DOMContentLoaded", function () {   // Menangani tombol tambah ke keranjang
    const buttons = document.querySelectorAll(".tambah-ke-keranjang");
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                alert("Produk telah ditambahkan ke keranjang!");
            });
        });
    }

    // Menangani tombol beli sekarang
    const beliButtons = document.querySelectorAll(".beli-sekarang");
    if (beliButtons.length > 0) {
        beliButtons.forEach(button => {
            button.addEventListener("click", function () {
                window.location.href = "checkout.html";
            });
        });
    }

    // Menangani formulir kontak
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const nama = document.querySelector("input[type='text']").value;
            const email = document.querySelector("input[type='email']").value;
            const pesan = document.querySelector("textarea").value;
            
            if (nama && email && pesan) {
                const mailtoLink = `mailto:developer@example.com?subject=Pesan%20dari%20${encodeURIComponent(nama)}&body=${encodeURIComponent(pesan)}%20(Dari:%20${encodeURIComponent(email)})`;
                window.location.href = mailtoLink;
                alert("Pesan telah dikirim!");
                form.reset();
            } else {
                alert("Harap isi semua kolom sebelum mengirim pesan.");
            }
        });
    }
});