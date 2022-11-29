const mynotes = document.querySelector('.mynotes');
const art = document.querySelector('.container');
const footer = document.querySelector('.bottomcontainer');
const keepintouch = document.querySelector('.bottomtext');
const takebetternotes = document.querySelector('.toptitle');
const drkbutton = document.querySelector('.button2');
const txtarea = document.querySelector('.ta');
const txtbox = document.querySelector('.textbox');
const mynotestxt1 = document.querySelector('.mynotestxt1');
const mynotestxt2 = document.querySelector('ul li');
const cancelbutton = document.querySelector('.button4');
const savebutton = document.querySelector('.button3');
const newnotebutt = document.querySelector('.button1');
const uL = document.querySelector('.unorderedlist')
const body = document.querySelector('body')
const aboutdocs = document.querySelectorAll('.aboutdocs')
let textlength = txtarea.value.length
let counter = 0
let notesArray = [{
    title: "note one",
    body: "this is my first note"
}];

function darktheme1(){
    txtbox.classList.toggle('textareabackground');
    txtarea.classList.toggle('ta::-webkit-input-placeholder');
    txtarea.classList.toggle('textwhite')
    aboutdocs[0].classList.toggle('aboutdocs1');
    aboutdocs[1].classList.toggle('aboutdocs1');
    cancelbutton.classList.toggle('redbutton');
    newnotebutt.classList.toggle('bluebutton');
    savebutton.classList.toggle('bluebutton');
    art.classList.toggle('darkthememode2');
    footer.classList.toggle('darkthememode2');
    body.classList.toggle('darkthememode2');
    takebetternotes.classList.toggle('textwhite');
    keepintouch.classList.toggle('textwhite');
    if (drkbutton.textContent == 'Light Theme'){
        drkbutton.textContent = 'Dark Theme'
    }
    else{
        drkbutton.textContent = 'Light Theme'
    };
    drkbutton.classList.toggle('darktolight');
    mynotes.classList.toggle('darkthememode');
    mynotestxt1.classList.toggle('textwhite');
    mynotestxt2.classList.toggle('textwhite');
}
function cancelremove(){
    if (counter === 0){
    cancelbutton.classList.toggle('hidden');
    savebutton.classList.toggle('hidden');
    txtarea.classList.toggle('hidden');
    txtbox.classList.toggle('hidden');
    counter = counter + 1
    }
}
function createnote(){
    if (counter === 1) {
    // txtarea.value = '';
    cancelbutton.classList.toggle('hidden');
    savebutton.classList.toggle('hidden');
    txtarea.classList.toggle('hidden');
    txtbox.classList.toggle('hidden');
    counter = counter - 1   
    }
    else{
        if (textlength< 1){
        txtarea.value = ''  
        }
    }
}
function savenote(){
    let titlename = prompt('What would you like to name this save as?:');
    notesArray.push({title: titlename, body: txtarea.value});
    let newLi = document.createElement('li');
    let txtContent = document.createTextNode(titlename);
    newLi.appendChild(txtContent);
    uL.appendChild(newLi)
 }