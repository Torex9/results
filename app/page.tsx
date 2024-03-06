import localFont from "next/font/local";

export default function Home() {
  return (
    <main className="md:h-screen md:bg-white md:relative md:top-1">
      <div className="sectionsBackground flex flex-col bg-white h-screen z-1 md:flex md:flex-row md:justify-center md:items-center md:h-max md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:rounded-3xl md:shadow-xl md:shadow-slate-300 md:shadow-right">
        <div className="blueSection bg-gradient-to-b from-violet-600 to-blue-700 h-[45%] rounded-b-[30px] flex flex-col md:w-[300px] md:h-[400px] md:rounded-3xl">
          <h1 className="text-white font-semibold  mx-auto mt-5 mb-9 opacity-70">
            Your Result
          </h1>
          <div className="bg-gradient-to-b from-blue-900 to-transparent h-32 w-32 rounded-full text-center mx-auto mb-12 flex flex-col relative justify-center items-center">
            <h1 className=" relative -top-2 text-6xl font-bold text-white ">
              76
            </h1>
            <h2 className="absolute bottom-3 font-medium text-white text-sm opacity-50">
              of 100
            </h2>
          </div>
          <h1 className="mx-auto mb-3 text-xl font-medium text-white">Great</h1>
          <p className="text-center mx-16 text-sm text-white font-medium opacity-60">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="summarySection bg-white h-[55%]  p-7 flex flex-col gap-2 justify-center md:h-[400px] md:w-[300px] md:rounded-r-3xl">
          <h1 className="mb-4 font-semibold opacity-70">Summary</h1>

          <div className="flex justify-between bg-red-50 h-12 p-2 mb-4 rounded-lg items-center">
            <h2 className="flex gap-3 items-center text-sm font-semibold text-red-400">
              <img src="/icon-reaction.svg" className="ml-2" /> Reaction
            </h2>
            <p className="mr-2 text-sm font-semibold">
              80 /{" "}
              <span className="text-sm font-semibold text-black opacity-45">
                100
              </span>
            </p>
          </div>
          <div className="flex justify-between bg-yellow-50 h-12 p-2 mb-4 rounded-lg items-center">
            <h2 className="flex gap-3 items-center text-sm font-semibold text-yellow-500">
              <img src="/icon-memory.svg" className="ml-2" /> Memory
            </h2>
            <p className="mr-2 text-sm font-semibold">
              92 /{" "}
              <span className="text-sm font-semibold text-black opacity-45">
                100
              </span>
            </p>
          </div>
          <div className="flex justify-between bg-teal-50 h-12 p-2 mb-4 rounded-lg items-center">
            <h2 className="flex gap-3 items-center text-sm font-semibold text-teal-500">
              <img src="/icon-verbal.svg" className="ml-2" /> Verbal
            </h2>
            <p className="mr-2 text-sm font-semibold">
              61 /{" "}
              <span className="text-sm font-semibold text-black opacity-45">
                100
              </span>
            </p>
          </div>
          <div className="flex justify-between bg-indigo-50 h-12 p-2 mb-4 rounded-lg items-center">
            <h2 className="flex gap-3 items-center text-sm font-semibold text-indigo-500">
              <img src="/icon-visual.svg" className="ml-2" /> Visual
            </h2>
            <p className="mr-2 text-sm font-semibold">
              72 /{" "}
              <span className="text-sm font-semibold text-black opacity-45">
                100
              </span>
            </p>
          </div>
          <button
            type="button"
            className="mx-auto w-full rounded-3xl bg-slate-800 h-12 text-white text-sm font-semibold hover:bg-gradient-to-b hover:from-violet-600 hover:to-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
