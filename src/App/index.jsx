import React from "react";
import { Nav } from "../Nav";
import { Header } from "../Header";
import { RoomsContainer } from "../RoomsContainer"
import { Room } from "../Room";
import { Modal } from "../Modal"
import { NavOpen } from "../NavOpen";
import { useRooms } from "./useRooms";



function App() {

  const {
    isModalOpen,
    closeModal,
    openModal,
    data,
    searchValue,
    setSearchValue,
    searchedRooms,
    show,
    child,
    adult,
    searchLocation,
    actionSearch,
    navOptionsAction,
  } = useRooms();

  return (
    <React.Fragment>

      <Nav
        openModal={openModal}
        searchValue={searchValue}
        guests = {child + adult}
      />

      <Header />

      <RoomsContainer>
        {data && (
          data.map((room, i) => (

            <Room
              key={i}
              superHost={room.superHost}
              title={room.title}
              rating={room.rating}
              type={room.type}
              beds={room.beds}
              photo={room.photo}
            />

          ))
        )}
      </RoomsContainer>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
        >

          <NavOpen
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedRooms={searchedRooms}
            show={show}
            child={child}
            adult={adult}
            searchLocation={searchLocation}
            actionSearch={actionSearch}
            navOptionsAction={navOptionsAction}
          />

        </Modal>

      )}


    </React.Fragment>
  );
}

export default App;
