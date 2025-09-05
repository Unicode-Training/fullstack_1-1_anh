import { useEffect, useState } from "react";
import { debounce } from "../utils/utils";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showBody, setShowBody] = useState(null);
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const handleToggleBody = (id) => {
    if (id === showBody) {
      setShowBody(showBody ? null : id);
    } else {
      setShowBody(id);
    }
  };
  const handleSearch = debounce(async (e) => {
    const keyword = e.target.value;
    const response = await fetch(
      `https://dummyjson.com/posts/search?q=${keyword}`
    );
    const data = await response.json();
    setPosts(data.posts);
  });
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://dummyjson.com/posts/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        userId: 5,
      }),
    });
    const data = await response.json();
    setPosts([data, ...posts]);
  };
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`https://dummyjson.com/posts`);
      const data = await response.json();
      setPosts(data.posts);
      setLoading(false);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <form onSubmit={handleAdd}>
        <div>
          <label>Title</label> <br />
          <input
            type="text"
            name="title"
            placeholder="Title..."
            onChange={handleChangeValue}
            required
          />
        </div>
        <div>
          <label>Body</label> <br />
          <textarea
            placeholder="Body..."
            name="body"
            onChange={handleChangeValue}
            required
          ></textarea>
        </div>
        <button>Add</button>
      </form>
      <hr />
      <input
        type="search"
        placeholder="Nhập từ khóa..."
        onChange={handleSearch}
      />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            {showBody === post.id && <p>{post.body}</p>}
            <button onClick={() => handleToggleBody(post.id)}>
              {showBody === post.id ? "Thu gọn" : "Mở rộng"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
