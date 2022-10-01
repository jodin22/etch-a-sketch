/* 
        <p>One was first</p> <!-- node 0 -->
        <p>Two was second</p> <!-- node 1 -->
        <p>Three was third</p> <!-- node 2 -->

let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2], paragraphs[0]);
// selects all p tags and inserts the node 2 before node 0 which will show Three as the first then One then Two.

*/

const container = document.querySelector('#container');
const div = document.createElement('div');
div.classList.add('square');
div.setAttribute('style', 'border-style: solid; border-color: black'); // move this to css later. while testing, want to see 
// each div clearly so when we do flex or grid, we can see how much space between each square looks ok
div.textContent = 'This will be a square';
container.appendChild(div);

const divClone = div.cloneNode(true);
container.appendChild(divClone);





