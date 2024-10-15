import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { Gallery } from "./components/Gallery/Gallery";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { CV } from "./components/CV/CV";
import {Certificates} from "./components/Certificates/Certificates"
import { Contacts } from "./components/Contacts/Contacts";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/about-me", element: <AboutMe /> },
    { path: "/CV-and-CoverLetter", element: <CV /> },
    { path: "/certificates", element: <Certificates/>},
    { path: "/contact-me", element: <Contacts/>},
]);

export default router;
