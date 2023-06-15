import { useState, useEffect } from "react";
export function useRooms() {
    const [isModalOpen, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [show, setShow] = useState();
    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
    let searchedRooms = [];

    useEffect(() => {

        getData();

    }, []);



    const getData = async () => {

        try {
            const res = await fetch("stays.json");

            const resJson = await res.json();

            setData(resJson);

        } catch (error) {

            console.log(error);

        }

    };

    function closeModal(e) {
        let id = e.target.id;
        (id === 'Container' ||
            id === 'closeButton')
            && setOpenModal(false);

    }

    function openModal() {
        setOpenModal(true);
    }

    if (!searchValue.length >= 1) {

        searchedRooms = [];

    } else {

        searchedRooms = data.filter(room => {
            const roomCity = room.city.toLocaleLowerCase();
            const searchingCity = searchValue.toLocaleLowerCase();
            return roomCity.includes(searchingCity);
        })

    }

    const searchLocation = (eve) => {
        setSearchValue(eve.target.value);
    }

    const actionSearch = (eve) => {
        let id = eve.target.id;
        id === 'button' ? filter() : setShow(id);
    }

    const navOptionsAction = (eve) => {
        let id = eve.target.id;
        let clase = eve.target.className;
        (id === "adMenos" && adult > 0) && setAdult(adult - 1);

        (id === "adMas") && setAdult(adult + 1);

        (id === "chMenos" && child > 0) && setChild(child - 1);

        (id === "chMas") && setChild(child + 1);

        (clase === "option") && setSearchValue(eve.target.innerHTML);

    }

    const filter = () => {
        let city = searchValue.split(', ')[0];
        let country = searchValue.split(', ')[1]
        let guests = child + adult;
        let newRooms = [];

        if (searchValue !== '') {

            data.forEach(room => {


                if (room.city === city && room.country === country && room.maxGuests >= guests) {

                    newRooms.push(room);
                }

            })

            setData(newRooms);

        }else{
            getData();
        }

        setOpenModal(false);
    }


    return {
        isModalOpen,
        setOpenModal,
        closeModal,
        openModal,
        data,
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