var employees =
[
  { firstname: "Jan"
  , surname: "Kowalski"
  , birthdate: new Date(1985, 2, 14)
  , details: printDetails
  },

  { firstname: "Stefan"
  , surname: "Burczymucha"
  , birthdate: new Date(1962, 5, 7)
  , details: printDetails
  },

  { firstname: "Mieszko"
  , surname : "Pierwszy"
  , birthdate: new Date(940, 2, 1)
  , details: printDetails
  }
];

function printDetails()
{
  var details = "Employee " + this.firstname + " " + this.surname +
                " was born " + this.birthdate.getDate() + "." +
                (this.birthdate.getMonth() + 1) + "." +
                this.birthdate.getFullYear();

  console.log(details);

  return details;
}

var employeeList = document.getElementById("employeeList");

for (i = 0; i < employees.length; ++i)
{
  var listElem = document.createElement("li");
  var elemText = document.createTextNode(employees[i].details());

  listElem.appendChild(elemText);
  employeeList.appendChild(listElem);
}
