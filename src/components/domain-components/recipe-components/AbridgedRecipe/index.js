import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const AbridgedRecipe = () => {

    return (
        <div className="card mb-4">
            <div className="card-body d-flex">
                {/* this flex div houses all the content in the abridged recipe, as well as the arrow */}
                <div className="flex-grow-1">
                    <div>
                        <span className="fs-5">Recipe title or Recipe Collection title</span>
                    </div>

                    {/*todo: cut the description once it reaches a certain length*/}
                    <div>
                        Recipe description or Recipe Collection description
                    </div>
                </div>
                <div className="align-self-center">
                    <button className={"btn btn-outline-dark"}>
                        <FontAwesomeIcon icon={solid('chevron-right')} size={"lg"}/>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AbridgedRecipe;