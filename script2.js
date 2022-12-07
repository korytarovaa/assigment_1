/*
 * Assignment 1: Paired Modelling
 * ------------------------------
 * Programming 2022, Interaction Design Bacherlor, Malmö University
 * 
 * This assignment is written by:
 * Alzbeta Korytarova
 * Julia Wallén
 * 
 * 
 * The template contains some sample code exemplifying the template code structure.
 * You can build on top of it, or remove the example values etc.
 * 
 * For instructions, see the Canvas assignment: https://mau.instructure.com/courses/11936/assignments/84965
//  * For guidence on how to use the template, see the demo video:
//  *
//  */

// // The state should contain all the "moving" parts of your program, values that change.
// let state = Object.freeze({
//     pointerEvent: { x: 0, y: 0 },
//     defenderSize: { height: 150, width: 150 },
//     defenderColor: "",
//     defenderOpacity: 100 %
    
// });


// // The settings should contain all of the "fixed" parts of your programs, like static HTMLElements and paramaters.
// const settings = Object.freeze({
//     defender: {
//         HTMLElement: document.querySelector("#defence-circle"),

//     },

// });


// /**
//  * Update the state object with the properties included in `newState`.
//  * @param {Object} newState An object with the properties to update in the state object.
//  */
// function updateState(newState) {
//     state = Object.freeze({ ...state, ...newState }); //gets all parameters from the state object puts them in the state variable and then gets all the properties from the newstate object and if there is a difference, it rewrites the old property
// }


// /**
//  * Return `num` normalized to 0..1 in range min..max.
//  * @param {number} num
//  * @param {number} min 
//  * @param {number} max 
//  * @returns number
// */
// function scale(num, min, max) { // unifies the location to be in scale from 0 to 1
//     if (num < min) return 0;
//     if (num > max) return 1;
//     return (num - min) / (max - min);
// }

// /**
//     * Return`num` transformed from the normalised 0..1 form back to the min..max form.
//     * @param { number } num
//     * @param { number } min
//     * @param { number } max
//     * @returns number
//  */

// function toAbsolute(num, min, max) {
//     if (num < 0) return min;
//     if (num > 1) return max;
//     return (num * (max - min)) + min;
// }

// /**
//  * This is where we put the code that transforms and outputs our data.
//  * loop() is run every frame, assuming that we keep calling it with `window.requestAnimationFrame`.
//  */
// function loop() {
//     const { pointerEvent } = state; //tells that we will use specifically the pointerEvent property from the state object
//     // -//-

//     const distanceFromDefender = Math.sqrt(((Math.abs(0, 5 - scale(pointerEvent.x, 0, window.innerWidth))) ** 2) * ((Math.abs(0, 5 - scale(pointerEvent.y, 0, window.innerWidth))) ** 2))
//     console.log("pointer event x:" + pointerEvent.x)

//     /** 
//     const mirroredPoint = {
//         x: 1 - scale(pointerEvent.x, 0, window.innerWidth),
//         y: 1 - scale(pointerEvent.y, 0, window.innerHeight),
//     }
 
//     const absolutePoint = {
//         x: toAbsolute(mirroredPoint.x, 0, window.innerWidth) - (sample.width / 2),
//         y: toAbsolute(mirroredPoint.y, 0, window.innerHeight) - (sample.height / 2),
//     }
//     */

//     let defenderHeight = distanceFromDefender * 5000
//     let defenderWidth = distanceFromDefender * 5000

//     updateState({ defenderSize: { height: defenderHeight, width: defenderWidth } })



//     window.requestAnimationFrame(loop);//calls itself everytime the screen updates
// }


// /**
//  * Setup is run once, at the start of the program. It sets everything up for us!
// */

// function setup() {
//     const { defender } = settings;
//     defender.HTMLElement.style.height = `150px`;
//     defender.HTMLElement.style.width = `150px`;
//     defender.HTMLElement.style.backgroundColor = "rgb(31, 201, 210)"

//     document.addEventListener("pointermove", function (event) {
//         updateState({ pointerEvent: { x: event.clientX, y: event.clientY } })//sets that it updates the event location in the state object everytime the cursor moves
//     });

//     loop(); //calls loop once, but the loop then repeat itself everytime the screen updates
// }


// setup(); // Always remember to call setup()!


// //pointerover pointerout