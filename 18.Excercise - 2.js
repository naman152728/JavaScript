alert("You're entering in the Game !!");
let SWG = prompt("Choose any 1 from thing from \n Snake, Water, Gun");

let CPU = Math.floor(Math.random() * 3);
console.log(CPU);

let CPU_SWG = ["S", "W", "G"][CPU]

const Match = (CPU_SWG, SWG) => {
    if (CPU_SWG == SWG) {
        return "Tied";
    }
    else if (CPU_SWG === "S" && SWG === "W") {
        return "YOU LOOSE !!";
    }
    else if (CPU_SWG === "S" && SWG === "G") {
        return "YOU WON !!"
    }
    else if (CPU_SWG === "W" && SWG === "G") {
        return "YOU LOOSE !!";
    }
    else if (CPU_SWG === "W" && SWG === "S") {
        return "YOU WON !!";
    }
    else if (CPU_SWG === "G" && SWG === "S") {
        return "YOU LOOSE !!";
    }
    else if (CPU_SWG === "G" && SWG === "W") {
        return "YOU WON !!"
    }
}

let result = Match(CPU_SWG, SWG);

console.log("The Result is: ", result);
console.log(`CPU: ${CPU_SWG} & USER: ${SWG}`);