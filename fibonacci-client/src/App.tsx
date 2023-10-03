import { useEffect, useState } from "react";
import { getCurrent, getPrevious, getNext } from "./api/fibonacci.api";

function App() {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const current = await getCurrent();
        setErrorMessage("");
        setCurrentValue(current);
      } catch (error: any) {
        setErrorMessage(error?.message || "Error occurred");
      }
    })();
  }, []);

  const onPreviousClick = async () => {
    try {
      setErrorMessage("");
      const value = await getPrevious();
      setCurrentValue(value);
    } catch (error: any) {
      const { response }: any = error || {};
      const { data, status } = response || {};
      if (status === 400) {
        setErrorMessage(data.message || "Error occurred");
      } else {
        setErrorMessage(error?.message || "Error occurred");
      }
    }
  };

  const onNextClick = async () => {
    try {
      setErrorMessage("");
      const value = await getNext();
      setCurrentValue(value);
    } catch (error: any) {
      setErrorMessage(error?.message || "Error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Fibonacci Sequence</h1>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <div className="border-2 border-blue-500 rounded-full p-2 bg-blue-500 text-white">
            {currentValue}
          </div>
        </div>
      </div>
      <div className=" mt-6 flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onPreviousClick}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
      {errorMessage !== "" && (
        <div className="mt-2 flex space-x-4 text-red-500">{errorMessage}</div>
      )}
    </div>
  );
}

export default App;
