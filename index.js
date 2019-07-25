

window.addEventListener('load', createBtn);
function createBtn(){
let btn = document.createElement('button');
let header1 = document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police'); 
btn.setAttribute('id','button1');
btn.innerHTML= 'graphic';
header1.appendChild(btn);
console.log(btn)
btn.addEventListener("click", makeGraphic); 

}


function makeGraphic(){
    console.log('click'); 
    getData(); 
    putDataInGraphic(); 
}

function getData(){
    let table1 = document.getElementById('table1')
    //console.log(document.getElementsByTagName('tbody'));
    //let tbody = document.getElementsByTagName('tbody'); 
    //let headerData = tbody[0].children[1].children[1].innerText; 
    //let bodyData = tbody[0].children[1].children[2].innerText;
    //console.log(bodyData);
    //console.log(headerData); 

    let years1 = [];
        for (let i = 2; i < table1.rows[1].cells.length; i++) {
        years1[i - 2] = table1.rows[1].cells[i].innerHTML;
    }


    let list = table1.childNodes[5].children;
    console.log(list)
    let dataRow = {};

    for (i = 0; i < list.length; i++) {
    dataRow[i] = [];

    for (j = 1; j < list[i].children.length; j++) {
    let newInteger = list[i].children[j].innerText;
    dataRow[i].push(newInteger);
}
    }   
}

function putDataInGraphic(){
console.log('data here')
let canvas = document.createElement('canvas'); 
canvas.setAttribute("id", "canvas1"); 
let heading = document.getElementsByTagName('h3')[0]; 
heading.after(canvas); 

 
}