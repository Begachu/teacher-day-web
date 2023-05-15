import React from "react";

interface Props {
  content: string;
  name: string;
  color: number;
}

const COLOR_SET = ["bg-pink", "bg-purple", "bg-green", "bg-yellow"];

function Memo({ content, name, color }: Props) {
  const letter = content.split("\n");

  return (
    <div className={`${COLOR_SET[color]} p-6 rounded-md shadow-md`}>
      <h2 className="text-3xl">{letter[0]}</h2>
      {letter.map((item, index) => {
        if (index !== 0)
          return (
            <span key={`letter-line-${index}`} className="text-2xl font-thin">
              {item}
            </span>
          );
      })}
      <div>
        <span className="text-xl font-thin"> - {name}</span>
        <img src={`assets/face/${name}.png`} alt={`${name} 사진`} />
      </div>
    </div>
  );
}

export default Memo;
