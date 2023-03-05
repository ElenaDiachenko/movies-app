import { IGenre } from 'interfaces/IGenresData';

export const useGenre = (selectedGenres: IGenre[]): string => {
  if (selectedGenres.length < 1) return '';

  const GenreIds = selectedGenres.map(g => g.id);
  return GenreIds.join();
};
