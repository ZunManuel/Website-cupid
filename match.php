<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $interest = $_POST["interest"];
    echo "Nama: $name<br>Minat: $interest<br>";
}
?>
<form method="post" action="match.php">
    Nama: <input type="text" name="name"><br>
    Minat: <input type="text" name="interest"><br>
    <input type="submit" value="Cari Jodoh">
</form>
