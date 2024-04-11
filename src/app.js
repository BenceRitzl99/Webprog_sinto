const employeeArray = [
    {id: 1, name: "Erős István", city: "Szeged", salary: 395},
    {id: 2, name: "Erős Antónia", city: "Budapest", salary: 695},
    {id: 3, name: "Fekete János", city: "Mezőkovácsháza", salary: 1395},
    {id: 4, name: "Donatello", city: "Budapest", salary: 3},
    {id: 5, name: "Király Obelix", city: "Debrecen", salary: 3950},
]

const empsBody = document.getElementById("empsBody")
var rows = ""

employeeArray.forEach( (employ) => {
    console.log(employ.city)

    var row = `
        <tr>
            <td>${employ.id}</td>
            <td>${employ.name}</td>
            <td>${employ.city}</td>
            <td>${employ.salary}</td>
        </tr>
    `
    rows += row
});

empsBody.innerHTML = rows