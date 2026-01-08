import { type PostMeta } from '@/lib/type';
import SingleBase from '@/components/base/SingleBase';
import Block from '@/components/ui/Block';
import CodeBlock from '@/components/ui/CodeBlock';

export const meta: PostMeta = {
  title: 'Tailwindでレスポンシブ書く時の気づき',
  date: '2026.01.08',
  tags: ['Tailwind', 'メディアクエリ', 'レスポンシブ'],
};

const titleTxt = 'text-xl font-bold text-blue-600 mb-2';

export default function post251219() {
  return (
    <div>
      <SingleBase title={meta.title} date={meta.date} tags={meta.tags}></SingleBase>
      <article>
        <h2 className={titleTxt}>従来cssでのメディアクエリの書き方</h2>
        <Block>
          <p>
            メディアクエリ"max-width,
            min-width"は「以上、以下」なので、値を二つ用意しないといけなかった
          </p>
          <CodeBlock language="css">
            {`:root{
	--breakpoint-min-md: 767px;
	--breakpoint-max-md: 768px;
}

@media (max-width: 767px) {/*スマホの時のstyle*/}
@media (min-width: 768px) {/*PCの時のstyle*/}
`}
          </CodeBlock>
        </Block>

        <div className={'py-6'}></div>

        <h2 className={titleTxt}>Tailwindでレスポンシブするとき</h2>
        <Block>
          <p>
            Tailwind のブレークポイントは内部的にこうなっている
            <br />
            md: → min-width: 768px
            <br />
            max-md: → max-width: 767.98px
            <br />
            なのでブレークポイント（スマホファースト）1個で切り替え表示できる
          </p>
          <CodeBlock language="css">
            {`@theme{
	--breakpoint-md: 767px;
}
`}
          </CodeBlock>
          <CodeBlock language="html">
            {`<p class="md:text-blue max-md:text-white">
	767pxで丁度色が切り替わる
</p>
`}
          </CodeBlock>
          <p>
            シンプルで良い〜。
            <br />
            ますますTailwindから離れられなくなる
          </p>
        </Block>

        <div className={'py-6'}></div>

        <h2 className={titleTxt}>⚠️注意</h2>
        <Block>
          <p>
            cssファイル内でtailwindの@theme内のブレークポイントを使ってメディアクエリを書く場合は、従来通りの考え方で書かないといけない。
            <br />
            混同しないように注意
          </p>
          <CodeBlock language="css">
            {`
/* ❌ 非推奨 (ブレークポイントが1px重なる) */
@media (max-width: theme(--breakpoint-md)) {}

/* ✅ 推奨（Tailwindと完全一致） */
@media (max-width: calc(theme(--breakpoint-md) - 1px)) {}
`}
          </CodeBlock>
        </Block>
      </article>
    </div>
  );
}
