// todo: here the recipe collection should conditionally render based upon the state of the user's credentials
import AbridgedCollectionOrRecipe from "../../post-components/AbridgedCollectionOrRecipe";

const RecipeCollection = () => {

    const recipesInCollection = [{}, {}, {}, {}, {}, {}];

    return (
        <div className="card">
            <div className="card-header">

                {/*the collection title*/}
                <div className="pb-1 fs-1">Collection Title</div>

                {/*author and collection metadata*/}
                <div className="fs-6 text-secondary">
                    <span>Collection Author</span>
                    <span className="fs-6">&ensp;&middot;&ensp;</span>
                    <span>5 saves</span>
                </div>

                {/*collection description*/}
                <div className="border-top mt-2 pt-2 ps-1">
                    <div className="fs-6 ps-1">Here is where the collection description will go</div>
                </div>
            </div>

            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        recipesInCollection.map((recipe, index) => (
                            <li className="list-group-item">
                                {/*// todo: make sure these are rendered as recipes*/}
                                <AbridgedCollectionOrRecipe/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
export default RecipeCollection;