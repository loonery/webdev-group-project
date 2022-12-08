import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {Modal} from "react-bootstrap";
import SearchBar from "../../../SearchBar";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

const LinkARecipeModal = ({show, showFunction}) => {

    return (
        <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body className="modal-body">
                <div className="row pt-3 ps-3 pb-3 pe-3">
                    <div className="d-flex justify-content-between">
                        {/*back button*/}
                        <div>
                            <button className="btn btn-outline-dark rounded-pill"
                                    onClick={showFunction}>
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </button>
                        </div>
                        <div className="fs-2">
                            Select a Recipe or Recipe Collection
                        </div>

                        {/* Button to confirm recipe selection */}
                        {/*todo: implement selection confirmation*/}
                        <div>
                            <button className="btn btn-outline-dark rounded-pill"
                                    onClick={() => {
                                        return
                                    }}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </button>
                        </div>
                    </div>


                    <div className="pt-4">
                        <SearchBar placeHolderText={"Search for a recipe or recipe collection to link to your post"}/>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default LinkARecipeModal;