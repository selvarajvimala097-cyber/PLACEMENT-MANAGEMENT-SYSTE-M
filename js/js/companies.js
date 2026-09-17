let editingCompany = null;


function displayCompanies(list = companies) {

    let table =
        document.getElementById("companyTable");

    table.innerHTML = "";

    list.forEach((company, index) => {

        table.innerHTML += `

        <tr>

            <td>${company.id}</td>

            <td>${company.name}</td>

            <td>${company.role}</td>

            <td>${company.package}</td>

            <td>${company.location}</td>

            <td>

                <button class="edit-btn"
                    onclick="editCompany(${index})">
                    Edit
                </button>

                <button class="delete-btn"
                    onclick="deleteCompany(${index})">
                    Delete
                </button>

            </td>

        </tr>

        `;
    });
}


document.getElementById("companyForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let company = {

        id:
            editingCompany !== null
            ? companies[editingCompany].id
            : Date.now(),

        name:
            document.getElementById("companyName").value,

        role:
            document.getElementById("companyRole").value,

        package:
            document.getElementById("companyPackage").value,

        location:
            document.getElementById("companyLocation").value
    };


    if(editingCompany !== null) {

        companies[editingCompany] = company;

        editingCompany = null;

    } else {

        companies.push(company);

    }


    saveData();

    displayCompanies();

    this.reset();

});


function editCompany(index) {

    let company = companies[index];

    document.getElementById("companyName").value =
        company.name;

    document.getElementById("companyRole").value =
        company.role;

    document.getElementById("companyPackage").value =
        company.package;

    document.getElementById("companyLocation").value =
        company.location;

    editingCompany = index;
}


function deleteCompany(index) {

    if(confirm("Delete this company?")) {

        companies.splice(index, 1);

        saveData();

        displayCompanies();
    }
}


document.getElementById("searchCompany")
.addEventListener("input", function() {

    let value =
        this.value.toLowerCase();

    let result =
        companies.filter(company =>
            company.name
            .toLowerCase()
            .includes(value)
        );

    displayCompanies(result);
});


displayCompanies();
