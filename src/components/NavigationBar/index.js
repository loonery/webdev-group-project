import NavigationTab from "./NavigationTab";
import SearchBar from "../SearchBar";
import {useSelector} from "react-redux";

const NavigationBar = () => {

    // since we only have a few pages, we can statically declare them here
      // activePath : the path that tab links users to
      // tabName : the text that appears on each navigation tab

    const {currentUser, loading} = useSelector((state) => state.users)

     const tabs = [
        {activePath: '/', tabName: 'Home'},
        {activePath: '/profile', tabName: 'Profile'},
        {activePath: '/create', tabName: 'Create'},
        {activePath: '/demo', tabName: 'Demo'}]

    return(
            <div className="border-bottom pb-3 pt-2 mb-4">
                <ul className="nav nav-pills nav-justified">
                    {/* map each object in 'tabs' to the navigation tab component we need to create */}
                    {tabs.map((tab, index) => (
                        <NavigationTab key={index} activePath={tab.activePath} tabName={tab.tabName}></NavigationTab>
                    ))}
                </ul>
                <div className="pt-3">
                    <SearchBar placeHolderText={"Search for users, recipes, or recipe collections"}/>
                </div>
            </div>
    );
}
export default NavigationBar;