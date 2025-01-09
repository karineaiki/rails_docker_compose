// Film_index.js
import React, { useEffect, useState } from 'react';

const Film_index = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await fetch('http://localhost:3000/films');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFilms(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchFilms();
    }, []);

    return (
        <div>
            <h1>Liste de films</h1>
            <ul>
                {films.map((film) => (
                    <li key={film.id}>
                        <h2>{film.title}</h2>
                        <p>{film.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Film_index;