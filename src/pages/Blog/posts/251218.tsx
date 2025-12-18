import { type PostMeta } from '@/lib/type';
import SingleBase from '@/components/base/SingleBase';
import Block from '@/components/ui/Block';

export const meta: PostMeta = {
  title: 'AstroのTailwind をv3 → v4へ',
  date: '2025.12.18',
  tags: ['Astro', 'Tailwind', 'アップデート'],
};

const titleTxt = 'text-xl font-bold text-blue-600 mb-2';

export default function post251103() {
  return (
    <div>
      <SingleBase title={meta.title} date={meta.date} tags={meta.tags}></SingleBase>
      <article>
        <p class={'mb-8'}>
          いつもweb制作に使っているAstroテンプレートのTailwindをv4へバージョンアップした。<br></br>
          それに伴い、styleの構造と書き方にも変更が発生した。
        </p>
        <h2 className={titleTxt}>プラグイン(package.json)の変更</h2>
        <Block>
          <p>
            <a
              className={'text-blue-500'}
              href="https://docs.astro.build/en/guides/integrations-guide/tailwind/"
            >
              公式ドキュメント
            </a>
            が↓を推奨。
          </p>
          <p className={'mb-3'}>astrojs/tailwind → tailwindcss/vite</p>
          <p>以下のプラグインもv4で不要になるので削除</p>
          <ul>
            <li>container-queries</li>
            <li>tailwindcss-animate</li>
          </ul>
        </Block>

        <div className={'py-6'}></div>

        <h2 className={titleTxt}>tailwind.config.cjs削除</h2>
        <Block>
          <p>
            Tailwind v4
            で書き方がcssファイル寄りになり、tailwind.configは基本的に書かない方針となった。
          </p>
          <p>
            本テンプレートもそれに倣ってtailwind.configは削除。<br></br>
            これまでconfigに書いていたthemeの変数はcssファイルの中に@themeで書く。
          </p>
        </Block>

        <div className={'py-6'}></div>
        <h2 className={titleTxt}>cssファイルの書き方変更</h2>
        <Block>
          <p>
            astrojs/tailwindをやめたので、importは自前で書くことに。<br></br>
            styles/style.cssをエントリーポイントとして、Layout.astroで読み込んでいる。
          </p>
          <p className={'mt-3'}>
            【style.cssの内容】<br></br>
          </p>
          <ul>
            <li>・Tailwind読み込みとテーマ変数定義</li>
            <li>・css変数定義</li>
            <li>・モジュールcssファイルの読み込み</li>
          </ul>
        </Block>
      </article>
    </div>
  );
}
