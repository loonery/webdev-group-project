import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";

const Ingredient = () => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">

            <div className="ms-2 mt-2 me-auto">
                I am an ingredient
            </div>
            <div>
                <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">
                    <FontAwesomeIcon icon={faX}/>
                </button>

                {/*save changes to step*/}
                <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">
                    <FontAwesomeIcon icon={faPencil}/>
                </button>
            </div>
        </li>
    )
}
export default Ingredient;