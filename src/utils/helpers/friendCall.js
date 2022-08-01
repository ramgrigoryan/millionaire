import { numToLet } from "./indexToLetter";
const randToNum = (num) => {
  return Math.floor(num * Math.random());
};


export default function friendCall(currentQuestion) {
  const { content, leftIndexes } = currentQuestion;
  if (leftIndexes.length === 4) {
    return numToLet(randToNum(4));
  } else {
    const reducedVariants = content.map((el, index) => {
      if (index === leftIndexes[0] || index === leftIndexes[1]) {
        return index
      }
      else{
        return -1
      }
    }).filter(index=>index>-1);
    console.log(reducedVariants);
    return numToLet(reducedVariants[randToNum(2)]);
  }
}
