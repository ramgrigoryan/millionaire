export default function prizeCount(count, gameStatus) {
  const rightAnswersEquivalent = {
    0: 0,
    1: 500,
    2: 1000,
    3: 2000,
    4: 3000,
    5: 5000,
    6: 10000,
    7: 25000,
    8: 50000,
    9: 75000,
    10: 100000,
    11: 250000,
    12: 350000,
    13: 500000,
    14: 750000,
    15: 1000000,
  };
  if (gameStatus === "withdraw") {
    return rightAnswersEquivalent[count];
  } else if (gameStatus==="lose") {
    return count >= 10
      ? rightAnswersEquivalent[10]
      : count >= 5
      ? rightAnswersEquivalent[5]
      : 0;
  }
}
