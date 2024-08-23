
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
        icon.src = 'https://img.icons8.com/?size=48&id=6DXM8bs2tFSU&format=png'; // Switch to moon icon
        icon.alt = 'moon Icon';
        document.getElementById('staticEmail2').style.color="white";
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.src = 'https://img.icons8.com/?size=48&id=XteFohzHJO7p&format=png'; // Switch back to sun icon
        icon.alt = 'sun Icon';
        document.getElementById('staticEmail2').style.color="black";
    }
});

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click' , function() {
    window.scrollTo ({
        top:0 , 
        behavior: 'smooth'
    })
})