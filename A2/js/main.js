/*********************************************************************************** 
 *  WEB422 – Assignment 2 
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy. 
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students. 
 * 
 *  Name: __Rohil Khakhar____________________ Student ID: __109270173____________ Date: ____25-09-2019____________ 
 * 
 * 
 * ********************************************************************************/  
 

//variable declaration
let employeesModel = [];

$(document).ready(function(){ //executed AFTER THE DOM IS READY
    
    initializeEmployeesModel();
    $("#employee-search").on("keyup", function(){
        let obtain_filter = getFilteredEmployeesModel($(this).val());
        refreshEmployeeRows(obtain_filter);
    })

    $(document.body).on("click", ".body-row", function() {
      
        let myemployee = getEmployeeModelById($(this).attr("data-id"));
       myemployee.HireDate = moment(myemployee.HireDate).local().utc().format('LL');
       
       let employee_template = _.template(
            '<strong>Address:</strong> <%- myemployee.AddressStreet %> <%- myemployee.AddressCity %>, <%- myemployee.AddressState %>. <%- myemployee.AddressZip %></br>' + 
            '<strong>Phone Number:</strong> <%- myemployee.PhoneNum %> ext: <%- myemployee.Extension %></br>' +
            '<strong>Hire Date:</strong> <%- myemployee.HireDate %>' 
          );
        let my_result = employee_template({ 'myemployee': myemployee });
        showGenericModal(myemployee.FirstName+" " + myemployee.LastName, my_result);

    })


});


// initializeEmployeesModel - 1.
function  initializeEmployeesModel() {
    $.ajax({
        url: "https://thawing-dawn-70314.herokuapp.com/employees",
        type: "GET",
        contentType: "application/json"
    }).done(function(data){
       employeesModel = data;
       refreshEmployeeRows(employeesModel);

    }).fail(function(){
        showGenericModal('Error', 'Unable to get Employees');
    })
}

// showGenericModal(title,message) - 2.
function  showGenericModal(title,message){
    $(".modal-title").empty().append(title);
    $(".modal-body").empty().append(message);
    $("#genericModal").modal('show');
} 

//refreshEmployeeRows(employees) - 3.
function refreshEmployeeRows(employees) {
    let my_template = _.template('<% _.forEach(employees, function(employee){%>' + 

    '<div class="row body-row" data-id="<%- employee._id %>">' + 
         '<div class="col-xs-4 body-column"><%- _.escape(employee.FirstName) %></div>' +   
         '<div class="col-xs-4 body-column"><%- _.escape(employee.LastName) %></div>' + 
         '<div class="col-xs-4 body-column"><%- _.escape(employee.Position.PositionName) %></div>' +
    '</div>'+
    '<% }); %>');

    $("#employees-table").empty();
    $("#employees-table").append(my_template({'employees': employees}));

};

// getFilteredEmployeesModel(filterString) - 4.
function getFilteredEmployeesModel(filterString){ //if any of the properties contain the filterString parameter,it will be stored in the array
    let myFilter = _.filter(employeesModel, function(employee){
        return employee.FirstName.toUpperCase().includes(filterString.toUpperCase()) || 
               employee.LastName.toUpperCase().includes(filterString.toUpperCase()) ||
               employee.Position.PositionName.toUpperCase().includes(filterString.toUpperCase())
    })

    console.log(myFilter);
    return myFilter;
};

//getEmployeeModelById(id)  - 5. 
function getEmployeeModelById(id){
    for(let i = 0; i <employeesModel.length; ++i){
        if(employeesModel[i]._id == id){
            let my_deep_clone = _.cloneDeep(employeesModel);
            return my_deep_clone[i];
        }
    }
    return null; //if the id is not found, return null
} 
 

