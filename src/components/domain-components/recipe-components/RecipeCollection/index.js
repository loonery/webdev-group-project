// todo: here the recipe collection should conditionally render based upon the state of the user's credentials
import AbridgedCollectionOrRecipe from "../../post-components/AbridgedCollectionOrRecipe";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";
import {faCancel} from "@fortawesome/free-solid-svg-icons/faCancel";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import currentUser from "../../../page-components/Profile/CurrentUser";

const DomainItemCollection = ({author = {firstName: "",
                                                                      lastName : ""},
                                  recipesInCollection = []}
) => {

    const [editingCollection, setEditingCollection] = useState(false);
    const [collectionTitleInput, setCollectionTitleInput] = useState(author.firstName + "'s Created Recipes");
    const [collectionDescriptionInput, setCollectionDescriptionInput] = useState("Coffee recipes made by " + author.firstName);

    return (
        <div className="card">
            <div className="card-header">
                {/* #################################### NOT EDITING HEADER ####################################*/}
                {/*the collection title*/}
                {!editingCollection &&
                    <>
                        <div className="d-flex justify-content-between pb-1">
                            <div className="fs-1">{collectionTitleInput}</div>
                            <div className="pt-2">
                                <button className="btn btn-outline-dark rounded-pill"
                                        onClick={()=>setEditingCollection(true)}>
                                    <FontAwesomeIcon icon={faPencil}/>
                                </button>
                            </div>
                        </div>

                        {/*author and collection metadata*/}
                        <div className="fs-6 text-secondary">
                            <span>{author.firstName + " " + author.lastName}</span>
                            <span className="fs-6">&ensp;&middot;&ensp;</span>
                        </div>

                        {/*collection description*/}
                        <div className="border-top mt-2 pt-2 ps-1">
                            <div className="fs-6 ps-1">
                            </div>
                        </div>
                    </>
                }
                {/*######################################## EDITING HEADER ########################################*/}
                {editingCollection &&
                    <>
                        <div className="d-flex justify-content-between pe-2 py-3">
                            <button className="btn btn-outline-dark rounded-pill"
                                    onClick={()=> {
                                        return;
                                    }}>
                                <FontAwesomeIcon icon={faSave}/>
                            </button>

                            <button className="btn btn-outline-dark rounded-pill"
                                    onClick={()=>setEditingCollection(false)}>
                                <FontAwesomeIcon icon={faCancel}/>
                            </button>
                        </div>

                        {/*collection title input*/}
                        <div className="d-flex pb-1">
                            <div className="input-group input-group-lg flex-grow-1">
                                <input className="form-control"
                                       type="text"
                                       id="collectionTitleInput"
                                       defaultValue={collectionTitleInput}
                                       value={collectionTitleInput}
                                       onChange={(event) => setCollectionTitleInput(event.target.value)}
                                       placeholder="Enter the collection title here"
                                />
                            </div>
                        </div>

                        {/*collection description input*/}
                        <div className="border-top mt-2 pt-2">
                            <div className="input-group input-group-sm fs-6">
                                <input className="form-control"
                                       type="text"
                                       id="collectionTitleInput"
                                       defaultValue={collectionDescriptionInput}
                                       value={collectionDescriptionInput}
                                       onChange={(event) => setCollectionDescriptionInput(event.target.value)}
                                       placeholder="Enter the collection's description here"
                                />
                            </div>
                        </div>
                    </>
                }
            </div>

            {/*######################################## LIST OF DOMAIN ITEMS ########################################*/}
            {/*list of abridged domain items renders in the card body*/}
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {editingCollection &&
                        <li className="list-group-item pb-4">
                            <button className="btn btn-outline-dark w-100">
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </li>
                    }
                    {recipesInCollection.length >= 0 &&
                         <>
                             {
                                recipesInCollection.map((recipe, index) => (
                                    <li className="list-group-item">
                                        {/*// todo: make sure these are rendered as recipes*/}
                                        <AbridgedCollectionOrRecipe recipe={recipe}
                                                                    editingParentComponent={editingCollection}/>
                                    </li>
                                ))
                             }
                         </>
                    }
                    {recipesInCollection.length === 0 &&
                     <>
                         <li className="list-group-item">
                             <span className="text-secondary">
                                 It looks like you haven't made any recipes...
                             </span>
                         </li>
                     </>
                    }
                </ul>
            </div>
        </div>
    );
}
export default DomainItemCollection;