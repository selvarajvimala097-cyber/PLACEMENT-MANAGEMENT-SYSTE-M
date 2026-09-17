let students =
    JSON.parse(localStorage.getItem("students")) || [];

let companies =
    JSON.parse(localStorage.getItem("companies")) || [];

let placements =
    JSON.parse(localStorage.getItem("placements")) || [];

function saveData() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    localStorage.setItem(
        "companies",
        JSON.stringify(companies)
    );

    localStorage.setItem(
        "placements",
        JSON.stringify(placements)
    );
}
