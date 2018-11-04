export const setGoalIdsArray = (goals) => {
  const array = [];
  goals.map(goal => array.push(goal.id));
  return array;
};
