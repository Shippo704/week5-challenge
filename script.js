// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var hour18 = $("#hour-18");

var saveButton = $(".saveBtn");
var currTime = dayjs().format("HH");

//var hourBlock = parseInt($element.data("id"));

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //Event listener for save button
  saveButton.on("click", function() {
    console.log("saved");
    console.log($(this).parent().attr("id"));
    localStorage.setItem($(this).parent().attr("id"), currTime);
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //Set 9AM style class
  hour9.removeClass("past present future");
  if (parseInt(hour9.data("hour")) < currTime) {
    hour9.addClass("past");
  }
  else if (parseInt(hour9.data("hour")) == currTime) {
    hour9.addClass("present");
  }
  else {
    hour9.addClass("future");
  }

  //Set 10AM style class
  hour10.removeClass("past present future");
  if (parseInt(hour10.data("hour")) < currTime) {
    hour10.addClass("past");
  }
  else if (parseInt(hour10.data("hour")) == currTime) {
    hour10.addClass("present");
  }
  else {
    hour10.addClass("future");
  }

  //Set 11AM style class
  hour11.removeClass("past present future");
  if (parseInt(hour11.data("hour")) < currTime) {
    hour11.addClass("past");
  }
  else if (parseInt(hour11.data("hour")) == currTime) {
    hour11.addClass("present");
  }
  else {
    hour11.addClass("future");
  }

  //Set 12PM style class
  hour12.removeClass("past present future");
  if (parseInt(hour12.data("hour")) < currTime) {
    hour12.addClass("past");
  }
  else if (parseInt(hour12.data("hour")) == currTime) {
    hour12.addClass("present");
  }
  else {
    hour12.addClass("future");
  }

  //Set 1PM style class
  hour13.removeClass("past present future");
  if (parseInt(hour13.data("hour")) < currTime) {
    hour13.addClass("past");
  }
  else if (parseInt(hour13.data("hour")) == currTime) {
    hour13.addClass("present");
  }
  else {
    hour13.addClass("future");
  }

  //Set 2PM style class
  hour14.removeClass("past present future");
  if (parseInt(hour14.data("hour")) < currTime) {
    hour14.addClass("past");
  }
  else if (parseInt(hour14.data("hour")) == currTime) {
    hour14.addClass("present");
  }
  else {
    hour14.addClass("future");
  }

  //Set 3PM style class
  hour15.removeClass("past present future");
  if (parseInt(hour15.data("hour")) < currTime) {
    hour15.addClass("past");
  }
  else if (parseInt(hour15.data("hour")) == currTime) {
    hour15.addClass("present");
  }
  else {
    hour15.addClass("future");
  }

  //Set 4PM style class
  hour16.removeClass("past present future");
  if (parseInt(hour16.data("hour")) < currTime) {
    hour16.addClass("past");
  }
  else if (parseInt(hour16.data("hour")) == currTime) {
    hour16.addClass("present");
  }
  else {
    hour16.addClass("future");
  }

  //Set 5PM style class
  hour17.removeClass("past present future");
  if (parseInt(hour17.data("hour")) < currTime) {
    hour17.addClass("past");
  }
  else if (parseInt(hour17.data("hour")) == currTime) {
    hour17.addClass("present");
  }
  else {
    hour17.addClass("future");
  }

  //Set 6PM style class
  hour18.removeClass("past present future");
  if (parseInt(hour18.data("hour")) < currTime) {
    hour18.addClass("past");
  }
  else if (parseInt(hour18.data("hour")) == currTime) {
    hour18.addClass("present");
  }
  else {
    hour18.addClass("future");
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
