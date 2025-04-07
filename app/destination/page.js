"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import PlanetWishlistItem from '@/components/destination/PlanetWishlistItem'; 
import { AddWishlistItem } from '@/components/destination/AddWishlistItem'; 

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]); // State to hold selected planets

  // Function to add or remove a planet from the wishlist
  const onAddOrRemovePlanet = (name, thumbnail) => {
    // Check if the planet is already in the wishlist
    if (selectedPlanets.some(p => p.name === name)) {
      // If planet is in the wishlist, remove it
      setSelectedPlanets(prev => prev.filter(planet => planet.name !== name));
    } else {
      // If planet is not in the wishlist, add it
      setSelectedPlanets(prev => [...prev, { name, thumbnail }]);
    }
  };

  // Get the number of planets in the wishlist
  const numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>
          {/* Display the number of planets in the wishlist */}
          <p>{numberOfPlanets === 0 ? "No planets in wishlist :(" : `You have ${numberOfPlanets} in your wishlist`}</p>

          {/* Loop through the selectedPlanets array to display each planet */}
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planet, index) => (
              <PlanetWishlistItem
                key={index} // Unique key for each planet in the wishlist
                name={planet.name}
                onRemove={() => setSelectedPlanets(prev => prev.filter(p => p.name !== planet.name))} // Remove planet from wishlist
                thumbnail={planet.thumbnail}
              />
            ))}
          </div>

          {/* Pass the onAddOrRemovePlanet function to the AddWishlistItem component */}
          <AddWishlistItem onAddWishlistItem={onAddOrRemovePlanet} />
        </section>

        <section className="card">
          <h2>Possible destinations</h2>
          {/* Loop through the available planet names to display possible destinations */}
          {['Europa', 'Moon', 'Mars', 'Titan'].map((planetName) => {
            const thumbnail = `/destination/image-${planetName.toLowerCase()}.png`; // Set the thumbnail based on the planet name
            const isSelected = selectedPlanets.some(p => p.name === planetName); // Check if the planet is already selected

            return (
              <div className={styles.planetCard} key={planetName}>
                <img className={styles.planetThumbnail} src={thumbnail} alt={planetName} />
                <div className={styles.planetDescription}>
                  <h2>{planetName} {isSelected ? "- SELECTED" : ""}</h2>
                  <p>Lorem ipsum...</p>
                </div>
                <button 
                  className="roundButton" 
                  onClick={() => onAddOrRemovePlanet(planetName, thumbnail)}
                >
                  {isSelected ? "REMOVE" : "ADD PLANET"} {/* Change button text based on whether the planet is selected */}
                </button>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
