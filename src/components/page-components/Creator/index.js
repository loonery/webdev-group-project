import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faBoxesStacked} from "@fortawesome/free-solid-svg-icons/faBoxesStacked";
import React, {useState} from "react";
import Recipe from "../../domain-components/recipe-components/Recipe";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {setCreatingRecipeThunk} from "../../../services/recipes-thunks";

const Creator = () => {

    const [creating, setCreating] = useState(false);
    const [creatingRecipe, setCreatingRecipe] = useState(false);

    const dispatch = useDispatch();

    const {currentUser} = useSelector((state) => state.users)
    const recipe = useSelector((state) => state.createRecipe)

    console.log(recipe)

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
                                    console.log(recipe)
                                    dispatch(setCreatingRecipeThunk())
                                }}>
                            Create a Recipe
                            &ensp;<FontAwesomeIcon icon={faCoffee}/>
                        </button>
                    </div>

                    {/*todo - disable this if the user is not premium*/}
                    <div className="col">
                        <button className="btn btn-dark w-100"
                                onClick={() => {}}>
                            Create a Recipe Collection
                            &ensp;<FontAwesomeIcon icon={faBoxesStacked}/>
                        </button>
                    </div>

                    {recipe.creating && recipe.creatingRecipe &&
                        <Recipe modal={false} show={false} showFunction={() => {
                            return
                        }}/>
                    }

                </div>
            </>
    )


}
export default Creator;