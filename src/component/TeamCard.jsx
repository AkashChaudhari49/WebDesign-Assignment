import React from 'react'
import "./teamCard.css";


const TeamCard = (props) => {
    console.log(props);
  return (
    <div className='teamCard'>
        <div className="teamContent">
            <div className="member-data">
                <div className="img">
                    <img src={props.men} alt="" />
                </div>
                <div className="data">
                    <span>Sr Front Developer</span>
                    <h3>Jhon Din Luran</h3>
                    <div className="boxes">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                </div>
            </div>
            <div className="member-desc">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eveniet sapiente suscipit tempore quam, nulla, temporibus sint libero a aliquid molestiae amet consectetur adipisicing elit. Dolorem eveniet sapiente provident odit rerum earum accusantium dicta excepturi? Quasi, officiis?</p>
            </div>
        </div>
    </div>
  )
}

export default TeamCard;