let userForm = document.getElementById("user-form");

let retrieveEntries = () => {
    entries = localStorage.getItem("user-entries");
    if(entries)
    {
        entries = JSON.parse(entries)
const dob = document.getElementById("dob");
dob.addEventListener("change", () => validateDob(dob));
function validateDob(dob){
    console.log(dob.value)
let Date1=dob.value.split("-");
let year=Date1[0];
let month=Date1[1];
let date=Date1[2];
let birthdate = new Date(year, month, date);
let today = new Date();
let currentYear= today.getFullYear();
let birthYear=birthdate.getFullYear()
let age = currentYear - birthYear;
let monthDiff = today.getMonth() - birthdate.getMonth();
if ((today.getDate() < birthdate.getDate())||monthDiff<0) 
{
age--;
}
if (age<18 || age>55) 
{
dob.setCustomValidity("Your age is not in between 18 and 55");
dob.reportValidity();
}
else
{
dob.setCustomValidity("");
}
}
let email=document.getElementById("email");
email.addEventListener('input',() => validate(email));
function validate(element){
if(element.validity.typeMismatch){
    element.setCustomValidity("Invalid email");
    element.reportValidity();
    }
    else{
    element.setCustomValidity('');
    }
}           
let userform=document.getElementById('user-form');
const retriveEntries=()=>{
    let entries=localStorage.getItem("entries");
    if(entries){
        entries=JSON.parse(entries);
    }
    else
    {
        entries = [];
    else{
        entries=[];
    }
    return entries;
}
let userEntries=retriveEntries();

let displayEntries = () => {
    const entries = retrieveEntries();

    let items = entries.map((entry) => {
    const nameval = "<td>"+entry.name+"</td>";
    const emailval = "<td>"+entry.email+"</td>";
    const passwordval = "<td>"+entry.password+"</td>";
    const dobval = "<td>"+entry.dob+"</td>";
    const acceptsTermsAndConditionsval = "<td>"+entry.acceptsTermsAndConditions+"</td>";
     const row = "<tr>"+nameval+""+emailval+""+passwordval+""+dobval+""+acceptsTermsAndConditionsval+"</tr>"

     return row;
const displayEntries=()=>{
    let entries=retriveEntries();
    const tableEntries=entries.map((entry)=>{
    const name=`<td>${entry.name}</td>`;
    const email=`<td>${entry.email}</td>`;
    const password=`<td>${entry.password}</td>`;
    const dob=`<td >${entry.dob}</td>`;
    const accept=`<td>${entry.acceptedTermsAndCondition}</td>`;
    const row=`<tr>${name} ${email} ${password} ${dob} ${accept}</tr>`;
    return row;
    }).join("\n");

    let tableData = 
    "<table border='2'><tr><th>Name</th><th>Email</th><th>Password</th><th>Date Of Birth</th><th>Accept Terms & Conditions</th></tr>"+items+"</table>"

    document.getElementById("user-entries").innerHTML=tableData;
    const table=`<table border="2">
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th >Password</th>
    <th>Dob</th>
    <th>Accepted terms?</th>
    </tr>
    ${tableEntries}</table>`;
    let details=document.getElementById("user-entries");
    details.innerHTML=table;
}

let userEntries = retrieveEntries();
let saveEntry = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;

    let age = 2022-parseInt(dob.substr(0,4));
    if(!(age>18 && age<55))
    {
        let dobEle = document.getElementById("dob")
        dobEle.setCustomValidity("Enter the age between 18 and 55 only!!!")
        dobEle.reportValidity();
    }
const saveUserForm=(event)=>{
     event.preventDefault();
     const name=document.getElementById("name").value;
     const email=document.getElementById("email").value;
     const password=document.getElementById("password").value;
     const dob=document.getElementById("dob").value;

    const acceptsTermsAndConditions = document.getElementById("acceptTerms").checked;

    let entry = {
     const acceptedTermsAndCondition=document.getElementById("acceptTerms").checked;
     const entry={
        name,
        email,
        password,
        dob,
        acceptsTermsAndConditions
    }

    userEntries.push(entry);

    localStorage.setItem("user-entries",JSON.stringify(userEntries))
    displayEntries(); 
        acceptedTermsAndCondition
     };
     userEntries.push(entry);
     localStorage.setItem("entries",JSON.stringify(userEntries));
     displayEntries();
}
userForm.addEventListener("submit", saveEntry);
userform.addEventListener("submit",saveUserForm);
displayEntries();