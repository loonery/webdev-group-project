import AbridgedRecipe from "../AbridgedRecipe";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faX} from "@fortawesome/free-solid-svg-icons";
import {faCancel} from "@fortawesome/free-solid-svg-icons/faCancel";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

const EditingRecipeCollection = () => {

    // todo: make this array populated with elements
    const recipeArray = [
        {},{},{},{},{}
    ];

    return (
        // the collection is housed inside a card that itself houses a list group
        <div className="card">
            <ul className="list-group">
                <div className="card-header fs-3 border-bottom-0">

                    {/*title and edit button for the collection*/}
                    <div className="fs-3">
                        Collection Title
                        <span className="float-end pe-2">
                            <button className="btn btn-outline-dark mx-2"><FontAwesomeIcon icon={faCancel}/></button>
                            <button className="btn btn-outline-dark mx-2"><FontAwesomeIcon icon={faSave}/></button>
                        </span>
                    </div>
                    <div className="fs-6 text-secondary">Collection description</div>
                </div>

                {/*map each recipe to an abridged recipe within the collection*/}
                {/*todo : the abridged recipes should be fed data*/}
                {recipeArray.map((recipe, index) => {
                    return(

                        <li className="list-group-item">
                            <div className="d-flex align-items-center">

                                {/* remove recipe button */}
                                <div className="mx-2">
                                    <button className="btn btn-dark rounded-pill">
                                        <FontAwesomeIcon icon={faX}/>
                                    </button>
                                </div>
                                <div className="flex-grow-1"><AbridgedRecipe/></div>
                            </div>
                        </li>
                    );
                })}

                {/* add recipe button */}
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark btn-rounded-pill w-100 m-2">
                        <FontAwesomeIcon icon={faPlus}/>&ensp;Add Recipe to Collection
                    </button>
                </div>
            </ul>
        </div>
    );
}
export default EditingRecipeCollection;