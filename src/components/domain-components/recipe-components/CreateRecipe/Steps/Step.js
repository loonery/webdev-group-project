const RecipeStep = () => {
    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">Brief step</div>
                <div className="text-secondary">This is where the more specific step details go</div>
            </div>
        </li>
    );
}
export default RecipeStep;