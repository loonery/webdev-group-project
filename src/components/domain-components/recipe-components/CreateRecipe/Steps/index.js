const RecipeStep = () => {

    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">Brief step</div>
                <div className="text-secondary">This is where the more specific step details go</div>
            </div>
            <button className="btn btn-outline-dark rounded-pill ms-4 mt-1">X</button>
            <button className="btn btn-outline-info rounded-pill ms-4 mt-1">X</button>
        </li>
    );

}
export default RecipeStep;