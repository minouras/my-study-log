import { type PostMeta } from '@/lib/type';
import SingleBase from '@/components/base/SingleBase';
import Block from '@/components/ui/Block';
import ReactMarkdown from 'react-markdown';
import content from './260115.md?raw';
import '@/components/style/markdown.css';

export const meta: PostMeta = {
  title: 'RDB vs NoSQL(スキーマレス)',
  date: '2026.01.15',
  tags: ['バックエンド', 'DB', 'RDB', 'NoSQL'],
};

export default function post251219() {
  return (
    <div>
      <SingleBase title={meta.title} date={meta.date} tags={meta.tags}></SingleBase>
      <article>
        <h2 class="text-lg font-bold">経緯</h2>
        <Block>
          <p>
            Hono + Prisma + sqlite
            でのバックエンド開発練習中、DBの中にデータがある状態で必須フィールドを追加してマイグレーションを実行したらエラーとなった。
            <br></br>
            RDBではスキーマ変更が厳格に管理されていて、既存データに対して空の状態の必須フィールドを追加することができないと知った。
            <br></br>
            そこで、空の必須フィールドを追加しても問題ないmicroCMSとかはどうなってるのかと疑問に思った。
          </p>
        </Block>
        <div class="markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
