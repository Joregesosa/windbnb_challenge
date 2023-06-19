import { useState, useEffect } from "react";
export function useRooms() {
    const [isModalOpen, setOpenModal] = useState(false); //abrir o cerrar modal
    const [filteredData, setFilteredData] = useState([]);// obtien la data filtrada
    const [data, setData] = useState([]); //mantiene la data sin filtrar
    const [searchValue, setSearchValue] = useState(''); // almecena la busqueda del usuario (city and contry)
    const [show, setShow] = useState(); // estado de las opciones de fitros 
    const [child, setChild] = useState(0); // almacena el valor de ninos en filtro de usuarios Nav Open
    const [adult, setAdult] = useState(0); // almacena el valor de adultos en filtro de usuario NavOpen

    // almacenar resultados de busqueda
    let searchedRooms = [];

    useEffect(() => {

        getData();

    }, []);


    // guet data from stay.json
    const getData = async () => {

        try {
            const res = await fetch("stays.json");

            const resJson = await res.json();
            setData(resJson);
            setFilteredData(resJson);

        } catch (error) {

            console.log(error);

        }

    };

    // cerrar el modal
    function closeModal(e) {
        let id = e.target.id;
        (id === 'Container' ||
            id === 'closeButton')
            && setOpenModal(false);

    }
    // abrir el modal
    function openModal() {
        setOpenModal(true);
    }

    // filtrar data en el search open nava
    if (!searchValue.length >= 1) {

        searchedRooms = [];

    } else {

        searchedRooms = data.filter(room => {
            const roomCity = room.city.toLocaleLowerCase();
            const searchingCity = searchValue.toLocaleLowerCase();
            return roomCity.includes(searchingCity);
        })

    }

    // obtner valor input search
    const searchLocation = (eve) => {
        setSearchValue(eve.target.value);
    }

    // on click search button open Nav  y los inputs add location and add guest (guests agrega una clase  al componente a mostrar)
    const actionSearch = (eve) => {
        let id = eve.target.id;
        id === 'button' ? filter() : setShow(id);
    }

    // acciones opciones del nava (option--> <li> resultados de busqueda en array)
    const navOptionsAction = (eve) => {
        let id = eve.target.id;
        let clase = eve.target.className;
        (id === "adMenos" && adult > 0) && setAdult(adult - 1);

        (id === "adMas") && setAdult(adult + 1);

        (id === "chMenos" && child > 0) && setChild(child - 1);

        (id === "chMas") && setChild(child + 1);

        (clase === "option") && setSearchValue(eve.target.innerHTML);

    }

    // solo se activa con el acction search (on click button search NavOpen)
    const filter = () => {

        let city = searchValue.length > 0 ? searchValue.split(', ')[0] : '';
        let country = searchValue.length > 0 ? searchValue.split(', ')[1] : '';
        let guests = child + adult;
        let newRooms = [];

        if (searchValue === '' && guests === 0) {

            getData();

        } else {

            data.forEach(room => {


                if (room.city === city && room.country === country && room.maxGuests >= guests) {

                    newRooms.push(room);
                    return;
                }

                if (room.maxGuests >= guests && city === '' && country === '') {

                    newRooms.push(room);
                    return
                }

            })

            setFilteredData(newRooms);
        }

        setOpenModal(false);
    }


    return {
        isModalOpen,
        setOpenModal,
        closeModal,
        openModal,
        filteredData,
        searchedRooms,
        searchValue,
        setSearchValue,
        show,
        child,
        adult,
        searchLocation,
        actionSearch,
        navOptionsAction,
    }
}