<head>
  <script src='https://code.jquery.com/jquery-3.2.1.min.js' />
</head>;
$(document).ready(function () {
  $('#add_item').click(function () {
    $('<li>Item</li>').appendTo('.my_list');
  });

  $('#remove_item').click(function () {
    $('.my_list li:last-child').remove();
  });

  $('#clear_list').click(function () {
    $('.my_list').empty();
  });
});
