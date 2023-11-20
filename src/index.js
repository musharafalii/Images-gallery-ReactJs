document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    if (validateForm()) {
      const formData = {
        title: document.getElementById('title').value.trim(),
        date: document.getElementById('date').value,
        status: document.getElementById('status').value,
        description: document.getElementById('description').value.trim()
      };

      // Send the validated data to the JSON server
      sendDataToServer(formData);
    }
  });

  function validateForm() {
    const nameInput = document.getElementById('title');
    const dateInput = document.getElementById('date');
    const statusInput = document.getElementById('status');
    const descriptionInput = document.getElementById('description');

    const nameError = document.getElementById('nameError');
    const dateError = document.getElementById('dateError');
    const statusError = document.getElementById('statusError');
    const descriptionError = document.getElementById('descriptionError');

    let valid = true;

    // Name validation
    const nameValue = nameInput.value.trim();
    if (nameValue.length < 3 || /\d/.test(nameValue)) {
      nameError.textContent = 'Name must be at least 3 characters long and should not contain numbers';
      valid = false;
    } else {
      nameError.textContent = '';
    }

    // Date validation
    if (dateInput.value === '') {
      dateError.textContent = 'Date is required';
      valid = false;
    } else {
      dateError.textContent = '';
    }

    // Status validation
    if (statusInput.value === '') {
      statusError.textContent = 'Status is required';
      valid = false;
    } else {
      statusError.textContent = '';
    }

    // Description validation
    const descriptionValue = descriptionInput.value.trim();
    if (descriptionValue.length < 3) {
      descriptionError.textContent = 'Description must be at least 3 characters long';
      valid = false;
    } else {
      descriptionError.textContent = '';
    }

    return valid;
  }
  
// Store Data in json-server
  function sendDataToServer(data) {
    const apiUrl = ' http://localhost:3000/data'; // Replace with your server URL

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(jsonData => {
      console.log('Data sent to server:', jsonData);
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error sending data to server:', error);
      alert('Form submission failed. Please try again.');
    });
  }
});





// Show Data from json-server
let tbody = document.getElementById("tbody");

// fetch function
fetch("http://localhost:3000/data")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      console.log(data);
      tbody.append(td_fun(data));
    });
  });

// create td
function td_fun({ id, title, date, status, description }) {
  let td = document.createElement("tr");
  td.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap ">
        <div class="flex items-center">
                <div class=""> 
                <div class="text-sm font-medium text-gray-900">
                        ${title}
                    </div>
                    <div class="text-sm text-gray-500">
                        ${date}
                    </div>
                </div>
            </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
           ${status}
        </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-500">${description}</span>
   </td>
    <td class=""> <i class=" fa-solid fa-trash"></i><td/>
     `;

  td.addEventListener("click", () => {
    deleteTask(id);
  });

  // Delete Row Data
  async function deleteTask(taskId) {
    try {
      const response = await fetch(`http://localhost:3000/data/${taskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the task from the DOM
        const taskItem = document.getElementById(`/${taskId}`);
        taskItem.remove();
      } else {
        console.error("Failed to delete the task.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the task.", error);
    }
  }
  return td;
}



// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   let formData = new FormData(form);
//   let data = Object.fromEntries(formData);
//   let jsonData = JSON.stringify(data);

//   fetch(" http://localhost:3000/data", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: jsonData,
//   })
//     .then((res) => res.json())
//     .then((result) => console.log(result))
//     .catch((re) => console.log(re));
// }
