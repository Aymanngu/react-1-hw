"use client";

import { useState } from 'react';
import styles from './destination.module.css';

export const AddWishlistItem = ({
  onAddWishlistItem,
}) => {
  const [planetName, setPlanetName] = useState(''); 
  const [thumbnail, setThumbnail] = useState('/destination/image-europa.png');

 
  const onPlanetNameChange = (e) => {
    setPlanetName(e.target.value);
  };

 
  const onThumbnailChange = (e) => {
    setThumbnail(e.target.value);
  };


  const onAddItemPressed = () => {
    if (planetName.trim()) {
      
      onAddWishlistItem(planetName, thumbnail);

     
      setPlanetName('');
    }
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>

      {/* Input for the planet name */}
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input 
        id="customWishlist" 
        type="text" 
        value={planetName}
        onChange={onPlanetNameChange}
        placeholder="Enter planet name" 
      />

      {/* Dropdown for selecting a thumbnail */}
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select 
        id="customWishlistThumbnail" 
        value={thumbnail}
        onChange={onThumbnailChange}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>

      {/* Button to add the custom planet */}
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
