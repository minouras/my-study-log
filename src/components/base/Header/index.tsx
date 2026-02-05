import { useLocation } from 'preact-iso';
import { ThemeToggle } from '@/components/project/ThemeToggle';
import styles from './style.module.css';

export default function Header() {
  const { path } = useLocation();
  const BASE_URL = '/my-study-log';

  // アクティブ判定用ヘルパー
  const isActive = (targetPath: string) => {
    // TOPページのみ完全一致で判定（そうしないと全てにヒットするため）
    if (targetPath === `${BASE_URL}`) {
      return path === targetPath;
    }
    return path.startsWith(targetPath);
  };

  return (
    <header class="p-[3vw] flex justify-between items-center">
      <h1 class="text-xl font-bold ">
        <a href={`${BASE_URL}/`}>
          <i class="fa-solid fa-pencil text-2xl"></i>
        </a>
      </h1>
      <div class={'flex items-center gap-4'}>
        <nav class={'flex items-center gap-4'}>
          <a class={`${styles.nav_items} ${isActive(`${BASE_URL}`) ? 'active' : ''}`} href={`${BASE_URL}/`}>
            勉強ログ
          </a>
          <a class={`${styles.nav_items} ${isActive(`${BASE_URL}/blog`) ? 'active' : ''}`} href={`${BASE_URL}/blog/`}>
            ブログ
          </a>
          <a class={`${styles.nav_items} ${isActive(`${BASE_URL}/reference`) ? 'active' : ''}`} href={`${BASE_URL}/reference/`}>
            参考サイト
          </a>
        </nav>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
}
