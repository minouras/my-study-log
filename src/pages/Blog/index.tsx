import { useEffect, useState } from 'preact/hooks';
import type { ComponentType } from 'react';
import { type PostMeta } from '@/lib/type';
import BlogCard from '@/components/ui/BlogCard';
import Wrapper from '@/components/layout/Wrapper';

type Props = {
  id?: string;
};

const postModules = import.meta.glob('./posts/*.tsx');

export default function Blog({ id }: Props) {
  // 詳細表示用の状態
  const [PostComponent, setPostComponent] = useState<preact.FunctionComponent | null>(null);
  // 一覧表示用の記事リスト状態
  // 記事ファイルを一括読み込み（同期）
  const modules = import.meta.glob<{
    default: ComponentType<any>;
    meta: PostMeta;
  }>('./posts/*.tsx', { eager: true });

  // ファイル名からIDを抽出し、一覧を作成
  const posts = Object.entries(modules).map(([path, mod]) => {
    const id = path.split('/').pop()?.replace('.tsx', '');
    return { id, component: mod.default, meta: mod.meta };
  });

  // IDがある場合（詳細ページ）の処理
  useEffect(() => {
    if (!id) {
      setPostComponent(null);
      return;
    }

    // 詳細記事の動的読み込みロジック (元のPostコンポーネントのロジック)
    const key = `./posts/${id}.tsx`;
    const loader = postModules[key];

    if (loader) {
      loader().then((mod: any) => {
        setPostComponent(() => mod.default);
      });
    } else {
      setPostComponent(() => () => <div>記事が見つかりません。</div>);
    }
  }, [id]);

  // --- レンダリング部分 ---

  // 1. IDがない場合（一覧表示）
  if (!id) {
    return (
      <section className="px-[5%] pt-10">
        <h1 class="text-xl font-bold mb-4">ブログ一覧</h1>
        <p className={'mb-6'}>開発メモとしてのブログ（備忘録）</p>
        <ul class="space-y-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-4">
          {posts.map(({ id, meta }) => (
            <li key={id} className="block h-full">
              <a className="block h-full hover:opacity-70 transition-all" href={`${id}`} class="text-blue-600 hover:underline">
                <BlogCard {...meta}></BlogCard>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  // 2. IDがある場合（詳細表示）

  if (!PostComponent) return <div>読み込み中...</div>;

  return (
    <section className="px-[5%] pt-10">
      {/* 詳細コンポーネントの表示 */}
      <Wrapper>
        <PostComponent />
      </Wrapper>
    </section>
  );
}
