import { type PostMeta } from '@/lib/type';
import ReactMarkdown from 'react-markdown';
import content from './251125.md?raw';
import SingleBase from '@/components/base/SingleBase';
import '@/components/style/markdown.css';

export const meta: PostMeta = {
  title: 'CJSとESMの違い',
  date: '2025.11.25',
  tags: ['js', 'CJS', 'ESM'],
};

export default function post251125() {
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
