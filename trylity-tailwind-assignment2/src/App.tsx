import Header from "./components/layout/Header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;