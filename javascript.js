/* 
        <p>One was first</p> <!-- node 0 -->
        <p>Two was second</p> <!-- node 1 -->
        <p>Three was third</p> <!-- node 2 -->

let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2], paragraphs[0]);
// selects all p tags and inserts the node 2 before node 0 which will show Three as the first then One then Two.

*/

const container = document.querySelector('#container'); // gets the id and puts in a var
const div = document.createElement('div'); // creates a new div and puts in a var
div.classList.add('square'); // creates a new class for your new div
// div.setAttribute('style', 'border-style: solid; border-color: black'); // adds some styling to your new div
// move this to css later. while testing, want to see each div clearly so when we do flex or grid, we can see how much space
// between each square is needed. later in css, resize each div as a square
div.textContent = 'Square'; // add text to your new div. this is actually a child of your div so when you clone 
// this, you need to use true. if you use false, the text won't appear.
container.appendChild(div); // append to the div container


/* figure out if you need this in the button area 
const divClone = div.cloneNode(true);  // true will clone descendents. in this case, the div has a descendent which is the 
// textContent. you must use true or else it will only clone the div with no text inside. 
container.appendChild(divClone); */

for(let i = 2; i <= 256; i++) { // appends 255 divs. the first div is appended in line 20 without a loop. 
    // so 1 + 255 = 256 which will equal the 16x16 grid.
    const divClone = div.cloneNode(true);  // true will clone descendents. in this case, the div has a descendent which is the 
    // textContent. you must use true or else it will only clone the div with no text inside. 
    container.appendChild(divClone);
}

/* select all div class square. then loop thru each one to do a mouse enter and leave. remember the node list is not a real array
but it does have the forEach method available to it so this will still work.
*/
 
const divClassSquare = document.querySelectorAll('.square'); // gets all the class square and puts it in a var. this var is  
// a node list which is an array-like thing. 
divClassSquare.forEach(square => square.addEventListener('mouseenter', (e) => {  
    // console.log('This is mouse enter'); // while testing, it prints mouse enter and all the event properties
    // console.log(e);

    // use the forEach method. this takes each element in the node list and uses an arrow function to pass each element to the 
    // event listener. since a forEach method is similar to a loop where you do an action over and over again, but this repetitive 
    // action is done the same for each element in the node list. it only ends when there are no longer elements to do the action 
    // on. so forEach is a good method to use on node lists bc you will never know how many of those nodes you will have.
    // the event listener is listening for the mouse enter. and the (e) is the mouse enter object which you are passing to  
    // another arrow function. this arrow function does only one thing for now. it can do many things if you have more steps, 
    // but for now, you only want it to do one thing which is to change the color. you do that by using the target of the object. 
    
    e.target.setAttribute('style', 'background-color: orange'); // changes the background color from the original to orange

    // essentially all this does is go through each of your class square and listens for the mouse enter event. when the mouse 
    // enter happens, then it changes the color of the target where the mouse enter happened.    
}));

divClassSquare.forEach(square => square.addEventListener('mouseleave', (e) => {
    // console.log('This is mouse leave'); // while testing, it prints mouse leave and all the event properties
    // console.log(e);
    e.target.setAttribute('style', 'background-color: rgb(207,232,220)'); // changes the background color back to the original

    // essentially all this does is go through each of your class square and listens for the mouse leave event. when the mouse 
    // leave happens, then it changes the color of the target where the mouse leave happened. refer to the notes for the mouse 
    // enter section above this section if you need a refresher on arrow functions and event listeners.

}));

// above this line is for the first part of the hw which is to create a grid of squares 16x16 and each time the mouse hovers over
// the square, it changes colors. it works. leave alone.

// below this line is the last part of the hw. it creates a button. when you click the button, a pop up asks the user for a number.
// this number will create a new grid of squares using that number for each side. if the number is 11, then a grid of 11x11 
// squares are made. it works. but the color feature doesn't work. the color feature is only on the first square and the rest 
// of the squares don't have the color changing feature. figure out what is wrong. maybe put the color change in a function and
// call it repeatedly? another unusual thing is that when the user enters 0, there is still 1 square made in the grid.
// and that single square has the color change feature. maybe that first square is not really from the code below but is a
// left over in memory from the first 256 squares? confused on what nodes are still in memory and which ones are no longer
// in memory. had that problem trying to remove child nodes. used the container.setAttribute('id', 'new-container'); to make 
// the removing of child nodes work. does this mean that the first child of the original <div id='container'> didn't get
// removed when the loop for removing child nodes ran?

const outerButton = document.querySelector('#outer'); // gets the id and puts in a var
const divButton = document.createElement('div'); // creates a new div and puts in a var
divButton.classList.add('button'); // adds a class to your new div
const button = document.createElement('button'); // creates a button and puts in a var
button.textContent = 'Click Me!' // puts some text in your button
outerButton.insertBefore(divButton, container); // appends the new div above the container div. remember the structure has 
// div id outer as the parent and the first child is div id container. you need to put the new div before the div container.
divButton.appendChild(button); // now the structure is div id outer (parent), then div class button (first child), then div id 
// container (next child). since div class button is already the first child of div id outer, you can use appendChild and don't 
// need insertBefore 

/* the below for the click seems to work ok in terms of making a grid with the correct number of squares on each side. but 
the changing of the colors from the mouse event no longer works. maybe put the color changing in a function and call it? */
button.addEventListener('click', (e) => {
    console.log(e);
    const eachSideNumber = Number(window.prompt('Type a number:', ''));  // need to specify between 2 to 100 bc if only 1, then it 
    // isn't a grid and if more than 100, the computer resources start to slow down/freeze.
    console.log(eachSideNumber);
    const totalNumber = eachSideNumber * eachSideNumber;
    console.log(totalNumber);

    container.setAttribute('id', 'new-container'); // container var is <div id='container'> from way up top
    // if id exists, update it to new-container, else create an id with value new-container. 
    // the result will be <div id='new-container'> and it stays that way after each button click

    const wasOriginalGrid = document.querySelector('#new-container');
    while (wasOriginalGrid.firstChild) {
        wasOriginalGrid.removeChild(wasOriginalGrid.lastChild);
    } // this got rid of the original 256 squares. the first one is still showing the color changing is on the
    // the new ones added lost the color changing

    container.appendChild(div); // this and the loop below it put the new squares

    for(let i = 2; i <= totalNumber; i++) { // appends more divs based on the user's number. the first div is appended before the loop. 
        // so start the counter at 2 and keep appending until you hit the user's number.
        const divClone = div.cloneNode(true);  // true will clone descendents. in this case, the div has a descendent which is the 
        // textContent. you must use true or else it will only clone the div with no text inside. 
        container.appendChild(divClone);
    }

    /* grid-template-columns: repeat(16, minmax(0, 1fr)); changed the 2nd param to have a minmax instead of 1fr only
    grid-auto-rows: minmax(0, 1fr); the cols are explicit and the rows are implicit. this gives a minmax to each row.
    remember that the 16 explicit cols means it won't go beyond 16 and when it wants to fit more after 16 cols, then it will do 
    so in col 1 of the next row and the next row and so on. so rows will show up. */

    // the above grid-template-columns is from the css file. since the css can't use variables other than specific numbers in the 
    // repeat(), the below inline style can use variables and will resize the grid based on the user number input. also bc it is
    // an inline style rule, it overrides the css file
    container.style.gridTemplateColumns = `repeat(${eachSideNumber}, minmax(0, 1fr))`;
    container.style.gridAutoRows = 'minmax(0, 1fr)';

});












