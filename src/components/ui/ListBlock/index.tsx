
type Props = {
  items: string[];
};

export default function ListBlock({ items }: Props) {
  return (
    <div className="bg-blue-100 p-6">
        <ul className="pl-4 flex flex-col gap-y-1">
            {items.map((item,index)=> (
            <li key={index}
            className="-indent-4"
            dangerouslySetInnerHTML={{ __html: `・${item}` }}></li>
        ))}
        </ul>
    </div>
  );
}