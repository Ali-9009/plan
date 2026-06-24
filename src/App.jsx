import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./Layout";

// Pages
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";


function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

    

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            {/* WRAPPED ROUTES (ANIMATED) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>

          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;