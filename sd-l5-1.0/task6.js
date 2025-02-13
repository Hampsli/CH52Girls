function rubricPassFail(score) { // Define rubricPassFail
    return score >= 5 ? 'Pass' : 'Fail';
}

export function rubricExcellent(score) {
    return score >= 9 ? 'Excellent' : rubricPassFail(score);
};