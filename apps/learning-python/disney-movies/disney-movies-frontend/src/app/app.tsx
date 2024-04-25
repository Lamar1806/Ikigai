import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
  year: number;
  image_url: string;
}

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

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchYear, setSearchYear] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const yearMatch = searchYear ? movie.year === searchYear : true;
    return titleMatch && yearMatch;
  });

  const years = Array.from(new Set(movies.map((movie) => movie.year)));

  return (
    <StyledApp>
      <h1>Disney Movie Classics</h1>
      <div>
        <input
          type="text"
          placeholder="Search by movie name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={searchYear || ''}
          onChange={(e) =>
            setSearchYear(e.target.value ? parseInt(e.target.value) : null)
          }
        >
          <option value="">Filter by year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <MovieContainer>
        {filteredMovies.map((movie) => (
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
