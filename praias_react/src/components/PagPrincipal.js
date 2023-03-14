import React, { useState } from 'react'
import PraiaSepultura from '../img/praia_sepultura13.jpg'
import PraiaSepultura2 from '../img/praia_sepultura2.jpg'
import PraiaCampeche from '../img/praia_campeche.jpg'
import PraiaCampeche2 from '../img/praia_campeche2.jpg'
import PraiaBombinhas from '../img/bombinhas.jpg'
import PraiaBombinhas2 from '../img/bombinhas2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-modal';
import {BsInfoCircle} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.css';
export function PagPrincipal() {

    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenC, setIsOpenC] = useState(false);
    const [modalIsOpenB, setIsOpenB] = useState(false);

    function abrirModal() {
      setIsOpen(true);
    }
  
    function fecharModal() {
      setIsOpen(false);
    }

    function abrirModalC() {
      setIsOpenC(true);
    }
  
    function fecharModalC() {
      setIsOpenC(false);
    }
    function abrirModalB() {
      setIsOpenB(true);
    }
  
    function fecharModalB() {
      setIsOpenB(false);
    }


  return (
      <>     
      
  <div className="corpo">

        <Carousel fade>
        <Carousel.Item interval={2500}

        style={{ 
            position: 'static'
        }}>
            <h1>Praia da Sepultura</h1>

            <img className="imagens" src={PraiaSepultura} alt="Praia da sepultura" />

            <img className="imagens" src={PraiaSepultura2} alt="Praia da sepultura" />

            <>

            <button onClick={abrirModal} className="botaoModal" ><BsInfoCircle /></button>
            <Modal 

                    style={{
                      overlay: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0 ,0, 0.1)'               
                      
                      },
                      content: {
                      padding: '100px',
                      textAlign: 'center',
                      position: 'relative',  
                      backgroundColor: 'rgba(135, 206, 235, 0.7)',
                      borderRadius: '30px',
                      marginLeft: '-80px',                  
                      marginTop: '72px',
                      width: '800px',
                      height: '600px'
                      }
                      }}
                      isOpen={modalIsOpen}
                      onRequestClose={fecharModal}
                      
                    >
            <h2>Praia da Sepultura</h2>
          
            <p>Localizada na cidade de Bombinhas, em Santa Catarina, essa praia reúne todos os atributos de um verdadeiro paraíso: areias clarinhas, mar tranquilo e transparente, natureza ao redor.</p>

            <button onClick={fecharModal} className="botaoModalF">Fechar</button>

            </Modal>

            </>
          </Carousel.Item>

          <Carousel.Item interval={2500}

            style={{ 
                position: 'static'
            }}>
            <h1>Praia do Campeche</h1>
            <img className="imagens" src={PraiaCampeche} alt="Praia do Campeche" />
           
            <img className="imagens" src={PraiaCampeche2} alt="Praia do Campeche" />

            
             <>
              <button onClick={abrirModalC} className="botaoModal" ><BsInfoCircle /></button>
              <Modal 

                    style={{
                      overlay: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0 ,0, 0.1)'               
                      
                      },
                      content: {
                      padding: '100px',
                      textAlign: 'center',
                      position: 'relative', 
                      backgroundColor: 'rgba(135, 206, 235, 0.7)',
                      borderRadius: '30px',
                      marginLeft: '-80px',                  
                      marginTop: '72px',
                      width: '800px',
                      height: '600px'
                      }
                      }}
                      isOpen={modalIsOpenC}
                      onRequestClose={fecharModalC}
                      
                    >

              <h2>Praia do Campeche</h2>
            
              <p>A praia do Campeche fica localizada no bairro de mesmo nome, no sul de Florianópolis, um mar com águas transparentes, uma ilha que lembra o Caribe, uma extensa faixa de areia e muita gente bonita. É assim que se pode resumir a Praia do Campeche</p>

              <button onClick={fecharModalC} className="botaoModalF">Fechar</button>
              </Modal>
              </>
             
              

          </Carousel.Item>

          <Carousel.Item interval={2500}

            style={{ 
                position: 'static'
            }}>
                <h1>Praia de Bombinhas</h1>
                <img className="imagens" src={PraiaBombinhas} alt="Praia de Bombinhas" />
                
                <img className="imagens" src={PraiaBombinhas2} alt="Praia de Bombinhas" />

                <>
                <button onClick={abrirModalB} className="botaoModal" ><BsInfoCircle /></button>
                    <Modal 

                      style={{
                        overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0 ,0, 0.1)'               
                      
                      },
                      content: {
                        padding: '100px',
                        textAlign: 'center',
                        position: 'relative',  
                        backgroundColor: 'rgba(135, 206, 235, 0.7)',
                        borderRadius: '30px',
                        marginLeft: '-80px',                  
                        marginTop: '80px',
                        width: '800px',
                        height: '610px'
                        }
                        }}
                      isOpen={modalIsOpenB}
                      onRequestClose={fecharModalB}
                    >

                      <h2>Praia de Bombinhas</h2>

                      <p>Localizada em Santa Catarina, uma das curiosidades dessa praia é que sua faixa de areia é composta por cristais de quartzo, que dão um tom incrivelmente branco, emoldurando o mar calmo e transparente com pequenas ondas</p>

                      <button onClick={fecharModalB} className="botaoModalF">Fechar</button>

                    </Modal>

                    </>

                    
          </Carousel.Item>
        </Carousel>

      </div>

      </>
  )
}
