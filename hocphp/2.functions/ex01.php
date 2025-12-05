<?php
// function getMessage($msg, $status = 'success')
// {
//     echo 'xin chào anh em <br/>';
//     echo $msg . '<br/>';
//     echo $status;
// }
// getMessage("Unicode", "error");

// function getTotal($a, $b)
// {
// return $a + $b;
// }
// echo getTotal(10, 20);
// var_dump(getTotal(10, 20));

// $data = 'Hoàng An';
// function doSomething()
// {
//     global $data;
//     echo $data . '<br/>';
//     $msg = 'Unicode';
//     $ahihi = function () use ($msg) {
//         global $data;
//         echo $data . '<br/>';
//         echo $msg;
//     };
//     $ahihi();
// }
// doSomething();

//Tham chiếu
// $a = 10;
// $b = &$a;
// $b = 20;

// echo $a . '<br/>';
// echo $b . '<br/>';

// $str = "Hoàng An";
// function addAfter(&$str, $newStr)
// {
//     $str .= $newStr;
// }

// addAfter($str, 'A');
// addAfter($str, 'B');
// addAfter($str, 'C');
// echo $str;

//Callback
// function display($callback)
// {
//     echo "display";
//     $callback();
// }

// display(function () {
//     echo "Xin chào";
// });

//Rest parameter
// function getMax(...$args)
// {
//     echo '<pre>';
//     print_r($args);
//     echo '</pre>';
// }
// getMax(1, 2, 3, 4, 5, 6);
