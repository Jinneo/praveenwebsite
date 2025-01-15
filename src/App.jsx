import React from "react";
import { Box } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home"; // Ensure correct imports for your components
import Portfolio from "./Portfolio";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";

const router = createBrowserRouter([
  { path: "/praveenwebsite/", element: <Home /> },
  { path: "/praveenwebsite/portfolio", element: <Portfolio /> },
  { path: "/praveenwebsite/*", element: <NotFound /> }, // Catch-all route for unmatched URLs
]);

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Box>
  );
}

export default App;
