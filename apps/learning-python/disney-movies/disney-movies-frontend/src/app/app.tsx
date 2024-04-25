import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  year: number;
  image_url: string;
}

const StyledApp = styled.div`
  // Your style here
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieCard = styled.div`
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

export function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <StyledApp>
      <MovieContainer>
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id}>
            <MovieImage src={movie.image_url} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
          </MovieCard>
        ))}
      </MovieContainer>
    </StyledApp>
  );
}

export default App;
