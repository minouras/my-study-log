import { type PostMeta } from '../../lib/type';
import ReactMarkdown from 'react-markdown';
import content from './2512172.md?raw';
import SingleBase from '../../components/base/SingleBase';
import '../../components/style/markdown.css';

export const meta: PostMeta = {
  title: 'PHPでのモジュールファイル読み込み',
  date: '2025.12.16',
  tags: ['Hono', 'Honoインスタンス', 'プロパティ'],
};

export default function post2512172() {
  return (
    <div>
      <SingleBase title={meta.title} date={meta.date} tags={meta.tags}></SingleBase>
      <article>
        <p>chatGPTより</p>
        <div class="markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
