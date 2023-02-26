export const getTransformedArray = (arr1, arr2, value) => {
  let result = [];
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
