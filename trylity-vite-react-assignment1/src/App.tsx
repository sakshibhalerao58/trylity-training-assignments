import Header from "./components/layout/Header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-white">
      <Header />

      <main className="h-[calc(100vh-80px)]">
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;