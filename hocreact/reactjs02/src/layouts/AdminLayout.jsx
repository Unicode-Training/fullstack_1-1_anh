import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <header>
        <h1>ADMIN HEADER</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>ADMIN FOOTER</h1>
      </footer>
    </div>
  );
}
