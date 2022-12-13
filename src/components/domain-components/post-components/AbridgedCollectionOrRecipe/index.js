import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {useState} from "react";
import Recipe from "../../recipe-components/Recipe";
import RecipeDisplay from "../../recipe-components/Recipe/RecipeDisplay";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeByIdThunk} from "../../../../services/recipes-thunks";
import {findUserByIdThunk, findUserThunk} from "../../../../services/user-thunks";

// the abridged recipe is a recipe's or collection's representation that appears outside its details page
const AbridgedDomainItem = (
    {
        editingParentComponent,
        // recipe_summary = "A coffee recipe",
        recipe = {
            "author": "6396a451c5a65b730eb7932a",
            "recipeName": "Cortado",
            "recipeDescription": "For a snowy day",
            "recipeNote": "Decaf option",
            "ingredients": "Espress",
            "steps": "Brew espress",
        }
    },



    ) => {

    // todo: determine the how the domain object type determines the rendering of this component
        // chevron button needs to display a different kind of details page than a modal because nested modals
        // are not permitted
    const [showingDomainItem, setShowingDomainItem] = useState(false);

    return (
        <>
            {/*pass the recipe modal component information about whether it's showing itself, and how to close itself*/}
            <RecipeDisplay modal={true}
                           show={showingDomainItem} showFunction={() => setShowingDomainItem(false)}
                           recipe_data ={recipe}
            />

            <div className="p-1">
                <div className="d-flex">

                    {/* this flex div houses all the content in the abridged recipe, as well as the arrow */}
                    <div className="flex-grow-1 me-4">
                        <div>
                            <span className="fs-5"> {
                                recipe? recipe.recipeName : "Recipe Name"
                            } </span>
                            <span className="fs-5">&ensp;&middot;&ensp;</span>
                            {/*<span className="text-secondary">Recipe Author</span>*/}
                        </div>

                        {/*todo: cut the description once it reaches a certain length*/}
                        {!recipe &&
                            <p className="pt-1 text-secondary">
                                here are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't look
                                even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                                sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                                generators on the Internet tend to repeat predefined chunks as necessary, making this the
                                first true generator on the Internet.
                            </p>
                        }
                        {
                            recipe &&
                            <p className="pt-1 text-secondary">
                                {/*{recipe.recipeName}<br/>*/}
                                {/*{recipe.recipeNote}<br/>*/}
                                {recipe.recipeDescription}<br/>
                                {/*{recipe.ingredients}<br/>*/}
                                {/*{recipe.steps}<br/>*/}
                            </p>

                        }


                    </div>

                    {/* chevron button on any abridged recipe or collection */}
                    {/*todo: parameterize chevron button function such that when the object being rendered is a collection*/
                        /*that we go to a details page rather than a modal*/
                    }

                    {/*This section dynamically renders the button on the abridged items depending on whether the
                     collection is being edited*/}
                    {!editingParentComponent &&
                        <div className="align-self-center">
                            <button className="btn btn-outline-dark"
                                onClick={() => setShowingDomainItem(true)}>
                                <FontAwesomeIcon icon={solid('chevron-right')} size={"lg"}/>
                            </button>
                        </div>
                    }
                    {editingParentComponent &&
                        <div className="align-self-center ms-2">
                            <button className="btn btn-outline-dark btn-sm"
                                    onClick={() => {
                                        return
                                    }}>
                                <FontAwesomeIcon icon={solid('minus')} size={"lg"}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
export default AbridgedDomainItem;