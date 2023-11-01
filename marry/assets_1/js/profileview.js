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