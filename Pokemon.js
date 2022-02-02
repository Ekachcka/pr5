// export const character = {
//     name: 'Pikachu',
//     type: 'electric',
//     defaultHP: 100,
//     damageHP: 100,
//     elHP: document.getElementById('health-character'),
//     elProgressbar: document.getElementById('progressbar-character'),

//     greet: function(){
//         return 'Hi, my name is ' + character.name;
//     },   
    
//     renderHPLife: function(){
//         const $character = document.getElementById('health-character');
//         console.log($character.innerText);
//         $character.innerText=character.damageHP+'/'+ character.defaultHP;
//     },    
//     renderHPLife: function(){
//         character.elHP.innerText=character.damageHP + ' / ' + character.defaultHP;
//     },    
//     renderProgressbarHP: function(){
//         character.elProgressbar.style.width = character.damageHP + '%';
//     },
   
//     changeHP: function(count) {
//         if(character.damageHP<count) {
//             character.damageHP=0;
//             alert('Бедный '+ character.name+' проиграл бой!');
//             $btn.disabled = character;
//         }else{
//             character.damageHP -= count;
//         }
//         renderHP();

//         const log = character === character ? generateLog(character, enemy) : generateLog(character, character);
//         const $p = document.createElement('p');
//         $p.innerText=log;
//         $logs.appendChild($p);
//     }  
// }
// export const enemy = {
//     name: 'Charmander',
//     defaultHP: 100,
//     damageHP: 100,
//     elHP: document.getElementById('health-enemy'),
//     elProgressbar: document.getElementById('progressbar-enemy'),
   
   
//     renderHPLife: function(){
//         const $character = document.getElementById('health-character');
//         console.log($character.innerText);
//         $character.innerText=enemy.damageHP+'/'+ enemy.defaultHP;
//     },    
//     renderHPLife: function(){
//         enemy.elHP.innerText=enemy.damageHP + ' / ' + enemy.defaultHP;
//     },    
//     renderProgressbarHP: function(){
//         enemy.elProgressbar.style.width = enemy.damageHP + '%';
//     },
   
//     changeHP: function(count) {
//         if(enemy.damageHP<count) {
//             enemy.damageHP=0;
//             alert('Бедный '+ enemy.name+' проиграл бой!');
//             $btn2.disabled = enemy;

//         }else{
//             enemy.damageHP -= count;
//         }
//         renderHP();

//         const log = enemy === enemy ? generateLog(enemy, character) : generateLog(enemy, enemy);
//         const $p = document.createElement('p');
//         $p.innerText=log;
//         $logs.appendChild($p);
//     }  
// }
// function renderHP(){
//     character.renderHPLife();
//     character.renderProgressbarHP();
//     enemy.renderHPLife();
//     enemy.renderProgressbarHP();
// };
