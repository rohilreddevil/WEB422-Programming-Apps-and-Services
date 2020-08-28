/*********************************************************************************** 
 *  WEB422 – Assignment 1 
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy. 
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students. 
 * 
 *  Name: __Rohil Khakhar____________________ Student ID: __109270173____________ Date: _____12/09/2019___________ 
 * 
 * 
 * ********************************************************************************/  
 

$(document).ready(function() { //all the jQuery inside this function
// or $(function(){};  

    console.log("Handler working");
   //event management starts

 $("#teams-menu").on("click", function(event){ //teams
    event.preventDefault();
    $.ajax({
        url: "https://thawing-dawn-70314.herokuapp.com/teams",
        type: "GET",
        contentType: "application/json"
    }).done(function(data){
        $(".well").empty()
            .append("<h3>Teams</h3>")
            .append(JSON.stringify(data));
    })

   });

   $("#employees-menu").on("click", function(event){ //employees
    event.preventDefault();
    $.ajax({
        url: "https://thawing-dawn-70314.herokuapp.com/employees",
        type: "GET",
        contentType: "application/json"
    }).done(function(data){
        $(".well").empty()
            .append("<h3>Employees</h3>")
            .append(JSON.stringify(data)); //JSON.stringify() converts an object to JSON. JSON.parse() does the opposite
    })

   });

   
   $("#projects-menu").on("click", function(event){ //projects
    event.preventDefault();
    $.ajax({
        url: "https://thawing-dawn-70314.herokuapp.com/projects",
        type: "GET",
        contentType: "application/json"
    }).done(function(data){
        $(".well").empty()
            .append("<h3>Projects</h3>")
            .append(JSON.stringify(data)); 
    })

   });

   $("#positions-menu").on("click", function(event){ //positions
    event.preventDefault();
    $.ajax({
        url: "https://thawing-dawn-70314.herokuapp.com/positions",
        type: "GET",
        contentType: "application/json"
    }).done(function(data){
        $(".well").empty()
            .append("<h3>Positions</h3>")
            .append(JSON.stringify(data)); 
    })

   });



});