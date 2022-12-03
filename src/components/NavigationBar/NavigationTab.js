import {Link, useMatch, useResolvedPath} from "react-router-dom";

const NavigationTab = ({activePath, tabName}) => {

    // match the current path with the path that this NavigationTab component refers to
    /*
        CITATION: Specific path matching idiom taken from (https://github.com/WebDevSimplified/react-navbar).
        Accompanying youtube video link:  https://www.youtube.com/watch?v=SLfhMt5OUPI
     */

    // get the resolved path of the path referred to this tab's link
    const resolvedPath = useResolvedPath(activePath);

    // matching the path the user is currently on with the path associated with this navigationTab
    const isActive = useMatch({path: resolvedPath.pathname});

    // assemble the className for each navigation tab
    const navigationLinkString = "nav-link border" + (isActive ? ' active' : '');

    return (
        // todo: add more inline styling to nav links
        <li className="nav-item ps-1 pe-1">
            <Link className={navigationLinkString} style={{backgroundColor: "darkgray", color: "black"}} to={activePath}>{tabName}</Link>
        </li>
    );
}
export default NavigationTab;