import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faBoxesStacked} from "@fortawesome/free-solid-svg-icons/faBoxesStacked";

const Creator = () => {

    return (
        <>
            <div className="row">
                <div className="col">
                    <button className="btn btn-outline-dark w-100">Create a Recipe
                        &ensp;<FontAwesomeIcon icon={faCoffee}/>
                    </button>
                </div>

                {/*todo - disable this if the user is not premium*/}
                <div className="col">
                    <button className="btn btn-outline-dark w-100">Create a Recipe Collection
                        &ensp;<FontAwesomeIcon icon={faBoxesStacked}/>
                    </button>
                </div>
            </div>
        </>
    )


}
export default Creator;