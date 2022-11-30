import {Link} from "react-router-dom";
import NavigationTab from "./NavigationTab";

const NavigationBar = () => {

    // since we only have a few pages, we can statically declare them here
      // activePath : the path that tab links users to
      // tabName : the text that appears on each navigation tab
    const tabs = [
        {activePath: '/', tabName: 'Home'},
        {activePath: '/Profile', tabName: 'Profile'},
        {activePath: '/Search', tabName: 'Search'}
    ]

    return(
        <>
            <ul className="nav nav-pills nav-justified pb-2">

                {/* map each object in 'tabs' to the navigation tab component we need to create */}
                {tabs.map((tab, index) => (
                    <NavigationTab key={index} activePath={tab.activePath} tabName={tab.tabName}></NavigationTab>
                    ))}
            </ul>
        </>

    );
}
export default NavigationBar;