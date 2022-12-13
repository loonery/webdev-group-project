// react library imports
import {useEffect, useState} from "react";

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
import {findUserByIdThunk} from "../../../../services/user-thunks";

const RecipeDisplay = ({modal, show, showFunction, recipe_data, user_data}) => {

    // invoke the findTuitsThunk to fetch tuits from the server and put them in the front-end store
    const recipeName = "Ryan's Cortado";
    const userProfilePicture = "./local_images/dummy_webdev_2.jpg";
    const recipeAuthor = 'Ryan Looney';
    const recipeDescription = "A cortado is a beverage consisting of espresso mixed with a roughly equal amount of" +
        " warm milk to reduce the acidity.[1][2] The milk in a cortado is steamed, but not frothy and \"texturized\" as in many Italian coffee drinks.[3] The cortado comes from Spain, most likely Madrid, where it is commonly served.["
    const recipeNotes = "Takes about 10 minutes to prepare and serve.";

    const [editing, setEditing] = useState(false);
    const [editable, setEditable] = useState(true);

    const dispatch = useDispatch();

    // const {users, loading} = useSelector((state) => state.users)
    // const user = users;
    // console.log(user)
    // useEffect(() => {dispatch(findUserByIdThunk(recipe_data.author))}, []);

    const {currentUser, loading} = useSelector((state) => state.users);
    console.log(currentUser)



    //const user = useEffect(() => userStore.dispatch(findUserByIdThunk(recipe_data.author)), []);

    //console.log("recipe display user from recipe display: ", user? user : "no");

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
                            <div className="mt-3">
                                <div className="fs-4 border-top mt-2 pt-2">Description</div>
                                <div className="rounded pe-3">
                                    <div className="form-group mt-2">
                                        <p>{recipe_data.recipeDescription}</p>
                                    </div>
                                </div>
                            </div>

                            {/*list of ingredients*/}
                            <div className="fs-2 border-0 border-top">Ingredients</div>
                                <div className="text-secondary fs-6">
                                    <p>{recipe_data.ingredients}</p>
                                </div>

                            {/*list of steps to complete the recipe*/}
                            <div className="fs-2 border-0 border-top">Recipe Steps</div>
                            <div className="text-secondary fs-6">
                                <p>{recipe_data.steps}</p>
                            </div>
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
export default RecipeDisplay;
