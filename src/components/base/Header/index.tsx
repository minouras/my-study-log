import { ThemeToggle } from '../../project/ThemeToggle';

export default function Header() {
  return (
    <header class="shadow p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold ">
        <a href="/my-study-log/">Stuey log</a>
      </h1>
      <div>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
}
