
import { useRouteError } from "react-router-dom";
const Error = () => {
const err = useRouteError();
console.log(err);
    return (
        <div>
           <h1>OOPS!!!</h1>
           <h2>Something is wrong</h2>
           <h1>{err.status} : {err.statusText}</h1>
        </div>

    );
};
export default Error;