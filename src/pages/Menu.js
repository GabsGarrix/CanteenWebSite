import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import { useNavigate } from 'react-router-dom';

import '../styles/Menu.css'

function Menu() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired route
    navigate('/lunches');
  };
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <button className="button" onClick={handleClick}>Ver Almocos disponiveis</button>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
