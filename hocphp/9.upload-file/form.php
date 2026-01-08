<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="./uploads.php" method="post" enctype="multipart/form-data">
        <input type="file" name="image[]" multiple />
        <button>Upload</button>
    </form>
</body>

</html>