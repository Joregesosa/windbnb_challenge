import React from "react";
import { Nav } from "../Nav";
import { Header } from "../Header";
import { RoomsContainer } from "../RoomsContainer"
import { Room } from "../Room";
import { Modal } from "../Modal"
import { NavOpen } from "../NavOpen";
import { useRooms } from "./useRooms";



function App() {

  const { isModalOpen, closeModal, openModal, data } = useRooms();

  return (
    <React.Fragment>

      <Nav
        openModal={openModal}
      />
    
      <Header />

      <RoomsContainer>
        {data && (
          data.map(room => (
            <Room
               
               
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
          />

        </Modal>

      )}


    </React.Fragment>

  );
}

export default App;
