import { useState, useEffect } from "react";
export function useRooms() {
    const [isModalOpen, setOpenModal] = useState(false);
    const [data, setData] = useState([]);

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

    useEffect(() => {

        getData();

    }, []);

    return {
        isModalOpen,
        setOpenModal,
        closeModal,
        openModal,
        data
    }
}