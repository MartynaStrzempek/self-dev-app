export default {
  goals: [
    {
      id: 0,
      goalName: "Run every day",
      subGoalName: "Run three days per week",
      reward: "Eat a big cookie",
      scoreForReward: 101,
      results: [
        {
          id: "12-09-2018",
          status: "notDone"
        },
        {
          id: "13-09-2018",
          status: ""
        },
        {
          id: "14-09-2018",
          status: "done"
        }
      ]
    },
    {
      id: 1,
      goalName: "Eat more healthy",
      subGoalName: "Dont eat sweet things",
      reward: "Buy a mountain bike",
      scoreForReward: 803,
      results: [
        {
          id: "23-08-2018",
          status: "Not done"
        }
      ]
    },
    {
      id: 2,
      goalName: "Play computer games every day",
      subGoalName: "Play computer games three times a week",
      reward: "Buy Minecraft",
      scoreForReward: 55,
      results: [
        {
          id: "14-09-2018",
          status: "Done"
        }
      ]
    }
  ],
  currentGoalId: 0
}
