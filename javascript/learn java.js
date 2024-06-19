const userList = document.querySelector('.user-list');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pageNumbers = document.querySelector('.page-numbers');

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
  { id: 4, name: 'Alice Williams' },
  { id: 5, name: 'Tom Davis' },
  { id: 6, name: 'Sarah Miller' },
  { id: 7, name: 'Mike Wilson' },
  { id: 8, name: 'Amy Taylor' },
  { id: 9, name: 'David Anderson' },
  { id: 10, name: 'Emily Thompson' },
  // Add more users as needed
];

const itemsPerPage = 5; // Number of items to display per page
const totalPages = Math.ceil(users.length / itemsPerPage);
let currentPage = 1;

// Function to render user list
function renderUserList(users, page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageUsers = users.slice(startIndex, endIndex);

  userList.innerHTML = '';
  pageUsers.forEach((user) => {
    const userItem = document.createElement('div');
    userItem.classList.add('user-item');
    userItem.textContent = `${user.id}. ${user.name}`;
    userList.appendChild(userItem);
  });
}

// Function to render page numbers
function renderPageNumbers() {
  pageNumbers.innerHTML = '';

  const pageNumbersArray = [];
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.classList.add('page-number');
    if (i === currentPage) {
      pageButton.classList.add('active');
    }
    pageButton.addEventListener('click', () => {
      currentPage = i;
      renderPageNumbers();
      renderUserList(users, currentPage);
    });
    pageNumbersArray.push(pageButton);
  }

  pageNumbers.append(...pageNumbersArray);
}

// Function to handle previous button click
function handlePrevClick() {
  if (currentPage > 1) {
    currentPage--;
    renderPageNumbers();
    renderUserList(users, currentPage);
  }
}

// Function to handle next button click
function handleNextClick() {
  if (currentPage < totalPages) {
    currentPage++;
    renderPageNumbers();
    renderUserList(users, currentPage);
  }
}

// Event listeners
prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);

// Initial render
renderUserList(users, currentPage);
renderPageNumbers();