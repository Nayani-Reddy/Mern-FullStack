const container = document.getElementById("container");

fetch("https://dummyjson.com/users")
    .then(response => {

        if(!response.ok){
            throw new Error("Failed to fetch users");
        }

        return response.json();
    })

    .then(data => {

        data.users.forEach(user => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <img src="${user.image}" alt="${user.firstName}">
                <h2>${user.firstName} ${user.lastName}</h2>

                <p><strong>Username:</strong> ${user.username}</p>

                <p><strong>Email:</strong> ${user.email}</p>

                <p><strong>Age:</strong> ${user.age}</p>

                <p><strong>Gender:</strong> ${user.gender}</p>
            `;

            container.appendChild(card);
        });

    })

    .catch(error => {

        container.innerHTML =
        `<h2 style="color:white">Error Loading Data</h2>`;

        console.log(error);

    });