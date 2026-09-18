const About = () => {
  return (
    <main className="page">
      <section className="container about-section">
        <p className="subtitle">About</p>

        <h1>About This Project</h1>

        <p>
          This project was created as part of a React and TypeScript
          training assignment.
        </p>

        <p>
          The application demonstrates a clean folder structure,
          reusable components, typed props, basic CSS styling, and
          client-side routing using React Router.
        </p>

        <div className="features">
          <div>
            <h3>React</h3>
            <p>Used for building the user interface.</p>
          </div>

          <div>
            <h3>TypeScript</h3>
            <p>Used for type-safe development.</p>
          </div>

          <div>
            <h3>Vite</h3>
            <p>Used as the development and build tool.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;