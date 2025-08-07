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
            class="border border-[#ddd] block mt-3 px-5 py-1 cursor-pointer hover:bg-[green] hover:text-white rounded-full"
          >
            Xem chi tiết
          </button>
    </div>`
    )
    .join("");
  postListEl.innerHTML = html;
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
const getPosts = async (keyword = "") => {
  try {
    const skip = (currenPage - 1) * LIMIT;
    let url = `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`;
    if (keyword) {
      url = `https://dummyjson.com/posts/search?q=${keyword}&limit=${LIMIT}&skip=${skip}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    console.log(data);

    renderPosts(data.posts);
    renderPagination(data.total);
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
    getPosts(value);
  })
);
