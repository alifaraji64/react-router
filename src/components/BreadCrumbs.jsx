import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h2>BreadCrumbs</h2>
        </div>
    );
}

export default BreadCrumbs;
