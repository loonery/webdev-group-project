const CreateRecipe = () => {

    // todo: style the textareas to not allow resizing

    return(
        <>
            <div className="row border rounded mt-3 pt-3 ps-3 pb-3 pe-3">
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

                {/*ingredients section */}
                <div className="pt-4 fs-2">Ingredients</div>

                {/*this row houses the ingredients input field and related button*/}
                <div className="row">

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
                        <button className="btn btn-primary btn-dark w-100 mt-3">Add Ingredient</button>
                    </div>
                </div>

                {/*ingredient list*/}
                {/*todo - implement ingredient deleting (as we did with the tuitslist)*/}
                <div className="mt-3">
                    <ul className="list-group">
                        <li className="list-group-item">ingredient</li>
                        <li className="list-group-item">ingredient</li>
                        <li className="list-group-item">ingredient</li>
                        <li className="list-group-item">ingredient</li>
                    </ul>
                </div>
            </div>


        </>
        );
}
export default CreateRecipe;