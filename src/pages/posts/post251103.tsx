import SingleBase from "../../components/SingleBase."

export default function post251103() {
  return (
    <div>
      <SingleBase title="モードレスデザイン勉強会" date="2025.11.03" tags={['勉強会', 'デザイン']}></SingleBase>
      <article>
        <h2 className="font-semibold text-xl mb-2">勉強会の前提</h2>
        <div className="bg-blue-100">
          本勉強会は、上野学 著『<a className="text-blue-500" href="https://www.amazon.co.jp/%E3%83%A2%E3%83%BC%E3%83%89%E3%83%AC%E3%82%B9%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-%E6%84%8F%E5%91%B3%E7%A9%BA%E9%96%93%E3%81%AE%E5%89%B5%E9%80%A0-%E4%B8%8A%E9%87%8E-%E5%AD%A6/dp/4802512791" target="_blank">モードレスデザイン　意味空間の創造</a> 』
          を引用した勉強会です。<br/>書籍の内容自体を解説する勉強会ではなく、主催企業の（株）COTENが本書の内容をどの様にプロダクト開発に取り入れているかを主題として、
          ものづくりにおけるモードレスの考え方の重要性や今後の発展性を提唱する内容となっていました。<br/>勉強会の中でも何度か言及がありましたが、モードレスなデザインが必ずしも
          モーダリティなデザインより優れているという話ではなく、あくまで「プロジェクトの理想」をかなえる為にモーダリティでは実現できない事を実現するためにモーダレスな発想を取り入れてほしいという話でした。
        </div>

        <div className="py-5"></div>

        <h2 className="font-semibold text-xl mb-2">モーダリティ / モードレスなデザインとは何か</h2>
        <p>モーダリティなデザイン</p>
        <p className="bg-blue-100">
            文脈を制限したり不可逆にすることでユーザーのアクションを一本化してしまうデザイン。<br></br>
            ユーザーの自由度を奪いユーザー側をシステムにしてしまう。また、顕著な場合は製作側の意図やシステム上の仕様を過剰に押し付ける事で
            ユーザーにわかりづらさを生んでしまう。
        </p>

        <p>モーダレスなデザイン</p>
        <p className="bg-blue-100">
            直接操作する事で文脈を開き可逆的にする事でユーザーを自由にするデザイン<br></br>
            自由度がある事でユーザーが自ら考え創造性を行使できる。ユーザーの目的に合わせた使い方が可能になる。
        </p>

        <p>比較</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>モーダリティ</th>
              <th>モーダレス</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>向いているプロダクト</th>
              <td>
                <p>財務価値 ＞　意味価値　のプロジェクト</p>
                <p>ユーザーに自由度を与える必要のないもの（公的なシステム等）</p>
                <p>目的が一本化していていいもの</p>
              </td>
              <td>
                <p>意味価値 ＞　財務価値　のプロジェクト</p>
                <p>ユーザーに創造の余地を残し、使いこんでもらいたいもの</p>
                <p>さまざまな目的を持ったユーザーに解決の手法を与えるもの</p>
              </td>
            </tr>
            <tr>
              <th>コスト</th>
              <td>
                すでにある程度雛形や前例があるので開発コストが低い。<br></br>
                雛形に当て嵌めた設計となるため、初手の目標・意義設定をある程度省ける。
              </td>
              <td>
                ゼロベースからの開発になる為コストが高い。<br></br>
                まずは目標や方向性の決定から詰めていかないと設計もできないので時間がかかる。
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-semibold text-xl mb-2">UIにおけるモードレス</h2>

        <h2 className="font-semibold text-xl mb-2">プロダクト開発におけるモードレス</h2>

        <h2 className="font-semibold text-xl mb-2">モードレスを考える際のポイント</h2>

        <h2 className="font-semibold text-xl mb-2">
          <span className="text-[.7em] block">ディスカッション</span>
          『なぜ広義のデザインはモーダリティになりがちなのか』
        </h2>
      </article>
    </div>
  )
}