/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black relative">
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Services />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
