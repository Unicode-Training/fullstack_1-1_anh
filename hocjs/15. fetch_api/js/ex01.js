/*
Client (JavaScript) --> API (Application Programming Interface) --> Server

Client: 
- xhr
- fetch

fetch(url, options) --> Trả về 1 promise
*/

// fetch(`https://dummyjson.com/posts`)
//   .then((response) => {
//     //   console.log(response.json());
//     //response = http response
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const LIMIT = 5;
let currenPage = 1;
const query = {};
let sortBy = "id";
let order = "desc";
const renderPosts = async (posts) => {
  //Hàm này để xử lý giao diện
  const postListEl = document.querySelector("#post-list");
  const html = posts
    .map(
      (post) => `<div class="border-[#ddd] border-solid border p-3 mb-3">
          <h2 class="text-xl font-medium mb-3">${post.title}</h2>
          <p>
            ${post.body}
          </p>
          <button
            data-id="${post.id}"
            class="btn-view border border-[#ddd] block mt-3 px-5 py-1 cursor-pointer hover:bg-[green] hover:text-white rounded-full"
          >
            Xem chi tiết
          </button>
    </div>`
    )
    .join("");
  postListEl.innerHTML = html;

  //Event
  const btnList = document.querySelectorAll(".btn-view");
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal();
      const id = btn.dataset.id;
      getPost(id);
    });
  });
};
const getPost = async (id) => {
  //Call api https://dummyjson.com/posts/id
  //Hiển thị dữ liệu nhận được lên modal
  const modalEl = document.querySelector("#modal");
  const modalTitle = modalEl.querySelector(".modal-title");
  const modalBody = modalEl.querySelector(".modal-body");
  try {
    modalBody.innerHTML = `<h3 class="text-center text-2xl">Loading...</h3>`;
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    modalTitle.innerText = data.title;
    modalBody.innerHTML = `<p>${data.body}</p>`;
  } catch {
    modalBody.innerHTML = `<h3 class="text-center text-2xl">Đã có lỗi xảy ra</h3>`;
    modalTitle.innerText = "";
  }
};
const openModal = () => {
  const modalEl = document.querySelector("#modal");
  modalEl.innerHTML = `<div
          class="fixed top-0 left-0 right-0 bg-[#fff] max-w-[90%] border-[#ddd] border-solid border-[1px] mx-auto p-5 mt-[10%] rounded-md z-50"
        >
          <span
            class="btn-close fixed top-[5px] left-[5px] z-50 w-[30px] h-[30px] cursor-pointer hover:text-[red] bg-[#ffffff97] flex items-center justify-center rounded-full text-xl font-bold"
            >&times;</span
          >
          <h2 class="modal-title font-medium text-2xl border-b-[1px] border-[#ddd]"></h2>
          <div class="mt-3 modal-body">
          </div>
        </div>
        <div class="overlay fixed inset-0 bg-[#00000085] z-40"></div>`;

  const btnCloseEl = document.querySelector(".btn-close");
  const overlayEl = document.querySelector(".overlay");
  btnCloseEl.addEventListener("click", closeModal);
  overlayEl.addEventListener("click", closeModal);
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
};
const closeModal = () => {
  const modalEl = document.querySelector("#modal");
  const btnCloseEl = document.querySelector(".btn-close");
  const overlayEl = document.querySelector(".overlay");
  modalEl.innerHTML = "";

  btnCloseEl.removeEventListener("click", closeModal);
  overlayEl.removeEventListener("click", closeModal);
};
const renderPagination = (total) => {
  const paginationEl = document.querySelector("#pagination");
  const totalPages = Math.ceil(total / LIMIT);
  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="border px-3 py-1 cursor-pointer ${
      currenPage === i ? "bg-[green] text-white" : ""
    }">${i}</button>`;
  }
  paginationEl.innerHTML = html;

  const btnList = paginationEl.querySelectorAll("button");
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = +btn.innerText;
      currenPage = page;
      getPosts();
    });
  });
};
const getPosts = async () => {
  try {
    const keyword = query.search;
    const skip = (currenPage - 1) * LIMIT;
    let url = `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
    if (keyword) {
      url = `https://dummyjson.com/posts/search?q=${keyword}&limit=${LIMIT}&skip=${skip}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    renderPosts(data.posts);
    renderPagination(data.total);
    renderSort();
  } catch (error) {
    console.log(error);
  }
};
getPosts();

const searchEl = document.querySelector("#search");
//Kỹ thuật debounce
const debounce = (callback, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};
searchEl.addEventListener(
  "input",
  debounce((e) => {
    const value = e.target.value;
    query.search = value;
    getPosts();
  })
);

//Sắp xếp
const renderSort = () => {
  const sortEl = document.querySelector("#sort");
  sortEl.innerHTML = `<button
          class="border-[#ddd] border-[1px] block px-3 py-1 cursor-pointer ${
            order === "desc" ? "bg-[yellow]" : ""
          }"
           data-sort="desc"
        >
          Mới nhất
        </button>
        <button
          class="border-[#ddd] border-[1px] block px-3 py-1 cursor-pointer ${
            order === "asc" ? "bg-[yellow]" : ""
          }"
          data-sort="asc"
        >
          Cũ nhất
        </button>`;
  const btnList = sortEl.querySelectorAll("button");
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const sortOrder = btn.dataset.sort;
      order = sortOrder;
      getPosts();
    });
  });
};

//Thêm mới
const btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", () => {
  openAddModal();
  submitAddForm();
});

const openAddModal = () => {
  const modalEl = document.querySelector("#modal");
  modalEl.innerHTML = `<div
          class="fixed top-0 left-0 right-0 bg-[#fff] max-w-[90%] border-[#ddd] border-solid border-[1px] mx-auto p-5 mt-[10%] rounded-md z-50"
        >
          <span
            class="btn-close fixed top-[5px] left-[5px] z-50 w-[30px] h-[30px] cursor-pointer hover:text-[red] bg-[#ffffff97] flex items-center justify-center rounded-full text-xl font-bold"
            >&times;</span
          >
          <h2 class="modal-title font-medium text-2xl border-b-[1px] border-[#ddd]">Thêm bài viết</h2>
          <div class="mt-3 modal-body">
            <form>
              <div class="mb-3">
                <input type="text" 
                class="w-full py-2 px-3 border-[#ddd] border-solid border-[1px]"
                name="title"
                placeholder="Tiêu đề..." required/>
              </div>
              <div>
                <textarea
                class="w-full py-2 px-3 border-[#ddd] border-solid border-[1px]"
                placeholder="Nội dung..." 
                name="body" required></textarea>
              </div>
              <button class="px-3 py-1 bg-[green] text-white cursor-pointer">Lưu</button>
            </form>
          </div>
        </div>
        <div class="overlay fixed inset-0 bg-[#00000085] z-40"></div>`;

  const btnCloseEl = document.querySelector(".btn-close");
  const overlayEl = document.querySelector(".overlay");
  btnCloseEl.addEventListener("click", closeModal);
  overlayEl.addEventListener("click", closeModal);
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
};

const submitAddForm = () => {
  const modalFormEl = document.querySelector("#modal form");
  modalFormEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const body = formData.get("body");
    const newPost = await addPost({ title, body });
    if (newPost) {
      const postListEl = document.querySelector("#post-list");
      const postHtml = `<div class="border-[#ddd] border-solid border p-3 mb-3">
          <h2 class="text-xl font-medium mb-3">${newPost.title}</h2>
          <p>
            ${newPost.body}
          </p>
          <button
            data-id="${newPost.id}"
            class="btn-view border border-[#ddd] block mt-3 px-5 py-1 cursor-pointer hover:bg-[green] hover:text-white rounded-full"
          >
            Xem chi tiết
          </button>
    </div>`;

      postListEl.innerHTML = postHtml + postListEl.innerHTML;
      closeModal();
    }
  });
};

const addPost = async (postBody) => {
  const response = await fetch(`https://dummyjson.com/posts/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...postBody, userId: 5 }),
  });
  if (!response.ok) {
    return false;
  }
  const data = await response.json();
  return data;
};
