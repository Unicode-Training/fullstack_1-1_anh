<p style="color: red">Chào bạn: <b>{{ $data->name }}</b></p>
<p>Gần đây bạn đã đăng nhập</p>
<p>Địa chỉ IP: {{ $info->ip() }}</p>
<p>Trình duyệt: {{ $info->userAgent() }}</p>
<p>Nếu không phải là bạn, vui lòng đổi mật khẩu</p>
<hr>
<footer style="text-align: center; font-style: italic">
    <p>Unicode Academy</p>
</footer>
