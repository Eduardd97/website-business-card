import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { Gallery } from "./components/Gallery/Gallery";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/gallery", element: <Gallery /> },
]);

export default router
