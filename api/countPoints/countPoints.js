export const countPoints = results => {
  return results.reduce((sum, result) => {
    let point;

    if (result.StatusId === 1) point = 1;
    else if (result.StatusId === 4) point = 0.5;
    else if (result.StatusId === 3) point = 0;
    else if (result.StatusId === 2) point = 0;
    return sum + point;
  }, 0);
};
