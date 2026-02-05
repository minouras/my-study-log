import { useLocation } from 'preact-iso';
import { ThemeToggle } from '@/components/project/ThemeToggle';
import styles from './style.module.css';

export default function Header() {
  const location = useLocation();

  return (
    <header class="p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold ">
        <a href="/my-study-log/">Study log</a>
      </h1>
      <div class={'flex items-center gap-4'}>
        <nav class={'flex items-center gap-4'}>
          <a class={styles.nav_items} href="/my-study-log/">
            勉強ログ
          </a>
          <a class={styles.nav_items} href="/my-study-log/blog/">
            ブログ
          </a>
          <a class={styles.nav_items} href="/my-study-log/reference/">
            参考サイト
          </a>
        </nav>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
}
