import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons/faX";
import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";
const EditableStep = () => {
    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">Brief step</div>
                <div className="text-secondary">This is where the more specific step details go</div>
            </div>

            {/*delete step from recipe*/}
            <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">
                <FontAwesomeIcon icon={faX}/>
            </button>

            {/* edit step in recipe */}
            <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">
                <FontAwesomeIcon icon={faPencil}/>
            </button>
        </li>
    );
}
export default EditableStep;