function randomBetween(a, b) {
  return Math.round(a + Math.round((b - a) * Math.random()));
}

export default function audience(currentQuestion) {
  const { leftIndexes,correct } = currentQuestion;
  if (leftIndexes.length === 2) {
    const rightAnswerPower = randomBetween(20, 100);
    const answer = [100-rightAnswerPower];
    answer.splice(correct,0,rightAnswerPower);
    return answer
  } else {
    const rightAnswerPower = randomBetween(15, 100);
    const remainder1 = 100 - rightAnswerPower;
    const a = randomBetween(0, remainder1);
    const remainder2 = remainder1 - a;
    const b = randomBetween(0, remainder2);
    const c = remainder1 - a - b;
    const answer = [a, b, c];
    answer.splice(correct,0,rightAnswerPower);
    return answer;
  }
}
