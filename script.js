var isOn = false;

function promptName(){
    var personName = prompt("Enter your name: ");
    document.getElementsByTagName('h2')[0].innerText = "Hello " + personName;
}

function switchBulb(){
    if(isOn){
        document.getElementsByTagName('img')[0].src = 'images\\offBulb.png';
        document.getElementsByTagName('button')[0].innerText = 'Turn On'
        isOn = false;
    }else{
        document.getElementsByTagName('img')[0].src = 'images\\onBulb.png';
        document.getElementsByTagName('button')[0].innerText = 'Turn Off'
        isOn = true;
    }
}