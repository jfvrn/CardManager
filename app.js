const participants = [
  { name: "Alice Anderson", age: 24, role: "Employee" },
  { name: "Brian Brown", age: 35, role: "Volunteer" },
  { name: "Cynthia Carter", age: 28, role: "Audience" },
  { name: "David Davis", age: 45, role: "Employee" },
  { name: "Emily Evans", age: 32, role: "Volunteer" },
  { name: "Franklin Fisher", age: 38, role: "Audience" },
  { name: "Grace Green", age: 22, role: "Employee" },
  { name: "Henry Harris", age: 29, role: "Volunteer" },
  { name: "Isabella Ingram", age: 31, role: "Audience" },
  { name: "John Johnson", age: 42, role: "Employee" },
  { name: "Karen King", age: 27, role: "Volunteer" },
  { name: "Liam Lee", age: 36, role: "Audience" },
  { name: "Mia Miller", age: 21, role: "Employee" },
  { name: "Noah Nelson", age: 46, role: "Volunteer" },
  { name: "Olivia Owens", age: 19, role: "Audience" },
  { name: "Peter Parker", age: 34, role: "Employee" },
  { name: "Quincy Quinn", age: 30, role: "Volunteer" },
  { name: "Rachel Robinson", age: 26, role: "Audience" },
  { name: "Steven Smith", age: 41, role: "Employee" },
  { name: "Tracy Turner", age: 23, role: "Volunteer" },
  { name: "Ursula Underwood", age: 39, role: "Audience" },
  { name: "Victor Vance", age: 37, role: "Employee" },
  { name: "Wendy Watson", age: 25, role: "Volunteer" },
  { name: "Xavier Xanders", age: 33, role: "Audience" },
  { name: "Yvonne Young", age: 40, role: "Employee" },
  { name: "Zachary Zane", age: 44, role: "Volunteer" },
];

//format des cartes
const cards = document.querySelectorAll(".card");
cards.forEach((card) => card.remove());

generateCards(participants);

//affichage total de carte à l'ouverture de la page
const summary = document.querySelector(".summary");

const summaryParticipants = document.querySelector(
  ".summary--participants"
);
summaryParticipants.remove();

const newsummaryParticipants = `
<p class="summary--participants">Participants: ${
  document.querySelectorAll(".card").length
}</p>`;

summary.insertAdjacentHTML("afterbegin", newsummaryParticipants); 

//Genération et insertion de participans à partir d'un objet
function generateCards(persons) {
  persons = participants;
  // const filtered = persons.filter((persons) => persons.age < 35);

  const container = document.querySelector("main");

  persons.forEach((person) => {
    const html = `
    <div class="card" data-role="${person.role}">
        <div class="card--delete"></div>
        <p class="card--role">${person.role}</p>
        <p class="card--name">${person.name}</p>
        <p class="card--age">${person.age} years old</p>
      </div>
      `;
    container.insertAdjacentHTML("beforeend", html);
  });
}

//insertion de participants à partir d'un formulaire
const container = document.querySelector("main");
const submitBtn = document.querySelector("button");
const nameInput = document.querySelector('input[name="name"]');
const ageInput = document.querySelector('input[name="age"]');
const roleInput = document.querySelector("select");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (nameInput.value && ageInput.value) {
    let person = {
      name: nameInput.value,
      age: ageInput.value,
      role: roleInput.value,
    };

    const html = `
    <div class="card" data-role="${person.role}">
        <div class="card--delete"></div>
        <p class="card--role">${person.role}</p>
        <p class="card--name">${person.name}</p>
        <p class="card--age">${person.age} years old</p>
      </div>
      `;

    container.insertAdjacentHTML("afterbegin", html);
    participants.unshift(person);

    nameInput.classList.remove("error");
    ageInput.classList.remove("error");

    //Calculer et afficher le nouveau nombre de participants
    const summary = document.querySelector(".summary");

    const summaryParticipants = document.querySelector(
      ".summary--participants"
    );
    summaryParticipants.remove();

    const newsummaryParticipants = `
<p class="summary--participants">Participants: ${
      document.querySelectorAll(".card").length
    }</p>`;

    summary.insertAdjacentHTML("afterbegin", newsummaryParticipants);
  } else {
    nameInput.classList.add("error");
    ageInput.classList.add("error");
  }
});

//effacer une carte
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("card--delete")) {
    const card = e.target.closest(".card");
    card.remove();

    //Calculer et afficher le nouveau nombre de participants
    const summary = document.querySelector(".summary");

    const summaryParticipants = document.querySelector(
      ".summary--participants"
    );
    summaryParticipants.remove();

    const newsummaryParticipants = `
<p class="summary--participants">Participants: ${
      document.querySelectorAll(".card").length
    }</p>`;

    summary.insertAdjacentHTML("afterbegin", newsummaryParticipants);
  }
});


