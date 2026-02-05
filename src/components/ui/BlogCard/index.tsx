/*
 * ブログカード
 * タイトル、日付、タグ
 */

import { type PostMeta } from '../../../lib/type';

export default function BlogCard({ title, date, tags }: PostMeta) {
  return (
    <div className="block w-full h-full shadow p-4">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="mb-2">{date}</p>
      <div className="flex gap-x-4 bg-[var(--color-primaly)] p-[.5rem_1rem] rounded-xl w-fit flex-wrap">
        {tags?.map((tag) => (
          <div className="">#{tag}</div>
        ))}
      </div>
    </div>
  );
}
