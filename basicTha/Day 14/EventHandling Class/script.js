// mouse event

function clickMe(){
    console.log('Yeah !! you clicked me');
}
function mouseOverEvent(){
    console.log('Yeah !! you are hovering over me');
}
function mouseOutEvent(){
    console.log('Yeah !! you mouse out now');
}

// keyboard event

function keyUp(){
    console.log('Yeah !! you are pressing up key from your keyboard');
}
function keyDown(){
    console.log('Yeah !! you are pressing down key from your keyboard');
}

function keypress(){
    console.log('You are pressing one key');
}

function focussed(){
    console.log('I am in a focus');
}

function blurred(){
    console.log('I am blurred');
}

// form events

function changeCar(event){
    console.log('You Selected', document.getElementById("mySelect").value);
}
function submit(){
    alert("Form submitted successfully.");
}

// some event handling scripts
function onFormSubmit(event){
    console.log('handle', event);
    alert("Form submitted successfully");
    event.preventDefaullt(); // if this is commented then it will not redirect to link which we are providing
}
function pageloaded(){
    console.log('Page succesfully loaded');
}
function resizewindow(){
    console.log('User trying to resize window');
}
function offline(){
    console.log('I never knew this');
}
function onvideoplay(){
    console.log('Video can be seen now');
}


// we could directly add event listeners here also

window.addEventListener('click', function(){
    console.log('Window is clicked from event listener inside script');
})

window.onclick = ()=>{
    console.log('Window is clicked through someother way')
}