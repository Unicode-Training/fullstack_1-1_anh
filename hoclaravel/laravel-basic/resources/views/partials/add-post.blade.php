<form method="POST" class="bg-white mb-3 border border-[#ddd] p-5 rounded-lg" action="/posts">
    <div class="mb-3">
        <label for="">Tiêu đề</label>
        <input name="title" type="text" class="outline-none w-full border border-[#ddd] px-5 py-1 rounded-md"
            placeholder="Tiêu đề...">
        @error('title')
            <span class="text-red-600">{{ $message }}</span>
        @enderror
    </div>
    <div class="mb-3">
        <label for="">Nội dung</label>
        <textarea name="content" class="outline-none w-full border border-[#ddd] px-5 py-1 rounded-md"
            placeholder="Nội dung..."></textarea>
        @error('content')
            <span class="text-red-600">{{ $message }}</span>
        @enderror
    </div>
    <button class="py-1 px-5 bg-green-800 text-white rounded-full cursor-pointer">Đăng</button>
    @csrf
</form>
