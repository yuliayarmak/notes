'strict mode'

class Storage {
    addNewNote(productId, text, name, date){
        const value = JSON.parse(localStorage.getItem('note'));
        value[date] = getCreationNoteDateRight()
        value[text] = 'Here you can add your notes.';
        value[name] = 'New Note';
        value.id = productId;
        localStorage.setItem('note', JSON.stringify(value));
    }

    getItems() {
        return JSON.parse(localStorage.getItem('note'));
    }

    setValue(inner, text){
        const value = JSON.parse(localStorage.getItem('note'));
        value[inner] = text;
        localStorage.setItem('note', JSON.stringify(value));
    }

    removeValue(param){
        localStorage.removeItem('note', JSON.stringify(param));
    }

    clear() {
        localStorage.setItem('note', "{}");
    }
}


const storage = new Storage();

storage.clear()
  
function getCreationNoteDateRight() {
   let arr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    let date = new Date();
    let dayOfTheMonth = date.getDate();
    let month = date.getMonth();
    let year= date.getFullYear();

    let d = `${dayOfTheMonth} ${arr[month]} ${year} г.`
    return d ;
}

let add= document.getElementById('add');
let left = document.getElementById('leftSide');

let quantity = 1;

localStorage.setItem('note', '{}');

storage.addNewNote(1, 'text', 'name', 'curDate');

let notes = [];
notes.push(storage.getItems())
console.log(notes)

function addNote () {

    quantity++;

    storage.addNewNote(quantity, 'text', 'name', 'curDate');
    
    let text = `
    <div class='note' onclick='select(${quantity})'>
    <div id='noteName'>
    <div id='main'>
      <p class='text' id='text${storage.getItems().id}'>${storage.getItems().name}</p>
      <button id='delete' class= 'buttonStyle-del' onclick= 'remove(${quantity})'>delete</button>
      </div>
      <p id='dateText'>${storage.getItems().curDate}</p>
    </div>
    </div>
    `

    storage.setValue('innerText', text)

    let div = document.createElement('div');
    div.id = quantity;
    div.innerHTML = storage.getItems().innerText
    left.appendChild(div);

    notes.push(storage.getItems());
    console.log(notes)
    
}

add.addEventListener('click', addNote);

console.log(storage.getItems())

function remove(id){
    let el = document.getElementById(id);
    left.removeChild(el);
}

let num

function select(id){
    num = --id;
    console.log(num)
    let cur = notes[num];
    let date = document.getElementById('noteDate');
    let text = document.getElementById('userText');
    
    text.value = cur.text;
    date.innerHTML = '';
    date.innerHTML = cur.curDate;

    window.location.hash = `#note${cur.id}`
    
}

let done = document.getElementById('done');

function change(){
     add.style.display = 'none';
     done.style.display = 'block';
}


console.log(notes)


function newText (){
    let user = document.getElementById('userText');
    let cur = notes[num];
    console.log(cur)
    cur.text = user.value;
    add.style.display = 'block';
    done.style.display = 'none';
    let id = ++num;
    let newName = document.getElementById(`text${id}`);
    let nn = cur.text;
    let k = nn.substring(0,3);
    cur['name'] = k; 
    newName.innerHTML = k;
}

done.addEventListener('click', newText);