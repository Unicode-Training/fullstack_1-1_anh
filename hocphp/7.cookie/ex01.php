<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
    echo $_COOKIE['message'] ?? "";
    setcookie('message', '', time(), '/');
    if (isset($_COOKIE['email_login'])) {
    ?>
        <h2>Chào bạn: <?php echo $_COOKIE['email_login']; ?></h2>
    <?php } else {
    ?>
        <form action="./ex02.php" method="post">
            <div>
                <label for="">Email</label>
                <input type="text" name="email" placeholder="Email...">
            </div>
            <div>
                <label for="">Password</label>
                <input type="password" name="password" placeholder="Password...">
            </div>
            <button>Submit</button>
        </form>
    <?php
    } ?>
</body>

</html>