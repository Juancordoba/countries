import React,{useEffect} from 'react'

export default function CardCountry({filter,show,toggleModal}) {
    if(!show){
        return null;
    }else{
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={toggleModal}>&times;</span>
                    {show? <p>{show}</p> : <p>Modal 2</p>}
                </div>
            </div>
        )
    }


}
