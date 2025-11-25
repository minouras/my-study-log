import ReactMarkdown from 'react-markdown';
import content from './251125.md?raw';
import SingleBase from '../../components/SingleBase';
import '../../components/style/markdown.css';

export default function post251125() {
  return (
    <div>
      <SingleBase
        title="CJSとESMの違い"
        date="2025.11.25"
        tags={['js', 'CJS', 'ESM', 'chatGPT']}
      ></SingleBase>
      <article>
        <div class="markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
