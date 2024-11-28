// Fungsi untuk menghitung kecocokan
function calculateCompatibility() {
    const name1 = document.getElementById('your-name').value;
    const name2 = document.getElementById('partner-name').value;

    if (name1 && name2) {
        // Misalnya, kecocokan dihitung berdasarkan panjang nama (hanya contoh sederhana)
        let compatibility = (name1.length + name2.length) % 101; // Persentase dari 0 hingga 100

        // Update teks dan bar kecocokan
        document.getElementById('compatibility-text').style.display = 'block';
        document.getElementById('compatibility-value').innerText = compatibility + '%';
        document.getElementById('compatibility-bar').style.width = compatibility + '%';

        // Ubah warna teks sesuai dengan nilai kecocokan
        const compatibilityText = document.getElementById('compatibility-value');

        if (compatibility <= 20) {
            compatibilityText.classList.remove('compatibility-medium', 'compatibility-high');
            compatibilityText.classList.add('compatibility-low');
        } else if (compatibility <= 40) {
            compatibilityText.classList.remove('compatibility-low', 'compatibility-high');
            compatibilityText.classList.add('compatibility-medium');
        } else {
            compatibilityText.classList.remove('compatibility-low', 'compatibility-medium');
            compatibilityText.classList.add('compatibility-high');
        }
    } else {
        alert("Mohon masukkan nama Anda dan nama jodoh!");
    }
}
