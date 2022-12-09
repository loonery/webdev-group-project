import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faBoxesStacked} from "@fortawesome/free-solid-svg-icons/faBoxesStacked";
import {useState} from "react";
import Recipe from "../../domain-components/recipe-components/Recipe";

const Creator = () => {

    const [creating, setCreating] = useState(false);
    const [creatingRecipe, setCreatingRecipe] = useState(false);

    return (
        <>
            <div className="row">
                <div className="col">
                    <button className="btn btn-dark w-100"
                            onClick={() => {
                                setCreating(true);
                                setCreatingRecipe(true);
                            }}>
                        Create a Recipe
                        &ensp;<FontAwesomeIcon icon={faCoffee}/>
                    </button>
                </div>

                {/*todo - disable this if the user is not premium*/}
                <div className="col">
                    <button className="btn btn-dark w-100"
                            onClick={() => {
                                setCreating(true);
                                setCreatingRecipe(false);
                            }}>
                        Create a Recipe Collection
                        &ensp;<FontAwesomeIcon icon={faBoxesStacked}/>
                    </button>
                </div>

                {creating && creatingRecipe &&
                    <Recipe modal={false} show={false} showFunction={() => {
                        return
                    }}/>
                }

            </div>
        </>
    )


}
export default Creator;