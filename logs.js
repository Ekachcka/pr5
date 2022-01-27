function generateLog(firstPerson,secondPerson) {
    
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага.${firstPerson.damageHP}`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.${firstPerson.damageHP}`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.${firstPerson.damageHP}`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.${firstPerson.damageHP}`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.${firstPerson.damageHP}`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.${firstPerson.damageHP}`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.${firstPerson.damageHP}`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника${firstPerson.damageHP}`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.${firstPerson.damageHP}`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.${firstPerson.damageHP}`
    ];
    return logs [random(logs.length)-1];
}