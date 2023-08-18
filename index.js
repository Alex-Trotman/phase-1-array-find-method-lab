// code your solution here
// function superbowlWin(array){
//     array.find(array.result === "W")
// }

// const found = array.find((element) => element === "W");

function superbowlWin(array){
    const object = array.find((element) => element.result === "W");
    if (object){
        return object.year
    }
}