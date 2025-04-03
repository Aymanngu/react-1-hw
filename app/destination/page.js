// Destinations.js
'use client';
import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import PlanetWishlistItem from '@/components/destination/PlanetWishlistItem';


export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name, thumbnail) => {
    if (selectedPlanets.some(p => p.name === name)) {
      setSelectedPlanets(prev => prev.filter(planet => planet.name !== name));
    } else {
      setSelectedPlanets(prev => [...prev, { name, thumbnail }]);
    }
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>
          <p>{selectedPlanets.length === 0 ? "No planets in wishlist :(" : `You have ${selectedPlanets.length} in your wishlist`}</p>

          <div className={styles.wishlistList}>
            {selectedPlanets.map((planet, index) => (
              <PlanetWishlistItem
                key={index}
                name={planet.name}
                onRemove={() => setSelectedPlanets(prev => prev.filter(p => p.name !== planet.name))}
                thumbnail={planet.thumbnail}
              />
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Possible destinations</h2>
          {['Europa', 'Moon', 'Mars', 'Titan'].map((planetName) => {
            const thumbnail = `/destination/image-${planetName.toLowerCase()}.png`;
            const isSelected = selectedPlanets.some(p => p.name === planetName);

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
                  {isSelected ? "REMOVE" : "ADD PLANET"}
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
