import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalComponent from '../ModalComponent';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//import style css from index.css
import styles from './index.css';





function Demo() {
    const [data, setData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [search, setSearch] = useState('');
    let { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        async function fetchData() {
            const response = await fetch('http://localhost:4000/api/public');
            const json = await response.json();
            setData(json);
        }


        fetchData();

    }, []);

    function showDetails(id) {
        // Get the item with the specified ID from the data array
        const item = data.find(item => item.id === id);

        // Save the item in the selectedItem state variable
        setSelectedItem(item);

        // Show the modal
        setShowModal(true);
    }

    function hideDetails() {
        // Hide the modal
        setShowModal(false);
        setShowModal2(true);
    }

    function setUrl(){
        window.location.href = `http://localhost:3000/demo/${selectedItem.id}`;
    }

    function hideDetails2() {
        // Hide the modal

        setShowModal2(false);
    }

    function handleSearchChange(event) {
        setSearch(event.target.value);
    }


    const handleClick = (id) => {
        navigate('/details', { state: { id } });
    };

    function handleSearch() {
        if (search !== '') {
            async function fetchData() {
                const response = await fetch(`http://localhost:4000/api/public/search/${search}`);
                const json = await response.json();
                setData(json);
            }

            console.log(search);
            fetchData();
        } else {
            async function fetchData() {
                const response = await fetch('http://localhost:4000/api/public');
                const json = await response.json();
                setData(json);
            }

            fetchData();
        }
    }

    return (
        <div className="container mt-5">
            {/* The search input field and search button */}
            <div className="mb-3">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <div className="input-group-append">
                        <Button variant="outline-secondary" onClick={handleSearch}>
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            {data === null ? (
                <p>Loading...</p>
            ) : (
                <div className="row">
                    {data.map(item => (
                            <div key={item.id} className="col-4 p-3">
                                <div className="card shadow" onClick={() => showDetails(item.id)}>
                                    <img src={item.image} className="card-img-top" alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            )}
            {/* The expanded floating window with the item details */}
            <Modal show={showModal} onHide={hideDetails}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedItem && selectedItem.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedItem && selectedItem.description}</p>

                    <Link to={`/demo/details/${selectedItem && selectedItem.id}`} onClick={hideDetails} as={"a"}>
                        More Details ... Click for Ingredients
                    </Link>


                </Modal.Body>
            </Modal>

            <Modal style={{

                position: 'absolute',
                top:0,
                bottom: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
                background: "black"
            }} show={showModal2} onHide={hideDetails2} width="100%" height="100%" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title >{selectedItem && selectedItem.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <p>{selectedItem && selectedItem.description}</p>

                    <img src={selectedItem && selectedItem.image} className="card-img-top" alt={selectedItem && selectedItem.title} />
                    <br/>
                    <ul>
                        {selectedItem &&
                            selectedItem.ingredients.map(ingredient => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                    </ul>

                </Modal.Body>
            </Modal>
        </div>
    );
}


export default Demo;