// import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

type Props = {
  path?: string;
  id?: string;
};

// Viteのimport.meta.globでposts配下をまとめて登録
// → key: ファイルパス, value: 動的import関数
const postModules = import.meta.glob('../posts/*.tsx');

export default function Post({ id }: Props) {
  const [PostComponent, setPostComponent] = useState<preact.FunctionComponent | null>(null);

  useEffect(() => {
    if (!id) return;
    const key = `../posts/${id}.tsx`;
    const loader = postModules[key];

    if (loader) {
      loader().then((mod: any) => {
        setPostComponent(() => mod.default);
      });
    } else {
      // 該当記事が存在しない場合
      setPostComponent(() => () => <div>記事が見つかりません。</div>);
    }
  }, [id]);

  if (!id) return <div>記事IDが指定されていません。</div>;
  if (!PostComponent) return <div>読み込み中...</div>;

  return (
    <section className="px-[5%] pt-10">
      <PostComponent />
    </section>
  );
}
