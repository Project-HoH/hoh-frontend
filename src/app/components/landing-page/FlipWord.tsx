import { FlipWords } from "@/components/ui/flip-words";

const FlipWord = () => {
  const words = ["Best Chance_", "Dearest Friend", "Worst Enemy", "Savior"];
  return (
    <div className="flex flex-row items-center justify-center overflow-hidden md:-my-[120px] mt-[60px] px-4">
      <h1 className="font-extrabold text-[20px] md:text-[60px] font-sans text-[#881414] text-center">
      You Are Your Own , <FlipWords words={words} className="text-[#881414] underline" />
      </h1>
    </div>
  );
};

export default FlipWord;
