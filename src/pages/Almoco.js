import React from 'react'
import { AlmocoList } from "../helpers/AlmocoList";
import AlmocoItem from "../components/AlmocoItem";
import '../styles/Menu.css'

function Almoco() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Lunches</h1>
      <div className="menuList">
        {AlmocoList.map((almocoItem, key) => {
          return (
            <AlmocoItem
              key={key}
              image={almocoItem.image}
              name={almocoItem.name}
              price={almocoItem.price}
              
            />
          );
        })}
      </div>
    </div>
  )
}

export default Almoco
