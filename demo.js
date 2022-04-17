let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{

 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
 
}
window.onscroll = () =>{
 navbar.classList.remove('active');

}

// var btn = document.getElementById('save_btn');
// btn.addEventListener('click',displayDetails);
// var row = 1
// function displayDetails(){
//  var idNumber = document.getElementById('idNumber').value;
//  var itemName = document.getElementById('itemName').value;
//  var itemPrice = document.getElementById('itemPrice').value;

//  if(!idNumber || !itemName || !itemPrice){
//   alert('please fill the boxes');
  
//   return;
//  }

//  var display = document.getElementById('table');
//  var newRow = display.insertRow(row);

//  var cell1 = newRow.insertCell(0);
//  var cell2 = newRow.insertCell(1);
//  var cell3 = newRow.insertCell(2);

//  cell1.innerHTML = idNumber;
//  cell2.innerHTML = itemName;
//  cell3.innerHTML = itemPrice;

//  row++;
// }
// let number,itemName,ItemNumber;
// number=document.querySelector("#idNumber").value;
// itemName=document.getElementById("#ItemName").value;
// ItemNumber=document.getElementById("#ItemNumber").value;

// localStorage.setItem("number",number)
// localStorage.setItem("itemName",itemName)
// localStorage.setItem("itemNumber",ItemNumber)
// }
