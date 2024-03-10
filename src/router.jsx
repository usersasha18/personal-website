import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import About from "./routes/About";
import Contacts from "./routes/Contacts";

export const router = createBrowserRouter([
    {path: '/', element: <App/> },
    {path: '/about', element: <About />},
    {path: '/contacts', element: <Contacts />}
  ])
