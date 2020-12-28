import React from 'react'

import "./Modal.css";

//img
import No_CoC_01 from "../../img/No_CoC_01@2x.png"
import No_CoC_01x2 from "../../img/No_CoC_01@2x@2x.png"
import No_CoC_02 from "../../img/No_CoC_02@2x.png"
import No_CoC_02x2 from "../../img/No_CoC_02@2x@2x.png"
import No_CoC_03 from "../../img/No_CoC_03@2x.png"
import No_CoC_03x2 from "../../img/No_CoC_03@2x2x.png"
import No_CoC_04 from "../../img/No_CoC_04@2x.png"
import No_CoC_04x2 from "../../img/No_CoC_04@2x@2x.png"
import No_CoC_05 from "../../img/No_CoC_05@2x.png";
import No_CoC_05x2 from "../../img/No_CoC_05@2x@2x.png";
import No_CoC_06 from "../../img/No_CoC_06@2x.png";
import No_CoC_06x2 from "../../img/No_CoC_06@2x@2x.png";

import close from "../../img/close.svg";


function Modal({state,setState}) {

    const handlerHideModal = () =>{
        setState(false)
    }

    const handlerActiveModal = () =>{
        setState(!state)
    }

    const imagesInfo = [
        {
            title:"Приобрести",
            img:No_CoC_01,
            resImg:No_CoC_01x2,
            link:"Финансы"
        },
        {
            title:"Привлечь рефералов",
            img:No_CoC_02,
            resImg:No_CoC_02x2,
            link:"community"
        }
    ];
    const imagesBonus = [
        {
            title:"Захват территорий",
            img:No_CoC_03,
            resImg:No_CoC_03x2,       
        },
        {
            title:"Использование Способностей",
            img:No_CoC_04, 
            resImg:No_CoC_04x2,         
        },
        {
            title:"Play2Earn (Daily Reward + Tournaments)",
            img:No_CoC_05,  
            resImg:No_CoC_05x2,        
        },
        {
            title:" NFT Governance",
            img:No_CoC_06,
            resImg:No_CoC_06x2,
            info:"Скоро"
        } 
    ];

    return (
    <div className={state?"modal":"modal hide"} >
        <div className="modal-overside" onClick={handlerHideModal}></div>
      <div className="modal__content">
      <div className="modal__close" onClick={handlerActiveModal}><img src={close} alt="" /></div>
      <h1 className="modal__title">У вас закончились CoC</h1>
        <div className="modal__content-top modal__top">
          <h3 className="modal__content-title">Как получить?</h3>
          <div className="modal__content-wrapper">
            {
                imagesInfo.map((item,index)=>{
                    return(
                        <div className="modal__content-block" key={index}>
                            <img src={item.img} srcSet={item.resImg} alt="" />
                            <div className="modal__content-info">
                                <span className="modal__top-buy">{item.title}</span>
                                <a className="modal__top-link" href="/#">{item.link}</a>
                            </div>
                        </div>
                    )
                })
            }
          </div>
        </div>
        <div className="modal__content-bottom modal__bottom">
          <h3 className="modal__content-title">Что дает токен?</h3>
          <div className="modal__content-wrapper">
            {
                imagesBonus.map((item,index)=>{
                    return(
                        <div className="modal__content-block modal__bottom-block" key={index}>
                            <img src={item.img} srcSet={item.resImg} alt="" />
                            <h3 className="modal__bottom-title">{item.title}</h3>
                            {
                                item.info?
                                <span className="modal__bottom-soon">{item.info}</span>:null
                            }
                        </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    </div>
    )
}

export default Modal
