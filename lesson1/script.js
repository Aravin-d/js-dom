const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {

    if(e.target.className == "delete"){

        const li = e.target.parentElement;
        li.parentElement.removeChild(li)
    }
})

//add books list

const addForm = document.forms['add-book']

addForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value
    
    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    //add content
    bookName.textContent = value
    bookName.className = 'name'
    deleteBtn.textContent = 'Delete'
    deleteBtn.className = 'delete'

    //append to dom
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li)
})
