export default function fiftyFifty(questionsArray,correct){
    const wrongArray = questionsArray.filter((question,index)=>index!==correct);
    const zeroTooTwo = Math.floor(3*Math.random());
    return [wrongArray[zeroTooTwo],questionsArray[correct]];
}