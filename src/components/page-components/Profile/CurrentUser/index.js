import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {profileUserThunk} from "../../../../services/user-thunks";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileUserThunk())
    }, [])
    return(children)
}
export default CurrentUser