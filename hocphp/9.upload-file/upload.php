<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty($_FILES['image'])) {
        $allowTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
        if (in_array($_FILES['image']['type'], $allowTypes)) {
            //Cho phép upload
            $path = pathinfo($_FILES['image']['name']);
            $ext = $path['extension'];
            $newFile = uniqid() . '.' . $ext;
            $upload = move_uploaded_file($_FILES['image']['tmp_name'], './uploads/' . $newFile);
            if ($upload) {
                echo 'Upload thành công';
            } else {
                echo 'Upload thất bại';
            }
        } else {
            echo 'Định dạng file không cho phép';
        }
    }
}
