import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  const words = ["Heal A Soul", "Save A Life", "Safeguard Humanity"];
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full md:my-[130px] mt-[120px]">
      <div className="w-full max-w-[1440px] md:h-[150px] h-[85px] bg-[#8C0365] flex flex-col gap-2 items-center justify-center">
        <h1 className="text-[#F8F9FA] font-bold md:text-[70px] text-[20px] whitespace-nowrap">
          You’re a hero, <FlipWords words={words} className="text-[#FFC4EE]" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
