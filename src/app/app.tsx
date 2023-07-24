import { Router, Outlet, Route, ReactLocation } from "@tanstack/react-location";
import { Header } from "components/Header";
import ScoreboardPage from "../pages/ScoreboardPage/ScoreboardPage";

const reactLocation = new ReactLocation();

const routes: Route[] = [
  {
    path: import.meta.env.VITE_BASE_URL + "/",
    element: <ScoreboardPage />,
  },
];

const App = (): JSX.Element => {
  return (
    <Router location={reactLocation} routes={routes}>
      <Header />
      <Outlet />
    </Router>
  );
};

export default App;
