import ScrambleText from "@/components/ScrambleText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-[96px] font-semibold tracking-widest">
      <ScrambleText>Hover Me</ScrambleText>
    </main>
  );
}
