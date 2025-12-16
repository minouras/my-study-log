import { type PostMeta } from '../../lib/type';
import ReactMarkdown from 'react-markdown';
import content from './251216.md?raw';
import SingleBase from '../../components/base/SingleBase';
import '../../components/style/markdown.css';

export const meta: PostMeta = {
  title: 'PHPでのモジュールファイル読み込み',
  date: '2025.12.16',
  tags: ['PHP', 'require', 'use', '名前空間'],
};

export default function post251216() {
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
