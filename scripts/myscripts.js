onst mynotes = document.querySelector('.mynotes');
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
