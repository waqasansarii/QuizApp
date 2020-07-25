var questions =[
    {
        question : "1) 4"+"<sup>2</sup> "+" + |4| +|-4|-4"+"<sup>2</sup> =?",
        correctAnsr : "8",
        ansrs:[
            "-4",
            "0",
            "4",
              "8"
        ]
    },
    {
    question : "2) 3 x 2 - 4 + 6 = ?",
    correctAnsr:"8",
    ansrs:[
        "6",
        "7",
        "8",
        "4"
    ]
    },
    {
        question : "3) 4 / 2 x 4 - 5 = ?",
        correctAnsr:"3",
        ansrs:[
            "-2",
            "2",
            "1",
            "3"
        ]
    },
    {
        question : "4) 4"+"<sup>4</sup> = ?",
        correctAnsr:"256",
        ansrs:[
            "16",
            "64",
            "256",
            "200"
        ]
    },
    {
        question : "5) -2"+"<sup>3</sup> = ?",
        correctAnsr:"-8",
        ansrs:[
            "8",
            "-8",
            "4",
            "-4"
        ]
    },
    {
        question : "6) 2"+"<sup>2</sup> + -3 "+"<sup>2</sup> = ?",
        correctAnsr:"13",
        ansrs:[
            "-13",
            "-2",
            "4",
            "13"
        ]
    },
    {
        question : "7) value of pi = ?",
        correctAnsr:"3.142",
        ansrs:[
            "3.0",
            "3.213",
            "2.314",
            "3.142"
        ]
    },
    {
        question : "8) What is the arithmetic mean of the data set: 4, 5, 0, and 3?",
        correctAnsr:"3",
        ansrs:[
            "3",
            "4",
            "2",
            "6"
        ]
    },
]


var counter = 0
var quizMarks = 0;

var questionAnsr = document.getElementById("qstAns")
var startBtn = document.getElementById("startBtn")
var nextBtn = document.getElementById("nextBtn")
var para1 =document.getElementById("para1")
var para2 =document.getElementById("para2")


function start(){
    questionAnsr.style.display = "block"
    startBtn.style.display = "none"
    para1.style.display = "none"
    para2.style.display ="none"
    nextBtn.style.display = "block" 
}
function next(){
    var userAnsr = document.querySelector("button.ansbtn.active").innerHTML
   
    if(userAnsr == questions[counter].correctAnsr){
        
        quizMarks +=10
        sessionStorage.setItem("marks",quizMarks)
        
    }
    if(counter == questions.length -1){
        location.href="end.html"
    }
    
    
    
    counter++;
    show(counter)
}

function show(count){
    questionAnsr.innerHTML = questions[count].question
    questionAnsr.innerHTML = `
    <div class="qustions">${questions[count].question}</div>
            <button class="ansbtn" >${questions[count].ansrs[0]}</button>
            <button class="ansbtn" >${questions[count].ansrs[1]}</button>
            <button class="ansbtn" >${questions[count].ansrs[2]}</button>
           <button class="ansbtn">${questions[count].ansrs[3]}</button>
           `;
           
    tActive();

}

function tActive(){

    var option =document.querySelectorAll("button.ansbtn")

    for(let i=0; i<option.length; i++){
        option[i].onclick = function() {
            for(var j=0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add("active")
        }
        
    }
}



var showpoint = document.getElementById("showpoint")
var marks = sessionStorage.getItem("marks")
showpoint.innerHTML =marks