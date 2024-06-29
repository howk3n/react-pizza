import { RouterProvider } from "react-router-dom";
import { createRouter } from "./app/routes";
import "./index.css";

const AppRouter = () => {
  const router = createRouter();
  return <RouterProvider router={router} />;
};

function App() {
  return <AppRouter />;
}

export default App;
