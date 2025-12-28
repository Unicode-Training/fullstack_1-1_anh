<?php
//namespace
require './includes/User.php';
require './admin/User.php';
require './admin/Product.php';

use FrontEnd\User;
use Admin\User as AdminUser;

$user = new User;
$admin = new AdminUser;
