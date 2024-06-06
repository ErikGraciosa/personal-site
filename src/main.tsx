import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import theme from "./theme";
import App from "./App";
import Pinball from "./Pinball";
import Projects from "./Projects";
import OpenSource from "./OpenSource";
import Header from "./blogDemoFiles/Header";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./blogDemoFiles/Footer";
import AprilMonthView from "./AprilMonthView";
import MayMonthView from "./MayMonthView";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/helloworld",
    element: <div>Hello World</div>,
  },
  {
    path: "/pinball",
    element: <Pinball />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/opensource",
    element: <OpenSource />,
  },
  {
    path: "/April2024",
    element: <AprilMonthView />,
  },
  {
    path: "/May2024",
    element: <MayMonthView />,
  },
]);

const sections = [
  { title: "Projects", url: "/projects" },
  { title: "Pinball", url: "/pinball" },
  { title: "Open Source Contributions", url: "/opensource" },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header title="Erik Graciosa" sections={sections} />
          <RouterProvider router={router} />
          <Footer />
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
