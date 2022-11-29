import {Link, useMatch, useResolvedPath} from "react-router-dom";

const NavigationTab = ({activePath, tabName}) => {

    // match the current path with the path that this NavigationTab component refers to
    /*
        CITATION: Specific path matching idiom taken from (https://github.com/WebDevSimplified/react-navbar).
        Accompanying youtube video link:  https://www.youtube.com/watch?v=SLfhMt5OUPI
     */

    const resolvedPath = useResolvedPath(activePath);
    const isActive = useMatch({path: resolvedPath.pathname});
    const navigationLinkString = "nav-link" + (isActive ? ' active' : '');

    return (
        <li className="nav-item ps-1 pe-1">
            <Link className={navigationLinkString} to={activePath}>{tabName}</Link>
        </li>
    );
}
export default NavigationTab;