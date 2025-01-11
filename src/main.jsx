import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import GetStarted from "./Pages/GetStarted/GetStarted.jsx";
import Thankyou from "./Pages/Thankyou/Thakyou";
import WebFlow from "./Pages/WebFlow/WebFlow";
import Contact from "./Pages/Contact/Contact";
import PreviousWork from "./Pages/PreviousWork/PreviousWork";
import AboutUs from "./Pages/AboutUs/AboutUs";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="getstarted" element={<GetStarted />} />
      <Route path="thankyou" element={<Thankyou />} />
      <Route path="webflow" element={<WebFlow />} />
      <Route path="contact" element={<Contact />} />
      <Route path="previouswork" element={<PreviousWork />} />
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
