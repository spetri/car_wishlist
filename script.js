(function () {

  // Application preparation
  var carList = function () {
    setupEventHandlers();
    setupSelectList();
  };

  // Sets up eventing
  var setupEventHandlers = function() {
    $('#add-car').on("click", appendCarToList);
    $("#wish-list").on("click", "li", removeCarFromList);
  };

  // Gets object from file and appends to select box
  var setupSelectList = function() {
    sortCarFile();
    populateSelectList();
  };

  // Sorts objects according to car make
  var sortCarFile = function() {
    dreamCars.sort(function(a, b) {
      if (a.make < b.make) { return -1; }
      if (a.make > b.make) { return +1; }
      if (a.model < b.model) { return -1; }
      if (a.model > b.model) { return +1; }
      return 0;
    });
  };

  // Populates Select List with dream car json
  var populateSelectList = function() {
    $.each(dreamCars, function(key, value) {
      $('#dream-cars').append($('<option value='+ key +' make='+ value.make +'></option>').text(value.make + " - " + value.model)); 
    });
  };

  // Once car is selected, removes from select list and adds to wish list
  var appendCarToList = function(e) {
    var carList = $('#dream-cars').val();
    if (!carList) { return; }
    var selectedCar = $('#dream-cars option:selected');
    selectedCar.remove();
    setSelected(selectedCar);
    $('#wish-list').append($('<li></li>').text(selectedCar.text()));
  };  

  // Sets selected attribute on first make option of selected car
  // so select list option appears after adding car
  var setSelected = function(car) {
    var selectedCarMake = car.attr('make');
    var carList = $('#dream-cars option');
    $.each(carList, function(key, value) {
      if (value.getAttribute('make') == selectedCarMake) {
        value.setAttribute("selected", "selected");
        return false;
      };
    });
  };

  // Once wish list car is clicked, removes car from
  // wish list and adds back to select list
  var removeCarFromList = function(e) {
    var selectedCar = $(e.target);
    selectedCar.remove();
    $('#dream-cars').append($('<option></option>').text(selectedCar.text()));
    sortCarList();
  };
  
    // Sorts select list
  var sortCarList = function() {
    $("#dream-cars").html($("#dream-cars option").sort(function (a, b) {
      if (a.text > b.text) { return 1; }
      if (a.text < b.text) { return -1; }
      return 0;
    }));
    
  };

  window.carList = carList;

})();

// Main function
function selectCars() {
  return carList();
};