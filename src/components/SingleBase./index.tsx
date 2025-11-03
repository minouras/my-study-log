

type Props = {
  title: string,
  date?: string,
  tags?: string[]
}

export default function SingleBase({ title, date, tags}:Props) {
  return (
    <div class="">
      <h1 class="text-xl font-bold text-blue-600">{title}</h1>
      <p>{date}</p>
      {
        tags?.map((tag) => (
            <div>#{tag}</div>
        ))
      }
    </div>
  )
}