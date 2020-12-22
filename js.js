'strict mode'

let add= document.getElementById('add');
let deleteB = document.getElementById('delete');
let rightside = document.getElementById('rightSide');
let leftSide=document.getElementById('leftSide');

const addNote = function() {
    let div3 = document.createElement('div');
    let date = document.createElement('div');
    let noteText = document.createElement('div');
    let noteDate = document.createElement('p');
    let newtextarea= document.createElement('textarea');
    let doneBut = document.createElement('button');
    let done = document.createElement('div');
    
    div3.className = 'a';
    date.id = 'date';
    noteDate.id = 'noteDate';
    noteText.id = 'noteText';
    newtextarea.id = 'userText';
    done.style.marginLeft='1210px'
    doneBut.className = 'buttonStyle';
    doneBut.innerHTML='Done';

    rightside.appendChild(div3);
    div3.appendChild(date);
    date.appendChild(noteDate);
    div3.appendChild(noteText);
    noteText.appendChild(newtextarea);
    div3.appendChild(done);
    done.appendChild(doneBut);

    let noteList = document.getElementsByClassName('a');

    for(let i=0; i<noteList.length; i++){
        if(noteList[i].classList.contains('active')){
            noteList[i].classList.remove('active')
        }
        div3.className = 'a active'
    }
 
    let div1=document.createElement('div');
    div1.className='note';
    let notes = document.getElementsByClassName('note');

    for(let i=0; i<notes.length; i++){
        if(notes[i].classList.contains('active')){
            notes[i].classList.remove('active')
        }
        div1.className = 'note active'
    }
   

    function getCreationNoteDateRight() {
        let arr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

            let date = new Date();
            let dayOfTheMonth = date.getDate();
            let month = date.getMonth();
            let year= date.getFullYear();

            let hours = date.getHours();
            let minutes = date.getMinutes();

            if (minutes.lenght === 1) {
                minutes = `0${minutes}`;
            }

            if(hours.lenght === 1) {
                hours = `0${hours}`;
            }    

            let currentDate = `${dayOfTheMonth} ${arr[month]} ${year} г. в ${hours}:${minutes}`;
            return noteDate.innerHTML = currentDate;
        }

        getCreationNoteDateRight()
    
    let div2 = document.createElement('div');
    div2.id = 'noteName';
    let text = document.createElement('p');
    let dateText = document.createElement('p');
    text.id = 'text';
    dateText.id = 'dateText';
    text.innerHTML = 'note';


    function getCreationNoteDate() {
        let date = new Date();
        let dayOfTheMonth;
        let month;
        let year= date.getFullYear();

        dayOfTheMonth = date.getDate();
    
        let value2 = date.getMonth();
        if(value2.lenght === 2){
            month=value2+1;
        } else {
            month=`0${value2+1}`;
        }

        let currentDate = `${dayOfTheMonth}.${month}.${year}`;
        return dateText.innerHTML = currentDate;
    }
    
    getCreationNoteDate();
    leftSide.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(text);
    div2.appendChild(dateText);

    function add () {
        // if(newtextarea.value === '') {
        //      parent.lastChild.style.display='block';
        // }
        let utex = newtextarea.value;
        let value = utex.split(' ');
        text.innerHTML = value[0];
        let features = document.createElement('div');
        features.id='features'
        let deleteBut = document.createElement('button');
        deleteBut.className = 'buttonStyle';
        deleteBut.innerHTML='delete';
        let addBut = document.createElement('button');
        addBut.className = 'buttonStyle';
        addBut.id = 'add';
        addBut.innerHTML='add';

        div3.appendChild(features)
        features.appendChild(deleteBut);
        features.appendChild(addBut);
        done.style.display='none';

        return
    }

    done.addEventListener('click', add)
}

let notesList = document.getElementsByClassName('note');
let notesContent = document.getElementsByClassName('a');

for (let i = 0; i < notesList.length; i++) {
    notesList[i].addEventListener('click', activate);
}
    
function activate(e) {
    let target = e.currentTarget;
    for (let i = 0; i < notesList.length; i++) {
        for(let k =0; k < notesContent.length; k++){
            notesList[i].classList.remove('active');
            notesContent[k].classList.remove('active');
            if(target === notesList[i]) {
                notesList[i].classList.add('active');
                notesContent[i].style.display='block';
            }
        }
    }
}


const deleteNotes = function (){
    for(let i=0; i<notesList.length; i++){
        if(notesList[i].classList.contains('active')){
            rightside.removeChild(notesList[i]);
            leftSide.removeChild(notesContent[i]);
            if(i===0){
                notesList[i+1].classList.add('active');
                notesContent[i+1].classList.add('active');
            } else {
                notesList[i-1].classList.add('active');
                notesContent[i-1].classList.add('active');
            }
        }
        
    }
}



add.addEventListener('click', addNote);
deleteB.addEventListener('click', deleteNotes);