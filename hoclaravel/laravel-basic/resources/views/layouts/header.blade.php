<header class="flex justify-between">
    <h1>Unicode</h1>
    <div class="flex gap-3">
        @if (auth()->check())
            <span>Chào: {{ auth()?->user()?->name }}</span>
            <a href="/logout" class="js-logout">Đăng xuất</a>
            <form class="logout-form" method="post">
                @csrf
            </form>
        @else
            <a href="/login">Đăng nhập</a>
        @endif
    </div>
</header>
