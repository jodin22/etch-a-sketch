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
div.setAttribute('style', 'border-style: solid; border-color: black'); // adds some styling to your new div
// move this to css later. while testing, want to see each div clearly so when we do flex or grid, we can see how much space
// between each square is needed. later in css, resize each div as a square
div.textContent = 'This will be a square'; // add text to your new div. this is actually a child of your div so when you clone 
// this, you need to use true. if you use false, the text won't appear.
container.appendChild(div); // append to the div container

/*
const divClone = div.cloneNode(true);  // true will clone descendents. in this case, the div has a descendent which is the 
// textContent. you must use true or else it will only clone the div with no text inside. 
container.appendChild(divClone);
*/

for(let i = 1; i <= 264; i++) { // appends 264 divs. the first div is appended without a loop. see line 20.
    const divClone = div.cloneNode(true);  // true will clone descendents. in this case, the div has a descendent which is the 
    // textContent. you must use true or else it will only clone the div with no text inside. 
    container.appendChild(divClone);
}









