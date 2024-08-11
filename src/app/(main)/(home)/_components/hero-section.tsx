export const HeroSection = () => {
  return (
    <section className="bg-zinc-900 bg-[url('/images/stars-bg.png')] py-32">
      <div className="container">
        <h1 className="font-nanum text-3xl font-extrabold text-white max-md:whitespace-pre-wrap md:text-5xl md:leading-tight">
          {"Create your Universe:\nBeyond Talent"}
        </h1>
        <p className="text-medium font-nanum mt-8 leading-normal text-gray-300 md:text-2xl md:leading-normal">
          스스로를 규정하던 모든 프레임에서 벗어나,
          <br />
          무한한 가능성을 탐험하실 분들과 동행합니다.
        </p>
      </div>
    </section>
  );
};
