import { AllClouds } from "./components/AllClouds";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-wrap items-center justify-between w-full">
      <div className="flex flex-wrap w-full h-screen bg-blue-900 ">
        <AllClouds />
      </div>
    </main>
  );
}
