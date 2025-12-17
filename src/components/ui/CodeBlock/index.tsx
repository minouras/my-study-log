import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  language?: string;
  children: string;
};

export default function CodeBlock(props: Props) {
  return (
    <SyntaxHighlighter language={props.language} style={vscDarkPlus}>
      {props.children}
    </SyntaxHighlighter>
  );
}
