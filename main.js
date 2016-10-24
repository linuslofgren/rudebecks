function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//makes the tab width the class defaultOpen opened at first
document.getElementById("defaultOpen").click();


//JSON skit

var text = '{ "activities": [ { "name": "PROV I SPANSKA", "note": "För n1a, n2c och ngra till", "from": "2016-10-17T14:20:00.000Z", "to": "2016-10-17T16:00:00.000Z", "affected": [ "n1a", "n2c", "n3c" ] }, { "name": "PROV I Tyska", "note": "För n1a, n2c och ngra till", "from": "2016-10-18T14:20:00.000Z", "to": "2016-10-18T15:00:00.000Z", "affected": [ "n1b", "n2b", "n3a" ] }, { "name": "PROV I Franska", "note": "För n1a, n2c och ngra till", "from": "2016-10-17T13:20:00.000Z", "to": "2016-10-17T16:00:00.000Z", "affected": [ "n2a", "n2b", "n2c" ] }, { "name": "PROV", "note": "För n1a, n2c och ngra till", "from": "2016-10-16T14:20:00.000Z", "to": "2016-10-16T16:00:00.000Z", "affected": [ "n2c" ] }, { "name": "PROV I FYSIK", "note": "För n3c", "from": "2016-10-20T10:20:00.000Z", "to": "2016-10-20T12:00:00.000Z", "affected": [ "n3c" ] } ] }';

var obj = JSON.parse(text);

document.getElementById('fir1').innerHTML =
obj.activities[0].name;
document.getElementById('fir2').innerHTML =
obj.activities[0].note;
document.getElementById('fir3').innerHTML =
obj.activities[0].from;
document.getElementById('fir4').innerHTML =
obj.activities[0].to;

document.getElementById('sec1').innerHTML =
obj.activities[1].name;
document.getElementById('sec2').innerHTML =
obj.activities[1].note;
document.getElementById('sec3').innerHTML =
obj.activities[1].from;
document.getElementById('sec4').innerHTML =
obj.activities[1].to;


document.getElementById('thi1').innerHTML =
obj.activities[2].name;
document.getElementById('thi2').innerHTML =
obj.activities[2].note;
document.getElementById('thi3').innerHTML =
obj.activities[2].from;
document.getElementById('thi4').innerHTML =
obj.activities[2].to;


document.getElementById('fou1').innerHTML =
obj.activities[3].name;
document.getElementById('fou2').innerHTML =
obj.activities[3].note;
document.getElementById('fou3').innerHTML =
obj.activities[3].from;
document.getElementById('fou4').innerHTML =
obj.activities[3].to;

document.getElementById('fif1').innerHTML =
obj.activities[4].name;
document.getElementById('fif2').innerHTML =
obj.activities[4].note;
document.getElementById('fif3').innerHTML =
obj.activities[4].from;
document.getElementById('fif4').innerHTML =
obj.activities[4].to;

function main() {
  $('.list').hide();
  $('.list').fadeIn(1000);
  $('.xinfo').hide();
  $('.button').on('click', function() {
    $(this).next().slideToggle(100);
    $(this).nextAll().eq(1).slideToggle(100);
    $(this).nextAll().eq(2).slideToggle(100);

  })
}

$(document).ready(main);


//json mat

var text = '{ "weeks": [ { "week": "34", "days": [ { "day": "monday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" }, { "day": "tuesday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" }, { "day": "wednesday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" }, { "day": "thursday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" }, { "day": "friday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" } ] }, { "week": "35", "days": [ { "day": "monday", "reg": "sallad", "veg": "sallad2" }, { "day": "tuesday", "reg": "kött", "veg": "morot" }, { "day": "wednesday", "reg": "bröd", "veg": "Stekt filé med många olika saker i som tar upp lång plats och som måste se snyggt ut" }, { "day": "thursday", "reg": "Idag finns det ingen vegetarisk mat", "veg": null }, { "day": "friday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" } ] } ] }';

var obj = JSON.parse(text);

document.getElementById('mån').innerHTML =
obj.weeks[0].days[0].reg + '<br>' + obj.weeks[0].days[0].veg;

document.getElementById('tis').innerHTML =
obj.weeks[0].days[1].reg + '<br>' + obj.weeks[0].days[1].veg;

document.getElementById('ons').innerHTML =
obj.weeks[0].days[2].reg + '<br>' + obj.weeks[0].days[2].veg;

document.getElementById('tor').innerHTML =
obj.weeks[0].days[3].reg + '<br>' + obj.weeks[0].days[3].veg;

document.getElementById('fre').innerHTML =
obj.weeks[0].days[4].reg + '<br>' + obj.weeks[0].days[4].veg;
