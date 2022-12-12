import {useDispatch} from "react-redux";
import {updateRecipieIngredientsThunk} from "../../../../services/recipes-thunks";
import {useState} from "react";

const IngredientsList = ({editingRecipe}) => {

    let [ingredients, setIngredients] = useState('')

    const dispatch = useDispatch();

    const syncInfo = () => {
        dispatch(updateRecipieIngredientsThunk(ingredients))
    }

    //const ingredients = [{}, {}, {}, {}];
    return (
        <div className="row mt-3">

            {/* section header */}
            <div className="fs-2 border-0 border-top">Ingredients</div>
            {editingRecipe &&
                <div className="text-secondary fs-6">
                    Enter the ingredients for your recipe below.
                    <textarea className="form-control" rows="4"
                              placeholder={"Enter ingredients"}
                        onChange={(event) => {
                        setIngredients(event.target.value)
                        syncInfo() }}></textarea>
                </div>
            }


            {/*/!*ingredient list*!/*/}
            {/*<div className="mt-3">*/}
            {/*    <ul className="list-group">*/}

            {/*        /!* Map each step in the recipe to a Step component *!/*/}
            {/*        {ingredients.map((step, index) => (*/}
            {/*            <Ingredient key={index} editable={editingRecipe}/>*/}
            {/*        ))}*/}

            {/*        /!*append 'add ingredient' button to the end of the list when the recipe is being edited*!/*/}
            {/*        {editingRecipe &&*/}
            {/*            <div className='mt-2'>*/}
            {/*                <button className="btn btn-outline-dark w-100">*/}
            {/*                    <FontAwesomeIcon icon={faPlus}/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
}
export default IngredientsList;