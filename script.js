//DISPLAY NONE BLOCK
function edit() {
    document.querySelector('.stl').setAttribute('style', 'display: block');
    document.querySelector('.mains').setAttribute('style', 'display: none');
    document.getElementById('tables').setAttribute('style', 'display:none');
};

function stul() {
    document.querySelector('.mains').setAttribute('style', 'display: block');
    document.querySelector('.stl').setAttribute('style', 'display: none');
    document.getElementById('tables').setAttribute('style', 'display:none');
};


//EDIT TEXT

function changeText() {
    let userInput = document.getElementById('inner').value;
    document.getElementById('texts').innerHTML = userInput;
}


//FONT_SIZE
let form = document.forms.radioForm;
let texts = document.getElementById('texts');
for (let i = 0; i < form.elements.length; i++) {
    let radio = form.elements[i];

    radio.addEventListener('click', (event) => {
        texts.style.fontSize = event.target.value + 'px';
    });
}



//FONT_FAMILY
function ChangeFont(selectTag) {

    let whichSelected = selectTag.selectedIndex;
    let selectState = selectTag.options[whichSelected].text;
    let fontTest = document.getElementById("texts");
    fontTest.style.fontFamily = selectState;
}

//STYLE


function bold() {
    document.getElementById("texts").style.fontWeight = "bold";
    let isBold = document.getElementById('boldOption').checked;

    let textBlock = document.getElementById("texts");
    if ( isBold ){
        textBlock.style.fontWeight = "bold";
    }else{
        textBlock.style.fontWeight = "400";
    }
}

function cursive() {
    let isCursive = document.getElementById('cursiveOption').checked;
    console.log('isCursive ', isCursive);
    let textBlock = document.getElementById("texts");
    if ( isCursive ){
        textBlock.style.fontStyle = "italic";
    }else{
        textBlock.style.fontStyle = "normal";
    }
}

//let font = document.forms.checkForm;
//let cursive = document.getElementById('texts');
//for (let i = 0; i < font.elements.length; i++) {
//    let checkbox = font.elements[i];
//    checkbox.addEventListener('click', (event) => {
//        texts.style.fontStyle = 'italic';
//    });
//}

//COLOR

const getId = id => document.querySelector(`#${id}`);

let colorsdiv = getId('colors');
let back = getId('back');
let color = getId('color');
let textscolor = getId('texts'),
    action = '';

colorsdiv.addEventListener('click', (event) => {
    texts.style[action] = event.target.id;
    colorsdiv.style.display = 'none';
});

function change(type) {
    if (type === 'color') action = 'color';
    if (type === 'back') action = 'backgroundColor';

    colorsdiv.style.display = 'flex';
}

//TABLE
function addTable() {
      let body = document.querySelector("tables"),
          tableWidth = document.getElementById("table-width"),
          tableHeight = document.getElementById("table-height"),
          width = tableWidth.value,
          height = tableHeight.value,
          numRows = document.getElementById("rows"),
          numColumns = document.getElementById("columns"),
          rows = numRows.value,
          columns = numColumns.value,
          tr = "",
          td = "",
          firstTable = document.querySelector("table");
      console.log(width);
      console.log(height);
      console.log(rows);
      console.log(columns);

      table = document.createElement("table"),
      checkbox = document.getElementById("checkbox");
      if (checkbox.checked == true) {
        table.setAttribute("border","solid", "2px");
      } else {
        table.setAttribute("border", "0");
      }
      table.setAttribute("width", width);
      table.setAttribute("height", height);
      for (let i = 0; i < rows; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
          td = document.createElement("td");
          text = document.createTextNode((i + 1) + "." + (j + 1));
          td.appendChild(text);
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      console.log(tr);
      console.log(td);
      if (firstTable == null) {
        return tables.appendChild(table);
      } else {
        let newTable = tables.appendChild(table);
        return tables.replaceChild(newTable, firstTable);
      }
    }

    function destroyTable() {
      let body = document.querySelector("tables"),
          table = document.querySelector("table"),
          checkbox = document.getElementById("checkbox")
          tableWidth = document.getElementById("table-width"),
          tableHeight = document.getElementById("table-height"),
          numRows = document.getElementById("rows"),
          numColumns = document.getElementById("columns");
      if (document.querySelector("table") != null) {
      tables.removeChild(table);
      checkbox.checked = false;
      tableWidth.value = "";
      tableHeight.value = "";
      numRows.value = "";
      numColumns.value = "";
      }
    };
let listBlock = document.getElementById('list')

//SHOW TABLE LIST
function hide() {
    document.getElementById('way').setAttribute('style','display:block');
    document.getElementById('tables').setAttribute('style', 'display:none');
     document.querySelector('.stl').setAttribute('style', 'display: none');
    document.querySelector('.mains').setAttribute('style', 'display: none');
    document.getElementById('lorem').setAttribute('style', 'display:none');
    document.getElementById('btn').setAttribute('style', 'display:none');
    document.getElementById('btn2').setAttribute('style', 'display:none');
    listBlock.setAttribute('style', 'display:none');
    
};

function showtable(){
    document.getElementById('way').setAttribute('style','display:none');
    document.getElementById('tables').setAttribute('style', 'display:block');
     document.querySelector('.stl').setAttribute('style', 'display: none');
    document.querySelector('.mains').setAttribute('style', 'display: none');
    document.getElementById('lorem').setAttribute('style', 'display:none');
    document.getElementById('btn').setAttribute('style', 'display:none');
    document.getElementById('btn2').setAttribute('style', 'display:none');
    listBlock.setAttribute('style', 'display:none');
};

function showlist(){
    document.getElementById('way').setAttribute('style','display:none');
    document.getElementById('tables').setAttribute('style', 'display:block');
     document.querySelector('.stl').setAttribute('style', 'display: none');
    document.querySelector('.mains').setAttribute('style', 'display: none');
    document.getElementById('lorem').setAttribute('style', 'display:none');
    document.getElementById('btn').setAttribute('style', 'display:none');
    document.getElementById('btn2').setAttribute('style', 'display:none');
    listBlock.setAttribute('style', 'display:none');
};
function home(){
    document.getElementById('way').setAttribute('style','display:none');
    document.getElementById('tables').setAttribute('style', 'display:none');
     document.querySelector('.stl').setAttribute('style', 'display: block');
    document.querySelector('.mains').setAttribute('style', 'display: none');
    document.getElementById('lorem').setAttribute('style', 'display:block');
    document.getElementById('btn').setAttribute('style', 'display:block');
    document.getElementById('btn2').setAttribute('style', 'display:block');
    listBlock.setAttribute('style', 'display:none');
};

function showlistMenu(){
    document.getElementById('way').setAttribute('style','display:none');
    document.getElementById('tables').setAttribute('style', 'display:none');
     document.querySelector('.stl').setAttribute('style', 'display: none');
    document.querySelector('.mains').setAttribute('style', 'display: none');
    document.getElementById('lorem').setAttribute('style', 'display:none');
    document.getElementById('btn').setAttribute('style', 'display:none');
    document.getElementById('btn2').setAttribute('style', 'display:none');
    listBlock.setAttribute('style', 'display:block');
};


//LIST
//let forme = document.forms[0];
//form.lis.onclick = function(event) {
//    event.preventDefault();
//if(form.elements.firstName.value === '') {
//        console.error('firstName must be filed');
//    } else{
//    console.log('Success');}












//
//let marks = prompt('Type of marks: ', 'circle|square|disc');
//document.body.style.backgroundColor = marks;
//


let a=1;
let c=a+++1;
console.log(c)
























function createList(){
   let listBlock = document.getElementById('list');
   let ul = document.createElement('ul');
   ul.className="generated-list";
   listBlock.append(ul);
   setListType();

   let i = 0;
   let coultLi = parseInt(document.getElementById('countli').value);

   while (i < coultLi) {
     let data = 'item ' + i;

     if (!data) {
       break;
     }

     let li = document.createElement('li');
     li.textContent = data;
     ul.append(li);

     i += 1;
   }
}

function setListType(){
    let listStyleType = document.getElementById('chooseListType').value;
    let lists = document.getElementsByClassName('generated-list');

    Array.from(lists).forEach(function (list) {
        list.style.listStyleType = listStyleType;
    });
}










