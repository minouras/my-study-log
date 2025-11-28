import { ThemeToggle } from '../../project/ThemeToggle';

export default function Header() {
  return (
    <header class="shadow p-4 flex justify-between">
      <h1 class="text-xl font-bold text-blue-600">
        <a href="/my-study-log/">勉強ログ</a>
      </h1>
      <div>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
}
