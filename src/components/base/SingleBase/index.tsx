/*
 * 個別記事ヘッダー
 * タイトル、日付、タグ
 */

import { type PostMeta } from '../../../lib/type';

export default function SingleBase({ title, date, tags }: PostMeta) {
  return (
    <div class="">
      <h1 class="text-3xl font-bold text-blue-600 mb-1">{title}</h1>
      <p className="mb-2">{date}</p>
      <div className="flex gap-x-4 bg-green-200 p-[.5rem_1.6rem] rounded-xl w-fit mb-5">
        {tags?.map((tag) => (
          <div className="">#{tag}</div>
        ))}
      </div>
    </div>
  );
}
