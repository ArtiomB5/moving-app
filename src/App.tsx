import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
function App() {
    let element = useRoutes(routes);

    return (
        <>
            {element}
        </>
    );
}

export default App;