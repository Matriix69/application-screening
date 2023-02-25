import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResponsiveDrawer from "./components/Layout";
import Recommended from "./pages/Recommended";
import ShortListed from "./pages/ShortListed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ResponsiveDrawer />,
        children: [
            {
                path: "/",
                element: <Recommended />,
            },
            {
                path: "/shortlisted",
                element: <ShortListed />,
            },
            {
                path: "/offer",
                element: <div className="text-center">Nothing here</div>,
            },
            {
                path: "/hired",
                element: <div className="text-center">Nothing here</div>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
