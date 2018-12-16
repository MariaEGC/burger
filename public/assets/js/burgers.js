$(document).on('click', '.devour-btn', function(){ 
  var burgerId = $(this).attr('data-id')
  $.ajax({
      method: 'PUT',
      url: '/api/burgers/'+ burgerId,
      data: {devoured : 1}
  }).then( response => {
      console.log(response)
      window.location = "/"
  })
})