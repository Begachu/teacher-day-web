import React from "react";
import Memo from "../components/Memo";

function Letter() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HEADER */}
      <header className="w-full h-96 bg-background flex flex-col justify-end p-10">
        <h1 className="text-white flex flex-col text-6xl">
          <span>손병찬 교수님</span>
          <span>정말 감사합니다!</span>
        </h1>

        <h2 className="text-white flex flex-col text-2xl font-thin mt-4">
          대전 8기 8반 학생들이 보내는 감사 편지
        </h2>
      </header>

      {/* MAIN */}
      <main className="flex flex-wrap gap-5 justify-center w-full max-w-6xl py-10">
        <section className="flex-1 min-w-[300px] flex flex-col gap-5 justify-center max-w-2xl">
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={0} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={1} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={3} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={2} />
        </section>
        <section className="flex-1 min-w-[300px] flex flex-col gap-5 justify-center max-w-3xl">
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={1} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={2} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={3} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={0} />
        </section>
        <section className="flex-1 min-w-[300px] flex flex-col gap-5 justify-center max-w-3xl">
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={2} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={1} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={3} />
          <Memo content={"asdfsd\nasdfasdf"} name={"asdf"} color={0} />
        </section>
      </main>

      {/* FOOTER */}
      <footer></footer>
    </div>
  );
}

export default Letter;
