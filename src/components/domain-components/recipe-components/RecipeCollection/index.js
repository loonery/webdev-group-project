import AbridgedRecipe from "../AbridgedRecipe";

const RecipeCollection = () => {


    // todo: make this array populated with elements
    const recipeArray = [{},{},{},{},{},{}];

    return (
        <>
            <div className="card">
                <ul className="list-group">
                    <div className="card-header fs-3 border-bottom-0">
                        <div className="fs-3">Collection Title</div>
                        <div className="fs-6 text-secondary">Collection description</div>
                    </div>
                    {/*todo : the abridged recipes should be fed data*/}
                    {recipeArray.map((recipe, index) => {
                        return(
                            <li className="list-group-item"><AbridgedRecipe/></li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}
export default RecipeCollection;