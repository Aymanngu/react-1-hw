"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';


const API_KEY = 'APIT71L2qb5ac7Y3itTWKBYeXGkm4iKAtSPgO2bcaEy';

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};


const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPhotoCard}>
      <p>Rover: {roverName}</p>
      <p>Date: {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt={`Rover photo from ${roverName}`} />
    </div>
  );
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchData = async () => {

      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(response => response.json());
      setRoverPhoto(roverPhotoResponse);

      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(response => response.json());
      setDailyImg(dailyImgResponse);
    };

    fetchData();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>

        {/* Section for Astronomy Picture of the Day */}
        <section className="card">
          <h2>Astronomy Picture of the Day</h2>
          {dailyImg.title ? (
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              <img src={dailyImg.url} alt={dailyImg.title} className={styles.nasaPicOfTheDayImg} />
            </>
          ) : (
            <p>Loading Astronomy Picture of the Day...</p>
          )}
        </section>

        {/* Section for Rover Photos */}
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            roverPhoto.photos.map((photo, index) => (
              <RoverPhoto
                key={index}
                src={photo.img_src}
                date={photo.earth_date}
                roverName={photo.rover.name}
              />
            ))
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default NasaCollaboration;
