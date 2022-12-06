import Step from "./index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import NavigationTab from "../../../NavigationBar/NavigationTab";

const RecipeStepList = ({editingRecipe}) => {

    // todo: get data from the api
    const steps = [{}, {}, {}, {}, {}, {}];

    const [adding, setAdding] = useState(false);

    return (
        <div className="row mt-4">

            {/*header*/}
            <div className="fs-2 border-0 border-top">Recipe Steps</div>

            {/*Recipe steps list*/}
            <div className="mt-3">
                <ol className="list-group list-group-numbered">

                    {/* Map each step in the recipe to a Step component */}
                    {steps.map((step, index) => (
                        <Step key={index} editable={editingRecipe}/>
                    ))}

                    {/* Add step button appended to list when we edit the whole recipe */}
                    {editingRecipe && !adding &&
                        <div className='mt-2'>
                            <button className="btn btn-outline-dark w-100"
                                    onClick={() => {return}}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>
                    }
                </ol>
            </div>
        </div>
    );
}
export default RecipeStepList;