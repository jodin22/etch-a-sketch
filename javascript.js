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
console.log(divClassSquare); // to see the count of nodes and to compare the count with what happens when you click the button
// see the console.log(divClassSquareAfterButton) to see how many nodes after you click the button and get the 
// user's number. seems to shows the correct number of nodes
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
// of the squares don't have the color changing feature.

// another unusual thing is that when the user enters 0, there is still 1 square made in the grid.
// and that single square has the color change feature. maybe that first square is not really from the code below but is a
// left over in memory from the first 256 squares? confused on what nodes are still in memory and which ones are no longer
// in memory. had that problem trying to remove child nodes. used the container.setAttribute('id', 'new-container'); to make 
// the removing of child nodes work. does this mean that the first child of the original <div id='container'> didn't get
// removed when the loop for removing child nodes ran?

// solved the color changing feature after the button click by 
// re-using the divClassSquare.forEach(square => square.addEventListener('mouseenter', (e) => { ... but instead of using the 
// var divClassSquare, i used another var called const divClassSquareAfterButton = document.querySelectorAll('.square'); this
// new var is still holding the node list of all the divs class square. <div class='square'>. before i thought the forEach would
// still work from the earlier lines of code above but the new squares didn't change colors. 

// seems when we reference a node by a var name, it seems some times we can't use that var again? learned that the first time 
// when i wanted to append multiple divs and i couldn't so i had to use cloneNode. maybe it's best to use things like
// container.setAttribute('id', 'new-container') to use that div id again but using a new id to then change the children or 
// create another var that references the same node you want to reuse and reuse it using it's new var name? need to read more 
// about reusing nodes and their children. also see if toggle class is better than setAttribute?

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



/* the below is what happens when you click the button. everything above this line is creating the 16x16 grid of squares. showing 
the color change effect when the mouse enters/leaves the square. and finally adding a button. some important differences from the 
earlier part of your code from way up above is that the <div id='container'> changes to <div id='new-container> after the button 
click. this was needed in order to target the children divs of the container in order to remove them before appending the new divs 
for the squares based on the user's number. 

also the node list of all the <div class='square'> is referenced with 2 vars. up above, it is referenced with 
divClassSquare. after the button click, it is referenced with divClassSquareAfterButton even though the node list is the same
<div class='square'>. you had to reference a new var otherwise the colors didn't change.
 */


button.addEventListener('click', (e) => {
    console.log(e);
    const eachSideNumber = Number(window.prompt('Type a number between 1 and 100. The number determines how many squares per side of the new grid:', ''));
    console.log(eachSideNumber);  // to limit only numbers 1 thru 100. this exits the button event if an invalid number is typed
    if (eachSideNumber < 1) { 
        alert('It must be between 1 and 100');
        return;
    } else if (eachSideNumber > 100) {
        alert('It must be between 1 and 100');
        return;
    } else if (eachSideNumber !== eachSideNumber) { // since a letter or space or or any key that is not a number is still 
        // a numeric data type bc of casting the prompt as a Number, it is seen as NaN. to test for something that is NaN, 
        // you can use that value !== value.
        alert('It must be between 1 and 100');
        return;
    };

    const totalNumber = eachSideNumber * eachSideNumber;
    console.log(totalNumber);

    container.setAttribute('id', 'new-container'); // original container var is <div id='container'> from way up top
    // if id exists, update it to new-container, else create an id with value new-container. 
    // the result will be <div id='new-container'> and it stays that way after each button click
    // before the button click, the <div id='container'> and all its children which are the original 256 squares are shown.
    // then after each button click, the <div id='container'> becomes <div id='new-container'> and all its children are based 
    // on that reference. that's why your loop on removing the previous children to append the new children is using the 
    // id new-container.

    // this part removes all children starting from the first child. it goes top down.
    const wasOriginalGrid = document.querySelector('#new-container');
    while (wasOriginalGrid.firstChild) {
        wasOriginalGrid.removeChild(wasOriginalGrid.firstChild);
    }

    /*  this part removes all children starting from the last child. it goes bottom up.
    const wasOriginalGrid = document.querySelector('#new-container');
    while (wasOriginalGrid.firstChild) {
        wasOriginalGrid.removeChild(wasOriginalGrid.lastChild);
    } // this got rid of the original 256 squares. the first one is still showing the color changing is on the
    // the new ones added lost the color changing
    */

    console.log(wasOriginalGrid.firstChild); // shows null?
    // const remainingChild = wasOriginalGrid.firstElementChild;  doesn't work. gives error about node is not child of element
    // and something about button but this is not under button. it is under <div id=new-container>?
    // wasOriginalGrid.removeChild(remainingChild);

    wasOriginalGrid.appendChild(div); // this and the loop below it put the new squares

    for(let i = 2; i <= totalNumber; i++) { // appends more divs based on the user's number. the first div is appended before the loop. 
        // so start the counter at 2 and keep appending until you hit the user's number.
        const divClone = div.cloneNode(true);  // true will clone descendents. in this case, the div has a descendent which is the 
        // textContent. you must use true or else it will only clone the div with no text inside. 
        container.appendChild(divClone);
    }

    // the below changes the color of the new squares. it is almost identical to lines 33 to 65 which is the changing of the 
    // colors of the first 16x16 square grid. the only difference is the var name. instead of reusing the same var name that 
    // held the node list of <div class='square'>, this one uses divClassSquareAfterButton to hold the same node list. now 
    // the color change works.
    // i wonder if you put the color change in a function and just call the function then it doesn't matter on the var name of 
    // divClassSquareAfterButton vs divClassSquare 
    const divClassSquareAfterButton = document.querySelectorAll('.square');
    console.log(divClassSquareAfterButton); // to see the count of nodes after you click the button and get the user's numbers.
    // see the console.log(divClassSquare) to see how many nodes before the button click. seems to show the correct number of 
    // nodes.
    divClassSquareAfterButton.forEach(square => square.addEventListener('mouseenter', (e) => { 
        e.target.setAttribute('style', 'background-color: orange');
    }));

    divClassSquareAfterButton.forEach(square => square.addEventListener('mouseleave', (e) => { 
        e.target.setAttribute('style', 'background-color: rgb(207,232,220)');
    }));



    /* grid-template-columns: repeat(16, minmax(0, 1fr)); changed the 2nd param to have a minmax instead of 1fr only
    grid-auto-rows: minmax(0, 1fr); the cols are explicit and the rows are implicit. this gives a minmax to each row.
    remember that the 16 explicit cols means it won't go beyond 16 and when it wants to fit more after 16 cols, then it will do 
    so in col 1 of the next row and the next row and so on. so rows will show up. */

    // the above grid-template-columns is from the css file. since the css can't use variables other than specific numbers in the 
    // repeat(), the below inline style can use variables and will resize the grid based on the user number input. also bc it is
    // an inline style rule, it overrides the css file which means you can leave the css file alone since that is applied to the 
    // 16x16 grid and when the grid size changes, then the below grid cols/rows are used
    container.style.gridTemplateColumns = `repeat(${eachSideNumber}, minmax(0, 1fr))`;
    container.style.gridAutoRows = 'minmax(0, 1fr)';

});












