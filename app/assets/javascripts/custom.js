$(document).ready(function() {
  var getNameInput = $('.choose_file .input_choose').attr('name');
  $('.choose_file .input_choose').bind('change', function() {
    var size_in_megabytes = this.files[0].size/1024/1024;
    var filename = this.files[0].name;
    if (this.files && this.files[0]) {
      var reader = new FileReader(),
          getcl = $(this).prev();
      $(this).parents('.choose_file').find('.input_choose').attr('name', getNameInput);
      reader.onload = function (e) {
        getcl.attr('src', e.target.result);
      }
      reader.readAsDataURL(this.files[0]);
    }
    if (size_in_megabytes > 5) {
      alert('Maximum file size is 5MB. Please choose a smaller file.');
    }
  });
  $('.close_image').click(function(){
    var parents_close = $(this).parents('.choose_file');
    parents_close.find('.output_image').attr('src', 'default-placeholder.png').attr('alt', '');
  });
});
