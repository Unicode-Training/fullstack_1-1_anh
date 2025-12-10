<?php
//Mảng tuần tự (index)
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

// //Mảng liên kết (Associative)
// $myArr2 = [
//     'name' => 'Hoàng An',
//     'email' => 'hoangan.web@gmail.com',
//     'age' => 33
// ];
// echo '<pre>';
// print_r($myArr2);
// echo '</pre>';

// //Mảng hỗn hợp (Mixed)
// $myArr3 = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'name' => 'Hoàng An',
//     'email' => 'hoangan.web@gmail.com',
//     'age' => 33
// ];
// echo '<pre>';
// print_r($myArr3);
// echo '</pre>';

//Thao tác
// $myArr = [];

//Thêm phần tử vào mảng
// $myArr[] = "Item 1";
// $myArr[] = "Item 2";
// $myArr[] = "Item 3";
// $myArr[] = "Item 4";
// $myArr['name'] = 'Hoàng An';
// $myArr['email'] = 'hoangan.web@gmail.com';

//Cập nhật giá trị phần tử mảng
// $myArr[1] = 'Item 2 - Update';

//Xóa phần tủ mảng
// unset($myArr[0]);
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//Duyệt qua từng phần tử
// foreach ($myArr as $value) {
//     echo $value . '<br/>';
// }

// foreach ($myArr as $key => $value) {
//     echo $key . ' - ' . $value . '<br/>';
// }

//Hàm xử lý mảng

//1. count(array): Trả về số lượng phần tử mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// echo count($myArr);

//2. Kiểm tra mảng
// $myArr = "";
// var_dump(is_array($myArr));

//3. Lấy phần tử đầu mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// echo reset($myArr);

//4. Lấy phần tử cuối mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// echo end($myArr);

//5. Tìm kiếm phần tử trong mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// var_dump(in_array('Item 21', $myArr));

//6. Cắt mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
// $newArr = array_slice($myArr, 1, 2);
// echo '<pre>';
// print_r($newArr);
// echo '</pre>';

//7. Reset key
// $myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'name' => 'Hoàng An'];
// unset($myArr[1]);
// $myArr = array_values($myArr);
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//8. array_map ==> Ánh xạ mảng
// $numbers = [1, 2, 3, 4, 5, 6];
// $newArr = array_map(function ($item) {
//     return $item * 2;
// }, $numbers);
// echo '<pre>';
// print_r($newArr);
// echo '</pre>';

//9. array_filter ==> Lọc mảng

// $numbers = [1, 2, 3, 4, 5, 6];
// $newArr = array_filter($numbers, function ($value) {
//     return $value % 2 == 0;
// });
// echo '<pre>';
// print_r($newArr);
// echo '</pre>';

//10. Gộp mảng
// $arr1 = [1, 2, 3];
// $arr2 = ['Item 1', 'Item 2', 'Item 3'];
// $newArr = array_merge($arr1, $arr2);
// echo '<pre>';
// print_r($newArr);
// echo '</pre>';

//11. Đảo ngược mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
// $newArr = array_reverse($myArr);
// echo '<pre>';
// print_r($newArr);
// echo '</pre>';

//12. Thêm phần tử vào cuối mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// array_push($myArr, 'a', 'b', 'c');
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//13. Thêm phần tử vào đầu mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// array_unshift($myArr, 'a', 'b', 'c');
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//14. Chuyển mảng thành chuỗi
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// echo implode('-', $myArr);

//15. Sắp xếp
$myArr = [
    'Blueberries',
    'Avocado',
    'Bananas',
    'Grapefruit',
    'Blackberries',
    'Cantaloupe',
    'Cherries',
    'Grapes',
    'Honeydew melon'
];
// sort($myArr);
//Trả về số dương --> Đổi chỗ
//Trả về số âm, 0 --> giữ nguyên
// usort($myArr, function ($a, $b) {
//     if ($a > $b) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//Bài tập: Sắp xếp mảng hoa quả trên theo thứ tự độ dài tăng dần
// usort($myArr, function ($a, $b) {
//     return strlen($a) - strlen($b);
// });
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//Mảng 2 chiều
$users = [
    [
        'name' => 'User 1',
        'email' => 'user1@gmail.com',
        'age' => 25
    ],
    [
        'name' => 'User 2',
        'email' => 'user2@gmail.com',
        'age' => 33
    ],
    [
        'name' => 'User 3',
        'email' => 'user3@gmail.com',
        'age' => 18
    ],
];

// $users[] = [
//     'name' => 'User 4',
//     'email' => 'user4@gmail.com'
// ];
// $users[3]['age'] = 33;

// echo '<pre>';
// print_r($users);
// echo '</pre>';

// foreach ($users as $value) {
//     echo $value['email'] . '<br/>';
// }

//Bài tập: hiển thị email của user có tuổi lớn nhất
// $userMax = $users[0];
// foreach ($users as $key => $value) {
//     if ($userMax['age'] < $value['age']) {
//         $userMax = $value;
//     }
// }
// echo $userMax['email'];

$myArr = [
    [
        'id' => 1,
        'name' => 'Item 1',
        'parent' => 0
    ],
    [
        'id' => 2,
        'name' => 'Item 2',
        'parent' => 0
    ],
    [
        'id' => 3,
        'name' => 'Item 3',
        'parent' => 0
    ],
    [
        'id' => 4,
        'name' => 'Item 2.1',
        'parent' => 2
    ],
    [
        'id' => 5,
        'name' => 'Item 2.2',
        'parent' => 2
    ],
    [
        'id' => 6,
        'name' => 'Item 1.1',
        'parent' => 1
    ],
    [
        'id' => 7,
        'name' => 'Item 1.2',
        'parent' => 1
    ]
];
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

/*
[
    [
        'id' => 1,
        'name' => 'Item 1',
    ],
    [
        'id' => 2,
        'name' => 'Item 2',
        'children' => [
            [
                'id' => 4,
                'name' => 'Item 2.1',
            ],
            [
                'id' => 5,
                'name' => 'Item 2.2',
            ]
        ]        
    ],
    [
        'id' => 3,
        'name' => 'Item 3',
    ]
    
]
*/

$newArr = [];
foreach ($myArr as $key => $value) {
    if ($value['parent'] == 0) {
        $newArr[$key] = [
            'id' => $value['id'],
            'name' => $value['name']
        ];
        foreach ($myArr as $subKey => $subValue) {
            if ($subValue['parent'] == $value['id']) {
                if (!isset($newArr[$key]['children'])) {
                    $newArr[$key]['children'] = [];
                }
                $newArr[$key]['children'][] = [
                    'id' => $subValue['id'],
                    'name' => $subValue['name']
                ];
            }
        }
    }
}
echo '<pre>';
print_r($newArr);
echo '</pre>';
