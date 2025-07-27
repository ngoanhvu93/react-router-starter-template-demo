import { TopAppBar } from "~/components/TopAppBar";

const Test = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <div className="flex-none sticky top-0 z-10">
        <TopAppBar title="Test" />
      </div>
      <div className="flex-1 grow flex flex-col gap-4">
        <div className="flex flex-col gap-2 overflow-y-auto">
          <h1 className="text-2xl font-bold">Test</h1>
          <div className="w-20 h-[2000px] bg-red-500" />
          <button onClick={scrollToTop}>Scroll to top</button>
        </div>
      </div>
      <div className="flex-none sticky bottom-0 z-10">
        bottom app bar
        {/* <BottomAppBar /> */}
      </div>
    </div>
  );
};

export default Test;
