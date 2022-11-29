import {Link} from "react-router-dom";
import NavigationTab from "./NavigationTab";

const NavigationBar = () => {

    // since we only have a few pages, we can statically declare them here
    const tabs = [
        {activePath: '/Home', tabName: 'Home'},
        {activePath: '/Profile', tabName: 'Profile'},
        {activePath: '/Search', tabName: 'Search'}
    ]

    return(
        <>
            <ul className="nav nav-pills nav-justified pb-2">
                {tabs.map((tab, index) => (
                    <NavigationTab key={index} activePath={tab.activePath} tabName={tab.tabName}></NavigationTab>
                    ))}
            </ul>
        </>

    );
}
export default NavigationBar;