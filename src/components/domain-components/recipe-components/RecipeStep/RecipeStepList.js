import Step from "./index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import NavigationTab from "../../../NavigationBar/NavigationTab";
import {updateRecipieIngredientsThunk, updateRecipieStepsThunk} from "../../../../services/recipes-thunks";
import {useDispatch, useSelector} from "react-redux";

const RecipeStepList = () => {

    // todo: get data from the api
    // const steps = [{}, {}, {}, {}, {}, {}];

    const recipe = useSelector((state) => state.createRecipe)

    const [steps, setSteps] = useState(recipe.steps);

    const dispatch = useDispatch();

    const syncInfo = () => {
        dispatch(updateRecipieStepsThunk(steps))
    }

    return (
        <div className="row mt-4">

            {/*header*/}
            <div className="fs-2 border-0 border-top">Recipe Steps</div>
            <div className="text-secondary fs-6">
                Enter your steps below
                <textarea className="form-control" rows="4" placeholder={"Enter steps here"}
                          defaultValue={recipe.steps}
                          onChange={(event) => {
                              setSteps(event.target.value)
                              syncInfo()
                          } }
                ></textarea>
            </div>

            {/*/!*Recipe steps list*!/*/}
            {/*<div className="mt-3">*/}
            {/*    <ol className="list-group list-group-numbered">*/}

            {/*        /!* Map each step in the recipe to a Step component *!/*/}
            {/*        {steps.map((step, index) => (*/}
            {/*            <Step key={index} editable={editingRecipe}/>*/}
            {/*        ))}*/}

            {/*        /!* Add step button appended to list when we edit the whole recipe *!/*/}
            {/*        {editingRecipe && !adding &&*/}
            {/*            <div className='mt-2'>*/}
            {/*                <button className="btn btn-outline-dark w-100"*/}
            {/*                        onClick={() => {return}}>*/}
            {/*                    <FontAwesomeIcon icon={faPlus}/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*    </ol>*/}
            {/*</div>*/}
        </div>
    );
}
export default RecipeStepList;