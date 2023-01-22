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
const sections = document.querySelectorAll("section"); 

// creat a variable "list" from the navbar__list ID in the html document to add list items to it later on
const list = document.getElementById("navbar__list"); 

// creat a variable to make the navbar dynamic each time we added a section later in the script
let nNavbarListItems = sections.length;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/*-- Each Section has an ID (used for the anchor) and 
    a data attribute that will populate the li node.
    Adding more sections will automatically populate nav.
    The first section is set to active class by default -->
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// loop over the sections
sections.forEach(section=>{
        // section id and section data-nav attribute
    const sectionId = section.getAttribute("id"); //section.id
    const sectionName = section.getAttribute("data-nav"); //section.dataset.nav
        //item then is created and stored in variable 'li'
    const listItem = document.createElement("li");
    const listLink = document.createElement('a');
        //item text added, href, title
    listLink.href = `#${sectionId}` // listLink.setAttribute(href,"#" + sectionId)
    listLink.textContent = sectionName   
    listLink.classList.add("menu__link") 
        // another method //listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;
        
        // add smooth scrolling to selected section
    listLink.addEventListener("click", evt =>{
        evt.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        })
    })
        // add items in the for loop to the list variable (navbar__list)
    listItem.appendChild(listLink);
    fragment.appendChild(listItem);
    
})
list.appendChild(fragment);

/*
There is another way to perform looping over sections creating a for loop
and we can also creat the list through a funtion and later on we can invoke the functions as follows //

/**function createListItem(){
 *    for (section of sections){
 *        // section id and section data-nav attribute
 *        const sectionId = section.getAttribute('id'); //section.id
 *        const sectionName = section.getAttribute('data-nav'); //section.dataset.nav
 *        //item then is created and stored in variable 'li'
 *        const listItem = document.createElement('li');
 *        //item text added, href, title
 *        const listLink = document.createElement('a');
 *        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;
 *        listLink.classList.add('menu__link');
 *        // add smooth scrolling to selected section
 *        listLink.addEventListener("click",evt =>{
 *            evt.preventDefault();
 *            section.scrollIntoView({
 *                behavior: "smooth"
 *            })
 *        })
 *        // add items in the for loop to the list variable (navbar__list)
 *        listItem.appendChild(listLink);
 *        fragment.appendChild(listItem);
 *    }
 *list.appendChild(fragment);
 *}
 * // invoke the function
 * // build menu(List)
 * createListItem()
 */


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/



// Build menu 


// Scroll to section on link click
window.addEventListener("scroll", evt =>{
    sections.forEach(section =>{
        observer.observe(section);
    })
})

// Set sections as active //

// we will use observer callback function
// first we select all sections using querySelectorAll
const links = document.querySelectorAll("a.menu__link")
const callback = (entries) =>{
    let section = entries[0];
    // we remove first the active class from the default of the already active
        section.target.classList.remove("your-active-class");
    // condition status to be active if the class intersecting as in the observer call back function
    // the target in section is the classList
    // loop the action using for each method
    if(section.isIntersecting){
        section.target.classList.add("your-active-class");
        links.forEach(link =>{
            if(link.textContent === section.target.database.nav){
                link.classList.add("active-link");
            }else{
                link.classList.remove("active-link");
            }
        })
    }else{
    section.target.classList.remove("your-active-class");
    }
}
// set sections as active 
// add the option argument
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
}
// write the observer function
const observer = new IntersectionObserver(callback, options);

/*
// there is another method
  *  
  *  function makeActive(){
  *      for (section of sections) {
  *          const box = section.getBoundingClientRect();
  *          section.target.classList.remove("your-active-class");
  *  //Find a value that works best, but 150 seems to be a good start.
  *          if (box.top <= 0 && box.bottom >= 150) {
  *  //apply active state on current section and corresponding Nav link
  *              section.target.classList.add("your-active-class");
  *          } else {
  *  //Remove active state from other section and corresponding Nav link
  *              section.target.classList.remove("your-active-class");
  *          }
  *      }
  *  }
  *  
  *  // Make sections active
  *  document.addEventListener("scroll", function() { makeActive();});
  *  
*/

//? test time for my code
/*
const t0 = performance.now();
const t1 = performance.now()
console.log("This code took " + (t1 - t0) + " milliseconds");
*/
