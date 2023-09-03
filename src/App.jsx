import "./App.css";
import PrincipalForm from "./components/PrincipalForm";
import PrincipalNavBar from "./components/PrincipalNavBar";
import PrincipalFooter from "./components/PrincipalFooter";

function App() {
  return (
    <>
      <header>
        <PrincipalNavBar />
      </header>
      <section className="container mt-3">
        <PrincipalForm />
      </section>
      <footer className="text-center my-4">
        <PrincipalFooter />
      </footer>
    </>
  );
}

export default App;
