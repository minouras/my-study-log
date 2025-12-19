import { type PostMeta } from '@/lib/type';
import SingleBase from '@/components/base/SingleBase';
import Block from '@/components/ui/Block';
import CodeBlock from '@/components/ui/CodeBlock';

export const meta: PostMeta = {
  title: 'Lenisでインナースクロールで躓いた話',
  date: '2025.12.19',
  tags: ['Lenis', 'css', 'overflow'],
};

const titleTxt = 'text-xl font-bold text-blue-600 mb-2';

export default function post251219() {
  return (
    <div>
      <SingleBase title={meta.title} date={meta.date} tags={meta.tags}></SingleBase>
      <article>
        <p class={'mb-8'}>
          Lenisの慣性スクロールとGSAPアニメを使っているサイトで、ハンバーガーメニューのメニュー内スクロールで躓いたので備忘録
        </p>
        <h2 className={titleTxt}>どこで躓いたか</h2>
        <Block>
          <p>
            ハンバーガーメニューが開いたとき、ボディにスクロールロックをかけて開閉メニュー内でだけoverflow:autoでスクロールが効くようにしようとした。
            <br></br>これは普段なら問題なく効く
          </p>
          <CodeBlock language="css">
            {`html.is-locked,
html.is-locked body {
	overflow: hidden;
}
.sp-gnav {
	// 略
	height: 100dvh;
	overflow-y: auto;
}`}
          </CodeBlock>
          <p className={'mt-5'}>
            Lenisがスクロールに関する制御権を握っている場合、cssによるスクロール制御はLenisに負ける。
            <br></br>その為この状態では、bodyの overflow:hidden
            が効かずbodyがスクロールしたり、Lenisの計算が狂ってメニューを開く時に確率で最上部に戻る等不具合が起こる。
          </p>
        </Block>

        <div className={'py-6'}></div>

        <h2 className={titleTxt}>どうやって直したか</h2>
        <Block>
          <p>メニューが開いている時はlenis.stop()でLenisの制御を止める。</p>
          <CodeBlock language="typescript">
            {`activate(): void {
	lenis.stop();
	if (SetGnav.root) {
      SetGnav.root.classList.add('is-locked', 'gnav-is-active');
    }
  }
deactivate(): void {
	lenis.start();
	if (SetGnav.root) {
      SetGnav.root.classList.remove('is-locked', 'gnav-is-active');
    }
  }
`}
          </CodeBlock>
          <p className={'mt-5'}>
            また、lenis.stop()には内部的にwheel / touch
            をグローバルに握ることがあり、lenis.stop()すると全てのスクロールイベントを止めてしまい、cssも相変わらず効かないままという可能性がある。
            <br></br>
            その為、lenis.stopの影響を与えたくない要素にlenisのオプションである除外データ属性を付与すると安心
          </p>
          <CodeBlock language="html">
            {`<nav class="sp-gnav" data-lenis-prevent>
	<div>略</div>
</nav>
						`}
          </CodeBlock>
        </Block>
      </article>
    </div>
  );
}
