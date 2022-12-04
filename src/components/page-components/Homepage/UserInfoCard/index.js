import react from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const UserInfoSmall = () => {

    const imageSource = './local_images/dummy_webdev.jpg';
    const userName = "James Hoffman";
    const userHandle = "@jamesHoffman"

    return(
        <>
            <div className="card w-100">
                {/* user profile picture flex box */}
                <div className="card-body d-flex">
                    {/* user's profile picture */}
                    <div className="my-1 me-3">
                        <img className="rounded-circle"
                             height="40"
                             width={"40"}
                             src={imageSource}/>
                    </div>

                    <div>
                        <div>{userName}</div>
                        <div className="text-secondary">{userHandle}</div>
                    </div>
                </div>

                <div className="card-body d-flex border-top">
                    <div className="flex-grow-1">Your Profile</div>
                    <div className="me-3"><FontAwesomeIcon icon={faChevronRight}/></div>
                </div>

                {/* user stats section */}
                {/* todo: add some fontawesome icons here */}
                <div className="card-body border-top">
                    <div className="mb-2">Social stats</div>
                    <ul className="list-group">
                        <li className="list-group-item border-0">Brews Made</li>
                        <li className="list-group-item border-0">Brews Made</li>
                        <li className="list-group-item border-0">Brews Made</li>
                        <li className="list-group-item border-0">Brews Made</li>
                    </ul>
                </div>

                <div className="card-body border-top">
                    <div className="mb-2">Brewing Stats</div>
                    <ul className="list-group">
                        <li className="list-group-item border-0">Brews Made</li>
                        <li className="list-group-item border-0">Brews Made</li>
                        <li className="list-group-item border-0">Brews Made</li>
                        <li className="list-group-item border-0">Brews Made</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserInfoSmall;
