import RecipeStep from "../CreateRecipe/Steps/Step";
import Ingredient from "../CreateRecipe/Ingredient";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";

const RecipeDetails = () => {

    const recipeName = "Ryan's Cortado";
    const recipeAuthor = 'Ryan Looney';
    const recipeDescription = "A cortado is a beverage consisting of espresso mixed with a roughly equal amount of" +
        " warm milk to reduce the acidity.[1][2] The milk in a cortado is steamed, but not frothy and \"texturized\" as in many Italian coffee drinks.[3] The cortado comes from Spain, most likely Madrid, where it is commonly served.["
    const recipeNotes = "Takes about 10 minutes to prepare and serve.";

    // todo: style the textareas to not allow resizing
    return(
        <>
            <div className="row border rounded mt-3 pt-3 ps-3 pb-3 pe-3">
                <div className="d-flex justify-content-between">
                    <div className="mr-auto">
                        <button className="btn btn-outline-dark rounded-pill"><FontAwesomeIcon icon={faArrowLeft}/></button>
                    </div>
                    <div className="ms-auto">
                        <button className="btn btn-outline-dark rounded-pill"><FontAwesomeIcon icon={faPencil}/></button>
                    </div>
                </div>

                {/*outer col houses the entire form*/}
                <div className={"col"}>

                    {/*this row houses the recipe information section and its input fields*/}
                    <div className={"row"}>

                        {/*title text*/}
                        <div className="d-flex justify-content-center mb-1">
                            <div className="fs-2">{recipeName}</div>
                        </div>
                        <div className="d-flex justify-content-center mb-1">
                            <div className="fs-6">{recipeAuthor}</div>
                        </div>

                        {/*Description of recipe*/}
                        <div className="mt-3">
                            <div className="fs-5">Description</div>
                            <div className="pt-2 pe-3 border-top rounded">
                                {recipeDescription}
                            </div>
                        </div>

                        {/*recipe notes*/}
                        {/*todo: notes should only appear if there are notes (not a required field)*/}
                        <div className="mt-3">
                            <div className="fs-5">Notes</div>
                            <div className="pt-2 pb-3 pe-3 border-top rounded">
                                {recipeNotes}
                            </div>
                        </div>
                    </div>

                    {/* This row houses the ingredients section */}
                    <div className="row mt-3">
                        <div className="fs-2 border-0 border-top">Ingredients</div>
                        {/*todo: implement custom wrapping styling here*/}

                        {/*ingredient list*/}
                        {/*todo - implement ingredient deleting (as we did with the tuitslist)*/}
                        <div className="mt-3">

                            {/*todo: factor this ul out into a list-based component*/}
                            <ul className="list-group">
                                <Ingredient/>
                                <Ingredient/>
                                <Ingredient/>
                                <Ingredient/>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        {/*todo: factor this ul out into a list-based component*/}
                        <div className="fs-2 border-0 border-top">Recipe Steps</div>
                        <div className="mt-3">
                            <ol className="list-group list-group-numbered">
                                <RecipeStep/>
                                <RecipeStep/>
                                <RecipeStep/>
                                <RecipeStep/>
                                <RecipeStep/>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RecipeDetails;
