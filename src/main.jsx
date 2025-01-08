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
import GetStarted from "./components/GetStarted/GetStarted.jsx";
<<<<<<< HEAD
import WebFlow from "./components/WebFlow/WebFlow.jsx";
import Contact from "./components/Contact/Contact.jsx";
=======
import Thankyou from "./Pages/Thankyou/Thakyou";
>>>>>>> 0635dfb1342982f5a743d9f9164ed741c34ed88e

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="getstarted" element={<GetStarted />} />
<<<<<<< HEAD
      <Route path="webflow" element={<WebFlow />} />
      <Route path="contact" element={<Contact />} />
=======
      <Route path="thankyou" element={<Thankyou />} />
>>>>>>> 0635dfb1342982f5a743d9f9164ed741c34ed88e
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
