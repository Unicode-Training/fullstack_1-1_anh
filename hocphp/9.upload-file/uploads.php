<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fileFilter = array_filter($_FILES['image']['name']);
    if (count($fileFilter) == 0) {
        echo 'Vui lòng chọn file';
    } else {
        foreach ($_FILES['image']['name'] as $key => $value) {
            $filename = $value;
            $tmpName = $_FILES['image']['tmp_name'][$key];
            if (!$tmpName) {
                continue;
            }
            $path = pathinfo($filename);
            $ext = $path['extension'];
            $newFile = md5(uniqid()) . '.' . $ext;
            $upload = move_uploaded_file($tmpName, './uploads/' . $newFile);
            if ($upload) {
                echo 'Đã upload file: ' . $filename . '<br/>';
            }
        }
    }
}
