import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;