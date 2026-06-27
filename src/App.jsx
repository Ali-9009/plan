import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./Layout";

import ScrollToTop from "./ScrollToTop";
import Step_1 from "./pages/Step_1";
import Step_2 from "./pages/Step_2";
import Step_3 from "./pages/Step_3";
import Step_4 from "./pages/Step_4";
import Step_5 from "./pages/Step_5";


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
              <Route path="/" element={<Step_1 />} />
              <Route path="/step-2" element={<Step_2 />} />
              <Route path="/step-3" element={<Step_3 />} />
              <Route path="/step-4" element={<Step_4 />} />
              <Route path="/step-5" element={<Step_5 />} />
            </Route>

          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;