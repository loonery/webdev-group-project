import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCancel} from "@fortawesome/free-solid-svg-icons/faCancel";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";

const EditStep = () => {
    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 flex-grow-1">

                {/* floating input field for the step title*/}
                <div className="form-floating mb-2">
                    <input id="brief-step-input"
                           className="form-control form-control-sm"
                           defaultValue={"Brief Step"}
                           placeholder="Brief step"
                    />
                    <label htmlFor="brief-step-input">Step title</label>
                </div>

                {/* floating input field for step details */}
                <div className="form-floating">
                    <input id="brief-step-input"
                           className="form-control form-control-sm"
                           defaultValue={"This is where the more specific details go"}
                           placeholder="This is where the more specific step details go"
                    />
                    <label htmlFor="brief-step-input">Step details</label>
                </div>
            </div>

            {/*this div holds buttons*/}
            <div>
                {/* cancel changes made to step */}
                <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">
                    <FontAwesomeIcon icon={faCancel}/>
                </button>

                {/*save changes to step*/}
                <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">
                    <FontAwesomeIcon icon={faSave}/>
                </button>
            </div>
        </li>
    );
}
export default EditStep;