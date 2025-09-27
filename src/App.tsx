import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Tickets from "./components/layout/Tickets";

function App() {
  return (
    <main className="bg-[#f5f5f5f5] min-h-screen m-auto">
      <Navbar />
      <Header/>
      <Tickets/>
      <Footer/>
    </main>
  );
}

export default App;
