import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

function App() {
    let element = useRoutes(routes);

    return (
        <HelmetProvider context={helmetContext}>
            {element}
        </HelmetProvider>
    );
}

export default App;