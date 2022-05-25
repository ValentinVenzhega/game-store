import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { Header } from "./components/header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route strict path="/game-store/" element={<HomePage />}></Route>
                <Route strict path="/app/:title" element={<GamePage />}></Route>
                <Route strict path="/order" element={<OrderPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
