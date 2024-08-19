// document.getElementById('staticEmail2').style.color="black";


function show() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.getElementById('switch-mode').addEventListener('click', function() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.src = './../images/moon.png'; // Switch to moon icon
        icon.alt = 'moon Icon';
        document.getElementById('staticEmail2').style.color="white";
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.src = './../images/sun.png'; // Switch back to sun icon
        icon.alt = 'sun Icon';
        document.getElementById('staticEmail2').style.color="black";
    }
});