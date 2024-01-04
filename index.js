const addForm = document.forms['add-book'];
    const todoList = document.querySelector('.inner-content ul');

    addForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;

        // Create elements
        const li = document.createElement('li');
        const upDiv = document.createElement('div');
        const titleSpan = document.createElement('span');
        const deleteBtn = document.createElement('span');
        const downDiv = document.createElement('div');
        const dateP = document.createElement('p');

        // Add content
        deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        titleSpan.textContent = value;
        dateP.classList.add('date-display');
        dateP.textContent = getCurrentDate();

        // Add classes
        titleSpan.classList.add('name');
        deleteBtn.classList.add('delete');
        upDiv.classList.add('up');
        downDiv.classList.add('down');

        // Append to DOM
        upDiv.appendChild(titleSpan);
        upDiv.appendChild(deleteBtn);
        downDiv.appendChild(dateP);
        li.appendChild(upDiv);
        li.appendChild(downDiv);
        todoList.appendChild(li);

        // Clear the input field after adding a book
        addForm.querySelector('input[type="text"]').value = '';
    });

    // Function to delete a note
    function deleteTodo(element) {
        const li = element.closest('li');
        if (li) {
            li.remove();
        }
    }

    // Function to get the current date
    function getCurrentDate() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString(undefined, options);
        return currentDate;
    }

    // Function to add date
      let curreDate = new Date();
      let curreDateTime = curreDate.toString();
      let formattedDate = curreDate.toLocaleDateString("en-US", {
        month: "short",
        day:"2-digit",
        year:"numeric"
      });
      console.log(formattedDate);
    //   document.getElementById('date-display').innerHTML = formattedDate
     let dateDisplays = document.querySelectorAll('#date-display');

    // Set the formatted date for each element
    dateDisplays.forEach(function (dateDisplay) {
        dateDisplay.innerHTML = formattedDate;})


    // Function to delete a note
    function deleteTodo(element) {
        const li = element.closest('li');
        if (li) {
            li.remove();
        }
    }


//    Search filter


    const searchInput = document.querySelector('.search');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        filterNotes(searchTerm);
    });

    function filterNotes(searchTerm) {
        const notes = todoList.querySelectorAll('li');

        notes.forEach(function (note) {
            const title = note.querySelector('.name').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                note.style.display = 'block';
            } else {
                note.style.display = 'none';
            }
        });
    }      


    // darkmode Feature
    const darkModeToggle = document.getElementById('darkmode');
const body = document.body;
const wrapper = document.getElementById('wrapper');

darkModeToggle.addEventListener('click', function () {
    // Toggle dark mode styles on body and wrapper
    body.classList.toggle('dark-mode');
    wrapper.classList.toggle('dark-mode-wrapper');

    // Save dark mode preference (optional, can be stored in localStorage)
    const isDarkModeEnabled = body.classList.contains('dark-mode');})