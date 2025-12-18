import { type PostMeta } from '@/lib/type';
import SingleBase from '@/components/base/SingleBase';
import Block from '@/components/ui/Block';
import CodeBlock from '@/components/ui/CodeBlock';

export const meta: PostMeta = {
  title: 'Hono 勉強記録',
  date: '2025.12.17',
  tags: ['Hono', 'メモ', 'バックエンド', 'Node.js'],
};

const titleTxt = 'text-xl font-bold text-blue-600 mb-2';

export default function post251217() {
  return (
    <div>
      <SingleBase title={meta.title} date={meta.date} tags={meta.tags}></SingleBase>
      <article>
        <h2 className={titleTxt}>Honoとは</h2>
        <Block>
          <p>
            Hono（ホノ）は 「超軽量・高速な Web フレームワーク」 で、Node.js／Bun／Deno／Cloudflare
            Workers など マルチランタイム対応が最大の特徴です。<br></br>
            <a className={'text-blue-500 underline'} href="https://hono.dev/">
              公式ドキュメント
            </a>
            <br></br>
            <a className={'text-blue-500 underline'} href="https://hono-ja.pages.dev/">
              日本語ドキュメント
            </a>
          </p>
          <h3 className="mt-4 font-semibold text-lg">できること</h3>
          <ul className={'list-disc list-inside mt-1'}>
            <li>ルーティング</li>
            <li>コントローラ的処理</li>
            <li>認証（JWT / Middleware ベース）</li>
            <li>バリデーション（zod / valibot など）</li>
            <li>DB（Prisma / Drizzle / ORMs 全部使える）</li>
            <li>テンプレート（EJS / JSX / HTMX系も可）</li>
            <li>API サーバー</li>
            <li>SSR（Hono + React Server Components など）</li>
            <li>Cloudflare Workers など edge デプロイ</li>
          </ul>
          <h3 className="mt-4 font-semibold text-lg">最初からは無いもの</h3>
          <ul className={'list-disc list-inside mt-1'}>
            <li>ORM</li>
            <li>認証機能</li>
            <li>メール機能</li>
            <li>ジョブキュー</li>
            <li>モデル層</li>
            <li>管理画面（Django admin のような）</li>
          </ul>
        </Block>

        <div className={'py-8'}></div>

        <h2 className={titleTxt}>Hono + Prisma ハンズオン</h2>
        <Block>
          <h3 className="font-semibold text-lg">Hono + Prismaで作る「ミニ記事API」</h3>
          <ul className={'list-disc list-inside mt-1'}>
            <li>バックエンド：Hono</li>
            <li>フロントエンド：React</li>
            <li>DB：PostgleSQL</li>
            <li>ORM：Prisma</li>
          </ul>
        </Block>
        <h3 className="mt-7 font-semibold text-lg">メモ / 躓いた所</h3>
        <ul
          className={'mt-3 flex flex-col divide-y divide-gray-400 border-t-[1px] border-t-gray-400'}
        >
          <li className={'py-3'}>
            HTTPリクエストのレスポンスをテスト（可視化）するのにツールが必要。<br></br>
            例）Postman、Insomnia、EchoAPI for VSCode<br></br>
            今回はGPTおすすめでvscodeで使えるThunder
            Clientを使用。ただし有料版でないと制約が多いらしく、後々困ったら代替を検討する。
          </li>
          <li className={'py-3'}>
            <p>インスタンス化してルーティング</p>
            <CodeBlock language="typescript">
              {`const app = new Hono()
app.route('/', rootRoute)`}
            </CodeBlock>
          </li>
        </ul>
      </article>
    </div>
  );
}
