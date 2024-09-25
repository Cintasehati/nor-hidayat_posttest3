// Ambil referensi elemen dari DOM
const form = document.getElementById('barangForm');
const namaBarangInput = document.getElementById('nama_barang');
const hargaInput = document.getElementById('harga');
const deskripsiInput = document.getElementById('deskripsi');
const barangList = document.getElementById('barang-list');

// Fungsi untuk memuat barang dari localStorage
function loadBarang() {
    const barang = JSON.parse(localStorage.getItem('barang')) || [];
    barangList.innerHTML = '';

    barang.forEach((item, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <strong>${item.nama_barang}</strong> - Rp${item.harga} <br>
            <p>${item.deskripsi}</p>
            <button onclick="deleteBarang(${index})">Hapus</button>
        `;
        barangList.appendChild(div);
    });
}

// Fungsi untuk menambah barang baru
function addBarang(event) {
    event.preventDefault(); // Mencegah halaman refresh

    const nama_barang = namaBarangInput.value;
    const harga = hargaInput.value;
    const deskripsi = deskripsiInput.value;

    const barang = JSON.parse(localStorage.getItem('barang')) || [];

    barang.push({ nama_barang, harga, deskripsi });
    localStorage.setItem('barang', JSON.stringify(barang));

    loadBarang();

    // Kosongkan form setelah submit
    form.reset();
}

// Fungsi untuk menghapus barang
function deleteBarang(index) {
    const barang = JSON.parse(localStorage.getItem('barang'));
    barang.splice(index, 1);
    localStorage.setItem('barang', JSON.stringify(barang));
    loadBarang();
}

// Event listener untuk menambahkan barang
form.addEventListener('submit', addBarang);

// Muat barang saat pertama kali halaman dibuka
loadBarang();