import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {useState} from "react";
import Recipe from "../../recipe-components/Recipe";
import react from 'react';
import currentUser from "../../../page-components/Profile/CurrentUser";

// the abridged recipe is a recipe's or collection's representation that appears outside its details page
const AbridgedDomainItem = ({recipe, author, editingParentComponent}) => {

    // todo: determine the how the domain object type determines the rendering of this component
        // chevron button needs to display a different kind of details page than a modal because nested modals
        // are not permitted
    const [showingDomainItem, setShowingDomainItem] = useState(false);

    console.log(recipe)

    return (
        <>
            {/*pass the recipe modal component information about whether it's showing itself, and how to close itself*/}
            <Recipe modal={true}
                    show={showingDomainItem}
                    showFunction={() => setShowingDomainItem(false)}/>

            <div className="p-1">
                <div className="d-flex">

                    {/* this flex div houses all the content in the abridged recipe, as well as the arrow */}
                    <div className="flex-grow-1 me-4">
                        <div>
                            <span className="fs-5">{recipe.recipeName}</span>
                            <span className="fs-5">&ensp;&middot;&ensp;</span>
                            <span className="text-secondary">{recipe.author}</span>
                        </div>

                        {/*todo: cut the description once it reaches a certain length*/}
                        <p className="pt-1 text-secondary">
                            {recipe.description}
                        </p>
                    </div>

                    {/* chevron button on any abridged recipe or collection */}
                    {/*todo: parameterize chevron button function such that when the object being rendered is a collection*/
                        /*that we go to a details page rather than a modal*/
                    }

                    {/*This section dynamically renders the button on the abridged items depending on whether the
                     collection is being edited*/}
                    {!editingParentComponent &&
                        <div className="align-self-center">
                            <button className="btn btn-outline-dark"
                                onClick={() => setShowingDomainItem(true)}>
                                <FontAwesomeIcon icon={solid('chevron-right')} size={"lg"}/>
                            </button>
                        </div>
                    }
                    {editingParentComponent &&
                        <div className="align-self-center ms-2">
                            <button className="btn btn-outline-dark btn-sm"
                                    onClick={() => {
                                        return
                                    }}>
                                <FontAwesomeIcon icon={solid('minus')} size={"lg"}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
export default AbridgedDomainItem;