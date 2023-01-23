/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// creat fragment limit reflow and repaint
const fragment = document.createDocumentFragment();

// identify the sections and pass them into a variable called sections as an array
const sections = Array.from(document.querySelectorAll("section")); 

// creat a variable "list" from the navbar__list ID in the html document to add list items to it later on
const myList = document.getElementById("navbar__list"); 

// creat a variable to make the navbar dynamic each time we added a section later in the script
let nNavbarListItems = sections.length;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/*optional
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createListItem(){
    for (const section of sections){
    // section id and section data-nav attribute
        let sectionId = section.getAttribute("id"); //section.id
        let sectionName = section.getAttribute("data-nav"); //section.dataset.nav
    //item then each list item is created and stored in variable 'li'
        const listItem = document.createElement("li");
    //item text added, href, title
        listItem.innerHTML = `<a class="menu__link" href="">${sectionName}</a>`;
        

        // add items in the for loop to the list variable (navbar__list)
        myList.appendChild(listItem);
    }
}

// invoke the function
// build menu(List)
createListItem()

// Set sections as active //

function makeActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        // section.target.classList.remove("your-active-class");
//Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 150 && box.bottom >= 150) {
//apply active state on current section and corresponding Nav link
            section.classList.add("your-active-class");
        } else {
//Remove active state from other section and corresponding Nav link
            section.classList.remove("your-active-class");
        }
    }
}

// Make sections active
document.addEventListener("scroll", makeActive);

// Scroll to section on link click
myList.addEventListener("click", (toSection) => {
    toSection.preventDefault();
    sections.forEach((section) => {
        const box = section.getAttribute("data-nav") === toSection.target.innerHTML? section : null;
        box ? box.scrollIntoView({behavior: "smooth", block: "center"}) : null;
    });
});