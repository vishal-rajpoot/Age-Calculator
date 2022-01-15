// Variables for Datepicker

let Datepicker = document.getElementById('datepicker');
let choosedate = document.getElementById('choosedate');

//Varibale for printing values

let ageyear = document.getElementById('ageyear');
let agemonth = document.getElementById('agemonth');
let agedays = document.getElementById('agedays');
let agehours = document.getElementById('agehours');
let ageseconds = document.getElementById('ageseconds');
let agemiliseconds = document.getElementById('agemiliseconds');

Datepicker.addEventListener('change', function(){
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    let selectedDate = new Date(this.value);
    let DOB = selectedDate.toLocaleDateString('en-US',options);

    choosedate.innerHTML = "DOB : " + " " + DOB;

    let miliseconds_btw_DOB = Date.parse(DOB);
    let miliseconds_btw_Now = Date.now();

    let age_in_miliseconds = miliseconds_btw_Now - miliseconds_btw_DOB;

    // console.log(age_in_miliseconds);

    let miliseconds = age_in_miliseconds;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = month * 12;



    // now will start the calculation 


    let years = Math.round(miliseconds/year);
    let months = years * 12;
    let days = years * 365;
    let hours = Math.round(miliseconds/hour);
    let seconds = Math.round(miliseconds/second);

    // now will print values in boxes

    ageyear.innerHTML = years
    agemonth.innerHTML = months
    agedays.innerHTML = days
    agehours.innerHTML = hours
    ageseconds.innerHTML = seconds
    agemiliseconds.innerHTML = miliseconds;



    document.querySelector('.age-calc').classList.add('expand');
})