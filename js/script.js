/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
 

//Global variables 
const students = document.querySelectorAll('.student-item'); 
const maxItems = 10; 
const page = document.querySelector('.page');  
let pagesDiv;

const showPage = (list, page) => {
   const startIndex = (page * maxItems) - maxItems; 
   const endIndex = page * maxItems; 

   for(let i = 0; i < list.length; i++){
      const item = list[i]; 
      if (i >= startIndex && i <= endIndex) {
         item.style.display = ''; 
      } else {
         item.style.display = 'none'; 
      }
   }
}

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

appendPageLinks(students); 
showPage(students, 1); 

pagesDiv.addEventListener('click', (event) => {
   event.preventDefault(); 
   const clickedPage = event.target; 
   let activePages = document.querySelectorAll('.active');
   console.log(activePages); 
   
   for (let i = 0; i < activePages.length; i++) {
      activePages[i].classList.remove('active'); 
   }
   
   const clickedPageNumber = clickedPage.innerHTML;
   clickedPage.classList.add('active'); 
   showPage(students, clickedPageNumber); 
}); 