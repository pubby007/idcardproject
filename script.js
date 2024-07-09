function updateCard(){
    document.getElementById("schoolNameVal").innerText = document.getElementById ("schoolName").value;
    document.getElementById("studentNameVal").innerText = document.getElementById ("studentName").value;
    document.getElementById("dateOfbirthVal").innerText = document.getElementById ("dateOfBirth").value;
    document.getElementById("classVal").innerText = document.getElementById ("class").value;
    document.getElementById("rollNumberVal").innerText = document.getElementById ("rollNumber").value;
    document.getElementById("contactNumberVal").innerText = document.getElementById ("contactNumber").value;
}
function printIdCard(){
    window.print();
}