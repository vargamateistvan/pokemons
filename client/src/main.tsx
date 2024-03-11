import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StateProvider from "./state/state-provider";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyPokemons from "./pages/MyPokemons";
import PokemonDetail from "./pages/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/my-pokemons",
    element: <MyPokemons />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetail />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);
