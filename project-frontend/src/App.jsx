import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;