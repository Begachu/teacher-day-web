interface Props {
  content: string;
  name: string;
  color: number;
}

const COLOR_SET = ["bg-pink", "bg-purple", "bg-green", "bg-yellow"];

function Memo({ content, name, color }: Props) {
  const letter = content.split("\n");

  return (
    <div
      className={`${COLOR_SET[color]} p-6 rounded-md shadow-md flex-1
    hover:scale-110 hover:shadow-xl hover:z-10 relative transition-all`}
    >
      <h2 className="text-3xl mb-2">{letter[0]}</h2>
      {letter.map((item, index) => {
        if (index !== 0)
          return (
            <span key={`letter-line-${index}`} className="text-2xl font-light">
              {item}
            </span>
          );
      })}
      <div className="flex items-center justify-end gap-2">
        <span className="text-xl font-thin mt-2">{name}</span>
        <div className="rounded-full w-10 h-10 overflow-hidden">
          <img
            className="h-auto aspect-square object-cover"
            src={`/assets/${name}.svg`}
            alt={`${name} 사진`}
          />
        </div>
      </div>
    </div>
  );
}

export default Memo;
