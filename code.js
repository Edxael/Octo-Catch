console.log("Octo 3 \n ");




function dive(license, morningCatch){

    var oxyTank = 5;
    var totalCatch = morningCatch;

    return function (){
        oxyTank -= 1;
        totalCatch += license;
        return [license, morningCatch, oxyTank, totalCatch];
    }
}

var abby = new dive(1, 0);
var alex = new dive(3, 2);
var dave = new dive(2, 1);
var jack = new dive(2, 0);







// ------------  The Following  code is for Button, Display and Functions  ------------

var octoTime = {

    startTime: function(){
        var count=0;
        var state = true;


        var timer = setInterval(function(){
            count+= 10;
            // console.log(count);
            document.getElementById("div-timer").innerHTML = ("Time Under: " + count + " Minutes");

            if(count>-1){ document.getElementById("div-timer").style.backgroundColor = "aquamarine";}
            if(count>20){ document.getElementById("div-timer").style.backgroundColor = "yellow";}
            if(count>40){ document.getElementById("div-timer").style.backgroundColor = "red";}
            if(count>60){
                document.getElementById("div-timer").style.backgroundColor = "aquamarine";
                count = 0;
                document.getElementById("div-timer").innerHTML = ("Time Under: " + count+ " Minutes");
                clearInterval(timer);
                octoTime.under();
            }


        },1000);
    },

    under: function(){
        console.log("Dive-Down:");


            // Abby Date
        if(document.getElementById('ck-abby').checked){
            var abby_data = abby();
            console.log("Abby: ", abby_data[0], abby_data[1], abby_data[2], abby_data[3]);

            document.getElementById("li-abby").innerHTML = abby_data[0];
            document.getElementById("mo-abby").innerHTML = abby_data[1];
            document.getElementById("ox-abby").innerHTML = abby_data[2];
            document.getElementById("to-abby").innerHTML = abby_data[3];
        }


            // Alex Date
        if(document.getElementById('ck-alex').checked){
            var alex_data = alex();
            console.log("Alex: ", alex_data[0], alex_data[1], alex_data[2], alex_data[3]);

            document.getElementById("li-alex").innerHTML = alex_data[0];
            document.getElementById("mo-alex").innerHTML = alex_data[1];
            document.getElementById("ox-alex").innerHTML = alex_data[2];
            document.getElementById("to-alex").innerHTML = alex_data[3];
        }


        // Dave Date
        if(document.getElementById('ck-dave').checked){
            var dave_data = dave();
            console.log("Dave: ", dave_data[0], dave_data[1], dave_data[2],dave_data[3]);

            document.getElementById("li-dave").innerHTML = dave_data[0];
            document.getElementById("mo-dave").innerHTML = dave_data[1];
            document.getElementById("ox-dave").innerHTML = dave_data[2];
            document.getElementById("to-dave").innerHTML = dave_data[3];
        }


        // Jack Date
        if(document.getElementById('ck-jack').checked){
            var jack_data = jack();
            console.log("Jack: ", jack_data[0], jack_data[1], jack_data[2], jack_data[3]);

            document.getElementById("li-jack").innerHTML = jack_data[0];
            document.getElementById("mo-jack").innerHTML = jack_data[1];
            document.getElementById("ox-jack").innerHTML = jack_data[2];
            document.getElementById("to-jack").innerHTML = jack_data[3];
        }

        console.log(" ");

    },

    endTime: function(){
        clearInterval(this.startTime.timer);
    }

}


function rel(){
    location.reload();
}
