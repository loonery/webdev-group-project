import AbridgedDomainItem from "../../post-components/AbridgedRecipe";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

const EditableRecipeCollection = () => {

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
                            <button className="btn btn-outline-dark">
                                <FontAwesomeIcon icon={faPencil}/>
                            </button>
                        </span>
                    </div>
                    <div className="fs-6 text-secondary">Collection description</div>
                </div>

                {/*map each recipe to an abridged recipe within the collection*/}
                {/*todo : the abridged recipes should be fed data*/}
                {recipeArray.map((recipe, index) => {
                    return(
                        <li className="list-group-item"><AbridgedDomainItem/></li>
                    );
                })}
            </ul>
        </div>
    );
}
export default EditableRecipeCollection;