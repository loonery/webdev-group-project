import RecipeStepEditRecipe from "./Steps";
import EditStep from "./Steps/EditStep";
import EditIngredient from "./EditIngredient";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";
import {faCancel} from "@fortawesome/free-solid-svg-icons";

const CreateAndEditRecipe = () => {

    // todo: style the textareas to not allow resizing
    return(
        <>
            <div className="row border rounded mt-3 pt-3 ps-3 pb-3 pe-3">

                <div className="d-flex pb-4">
                    {/*back button*/}
                    <div className="me-auto">
                        <button className="btn btn-outline-dark rounded-pill"><FontAwesomeIcon icon={faCancel}/></button>
                    </div>

                    {/*edit button*/}
                    <div>
                        <button className="btn btn-outline-dark rounded-pill"><FontAwesomeIcon icon={faSave}/></button>
                    </div>
                </div>

                {/*outer col houses the entire form*/}
                <div className={"col"}>

                    {/*this row houses the recipe information section and its input fields*/}
                    <div className={"row"}>
                        <div className="fs-2"> Recipe information</div>
                        <div className="form-floating mt-3">
                            <input className="form-control"
                                   id="recipe-name"
                                   placeholder="Recipe Name"
                                   value=""
                            />
                            <label className="ms-2" htmlFor="recipe-name">Recipe Name</label>
                        </div>

                        <div className="mt-3">
                            <textarea className="form-control"
                                   id="recipe-notes"
                                   rows={3}
                                   placeholder="What specific information should others know about this recipe?"
                                   value=""
                            />
                        </div>

                        <div className="mt-3">
                            <textarea className="form-control"
                                   id="recipe-description"
                                   placeholder="How would you describe this recipe for yourself and for others?"
                                   rows={3}
                                   value=""
                            />
                        </div>
                    </div>

                    {/* This row houses the ingredients section */}
                    <div className="row mt-3">
                        <div className="fs-2 border-0 border-top">Ingredients</div>
                        {/*todo: implement custom wrapping styling here*/}
                        <div className="text-secondary fs-6">
                            Enter the ingredients for your recipe using
                            the input field and accompanying button below.
                        </div>

                        {/*this row houses the ingredients input field and related button*/}
                        {/*add ingredient input field here*/}
                        <div className='col'>
                            <div className="mt-3">
                                <input className="form-control"
                                       id="ingredients-input"
                                       placeholder="ie. whole-bean coffee, heavy cream, saline drops, etc."
                                       value=""
                                />
                            </div>
                        </div>

                        {/*add ingredient button column*/}
                        <div className="col">
                            <button className="btn btn-secondary w-100 mt-3">Add Ingredient</button>
                        </div>

                        {/*ingredient list*/}
                        {/*todo - implement ingredient deleting (as we did with the tuitslist)*/}
                        <div className="mt-3">
                            {/*todo: factor this ul out into a list-based component*/}
                            <ul className="list-group">
                                <EditIngredient/>
                                <EditIngredient/>
                                <EditIngredient/>
                                <EditIngredient/>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        {/*todo: factor this ul out into a list-based component*/}
                        <div className="fs-2 border-0 border-top">Recipe Steps</div>
                        <div className="mt-3">
                            <ol className="list-group list-group-numbered">
                                <RecipeStepEditRecipe/>
                                <RecipeStepEditRecipe/>
                                <RecipeStepEditRecipe/>
                                <RecipeStepEditRecipe/>
                                <RecipeStepEditRecipe/>
                                <EditStep/>
                            </ol>
                            <div className="mt-2">
                                <button className="btn btn-secondary w-100">Add Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
}
export default CreateAndEditRecipe;
