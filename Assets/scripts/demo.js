// dispalying the section by clicking the demo button

let btn = document.querySelector('.btn');
let row = document.querySelector('.section')
btn.onclick = () =>{
row.classList.add('active');
}



// data class: Represent a class
class Data{
 constructor(idNumber,itemName,itemPrice){
  this.idNumber = idNumber;
  this.itemName = itemName;
  this.itemPrice = itemPrice;
 }
}

// ui class
class ui{
 static displayData(){
  const data = Store.getData();
data.forEach((datas) => ui.addDataToList(datas))
  
 }
static addDataToList(datas){
 let list = document.querySelector('#showUser');
 let row  = document.createElement('tr');

 row.innerHTML = `
 <td>${datas.idNumber}</td>
 <td>${datas.itemName}</td>
 <td>${datas.itemPrice}</td>
 <td><a href = '#' class = 'delete' </a>X</td>
 
 `
list.appendChild(row)
}

static clearInput(){
 document.querySelector('#idNumber').value = '';
 document.querySelector('#itemName').value = '';
 document.querySelector('#itemPrice').value = '';
}
static deleteData(el){
 if(el.classList.contains('delete')){
el.parentElement.parentElement.remove()
}
}



}

// storing data
class Store {
static getData(){
 let data;
 if(localStorage.getItem('data') === null){
  data = []
 }
 else{
  data = JSON.parse(localStorage.getItem('data'));
 }
 return data;
}


 static addData(datas){
let  data = Store.getData()
data.push(datas);
localStorage.setItem('data',JSON.stringify(data));
}


static removeData(itemPrice){
let data = Store.getData();

data.forEach((datas, index) => {
 if(datas.itemPrice === itemPrice){
  data.splice(index, 1);
 }
});

localStorage.setItem('data',JSON.stringify(data))
}
}

// displaying data
document.addEventListener('DOMContentLoaded', ui.displayData);

// validating inputs
const setError = (element,message) =>{
const input = element.parentElement;
const errorDisplay = input.querySelector('.error')
errorDisplay.innerText = message;
// styling the validation content
errorDisplay.style.color = '#970000';
errorDisplay.style.fontSize = '16px'
input.classList.add('error');
input.classList.remove('success');
}
const setSuccess = element => {
 const input = element.parentElement;
const errorDisplay = input.querySelector('.error')
errorDisplay.innerText = '';
input.classList.add('success');
input.classList.remove('error');
}
const validateInputs = () =>{
 let idNumberValue = document.querySelector('#idNumber').value.trim();
 let itemNameValue = document.querySelector('#itemName').value.trim();
 let itemPriceValue = document.querySelector('#itemPrice').value.trim();

 if (idNumberValue === ''){
  setError(idNumber,'id is required*')
 }
 else{
  setSuccess(idNumber)
 }
 if (itemNameValue === ''){
  setError(itemName,'item name is required*')
 }
 else{
  setSuccess(itemName)
 }
 if (itemPriceValue === ''){
  setError(itemPrice,'item price is required*')
 }
 else{
  setSuccess(itemPrice)
 }

}


// adding a book
document.querySelector('#form').addEventListener('submit',(e) => {

 e.preventDefault();

 let idNumber = document.querySelector('#idNumber').value;
 let itemName = document.querySelector('#itemName').value;
 let itemPrice = document.querySelector('#itemPrice').value;

if(!idNumber || !itemName || !itemPrice){
 validateInputs()
}else{
 let datas = new Data(idNumber,itemName,itemPrice);
 
 ui.addDataToList(datas)

 Store.addData(datas);

 ui.clearInput();

 
}

})
// removing data

document.querySelector('#showUser').addEventListener('click',(e) =>{
ui.deleteData(e.target);
 Store.removeData(e.target.parentElement.previousElementSibling.textContent);
 
})
