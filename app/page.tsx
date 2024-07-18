import { AllClouds } from "./components/AllClouds";
import { Header } from "./components/Header";
import { Transition } from "./components/Transition";
import "./globals.css";

export default function Home() {
  return (
    <main className="w-full">
      <Transition>
        {" "}
        <div className="flex flex-wrap w-full h-screen ">
          <Header />
          <AllClouds />
        </div>
      </Transition>
    </main>
  );
}
