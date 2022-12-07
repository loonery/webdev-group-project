import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {useState} from "react";
import Recipe from "../../recipe-components/Recipe";

// the abridged recipe is a recipe's or collection's representation that appears outside its details page
const AbridgedDomainItem = () => {

    const [showingDomainItem, setShowingDomainItem] = useState(false);

    return (
        <>
            <Recipe show={showingDomainItem} showFunction={() => setShowingDomainItem(false)}/>

            <div className="p-3">
                <div className="d-flex">
                    {/* this flex div houses all the content in the abridged recipe, as well as the arrow */}
                    <div className="flex-grow-1">
                        <div><span className="fs-5">Recipe title or Recipe Collection title</span></div>

                        {/*todo: cut the description once it reaches a certain length*/}
                        <div>Recipe description or Recipe Collection description</div>
                    </div>

                    {/* chevron button on any abridged recipe or collection */}
                    <div className="align-self-center">
                        <button className="btn btn-outline-dark"
                            onClick={() => setShowingDomainItem(true)}>
                            <FontAwesomeIcon icon={solid('chevron-right')} size={"lg"}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AbridgedDomainItem;