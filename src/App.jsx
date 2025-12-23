import "./App.css";

import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";

function App() {

  return (
    <div className="app">
      <h1>Latabat</h1>
      {/* Exercise 1 */}
      <section className="section">
        <h1 className="title">Exercise 1: Lifted Counter State</h1>
        <CounterDisplay />
        <CounterControls />
      </section>

      {/* BONUS: Exercise 2 */}
      <section className="section">
        <h1 className="title">Exercise 2: Shopping Cart</h1>
        <CartSummary />
        <ProductList />
      </section>
    </div>
  );
}

export default App;
