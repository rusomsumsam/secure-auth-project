import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
};

export default App;