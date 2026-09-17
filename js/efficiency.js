function calculateEfficiency() {

    let totalStudents =
        students.length;

    let placedStudents =
        students.filter(
            student => student.status === "Placed"
        ).length;

    let totalCompanies =
        companies.length;

    let efficiency =
        totalStudents > 0
        ? Math.round(
            (placedStudents /
            totalStudents) * 100
        )
        : 0;


    document.getElementById(
        "totalStudents"
    ).innerText = totalStudents;


    document.getElementById(
        "totalPlaced"
    ).innerText = placedStudents;


    document.getElementById(
        "totalCompanies"
    ).innerText = totalCompanies;


    document.getElementById(
        "efficiencyRate"
    ).innerText = efficiency + "%";


    document.getElementById(
        "efficiencyBar"
    ).style.width = efficiency + "%";


    document.getElementById(
        "efficiencyText"
    ).innerText = efficiency + "%";
}


calculateEfficiency();
