// react library imports
import React, {useState} from "react";

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
import {createRecipeThunk, exitCreatingRecipeThunk} from "../../../../services/recipes-thunks";
import Creator from "../../../page-components/Creator";
import {Link} from "react-router-dom";

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
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const [returned, setReturned] = useState(false);

    //fetch description from the createRecipe reducer
    const recipe = useSelector(state => state.createRecipe);
    const {currentUser, loading} = useSelector((state) => state.users);

    const dispatch = useDispatch();

    console.log(recipe)

    const checkRecipe = () => {
        if (recipe.name === '') {
            setMessage('Please enter a recipe title.');
            return false
        }
        else if (recipe.description === '') {
            setMessage('Please enter a description.');
            setSuccess(false);
            return false
        }
        else if (recipe.notes === '') {
            setMessage('Please enter your notes.');
            setSuccess(false);
            return false
        }
        else if (recipe.ingredients === '') {
            setMessage('Please enter your ingredients.');
            setSuccess(false);
            return false
        }

        else if (recipe.steps === '') {
            setMessage('Please enter your steps.');
            setSuccess(false);
            return false
        }
        else {
            setMessage('You have successfully created this recipe');
            return true
        }
    }


    // todo: style the text area to not allow resizing
    return(
        <>
            {success && returned && message !== '' && <div className={'m-2 p-3 alert alert-success'}>{message}</div>}
            {!success && returned && <div className={'m-2 p-3 alert alert-danger'}>{message}</div>}
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
                                    onClick={() => dispatch(exitCreatingRecipeThunk())}>
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
                                        if (checkRecipe()) {
                                            const r = {
                                                author: currentUser._id,
                                                recipeName: recipe.name,
                                                recipeDescription: recipe.description,
                                                recipeNote: recipe.notes,
                                                ingredients: recipe.ingredients,
                                                steps: recipe.steps
                                            }
                                            dispatch(createRecipeThunk(r));
                                        }
                                        setReturned(true);

                                    }}>
                                <FontAwesomeIcon icon={faIndustry}/> Generate Recipe
                            </button>
                        </div>
                    </div>

                    {/*outer col houses the entire form*/}
                    <div className={"col"}>
                        <RecipeHeader/>

                        {/*list of ingredients*/}
                        <IngredientsList/>

                        {/*list of steps to complete the recipe*/}
                        <RecipeStepList/>
                    </div>
                </div>
            }
        </>
    );
}
export default Recipe;
