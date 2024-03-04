let random_word=document.querySelector(".random_type");
let my_word=document.querySelector(".my_type");
let start=document.querySelector(".start");
let reset=document.querySelector(".reset");
let word_count=document.querySelector(".count");
let Time=document.querySelector(".time");

var time1=60;

var mins=document.getElementById("minutes");
var secs=document.getElementById("seconds");




function random_words(event){
    let index=Math.floor(Math.random()*words.length);
    if(event.key==" " && random_word.value==my_word.value){
        random_word.value=words[index];
        my_word.value="";
        score+=1;
        word_count.value=score;
        event.preventDefault();
    }
}

my_word.addEventListener("keydown",random_words)

function input_min_sec(){
    let min=parseInt(mins.value)
    let sec=parseInt(secs.value)
    if( (mins.value.length==1 && mins.value[0]==0 || /^[1-9]/.test(mins.value) && /\./.test(mins.value)==false) && isNaN(min)==false && sec<=59 && min<=60 && isNaN(sec)==false && (secs.value.length==1 && secs.value[0]==0 || /^[1-9]/.test(secs.value) && /\./.test(secs.value)==false)){
    time1=parseInt(mins.value)*60+parseInt(secs.value)

    Time.innerHTML=`${mins.value}:${secs.value.toString().padStart(2, "0")}`;
}
}


function assign_1_min(){
    time1=60;
    Time.innerHTML="1:00"
}
function assign_2_min(){
    time1=120;
    Time.innerHTML="2:00";
}

function assign_3_min(){
    time1=180;
    Time.innerHTML="3:00"
}
function assign_5_min(){
    time1=300;
    Time.innerHTML="5:00";
}
function assign_10_min(){
    time1=600;
    Time.innerHTML="10:00";
}
document.querySelector(".one").addEventListener("click",assign_1_min);
document.querySelector(".two").addEventListener("click",assign_2_min);
document.querySelector(".tree").addEventListener("click",assign_3_min);
document.querySelector(".five").addEventListener("click",assign_5_min);
document.querySelector(".ten").addEventListener("click",assign_10_min);
document.querySelector("#set").addEventListener("click",input_min_sec);

start.addEventListener("click",before_start);


function go(){
    document.querySelector(".ready_go").innerHTML="";
    document.querySelector(".container").style.borderColor=`rgb(0, 3, 53)`;
    document.querySelector(".container").style.boxShadow=`0 0 15px 0 rgb(1, 1, 65)`;

    
}

function before_start(){
    setTimeout(Start,3000);
    setTimeout(random_words,3000);

    start.removeEventListener("click",before_start);

    reset.disabled=true;
    setTimeout(() => {
        reset.disabled = false;
      }, 4000);

     


    word_count.value=0;
    my_word.value="";
    random_word.value="";
    document.querySelector(".one").removeEventListener("click",assign_1_min);
    document.querySelector(".two").removeEventListener("click",assign_2_min);
    document.querySelector(".tree").removeEventListener("click",assign_3_min);
    document.querySelector(".five").removeEventListener("click",assign_5_min);
    document.querySelector(".ten").removeEventListener("click",assign_10_min);
    document.querySelector("#set").removeEventListener("click",input_min_sec);
    

    var time=time1;
    time_limit=time;
    minutes = Math.floor(time_limit / 60);
    seconds = time_limit % 60;
    Time.innerHTML = minutes + ":" + seconds.toString().padStart(2, "0");
    document.querySelector(".ready_go").innerHTML="ready!"
    document.querySelector(".container").style.borderColor="red";
    document.querySelector(".container").style.boxShadow="0 0 15px 0 red";
}
let timer;

function Start(){
    timer=setInterval(countdown,1000)

    

    document.querySelector(".ready_go").innerHTML="go!";
    setTimeout(go,1000);
    document.querySelector(".container").style.borderColor="green";
    document.querySelector(".container").style.boxShadow="0 0 15px 0 green";

    var time=time1;
    time_limit=time;
    start.removeEventListener("click",before_start);

    document.querySelector(".my_type").focus();
    let words=[
        'But',          'I',             'must',           'explain',
        'to',           'you',           'how',            'all',
        'this',         'mistaken',      'idea',           'of',
        'reprobating',  'pleasure',      'and',            'extolling',
        'pain',         'arose',         'To',             'do',
        'so',           'will',          'give',           'a',
        'complete',     'account',       'the',            'system',
        'expound',      'actual',        'teachings',      'great',
        'explorer',     'truth',         'master-builder', 'human',
        'happiness',    'No',            'one',            'rejects',
        'dislikes',     'or',            'avoids',         'itself',
        'because',      'it',            'is',             'but',
        'those',        'who',           'not',            'know',
        'pursue',       'rationally',    'encounter',      'consequences',
        'that',         'are',           'extremely',      'painful',
        'Nor',          'again',         'there',          'anyone',
        'loves',        'pursues',       'desires',        'obtain',
        'occasionally', 'circumstances', 'occur',          'in',
        'which',        'toil',          'can',            'procure',
        'him',          'some'
      ]

    let index=Math.floor(Math.random()*words.length);
    random_word.value=words[index];
    my_word.value="";
    my_word.addEventListener("keydown",random_words);

    var score=0;
    word_count.value=score;

    function random_words(event){
        let index=Math.floor(Math.random()*words.length);
        if(event.key==" " && random_word.value==my_word.value){
            random_word.value=words[index];
            my_word.value="";
            score+=1;
            word_count.value=score;
            event.preventDefault()
        }
    }
   
    

    reset.addEventListener("click",Reset)
   
   

    function Reset(){
        clearInterval(timer);
       
        document.querySelector(".container").style.borderColor=`rgb(0, 3, 53)`;
        document.querySelector(".container").style.boxShadow=`0 0 15px 0 rgb(1, 1, 65)`;

        document.querySelector(".one").addEventListener("click",assign_1_min);
        document.querySelector(".two").addEventListener("click",assign_2_min);
        document.querySelector(".tree").addEventListener("click",assign_3_min);
        document.querySelector(".five").addEventListener("click",assign_5_min);
        document.querySelector(".ten").addEventListener("click",assign_10_min);
        document.querySelector("#set").addEventListener("click",input_min_sec);

        start.addEventListener("click",before_start)
       

        time=time1;
        time_limit=time;
        minutes=Math.floor(time_limit/60);
        seconds=time_limit%60;
        Time.innerHTML = minutes + ":" + seconds.toString().padStart(2, "0");

        random_word.value="";
        my_word.value="";
        score=0;
        document.querySelector(".ready_go").innerHTML="";
        word_count.value=0;

        my_word.removeEventListener("keydown",random_words)
    }

    
    
    function countdown(){
           var minutes=Math.floor(time_limit/60);
           var seconds=time_limit%60;
           Time.innerHTML=minutes+":"+seconds.toString().padStart(2,"0");
           time_limit--;

           if(time_limit<0){
            clearInterval(timer);

            document.querySelector(".one").addEventListener("click",assign_1_min);
            document.querySelector(".two").addEventListener("click",assign_2_min);
            document.querySelector(".tree").addEventListener("click",assign_3_min);
            document.querySelector(".five").addEventListener("click",assign_5_min);
            document.querySelector(".ten").addEventListener("click",assign_10_min);
            document.querySelector("#set").addEventListener("click",input_min_sec);

            document.querySelector(".container").style.borderColor="blue";
            document.querySelector(".container").style.boxShadow="0 0 15px 0 blue";

            document.querySelector(".ready_go").innerHTML="time is out";

            my_word.removeEventListener("keydown",random_words)
            start.addEventListener("click",before_start)

           }
           
        }
        countdown();
        //var timer=setInterval(countdown,1000);

}
