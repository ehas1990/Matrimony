function openEditor() {
    document.getElementById('openButton').style.display = 'none';
    document.getElementById('editor').style.display = 'block';
}

function saveText() {
    const textareaValue = document.getElementById('textarea').value;
    document.getElementById('displayText').textContent =  textareaValue;
    document.getElementById('displayText').style.display = 'block';

    // Hide the textarea, Save, and Back buttons
    document.getElementById('editor').style.display = 'none';
    document.getElementById('openButton').style.display = 'block';
}

function goBack() {
    document.getElementById('editor').style.display = 'none';
    document.getElementById('openButton').style.display = 'block';
    document.getElementById('displayText').style.display = 'none';
}
// Basic 
function informationEditor() {
    document.getElementById('openButton1').style.display = 'none';
    document.getElementById('basiceditor').style.display = 'block';
}

function infosaveText() {
    const textareaValue = document.getElementById('textarea_basicinfo').value;
    document.getElementById('BasicInformation').textContent =  textareaValue;
    document.getElementById('BasicInformation').style.display = 'block';

    // Hide the textarea, Save, and Back buttons
    document.getElementById('basiceditor').style.display = 'none';
    document.getElementById('openButton1').style.display = 'block';
}

function infoBack() {
    document.getElementById('basiceditor').style.display = 'none';
    document.getElementById('openButton1').style.display = 'block';
    document.getElementById('BasicInformation').style.display = 'none';
}