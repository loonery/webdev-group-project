import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {useState} from "react";
import Recipe from "../../recipe-components/Recipe";

// the abridged recipe is a recipe's or collection's representation that appears outside its details page
const AbridgedDomainItem = (domainObject) => {

    // todo: determine the how the domain object type determines the rendering of this component
        // chevron button needs to display a different kind of details page than a modal because nested modals
        // are not permitted

    const [showingDomainItem, setShowingDomainItem] = useState(false);

    return (
        <>
            {/*pass the recipe modal component information about whether it's showing itself, and how to close itself*/}
            <Recipe show={showingDomainItem} showFunction={() => setShowingDomainItem(false)}/>

            <div className="p-1">
                <div className="d-flex">

                    {/* this flex div houses all the content in the abridged recipe, as well as the arrow */}
                    <div className="flex-grow-1 me-4">
                        <div>
                            <span className="fs-5">Recipe title or Recipe Collection title</span>
                            <span className="fs-5">&ensp;&middot;&ensp;</span>
                            <span className="text-secondary">Recipe Author</span>
                        </div>

                        {/*todo: cut the description once it reaches a certain length*/}
                        <p className="pt-1 text-secondary">
                            here are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined chunks as necessary, making this the
                            first true generator on the Internet.
                        </p>
                    </div>

                    {/* chevron button on any abridged recipe or collection */}
                    <div className="align-self-center">
                        <button className="btn btn-outline-dark"
                            onClick={() => setShowingDomainItem(true)}>
                            <FontAwesomeIcon icon={solid('chevron-right')} size={"lg"}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AbridgedDomainItem;