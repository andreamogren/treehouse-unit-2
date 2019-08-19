/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
 

/*** Global variables **/
//Getting all students listed in the HTML
const students = document.querySelectorAll('.student-item'); 
//Setting max number of students to show on each page 
const maxItems = 10; 
//Saving a reference to the .page div
const page = document.querySelector('.page');  
//pagesDiv and searchDiv are empty for now since the elements that should be stored in them don't exist yet
let pagesDiv;
let searchDiv; 

//Show page function (filters students and displays 10 at a time depending on which page you are on)
const showPage = (list, page) => {
   //Calculating where in the students list the filtered list should start
   const startIndex = (page * maxItems) - maxItems; 
   //Calculating where in the students list the filtered list should end
   const endIndex = page * maxItems; 
   //Looping through all students to create the list
   for (let i = 0; i < list.length; i++){
      const item = list[i]; 
      //If the item's index is greater than or equal to the start index AND less than or equal to the end index
      if (i >= startIndex && i <= endIndex) {
         //Reset the item's display property to whatever it was on load
         item.style.display = ''; 
      } else {
         //Else set it to none
         item.style.display = 'none'; 
      }
   }
}

//Append page links function (creates a link for each page needed and appends links to DOM)
const appendPageLinks = (list) => {
   const pagesNeeded = Math.ceil(list.length / maxItems); 
   let paginationDiv = document.createElement("div");
   paginationDiv.classList.add('pagination'); 

   for (let i = 1; i < pagesNeeded + 1; i++) {
      let paginationMarkup = `<li><a href="${i}">${i}</a></li>`; 
      paginationDiv.innerHTML += paginationMarkup; 
   } 
   page.appendChild(paginationDiv); 
   pagesDiv = document.querySelector('.pagination'); 
}

//Calling these two functions on load
appendPageLinks(students); 
showPage(students, 1); 

//Adding click event listener to div with page links
pagesDiv.addEventListener('click', (event) => {
   //Stop the browser from trying to go to example.com/1
   event.preventDefault(); 
   //Save reference to clicked element 
   const clickedPage = event.target;
   //Save references to all pages with the page active 
   let activePages = document.querySelectorAll('.active');
   
   //Loop through pages with class 'active' and remove that class
   for (let i = 0; i < activePages.length; i++) {
      activePages[i].classList.remove('active'); 
   }
   
   //Get innerHTML (the number) of clicked page
   const clickedPageNumber = clickedPage.innerHTML;
   //Add class 'active' to clicked element
   clickedPage.classList.add('active'); 
   //Run showPage function with the new page number as the second paramter 
   showPage(students, clickedPageNumber); 
}); 