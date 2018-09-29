export const countPoints = results => {
  return results.reduce((sum, result) => {
    let point;
    if (result.status === "done") point = 1;
    else if (result.status === "subgoalDone") point = 0.5;
    else if (result.status === "unchecked") point = 0;
    else if (result.status === "notDone") point = 0;
    return sum + point;
  }, 0);
};
