const randomNumber = () =>{
    const randomInput = document.getElementById('randomInput').value;
    const randomNumber = Math.round(Math.random() * 10);
    const result = document.getElementById('result');
    let wonToss = 0;
    let lostToss = 0;

    
        if(randomNumber === randomInput){
            result.innerHTML = `<h3>WOW! You won the toss. Random Number was ${randomNumber}.</h3>`
            wonToss ++;
            document.getElementById('randomInput').value = "";
        }
    
        else if(randomNumber !== randomInput){
            result.innerHTML = `<h3>Bad Luck! You lost the toss. Random Number was ${randomNumber}.</h3>`
            lostToss --;
            document.getElementById('randomInput').value = "";
        }
    
        else{
            alert("Please enter a random number.");
            document.getElementById('randomInput').value = "";
        }


}