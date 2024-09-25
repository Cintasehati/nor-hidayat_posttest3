<?php include 'templates/header.php'; ?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penjualan Barang Bekas</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>Daftar Barang Bekas</h1>
        
        <!-- Form untuk menambah barang -->
        <form action="php/add.php" method="POST">
            <div class="form-group">
                <label for="nama_barang">Nama Barang:</label>
                <input type="text" id="nama_barang" name="nama_barang" placeholder="Nama Barang" required>
            </div>

            <div class="form-group">
                <label for="harga">Harga:</label>
                <input type="number" id="harga" name="harga" placeholder="Harga" required>
            </div>

            <div class="form-group">
                <label for="deskripsi">Deskripsi:</label>
                <textarea id="deskripsi" name="deskripsi" placeholder="Deskripsi Barang" required></textarea>
            </div>

            <button type="submit">Tambah Barang</button>
        </form>

        <!-- Daftar barang -->
        <h2>Barang Tersedia</h2>
        <div id="barang-list">
            <?php include 'php/read.php'; ?>
        </div>
    </div>
</body>
</html>

<?php include 'templates/footer.php'; ?>