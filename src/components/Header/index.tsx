import { Link } from "preact-router";


export default function Header() {
  return (
    <header class="bg-white shadow p-4">
      <h1 class="text-xl font-bold text-blue-600">
        {/* @ts-ignore */}
        <Link href="/">勉強ログ</Link>
      </h1>
    </header>
  )
}