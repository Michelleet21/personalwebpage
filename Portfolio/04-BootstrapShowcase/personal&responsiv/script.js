document.getElementById("agendaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const date = document.getElementById("date").value;
    const school = document.getElementById("school").value;
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const familiar = document.getElementById("familiar").value;


    const table = document.getElementById("scheduleTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = date;
    newRow.insertCell(1).textContent = school;
    newRow.insertCell(2).textContent = name;
    newRow.insertCell(3).textContent = profession;
    newRow.insertCell(4).textContent = familiar;


    document.getElementById("agendaForm").reset();
});
