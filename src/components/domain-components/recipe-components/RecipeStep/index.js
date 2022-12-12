import {useState} from "react";

// icons imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons/faX";
import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";
import {faCancel} from "@fortawesome/free-solid-svg-icons/faCancel";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";

const Step = ({editable}) => {

    // todo: make steps return dependent upon the context it is being viewed in?
    const [editing, setEditing] = useState(false);
    const [stepTitle, setStepTitle] = useState("This is a step title");
    const [stepDetails, setStepDetails] = useState("This is a step detail");

    return(
        <>
            {/*every step is contained within a list item*/}
            <li className="list-group-item d-flex justify-content-between align-items-start">
                {/*saved, editable recipe step (not being edited) */}
                {editable && !editing &&
                    <>
                        <div className="ms-2 flex-grow-1">
                            <div className="fw-bold">
                                {stepTitle}
                            </div>

                            <div className="text-secondary">
                                {stepDetails}
                            </div>
                        </div>

                        <div>
                            {/*todo - implement delete functionality for steps*/}
                            <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">
                                <FontAwesomeIcon icon={faX}/>
                            </button>

                            {/* edit step in recipe */}
                            <button className="btn btn-outline-dark rounded-pill ms-4 mt-1"
                                    onClick={() => {setEditing(true)}}>
                                <FontAwesomeIcon icon={faPencil}/>
                            </button>
                        </div>
                    </>
                }

                {/*editable step during editing*/}
                {editable && editing &&
                    <>
                        <div className="ms-2 flex-grow-1">
                            {/* floating input field for the step title*/}
                            <div className="form-floating mb-2">
                                <input id="brief-step-input"
                                        className="form-control form-control-sm"
                                        onChange={(event) => {setStepTitle(event.target.value)}}
                                        value={stepTitle}
                                        defaultValue={"Brief Step"}
                                        placeholder="Brief step"
                                />
                                <label htmlFor="brief-step-input">Step title</label>
                            </div>

                            {/* floating input field for step details */}
                            <div className="form-floating">
                                <input id="brief-step-input"
                                        className="form-control form-control-sm"
                                        onChange={(event) => {setStepDetails(event.target.value)}}
                                        value={stepDetails}
                                        defaultValue={"This is where the more specific details go"}
                                        placeholder="This is where the more specific step details go"
                                />
                                <label htmlFor="brief-step-input">Step details</label>
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

                {/* static, not editable step */}
                {!editable && !editing &&
                    <>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{stepTitle}</div>
                            <div className="text-secondary">{stepDetails}</div>
                        </div>
                    </>
                }
            </li>
        </>
    )}

export default Step;