document.addEventListener("DOMContentLoaded", function () {
  const timeInput = document.getElementById("trgtime");
  const timePickerButton = document.getElementById("openPicker");
  let closingFromButton = false;

  const flatpickrInstance = flatpickr(timeInput, {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i:S K",
    time_24hr: false,
    enableSeconds: true,
    static: true, // Prevents closing on outside click
    appendTo: document.body, // Appends the calendar to the body
    onReady: function (selectedDates, dateStr, instance) {
      // Create and append the close button to the flatpickr container
      const closeButton = document.createElement("button");
      closeButton.classList.add("flatpickr-close");
      closeButton.innerHTML = "&times;";
      instance.calendarContainer.appendChild(closeButton);

      // Add event listener to close the picker
      closeButton.addEventListener("click", function () {
        closingFromButton = true;
        instance.close();
      });
    },
    onChange: function (selectedDates, dateStr, instance) {
      timeInput.value = dateStr;
    },
    onClose: function (selectedDates, dateStr, instance) {
      if (closingFromButton) {
        // Reset the value to what it was before
        timeInput.value = instance.input.value;
      }
      closingFromButton = false; // Reset the flag
    },
  });

  timePickerButton.addEventListener("click", function () {
    flatpickrInstance.toggle(); // Toggles the time picker popup
  });
});
