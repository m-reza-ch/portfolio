import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-black text-black dark:text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-200 dark:bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-violet-500 dark:bg-blue-500 shadow-[0_0_15px_#3b82f6] dark:shadow-[0_0_15px_rgba(37,99,235,0.5)] animate-loading-bar"></div>
      </div>
    </div>
  );
};
