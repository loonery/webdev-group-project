import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findRecipesThunk} from "../../../../services/recipes-thunks";
import RecipeStepList from "../RecipeStep/RecipeStepList";
import IngredientsList from "../Ingredient/IngredientsList";
import RecipeHeader from "./RecipeHeader";
import {faCancel} from "@fortawesome/free-solid-svg-icons/faCancel";

const Recipe = () => {

    const {recipes, loading} = useSelector(state => state.recipesData); // get tuits and loading flag from reducer
    console.log(recipes);
    const dispatch = useDispatch();

    // invoke the findTuitsThunk to fetch tuits from the server and put them in the front-end store
    useEffect(() => {dispatch(findRecipesThunk())}, [])

    const recipeName = "Ryan's Cortado";
    const userProfilePicture = "./local_images/dummy_webdev_2.jpg";
    const recipeAuthor = 'Ryan Looney';
    const recipeDescription = "A cortado is a beverage consisting of espresso mixed with a roughly equal amount of" +
        " warm milk to reduce the acidity.[1][2] The milk in a cortado is steamed, but not frothy and \"texturized\" as in many Italian coffee drinks.[3] The cortado comes from Spain, most likely Madrid, where it is commonly served.["
    const recipeNotes = "Takes about 10 minutes to prepare and serve.";

    const [editing, setEditing] = useState(false);
    const [editable, setEditable] = useState(true);


    // todo: style the text area to not allow resizing
    return(
        <>
            <div className="row border rounded mt-3 pt-3 ps-3 pb-3 pe-3">
                <div className="d-flex justify-content-between">
                    {/*back button*/}
                    <div className="">
                        <button className="btn btn-outline-dark rounded-pill">
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </button>
                    </div>

                    <div>
                        <img src={userProfilePicture}
                             className="rounded-circle"
                             height="75px"
                             width="75px"
                        />
                    </div>

                    {/*edit button*/}
                    <div>
                        {!editing && editable &&
                            <button className="btn btn-outline-dark rounded-pill"
                                    onClick={() => {setEditing(true)}}>
                                <FontAwesomeIcon icon={faPencil}/>
                            </button>
                        }
                        {editing && editable &&
                            <button className="btn btn-outline-dark rounded-pill"
                                    onClick={() => {setEditing(false)}}>
                                <FontAwesomeIcon icon={faCancel}/>
                            </button>
                        }
                    </div>
                </div>

                {/*outer col houses the entire form*/}
                <div className={"col"}>
                    <RecipeHeader recipeName={recipeName}
                                  recipeNotes={recipeNotes}
                                  recipeAuthor={recipeAuthor}
                                  editing={editing}
                    />

                    {/*list of ingredients*/}
                    <IngredientsList editingRecipe={editing}/>

                    {/*list of steps to complete the recipe*/}
                    <RecipeStepList editingRecipe={editing}/>

                </div>
            </div>
        </>
    );
}
export default Recipe;
