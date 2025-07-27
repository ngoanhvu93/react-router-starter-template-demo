import { TopAppBar } from "~/components/TopAppBar";

const Test = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col mx-auto max-w-4xl w-full">
      <div className="flex-none sticky top-0 z-10 w-full">
        <TopAppBar title="Test" />
      </div>
      <div className="h-full">
        <div className="w-20 h-[1000px] bg-red-500" />
        <button onClick={scrollToTop}>Scroll to top</button>
      </div>
      <div className="flex-none sticky bottom-0 z-10">BOTTOM APP BAR</div>
    </div>
  );
};

export default Test;
