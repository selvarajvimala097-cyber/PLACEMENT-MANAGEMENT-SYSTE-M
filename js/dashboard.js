function loadDashboard() {

    let placed =
        students.filter(
            student => student.status === "Placed"
        ).length;

    let total =
        students.length;

    let rate =
        total > 0
        ? Math.round((placed / total) * 100)
        : 0;

    document.getElementById("studentCount")
        .innerText = total;

    document.getElementById("companyCount")
        .innerText = companies.length;

    document.getElementById("placedCount")
        .innerText = placed;

    document.getElementById("placementRate")
        .innerText = rate + "%";

    document.getElementById("progressBar")
        .style.width = rate + "%";

    document.getElementById("progressText")
        .innerText = rate + "%";
}

loadDashboard();
