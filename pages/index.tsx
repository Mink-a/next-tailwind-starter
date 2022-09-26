import type { NextPage } from "next";
import DarkMode from "../components/DarkMode";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-3xl font-bold underline text-indigo-500 dark:text-cyan-500">
        Hello world!
      </h1>
      <DarkMode />
    </div>
  );
};

export default Home;
