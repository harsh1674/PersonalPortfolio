console.log("js started......")
var isopen = false;
document.querySelector('.hamburger').addEventListener("click", () => {
    if (isopen == false) {
        document.querySelector('#ham').style.display = 'none';
        document.querySelector('.hamclass').style.display = 'none';
        document.querySelector('#cross').style.display = 'inline';
        document.querySelector('.sidebar').style.display = 'inline';
        document.querySelector('.navbar').style.display = 'none';
        isopen = true;
        
    }
    else if (isopen = true) {
        document.querySelector('.navbar').style.display = 'inline';
        document.querySelector('.hamclass').style.display = 'block';
        document.querySelector('#ham').style.display = 'inline';
        document.querySelector('#cross').style.display = 'none';
        document.querySelector('.sidebar').style.display = 'none';
        isopen = false;
    }
})