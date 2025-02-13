function rubricExcellent(score) { // Define rubricExcellent
    return score >= 9 ? 'Excellent' : 'Pass';
 }
 
 export function rubricPerfect(score) {
     return score === 11 ? 'Perfect' : rubricExcellent(score);
 }