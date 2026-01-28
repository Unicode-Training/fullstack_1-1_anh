<header class="flex justify-between">
    <h1>Unicode</h1>
    <div class="flex gap-3">
        @if (auth()->check())
            <span>Chào: {{ auth()?->user()?->name }}</span>
            <a href="/logout">Đăng xuất</a>
        @else
            <a href="/login">Đăng nhập</a>
        @endif
    </div>
</header>
