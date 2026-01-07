import { type PostMeta } from '@/lib/type';
import ReactMarkdown from 'react-markdown';
import content from './260107.md?raw';
import SingleBase from '@/components/base/SingleBase';
import '@/components/style/markdown.css';

export const meta: PostMeta = {
  title: 'DOMを扱う時の型',
  date: '2026.1.7',
  tags: ['Typescript', 'DOM', 'querySelector', '型'],
};

export default function post260107() {
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
