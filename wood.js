function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chairQuantity * perChairWood;    
    const totalTableWood = tableQuantity * perTableWood;    
    const totalBedWood = bedQuantity * perBedWood; 
    
    const totalWoodNeeded = totalChairWood + totalTableWood + totalBedWood;
    return totalWoodNeeded;
}

const totalWood = woodCalculator(6, 1, 2);
console.log(totalWood, 'cft');