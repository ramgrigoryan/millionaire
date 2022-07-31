function randomBetween (a,b){
    return Math.round(a+Math.round((b-a)*Math.random()))
}

export default function audience (currentQuestion){
    const {correct,questions} = currentQuestion;
}