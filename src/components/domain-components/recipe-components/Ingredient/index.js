import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons/faX";
import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";
import {faCancel} from "@fortawesome/free-solid-svg-icons/faCancel";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";
import {useDispatch} from "react-redux";

const Ingredient = ({editable}) => {

    const [editing, setEditing] = useState(false);
    const [ingredientTitle, setIngredientTitle] = useState("I am an ingredient");
    const [ingredientAmount, setIngredientAmount] = useState("ingredient amounts");

    const dispatch = useDispatch();

    console.log("Here")

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            {/* Editable but not being edited*/}
            {editable && !editing &&
                <>
                    <div className="flex-grow-1 ms-2 mt-2">
                        <span className="fs-5">{ingredientTitle}</span>
                        <div className="fs-6 text-secondary">{ingredientAmount}</div>
                    </div>

                    <div className='mt-2'>
                        {/*todo - implement delete functionality for steps*/}
                        <button className="btn btn-outline-dark rounded-pill ms-4">
                            <FontAwesomeIcon icon={faX}/>
                        </button>

                        {/* edit step in recipe */}
                        <button className="btn btn-outline-dark rounded-pill ms-4"
                                onClick={() => {setEditing(true)}}>
                            <FontAwesomeIcon icon={faPencil}/>
                        </button>
                    </div>
                </>
            }
            {editable && editing &&
                <>
                    <div className="flex-grow-1">
                        {/* floating input field for the ingredient title*/}
                        <div className="form-floating mb-2">
                            <input id="brief-step-input"
                                   className="form-control form-control-sm"
                                   onChange={(event) => {setIngredientTitle(event.target.value)}}
                                   value={ingredientTitle}
                                   defaultValue={""}
                                   placeholder="Ingredient title"
                            />
                            <label htmlFor="brief-step-input">Ingredient name</label>
                        </div>

                        {/* floating input field for ingredient amount */}
                        <div className="form-floating">
                            <input id="brief-step-input"
                                   className="form-control form-control-sm"
                                   onChange={(event) => {setIngredientAmount(event.target.value)}}
                                   value={ingredientAmount}
                                   defaultValue={"This is where the more specific details go"}
                                   placeholder="Ingredient amount"
                            />
                            <label htmlFor="brief-step-input">Ingredient amount</label>
                        </div>
                    </div>

                    {/* Cancel or Save Changes Buttons */}
                    <div>
                        {/* cancel changes made to step */}
                        <button className="btn btn-outline-dark rounded-pill ms-4 mt-1"
                                onClick={() => {setEditing(false)}}>
                            <FontAwesomeIcon icon={faCancel}/>
                        </button>

                        {/*save changes to step*/}
                        <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">
                            <FontAwesomeIcon icon={faSave}/>
                        </button>
                    </div>
                </>
            }
            {!editable && !editing &&
                <>
                    <div className="flex-grow-1 ms-2 mt-2">
                        <span className="fs-5">{ingredientTitle}</span>
                        <div className="fs-6 text-secondary">{ingredientAmount}</div>
                    </div>
                </>
            }
        </li>
    )
}
export default Ingredient;