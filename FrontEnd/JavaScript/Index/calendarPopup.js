function calendarPopup() {
  $('input[id="datePopup"]').daterangepicker({
      locale: {
          format: "DD/MM/YYYY",
          firstDay: 1,
      },
      opens: 'center',
      showDropdowns: true,
      minYear: 2000,
      maxYear: 2040,
      singleDatePicker: true,
      autoApply: true,

  });
};