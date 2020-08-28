/*********************************************************************************** 
 *  WEB422 – Assignment 3 
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy. 
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students. 
 * 
 *  Name: __Rohil Khakhar____________________ Student ID: __109270173____________ Date: ____05-10-2019____________ 
 * 
 * 
 * ********************************************************************************/  


 var viewModel = {
    teams: ko.observable([]),
    employees: ko.observable([]),
    projects: ko.observable([])
 };

 //showGenericModal - same as assignment 2
 function showGenericModal(title,message){
    $(".modal-title").empty().append(title);
    $(".modal-body").empty().append(message);
    $("#genericModal").modal('show');
} 

//initializeTeams
function initializeTeams() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: "https://thawing-dawn-70314.herokuapp.com/teams-raw",
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            viewModel.teams = ko.mapping.fromJS(data);
            resolve();
    
        }).fail(function(err){
            reject("Error loading the team data.");
        })
    })
}

//initialize employees
function initializeEmployees() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: "https://thawing-dawn-70314.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            viewModel.employees = ko.mapping.fromJS(data);
            resolve();
    
        }).fail(function(err){
            reject("Error loading the employee data.");
        })
    })
}

//initialize projects
function initializeProjects() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: "https://thawing-dawn-70314.herokuapp.com/projects",
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            viewModel.projects = ko.mapping.fromJS(data);
            resolve();
    
        }).fail(function(err){
            reject("Error loading the 'project' data.");
        })
    })
}

//saveTeam
function saveTeam() {
    var currentTeam = this;

    $.ajax({ //updating the employees using a 'PUT' request
        url: "https://thawing-dawn-70314.herokuapp.com/team/" + currentTeam._id(),
        type: "PUT",
        data: JSON.stringify({ //convert the JavaScript object into a JSON object literal
            Projects: currentTeam.Projects(),
            Employees: currentTeam.Employees(),
            TeamLead: currentTeam.TeamLead() 
        }),
        contentType: "application/json"

    }).done(function(data){
        showGenericModal("Success", currentTeam.TeamName() + " updated successfully.");

    }).fail(function(err){
       showGenericModal("Error", "Error updating the team information");
    });

}

//Jquery "ready" function
$(document).ready(function(){
    console.log("function working");
    initializeTeams()
        .then(initializeEmployees)
        .then(initializeProjects)
        .then(function () { //anonymous function
            ko.applyBindings(viewModel, $("body")[0]); //initiating bindings
            $("select.multiple").multipleSelect({ filter: true });
            $("select.single").multipleSelect({ single: true, filter: true }); 
        }).catch(function (err) {
            showGenericModal("Error", err);
        });
});