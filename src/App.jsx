import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Portfolio } from "./Portfolio";
import { Box } from "@chakra-ui/react";
import { NotFound } from "./NotFound";

const router = createBrowserRouter([
  { path: "/praveenwebsite/", element: <Home /> },
  { path: "/praveenwebsite/portfolio", element: <Portfolio /> },
  {path: "*", element: <NotFound />}
]);

function App() {
  return (
    <Box height="" display="flex" flexDirection="column">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Box>
  );
}

export default App;
