$(function() {
  $('.trigger').change(function() {
    $(this).next('.showthis').toggle(this.checked);
  })
});