import Memo from "../components/Memo";
import LetterData from "../constants/letter.json";
const letters = LetterData.data;

function Letter() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HEADER */}
      <header className="w-full relative h-96 flex bg-background/50 justify-between items-end p-14 overflow-hidden">
        <img
          src="/assets/단체사진.jpg"
          className="blur-sm absolute w-full scale-125 -top-80 opacity-50"
        />
        <div className="relative z-10">
          <h1 className="text-white flex flex-col text-6xl ml-4">
            <span>손병찬 교수님</span>
            <span>정말 감사합니다!</span>
          </h1>

          <h2 className="text-white flex flex-col text-2xl font-thin mt-4 ml-4">
            대전 8기 8반 학생들이 보내는 감사 편지
          </h2>
        </div>
        <img src="/assets/단체사진.jpg" className="h-full relative z-10" />
      </header>

      {/* MAIN */}
      <main className="flex flex-wrap gap-5 justify-center items-baseline w-full max-w-6xl py-10">
        <section className="flex-1 min-w-[300px] flex flex-col gap-5 justify-center max-w-2xl">
          {letters
            .filter((_item, index) => index % 3 === 0)
            .map(({ content, name }, index) => (
              <Memo key={index} content={content} name={name} color={index % 4} />
            ))}
        </section>
        <section className="flex-1 min-w-[300px] flex flex-col gap-5 justify-center max-w-3xl">
          {letters
            .filter((_item, index) => index % 3 === 1)
            .map(({ content, name }, index) => (
              <Memo
                key={index}
                content={content}
                name={name}
                color={Math.abs(100 - index + 1) % 4}
              />
            ))}
        </section>
        <section className="flex-1 min-w-[300px] flex flex-col gap-5 justify-center max-w-3xl">
          {letters
            .filter((_item, index) => index % 3 === 2)
            .map(({ content, name }, index) => (
              <Memo key={index} content={content} name={name} color={(index + 2) % 4} />
            ))}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-gray-600 m-20">Made by 서예지 · 한유경</footer>
    </div>
  );
}

export default Letter;
