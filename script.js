console.log("Test1");

/* Slide menu */

const buttonBar = document.querySelector('.bar');

const colorList = document.getElementById('list');

let listIsHidden = true;

console.log("Test2");

function makeItHappen() {
    if (listIsHidden === true) {
        colorList.style.visibility = 'visible';
        
        listIsHidden = false;

    } else {
        colorList.style.visibility = 'hidden';
        
        listIsHidden = true;
    }
}

console.log("Test3");

buttonBar.addEventListener("mouseover", function(){
    makeItHappen();
})

/*buttonBar.addEventListener("mouseout", function(){
    makeItHappen();
})*/

buttonBar.addEventListener("click", function(){
    makeItHappen();
})

console.log("Test4");

/* Change background colors */

let basicText = document.getElementById('text');

let lightArea = document.getElementById('light');

let middleArea = document.getElementById('middle');

let darkArea = document.getElementById('dark');

let getHome = document.getElementById('home');

getHome.addEventListener("click", function(){
    colorList.style.visibility = 'hidden';
});

document.addEventListener("keyup", e => {
    if (e.key === "1"){
        document.querySelector('.page').classList.remove('orange-background');
        document.querySelector('.page').classList.remove('green-background');
        document.querySelector('.page').classList.remove('blue-background');
        document.querySelector('.page').classList.remove('pink-background');
        document.querySelector('.page').classList.remove('purple-background');
        document.querySelector('.page').classList.add('basic-background');
        basicText.textContent = "Click on a button in the menu or choose a number between 1 and 6";
        lightArea.style.backgroundImage = "linear-gradient(to right, #f4d01f 25%, #3eec61 50%)";
        middleArea.style.backgroundImage = "linear-gradient(to right, #47c9ea 45%, #1a45e1 50%)";
        darkArea.style.backgroundImage = "linear-gradient(to right, #8b04f2 15%, #e50fe1 60%)";
        basicText.style.backgroundImage = "linear-gradient(to right, #88c6df 15%, #298be8 50%)";
        colorList.style.visibility = 'hidden';
    }
    if (e.key === "2"){
        document.querySelector('.page').classList.remove('basic-background');
        document.querySelector('.page').classList.remove('blue-background');
        document.querySelector('.page').classList.remove('green-background');
        document.querySelector('.page').classList.remove('purple-background');
        document.querySelector('.page').classList.remove('pink-background');
        document.querySelector('.page').classList.add('orange-background');
        basicText.textContent = "You chose orange";
        lightArea.style.background = "rgb(244, 184, 128)";
        middleArea.style.background = "rgb(212, 131, 55)";
        darkArea.style.background = "rgb(175, 92, 14)";
        basicText.style.background = "none";
        colorList.style.visibility = 'hidden';
    }
    if (e.key === "3"){
        document.querySelector('.page').classList.remove('basic-background');
        document.querySelector('.page').classList.remove('orange-background');
        document.querySelector('.page').classList.remove('blue-background');
        document.querySelector('.page').classList.remove('purple-background');
        document.querySelector('.page').classList.remove('pink-background');
        document.querySelector('.page').classList.add('green-background');
        basicText.textContent = "You chose green";
        lightArea.style.background = "rgb(198, 233, 189)";
        middleArea.style.background = "rgb(58, 146, 37)";
        darkArea.style.background = "rgb(23, 70, 12)";
        basicText.style.background = "none";
        colorList.style.visibility = 'hidden';
    }
    if (e.key === "4"){
        document.querySelector('.page').classList.remove('basic-background');
        document.querySelector('.page').classList.remove('orange-background');
        document.querySelector('.page').classList.remove('green-background');
        document.querySelector('.page').classList.remove('purple-background');
        document.querySelector('.page').classList.remove('pink-background');
        document.querySelector('.page').classList.add('blue-background');
        basicText.textContent = "You chose blue";
        lightArea.style.background = "rgb(183, 227, 232)";
        middleArea.style.background = "rgb(63, 109, 226)";
        darkArea.style.background = "rgb(15, 39, 99)";
        basicText.style.background = "none";
        colorList.style.visibility = 'hidden';
    }
    if (e.key === "5"){
        document.querySelector('.page').classList.remove('basic-background');
        document.querySelector('.page').classList.remove('orange-background');
        document.querySelector('.page').classList.remove('green-background');
        document.querySelector('.page').classList.remove('blue-background');
        document.querySelector('.page').classList.remove('pink-background');
        document.querySelector('.page').classList.add('purple-background');
        basicText.textContent = "You chose purple";
        lightArea.style.background = "rgb(174, 144, 184)";
        middleArea.style.background = "rgb(120, 46, 144)";
        darkArea.style.background = "rgb(41, 11, 51)";
        basicText.style.background = "none";
        colorList.style.visibility = 'hidden';
    }
    if (e.key === "6"){
        document.querySelector('.page').classList.remove('basic-background');
        document.querySelector('.page').classList.remove('orange-background');
        document.querySelector('.page').classList.remove('green-background');
        document.querySelector('.page').classList.remove('purple-background');
        document.querySelector('.page').classList.remove('blue-background');
        document.querySelector('.page').classList.add('pink-background');
        basicText.textContent = "You chose pink";
        lightArea.style.background = "rgb(255, 182, 193)";
        middleArea.style.background = "rgb(182, 70, 130)";
        darkArea.style.background = "rgb(170, 11, 96)";
        basicText.style.background = "none";
        colorList.style.visibility = 'hidden';
    }
});

let getOrange = document.getElementById('orange');

console.log("Test 5"); 

getOrange.addEventListener("click", function(){
    console.log("clicked");
    document.querySelector('.page').classList.remove('basic-background');
    document.querySelector('.page').classList.remove('blue-background');
    document.querySelector('.page').classList.remove('green-background');
    document.querySelector('.page').classList.remove('purple-background');
    document.querySelector('.page').classList.remove('pink-background');
    document.querySelector('.page').classList.add('orange-background');
    basicText.textContent = "You chose orange";
    lightArea.style.background = "rgb(244, 184, 128)";
    middleArea.style.background = "rgb(212, 131, 55)";
    darkArea.style.background = "rgb(175, 92, 14)";
    basicText.style.background = "none";
    colorList.style.visibility = 'hidden';
});

console.log("Test 6"); 

let getGreen = document.getElementById('green');

getGreen.addEventListener("click", function(){
    console.log("clicked");
    document.querySelector('.page').classList.remove('basic-background');
    document.querySelector('.page').classList.remove('orange-background');
    document.querySelector('.page').classList.remove('blue-background');
    document.querySelector('.page').classList.remove('purple-background');
    document.querySelector('.page').classList.remove('pink-background');
    document.querySelector('.page').classList.add('green-background');
    basicText.textContent = "You chose green";
    lightArea.style.background = "rgb(198, 233, 189)";
    middleArea.style.background = "rgb(58, 146, 37)";
    darkArea.style.background = "rgb(23, 70, 12)";
    basicText.style.background = "none";
    colorList.style.visibility = 'hidden';
});

console.log("Test 7");

let getBlue = document.getElementById('blue');

getBlue.addEventListener("click", function(){
    console.log("clicked");
    document.querySelector('.page').classList.remove('basic-background');
    document.querySelector('.page').classList.remove('orange-background');
    document.querySelector('.page').classList.remove('green-background');
    document.querySelector('.page').classList.remove('purple-background');
    document.querySelector('.page').classList.remove('pink-background');
    document.querySelector('.page').classList.add('blue-background');
    basicText.textContent = "You chose blue";
    lightArea.style.background = "rgb(183, 227, 232)";
    middleArea.style.background = "rgb(63, 109, 226)";
    darkArea.style.background = "rgb(15, 39, 99)";
    basicText.style.background = "none";
    colorList.style.visibility = 'hidden';
});

console.log("Test 8");

let getPurple = document.getElementById('purple');

getPurple.addEventListener("click", function(){
    console.log("clicked");
    document.querySelector('.page').classList.remove('basic-background');
    document.querySelector('.page').classList.remove('orange-background');
    document.querySelector('.page').classList.remove('green-background');
    document.querySelector('.page').classList.remove('blue-background');
    document.querySelector('.page').classList.remove('pink-background');
    document.querySelector('.page').classList.add('purple-background');
    basicText.textContent = "You chose purple";
    lightArea.style.background = "rgb(174, 144, 184)";
    middleArea.style.background = "rgb(120, 46, 144)";
    darkArea.style.background = "rgb(41, 11, 51)";
    basicText.style.background = "none";
    colorList.style.visibility = 'hidden';
});

let getPink = document.getElementById('pink');

getPink.addEventListener("click", function(){
    console.log("clicked");
    document.querySelector('.page').classList.remove('basic-background');
    document.querySelector('.page').classList.remove('orange-background');
    document.querySelector('.page').classList.remove('green-background');
    document.querySelector('.page').classList.remove('purple-background');
    document.querySelector('.page').classList.remove('blue-background');
    document.querySelector('.page').classList.add('pink-background');
    basicText.textContent = "You chose pink";
    lightArea.style.background = "rgb(255, 182, 193)";
    middleArea.style.background = "rgb(182, 70, 130)";
    darkArea.style.background = "rgb(170, 11, 96)";
    basicText.style.background = "none";
    colorList.style.visibility = 'hidden';
});
