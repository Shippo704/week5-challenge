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

var currentDay = $("#currentDay");
var saveButton = $(".saveBtn");
var currTime = dayjs().format("HH");
var currDay = dayjs().format("MMM DD, YYYY");

//var hourBlock = parseInt($element.data("id"));

$(function () {

  //add current date to header
  currentDay.text(currDay);


  //Event listener for save button
  saveButton.on("click", function() {
    localStorage.setItem($(this).parent().attr("id"), JSON.stringify($(this).parent().children("textarea").val()));
  })

  //--------------------------------------------------
  //Section to change style class for each time block
  //--------------------------------------------------

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

  // Set previous textarea data with data from local storage
  hour9.children("textarea").text(JSON.parse(localStorage.getItem("hour-9")));
  hour10.children("textarea").text(JSON.parse(localStorage.getItem("hour-10")));
  hour11.children("textarea").text(JSON.parse(localStorage.getItem("hour-11")));
  hour12.children("textarea").text(JSON.parse(localStorage.getItem("hour-12")));
  hour13.children("textarea").text(JSON.parse(localStorage.getItem("hour-13")));
  hour14.children("textarea").text(JSON.parse(localStorage.getItem("hour-14")));
  hour15.children("textarea").text(JSON.parse(localStorage.getItem("hour-15")));
  hour16.children("textarea").text(JSON.parse(localStorage.getItem("hour-16")));
  hour17.children("textarea").text(JSON.parse(localStorage.getItem("hour-17")));
  hour18.children("textarea").text(JSON.parse(localStorage.getItem("hour-18")));

});
