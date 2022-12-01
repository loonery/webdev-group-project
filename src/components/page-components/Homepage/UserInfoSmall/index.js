import react from 'react';

const UserInfoSmall = () => {

    const imageSource = './local_images/dummy_webdev.jpg';
    const userName = "James Hoffman";
    const userHandle = "@jamesHoffman"

    const statisticA = 10;
    const statisticB = 11;
    const statisticC = 12;

    const userStatistics = [
        {},
    ]

    return(
        <>
            {/*holds user profile picture and other user information*/}
            <div className="row border rounded-top pb-2 pt-2">

                {/* user profile picture */}
                <div className="col-3">
                    <img src={imageSource}
                         className="rounded-circle"
                         width="68px"
                         height="68px"
                    />
                </div>

                {/*userName and alias section*/}
                <div className="col-9 pb-1">
                    <div className="fs-5">{userName}</div>
                    <div>{userHandle}</div>
                </div>
            </div>

            {/*user information section*/}

            {/* userStats section */}
            {/*todo: refactor this as a component with mappings?*/}
            {/*todo: add css styling to minimize font further*/}
            <div className="row border border-top-0 pb-2 pt-2 ps-2 pe-2">
                <ul className="rounded-1 list-group">


                    {/*each list item is a statistic*/}
                    {/*todo - refactor the user statistics portion into 1 or 2 components*/}
                    <li className="list-group-item border-0 fs-6">
                        <div className="row">
                            <div className="col">
                                Coffee Brews
                            </div>
                            <div className="col">
                                <span className="float-start">10</span>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </>
    )
}

export default UserInfoSmall;
