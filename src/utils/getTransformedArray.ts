import { ResultDTO } from 'interfaces/IMoviesDTO';
import { ISavedMovieData } from 'interfaces/ISavedMovieData';

export const getTransformedArray = (
  arr1: ResultDTO[],
  arr2: ISavedMovieData[],
  value: {}
) => {
  let result: ResultDTO[] = [];
  arr1.forEach(item1 => {
    arr2.forEach(item => {
      if (item.id === item1.id) {
        item1 = { ...item1, ...value };
      }
    });
    result.push(item1);
  });
  return result;
};
