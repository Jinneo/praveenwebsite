import React from "react";
import { Box } from "@chakra-ui/react";
import { createHashRouter, RouterProvider } from "react-router"; // Switch to createHashRouter
import { Home } from "./Home"; // Ensure correct imports for your components
import { Portfolio } from "./Portfolio";
import { NotFound } from "./NotFound";
import { Header } from "./Header";
import { Footer } from "./Footer";

// Define routes using createHashRouter
const router = createHashRouter([
  { path: "/", element: <Home /> }, // Root path
  { path: "/portfolio", element: <Portfolio /> }, // Portfolio path
  { path: "/*", element: <NotFound /> }, // Catch-all route for unmatched URLs
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
