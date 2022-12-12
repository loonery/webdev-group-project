// react library imports
import {useState} from "react";

// fontawesome component imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCancel} from "@fortawesome/free-solid-svg-icons/faCancel";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";

// my component imports
import RecipeStepList from "../RecipeStep/RecipeStepList";
import IngredientsList from "../Ingredient/IngredientsList";
import RecipeHeader from "./RecipeHeader";

// react component imports
import {Modal} from "react-bootstrap";
import {faGenderless} from "@fortawesome/free-solid-svg-icons/faGenderless";
import {faSignsPost} from "@fortawesome/free-solid-svg-icons/faSignsPost";
import {faIndustry} from "@fortawesome/free-solid-svg-icons/faIndustry";
import {useDispatch, useSelector} from "react-redux";
import {createRecipeThunk} from "../../../../services/recipes-thunks";

const Recipe = ({modal, show, showFunction}) => {

    // invoke the findTuitsThunk to fetch tuits from the server and put them in the front-end store
    const recipeName = "Ryan's Cortado";
    const userProfilePicture = "./local_images/dummy_webdev_2.jpg";
    const recipeAuthor = 'Ryan Looney';
    const recipeDescription = "A cortado is a beverage consisting of espresso mixed with a roughly equal amount of" +
        " warm milk to reduce the acidity.[1][2] The milk in a cortado is steamed, but not frothy and \"texturized\" as in many Italian coffee drinks.[3] The cortado comes from Spain, most likely Madrid, where it is commonly served.["
    const recipeNotes = "Takes about 10 minutes to prepare and serve.";

    const [editing, setEditing] = useState(false);
    const [editable, setEditable] = useState(true);

    //fetch description from the createRecipe reducer
    const recipe = useSelector(state => state.createRecipe);
    const currentUser = useSelector((state) => state.users)

    const dispatch = useDispatch();


    // todo: style the text area to not allow resizing
    return(
        <>
            {modal &&
            <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body className="modal-body">
                    <div className="row pt-3 ps-3 pb-3 pe-3">
                        <div className="d-flex justify-content-between">

                            {/*back button*/}
                            <div>
                                {!editing &&
                                    <button className="btn btn-outline-dark rounded-pill"
                                            onClick={showFunction}>
                                        <FontAwesomeIcon icon={faArrowLeft}/>
                                    </button>
                                }
                                {editing &&
                                    <button className="btn btn-outline-dark rounded-pill"
                                            onClick={() => {

                                            }}>
                                        <FontAwesomeIcon icon={faSave}/>
                                    </button>
                                }
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
                                          editing={editing}/>

                            {/*list of ingredients*/}
                            <IngredientsList editingRecipe={editing}/>

                            {/*list of steps to complete the recipe*/}
                            <RecipeStepList editingRecipe={editing}/>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            }
            {/*Component rendered NOT as a modal (rendered when initially creating) ################################*/}
            {!modal &&
                <div className="row pt-3 ps-3 pb-3 pe-3">
                    <div className="d-flex justify-content-between">

                        <div>
                            <button className="btn btn-outline-dark rounded-pill"
                                    onClick={() => {return}}>
                                <FontAwesomeIcon icon={faCancel}/> Cancel Editing
                            </button>
                        </div>

                        <img src={userProfilePicture}
                             className="rounded-circle"
                             height="75px"
                             width="75px"
                        />

                        <div>
                            <button className="btn btn-outline-dark rounded-pill"
                                    onClick={() => {
                                        setEditing(false);
                                        console.log("recipe/index.js");
                                        // console.log(recipe.name, recipe.description, recipe.notes);
                                        console.log('recipe = ', recipe);
                                        const r = {
                                            recipeName: recipe.name,
                                            recipeDescription: recipe.description,
                                            recipeNote: recipe.notes,
                                            ingredients: recipe.ingredients,
                                            steps: recipe.steps
                                        }

                                        dispatch(createRecipeThunk(r)) ;

                                    }}>
                                <FontAwesomeIcon icon={faIndustry}/> Generate Recipe
                            </button>
                        </div>
                    </div>

                    {/*outer col houses the entire form*/}
                    <div className={"col"}>
                        <RecipeHeader recipeName={recipeName}
                                      recipeNotes={recipeNotes}
                                      recipeAuthor={recipeAuthor}
                                      editing={true}/>

                        {/*list of ingredients*/}
                        <IngredientsList editingRecipe={true}/>

                        {/*list of steps to complete the recipe*/}
                        <RecipeStepList editingRecipe={true}/>
                    </div>
                </div>
            }
        </>
    );
}
export default Recipe;
