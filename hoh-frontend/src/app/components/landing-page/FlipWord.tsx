import { FlipWords } from "@/components/ui/flip-words";

const FlipWord = () => {
  const words = ["Best Chance", "Dearest Friend", "Worst Enemy", "Savior"];
  return (
    <div className="flex flex-row items-center justify-center overflow-hidden md:-my-[120px]">
      <h1 className="font-extrabold text-[60px] font-sans ">
        You Are Your Own , <FlipWords words={words} />
      </h1>
    </div>
  );
};

export default FlipWord;
