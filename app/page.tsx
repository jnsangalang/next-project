import { AllClouds } from "./components/AllClouds";
import { Transition } from "./components/Transition";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-wrap items-center justify-between w-full">
      <Transition>
        <div className="flex flex-wrap w-full h-screen ">
          <AllClouds />
        </div>
      </Transition>
    </main>
  );
}
