import { useRoutes } from "react-router-dom"
import ROUTES from "./routes"

function AppContainer(props) {
    const routes = useRoutes(ROUTES);
    return(
        <div>{routes}</div>
    )
}
export default AppContainer;
