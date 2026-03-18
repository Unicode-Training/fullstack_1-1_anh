# Migration

## Tạo file migration

php artisan make:migration ten-file-migration

Ví dụ:

php artisan make:migration create_products_table

## Chạy file migrate

php artisan migrate

Chạy khôi phục lại phiên bản trước

php artisan migrate:rollback

# Seeder

## Tạo file seeder

php artisan make:seeder TenClassSeeder

Ví dụ:

php artisan make:seeder PostSeeder

## Chạy seeder

php artisan db:seed --class TenClassSeeder
