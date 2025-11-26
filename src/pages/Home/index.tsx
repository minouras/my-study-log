import type { ComponentType } from 'react';
import { type PostMeta } from '../../lib/type';
import BlogCard from '../../components/ui/BlogCard';

export default function Home() {
  // 記事ファイルを一括読み込み（同期）
  const modules = import.meta.glob<{
    default: ComponentType<any>;
    meta: PostMeta;
  }>('./../posts/*.tsx', { eager: true });

  // ファイル名からIDを抽出し、一覧を作成
  const posts = Object.entries(modules).map(([path, mod]) => {
    const id = path.split('/').pop()?.replace('.tsx', '');
    return { id, component: mod.default, meta: mod.meta };
  });

  return (
    <div class="space-y-4">
      <h1 class="text-2xl font-bold">記事一覧</h1>
      <ul class="space-y-2 grid grid-cols-1 min-md:grid-cols-4 gap-y-4 gap-x-4">
        {posts.map(({ id, meta }) => (
          <li key={id}>
            <a className="block" href={`post/${id}`} class="text-blue-600 hover:underline">
              <BlogCard {...meta}></BlogCard>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
