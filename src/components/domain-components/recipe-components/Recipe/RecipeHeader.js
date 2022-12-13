import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateRecipieHeaderThunk} from "../../../../services/recipes-thunks";

const RecipeHeader = () => {

    const recipe = useSelector((state) => state.createRecipe)

    const [description, setDescription] = useState(recipe.name);
    const [name, setName] = useState(recipe.description);
    const [notes, setRecipeNotes] = useState(recipe.notes);

    const dispatch = useDispatch();

    const syncInfo = () => {
        dispatch(updateRecipieHeaderThunk({name, notes, description}))
    }

    return(
        /*this row houses the recipe information section and its input fields*/
        <div className={"row"}>

            {/*title text*/}

            <div className="d-flex justify-content-center my-3">
                <div className="form-floating w-50">
                    <input className="form-control"
                           id={"titleInput"}
                           placeholder={"Recipe title"}
                           defaultValue={recipe.name}
                           onChange={(event) => {
                               setName(event.target.value)
                               syncInfo()}}
                    />
                    <label htmlFor="titleInput">Recipe title</label>
                </div>
            </div>



            {/*Description of recipe*/}
            <div className="mt-3">
                <div className="fs-4 border-top mt-2 pt-2">Description</div>
                <div className="rounded pe-3">
                    <div className="form-group mt-2">
                            <textarea className="form-control"
                                      rows={4}
                                      placeholder={"Enter description"}
                                      defaultValue={recipe.description}
                                      onChange={(event) => {
                                          setDescription(event.target.value)
                                          syncInfo()
                                      }}></textarea>
                        </div>
                </div>
            </div>

            {/*recipe notes*/}
            {/*todo: notes should only appear if there are notes (not a required field)*/}
            <div className="mt-3">
                <div className="fs-4">Notes</div>
                <div className="pb-3 pe-3 rounded">
                    <div className="form-group mt-2">
                        <textarea className="form-control"
                                  rows={2}
                                  placeholder={"Enter recipe notes"}
                                  defaultValue={recipe.notes}
                                  onChange={(event) => {
                                      setRecipeNotes(event.target.value)
                                      syncInfo()
                                  }}></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RecipeHeader;