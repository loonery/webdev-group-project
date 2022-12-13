import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faBoxesStacked} from "@fortawesome/free-solid-svg-icons/faBoxesStacked";
import React, {useState} from "react";
import Recipe from "../../domain-components/recipe-components/Recipe";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {setCreatingCollectionThunk, setCreatingRecipeThunk} from "../../../services/recipes-thunks";
import RecipeCollection from "../../domain-components/recipe-components/RecipeCollection";

const Creator = () => {

    const [creating, setCreating] = useState(false);
    const [creatingRecipe, setCreatingRecipe] = useState(false);

    const dispatch = useDispatch();

    const {currentUser} = useSelector((state) => state.users)
    const recipe = useSelector((state) => state.createRecipe)

    console.log("CREATING RECIPE", recipe.creating && recipe.creatingRecipe)
    console.log("CREATING COLLECTION", recipe.creating && recipe.creatingCollection)

    if (!currentUser)
        return (
            <>
                <div className="row justify-content-center align-content-center  text-center fs-1 fw-bold">
                    You are not logged in. <br/>
                    Please log in to create recipes and collections.
                    <div className={"row justify-content-center align-content-center"}>
                        <div className="text-center">
                            <Link to="/login">
                                <button type="button"
                                        className="btn btn-primary fw-bold text-bg-success me-4">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button type="button"
                                        className="btn btn-primary fw-bold text-bg-secondary ms-4">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </>
        )

    else
        return (
            <>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-dark w-100"
                                onClick={() => {
                                    dispatch(setCreatingRecipeThunk())
                                }}>
                            Create a Recipe
                            &ensp;<FontAwesomeIcon icon={faCoffee}/>
                        </button>
                    </div>

                    {currentUser.role === "PREMIUM" &&
                    <div className="col">
                        <button className="btn btn-dark w-100"
                                onClick={() => {dispatch(setCreatingCollectionThunk())}}>
                            Create a Recipe Collection
                            &ensp;<FontAwesomeIcon icon={faBoxesStacked}/>
                        </button>
                    </div>}

                    {recipe.creating && recipe.creatingRecipe &&
                        <Recipe modal={false} show={false} showFunction={() => {
                            return
                        }}/>
                    }

                    {recipe.creating && recipe.creatingCollection &&
                        <RecipeCollection modal={false} show={false} showFunction={() => {
                            return
                        }}/>
                    }

                </div>
            </>
    )


}
export default Creator;