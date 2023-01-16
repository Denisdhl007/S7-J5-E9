

// // // // # Exercice d'observation :
// // // // >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// // // // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // // // >*Attention, dans l'exercice précédent les éléments HTML et les propriétés dans l'objet étaient dans le même ordre ! Cette fois ci, l'ordre est différent, prend le en compte*

// // // // ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// // // // - Tu dois utiliser un querySelectorAll
// // // // - Tu dois cibler la div et plus précicément son id "liste-soft-skills"


// let elements = document.querySelectorAll('#liste-soft-skills h2');

// // // // ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// // // // - Utilise une boucle "for in" pour parcourir ton objet

// Test1
// const h2 = document.querySelector("h2");
// const currentText = h2.innerHTML;
// h2.innerHTML = currentText + " new text";


// let elements = document.querySelectorAll("#liste-competences h2");
// let competences = {
//   HTML: '71%',
//   CSS: '95%',
//   JS : '50%',
//   React: '18%',
//   Laravel: '100%'
// }

// for (let i = 0; i < elements.length; i++) {
//   let current = elements[i];
//   let competence = current.textContent.trim();
//   if (competences[competence]) {
//       current.textContent += ` ${competences[competence]}`;
//   }
// }


// // // // // ### 3. Change le style des h2 selons certaines conditions :
// // // // // - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// // // // // - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// // // // // - Si //     //  égale à 50 alors il n'y a pas de background
// // // // // - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir



// <div id="liste-soft-skills" style="margin-top:100px">
// <h2>GitHub</h2>
// <h2>Trello</h2>
// <h2>Git</h2>
// <h2>Discord</h2>
// </div>


// let softSkills = {
//   Trello: '49%',
//   Git: '87%',
//   GitHub : '50%',
//   Discord: '15%',
// }

// Change le style des h2 selon certaines conditions

// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si le pourcentage est égale à 50 alors il n'y a pas de background
// - Si le pourcentage estest égale à 100 alors le bakcground est gold et l'écriture est noir



let elements = document.querySelectorAll("#liste-soft-skills h2");
let softSkills = {
  Trello: '49%',
  Git: '87%',
  GitHub : '50%',
  Discord: '15%',
}

for (let i = 0; i < elements.length; i++) {
  let current = elements[i];
  let softSkill = current.textContent.trim();
  if (softSkills[softSkill]) {
    let percentage = softSkills[softSkill];
    if( percentage.slice(0, -1) < 50){
      current.style.backgroundColor = "red";
    }else if(percentage.slice(0, -1) > 50 && percentage.slice(0, -1) < 100){
      current.style.backgroundColor = "green";
      current.style.color = "white";
    }else if(percentage.slice(0, -1) == 50){
      current.style.backgroundColor = "white";
    }else if(percentage.slice(0, -1) == 100){
      current.style.backgroundColor = "gold";
      current.style.color = "black";
    }
  }
}










// let softSkills = {
//   Trello: '49%',
//   Git: '87%',
//   GitHub : '50%',
//   Discord: '15%',
// }

// let elements = document.querySelector("div#liste-soft-skills").querySelectorAll("h2");

// console.log(elements);

// elements.forEach(element =>{
//   for(const property in softSkills){
//       if(element.innerText == property){
//           element.innerText += ` : ${softSkills[property]}`;

//           switch(true){
//               case softSkills[property] == '100%':
//                   element.style.background = "gold";
//                   element.style.color = "black";
//                   break;

//               case softSkills[property] < "50%":
//                   element.style.background = "red";
//                   break;
//               case softSkills[property] > '50%':
//                   element.style.background = "green";
//                   element.style.color = "white";
//                   break;

//                case softSkills[property] == '50%':
//                   element.style.background = "none";
//                   break;

//           }
//       }
//   }
// })


