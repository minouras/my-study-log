import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock() {
  const codeString = `const app = new Hono()
app.route('/', rootRoute)`;

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {codeString}
    </SyntaxHighlighter>
  );
}
