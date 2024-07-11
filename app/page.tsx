import { AllClouds } from "./components/AllClouds";
import { HomeButtons } from "./components/HomeButtons";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-wrap items-center justify-between w-full">
      <div className="flex flex-wrap w-full h-screen ">
        <AllClouds />
      </div>
    </main>
  );
}
