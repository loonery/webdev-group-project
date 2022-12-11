import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

// custom css
import './index.css';
import {useSelector} from "react-redux";

const SearchBar = ({placeHolderText}) => {

    // searching idiom discovered from:
    // https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // todo: handle the enter keypress here
            console.log("pressed enter");
        }
    }

    const {currentUser, loading} = useSelector((state) => state.users)

    return (
        <>
            {currentUser &&
            <div className="input-group">
                <label className="w-100">
                    <input type={"text"}
                           className="form-control border rounded-pill ps-5"
                           onKeyDown={handleKeyDown}
                           placeholder={placeHolderText}/>
                </label>
                <div className="searchBarMagnifyingGlass">
                    <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden={true}/>
                </div>
            </div>
            }
            {!currentUser &&
                <></>
            }
        </>
    );
}
export default SearchBar;