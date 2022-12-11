import {Link} from "react-router-dom";
import NavigationTab from "./NavigationTab";

const NavigationBar = () => {

    // since we only have a few pages, we can statically declare them here
      // activePath : the path that tab links users to
      // tabName : the text that appears on each navigation tab
    const tabs = [
        {activePath: '/', tabName: 'Home'},
        {activePath: '/profile', tabName: 'Profile'},
        {activePath: '/search', tabName: 'Search'}
    ]

    return(
            <div className="border-bottom pb-3 pt-2 mb-4">
                <ul className="nav nav-pills nav-justified">
                    {/* map each object in 'tabs' to the navigation tab component we need to create */}
                    {tabs.map((tab, index) => (
                        <NavigationTab key={index} activePath={tab.activePath} tabName={tab.tabName}></NavigationTab>
                    ))}
                </ul>
            </div>
    );
}
export default NavigationBar;