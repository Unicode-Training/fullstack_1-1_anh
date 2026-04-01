import { Link, Outlet } from "react-router-dom";
export default function MainLayout() {
    return (
        <div className="max-w-[1200px] mx-auto">
            <header className="flex justify-between py-3">
                <h1 className="text-3xl font-bold">Unicode</h1>
                <ul className="flex gap-3">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/products"}>Products</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Copyright &copy; 2026 Unicode Academy</p>
            </footer>
        </div>
    );
}
