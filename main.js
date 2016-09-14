$(document).on('DOMContentLoaded', init)

function init() {
  $('#add').click(addButtonClicked);

  $('#list').on('dblclick', 'li', clickLi);
}

function addButtonClicked() {
  console.log('Clicked!');

  var $input = $('#name');

  var color = $('#color').val();

  console.log('color:', color)

  var name = $input.val();
  $input.val('');

  var $li = $('<li>');

  // $li.on('click', clickLi)

  $li.text(name).css('color', color);

  var $list = $('#list');

  $list.append($li);
}

function clickLi(event) {
  $(event.target).remove();
}
