import { type PostMeta } from '@/lib/type';
import SingleBase from '@/components/base/SingleBase';
import Block from '@/components/ui/Block';

export const meta: PostMeta = {
  title: 'Tailwind@v4の設定方法',
  date: '2025.11.14',
  tags: ['Tailwind', 'メモ'],
};

const titleTxt = 'text-xl font-bold text-blue-600 mb-2';

export default function post251103() {
  return (
    <div>
      <SingleBase title={meta.title} date={meta.date} tags={meta.tags}></SingleBase>
      <article>
        <h2 className={titleTxt}>Tailwind v4のconfig設定</h2>
        <Block>
          Tailwind v4からcliを使うなら、@tailwindcss/cliもインストールが必要<br></br>
          また、tailwein.config.jsを使うなら明記エントリーポイントになるcssに下記の記述が必要
          <br></br>
          @config "パス/tailwind.config.js";<br></br>
          @import "tailwindcss";
        </Block>
      </article>
    </div>
  );
}
