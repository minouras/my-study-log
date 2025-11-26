import type { ComponentType } from 'react';

export default function Home() {
  // 記事ファイルを一括読み込み（同期）
  const modules = import.meta.glob<{
    default: ComponentType<any>;
  }>('./../posts/*.tsx', { eager: true });

  // ファイル名からIDを抽出し、一覧を作成
  const posts = Object.entries(modules).map(([path, mod]) => {
    const id = path.split('/').pop()?.replace('.tsx', '');
    return { id, component: mod.default };
  });

  return (
    <div class="space-y-4">
      <h1 class="text-2xl font-bold">記事一覧</h1>
      <ul class="space-y-2">
        {posts.map(({ id }) => (
          <li key={id}>
            <a href={`post/${id}`} class="text-blue-600 hover:underline">
              {id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
