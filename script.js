var pkara = { firstname: "Piotr"
               , surname: "Karasiak"
               , birthdate: new Date(1985, 9, 4)
               , details: printDetails
               };
var rmusi = { firstname: "Radoslaw"
            , surname : "Musial"
            , birthdate: new Date(1976, 2, 1)
            , details: printDetails
            };

var areli = { firstname: "Andrzej"
            , surname: "Religa"
            , birthdate: new Date(1977, 0, 1)
            , details: printDetails
            };

function printDetails()
{
  var details = "Employee " + this.firstname + " " + this.surname +
                " was born " + this.birthdate.getDate() + "." +
                (this.birthdate.getMonth() + 1) + "." +
                this.birthdate.getFullYear();

  console.log(details);

  return details;
}

var pkaraElem = document.createElement("li");
var rmusiElem = document.createElement("li");
var areliElem = document.createElement("li");

var pkaraText = document.createTextNode(pkara.details());
var rmusiText = document.createTextNode(rmusi.details());
var areliText = document.createTextNode(areli.details());

pkaraElem.appendChild(pkaraText);
rmusiElem.appendChild(rmusiText);
areliElem.appendChild(areliText);

var employeeList = document.getElementById("employeeList");
employeeList.appendChild(pkaraElem);
employeeList.appendChild(rmusiElem);
employeeList.appendChild(areliElem);
