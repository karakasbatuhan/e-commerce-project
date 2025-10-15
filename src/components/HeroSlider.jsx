export default function HeroSlider() {
  return (
    <section>
      <div className="bg-blue-500 w-full h-[716px] flex justify-between items-center text-white">
        <button>Left</button>
        <div className="flex flex-col gap-6 text-white max-w-lg border-2 border-red-500">
          <p>Summer 2020</p>
          <h1>New Collection</h1>
          <p>We know how large objects will act, but thing on a small scale.</p>
          <button>Shop Now</button>
        </div>
        <button>Right</button>
      </div>
    </section>
  );
}