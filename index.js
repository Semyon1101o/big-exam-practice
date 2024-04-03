// task 1
function tableParsing (content) {
    const strArr = content.trim().split('\n').slice(1).map((el) => el.split(';'));
    function makeObj (arr) {
        return {name: arr[0], dev: arr[1], plRating: arr[2], appStoreRating: arr[3], rusLoads: arr[4], ausLoads: arr[5], indLoads: arr[6], engLoads: arr[7]};
}
const objInfo = strArr.map((el) => makeObj(el));
const topMessenger = Math.max(parseInt(objInfo)) // недоделано
console.log(`General top messenger: `);
};







// task 2
const candidateAssessment = (/* content */) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
