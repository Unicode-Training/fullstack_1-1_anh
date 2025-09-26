import { useAuthStore } from "../store";
export default function About() {
  const { user, updateUser } = useAuthStore();
  return (
    <div>
      <h1>About</h1>
      <h2>{user.name}</h2>
      <button onClick={updateUser}>Update User</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt commodi
        molestiae, quia blanditiis similique quod quisquam accusantium
        reiciendis consequuntur quasi, modi inventore sit doloribus beatae
        possimus. Adipisci eaque beatae eligendi.
      </p>
    </div>
  );
}
