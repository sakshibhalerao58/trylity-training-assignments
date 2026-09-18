import Card from "../cards/Card";

const Home = () => {
  const handleClick = () => {
    alert("Welcome to the Vite React application!");
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <p className="subtitle">React + TypeScript + Vite</p>

          <h1>Welcome to Our React Application</h1>

          <p className="hero-description">
            A clean and structured React application built with
            TypeScript, Vite, reusable components, and React Router.
          </p>
        </div>
      </section>

      <section className="container cards-section">
        <Card
          title="Reusable Components"
          description="This application uses reusable and type-safe React components."
          buttonText="Explore"
          onButtonClick={handleClick}
        />

        <Card
          title="TypeScript"
          description="Component props are defined using TypeScript interfaces."
          buttonText="Learn More"
          onButtonClick={() => alert("TypeScript keeps the code type-safe!")}
        />

        <Card
          title="React Router"
          description="Navigate between Home and About pages without reloading the application."
          buttonText="View Pages"
          onButtonClick={() => alert("React Router is working!")}
        />
      </section>
    </main>
  );
};

export default Home;