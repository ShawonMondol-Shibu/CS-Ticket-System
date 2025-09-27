import { useState } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Tickets from "./components/layout/Tickets";
import { toast } from "react-toastify";

function App() {
  const [progress, setProgress] = useState<string[]>([]);
  const [resolve, setResolve] = useState<string[]>([]);
  const [proValue, setproValue] = useState<number>(0);
  const [resValue, setresValue] = useState(0);

  const handleCard = (title: string) => {
    toast.warn(title);
    setProgress([...progress, title]);
    setproValue(proValue + 1);
  };

  const handleComplete = (item: string) => {
    setResolve([...resolve, item]);
    const compItem = progress.filter((pro) => pro !== item);
    setProgress(compItem);
    setresValue(resValue + 1);
    toast.success(item);
  };
  return (
    <main className="bg-[#f5f5f5f5] min-h-screen m-auto">
      <Navbar />
      <Header inProgress={proValue} resolved={resValue} />
      <Tickets
        handleCard={handleCard}
        handleComplete={handleComplete}
        progress={progress}
        resolve={resolve}
      />
      <Footer />
    </main>
  );
}

export default App;
