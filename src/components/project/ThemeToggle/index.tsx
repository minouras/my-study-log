/*
 * ライド/ダークモード 切り替えボタン
 */

import { useState, useEffect } from 'preact/hooks';
import styles from './style.module.css';

export function ThemeToggle() {
  // テーマの状態管理。初期値は DOM (index.html) を直接見に行く
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light';
  });

  // 渡ってきたプロパティに応じて値を切り替える関数
  const applyTheme = (nextTheme: 'dark' | 'light') => {
    const root = document.documentElement;
    root.setAttribute('data-theme', nextTheme);

    if (nextTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('site-theme', nextTheme);
    setTheme(nextTheme);
  };

  // ボタンのイベントハンドラ
  const toggle = () => {
    applyTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggle} className={styles.toggleBtn}>
      <div className={styles.toggleBtn_slider}>
        <div className={`${styles.toggleBtn_slider_icon} ${theme === 'dark' ? styles.dark : ''}`}>
          <svg
            className={`${styles.toggleBtn_slider_icon_sun} ${theme === 'dark' ? styles.dark : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm7.07 3.93a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-8.07-1.07a1 1 0 0 1 1.414 0l.707.707A1 1 0 1 1 4.636 9.05l-.707-.707a1 1 0 0 1 0-1.414zM4 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm.636 5.95a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0zM12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm7.07-1.07a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414zM20 12a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z" />
          </svg>
          <svg
            className={`${styles.toggleBtn_slider_icon_moon} ${theme === 'dark' ? styles.dark : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
