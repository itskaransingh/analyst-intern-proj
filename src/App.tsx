import { AllClients, Footer, Navbar } from "./containers";

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <AllClients  />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
