document.write("Monster Fight Game")

const monsters = ["Mohammed Ali","Mike Tyson","Terrance Crawford","tank Davis","Devin Haney","Rocky","Floyd MayWeather","Manny Pacquio"];

function getRandomDamage(){
    return Math.floor(Math.random() * 28) + 1; //math.floor rounds down
}

function getRandomPowerUp(){
    return Math.random() < 0.1; // this is a true or false statement
}

const  attack = () => {
    if(getRandomPowerUp()){
        return Math.floor(Math.random()* 50) + 50;
    } else {
    return getRandomDamage();
    // make a function that has a poweruo
    }
}

function fight(monster1, monster2) {
    let health1 = 100;
    let health2 = 200;

    console.log(`${monster1} and ${monster2} are fighting!`);

    while (health1 > 0 && health2 > 0) {
        let damageToMonster2 = attack();
        health2 -= damageToMonster2;

        console.log(`${monster1} attacks ${monster2} for ${damageToMonster2} damage. ${monster2} has ${health2} health left.`);

        if (health2 <= 0) {
            console.log(`${monster2} is defeated!`);
            break;
        }

        let damageToMonster1 = attack();
        health1 -= damageToMonster1;

        console.log(`${monster2} attacks ${monster1} for ${damageToMonster1} damage. ${monster1} has ${health1} health left.`);

    }
    // terinary ? True : False. like and if else statement . 

    const winner = health1 > 0 ? monster1 : monster2; 
    console.log(`${winner} wins the fight!!`)
   
}
const monster1 = prompt(`Choose the first monster to fight `)
const monster2 = prompt(`Choose the second monster to fight `)

fight(monster1,monster2)
