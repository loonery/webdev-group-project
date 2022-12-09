import {useState} from "react";

const RecipeHeader = ({recipeName, recipeAuthor, editing}) => {

    const [description, setDescription] = useState("");
    const [name, setName] = useState(recipeName);
    const [recipeNotes, setRecipeNotes] = useState("notes");

    return(
        /*this row houses the recipe information section and its input fields*/
        <div className={"row"}>

            {/*title text*/}
            {!editing &&
                <>
                <div className="d-flex justify-content-center mb-1">
                    <div className="fs-2">{recipeName}</div>
                </div>
                <div className="d-flex justify-content-center mb-1">
                    <div className="fs-6">{recipeAuthor}</div>
                </div>
                </>
            }
            {editing &&
                <div className="d-flex justify-content-center my-3">
                    <div className="form-floating w-50">
                        <input className="form-control"
                               id={"titleInput"}
                               placeholder={"Recipe title"}
                               defaultValue={recipeName}
                               value={name}
                               onChange={(event) => setName(event.target.value)}
                        />
                        <label htmlFor="titleInput">Recipe title</label>
                    </div>
                </div>
            }



            {/*Description of recipe*/}
            <div className="mt-3">
                <div className="fs-4 border-top mt-2 pt-2">Description</div>
                <div className="rounded pe-3">
                    {!editing && description}
                    {editing &&
                        <div className="form-group mt-2">
                            <textarea className="form-control"
                                      rows={4}
                                      onChange={(event) => {setDescription(event.target.value)}}
                                      value={description}
                            />
                        </div>
                    }
                </div>
            </div>

            {/*recipe notes*/}
            {/*todo: notes should only appear if there are notes (not a required field)*/}
            <div className="mt-3">
                <div className="fs-4">Notes</div>
                <div className="pb-3 pe-3 rounded">
                    {!editing && recipeNotes}
                    {editing &&
                        <div className="form-group mt-2">
                            <textarea className="form-control"
                                      rows={2}
                                      onChange={(event) => {setRecipeNotes(event.target.value)}}
                                      value={recipeNotes}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default RecipeHeader;