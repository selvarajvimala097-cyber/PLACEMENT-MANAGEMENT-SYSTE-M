let editingPlacement = null;


function displayPlacements(list = placements) {

    let table =
        document.getElementById("placementTable");

    table.innerHTML = "";

    list.forEach((placement, index) => {

        table.innerHTML += `

        <tr>

            <td>${placement.id}</td>

            <td>${placement.student}</td>

            <td>${placement.company}</td>

            <td>${placement.role}</td>

            <td>${placement.package}</td>

            <td>${placement.date}</td>

            <td>

                <button class="edit-btn"
                    onclick="editPlacement(${index})">
                    Edit
                </button>

                <button class="delete-btn"
                    onclick="deletePlacement(${index})">
                    Delete
                </button>

            </td>

        </tr>

        `;
    });
}


document.getElementById("placementForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let placement = {

        id:
            editingPlacement !== null
            ? placements[editingPlacement].id
            : Date.now(),

        student:
            document.getElementById(
                "placementStudent"
            ).value,

        company:
            document.getElementById(
                "placementCompany"
            ).value,

        role:
            document.getElementById(
                "placementRole"
            ).value,

        package:
            document.getElementById(
                "placementPackage"
            ).value,

        date:
            document.getElementById(
                "placementDate"
            ).value
    };


    if(editingPlacement !== null) {

        placements[editingPlacement] = placement;

        editingPlacement = null;

    } else {

        placements.push(placement);

    }


    saveData();

    displayPlacements();

    this.reset();

});


function editPlacement(index) {

    let placement = placements[index];

    document.getElementById(
        "placementStudent"
    ).value = placement.student;

    document.getElementById(
        "placementCompany"
    ).value = placement.company;

    document.getElementById(
        "placementRole"
    ).value = placement.role;

    document.getElementById(
        "placementPackage"
    ).value = placement.package;

    document.getElementById(
        "placementDate"
    ).value = placement.date;

    editingPlacement = index;
}


function deletePlacement(index) {

    if(confirm("Delete this placement?")) {

        placements.splice(index, 1);

        saveData();

        displayPlacements();
    }
}


document.getElementById("searchPlacement")
.addEventListener("input", function() {

    let value =
        this.value.toLowerCase();

    let result =
        placements.filter(placement =>
            placement.student
            .toLowerCase()
            .includes(value) ||

            placement.company
            .toLowerCase()
            .includes(value)
        );

    displayPlacements(result);
});


displayPlacements();
