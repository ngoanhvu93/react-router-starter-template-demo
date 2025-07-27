import { TopAppBar } from "~/components/TopAppBar";

const Test = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden w-full h-screen">
      <div className="flex-none sticky top-0 z-10">TOP APP BAR</div>
      <div className="flex-1 grow overflow-y-auto">
        <h1 className="text-2xl h-full font-bold">Test</h1>
        <div className="w-20 h-[1000px] bg-red-500" />
        <button onClick={scrollToTop}>Scroll to top</button>
      </div>
      <div className="flex-none sticky bottom-0 z-10">BOTTOM APP BAR</div>
    </div>
  );
};

export default Test;
