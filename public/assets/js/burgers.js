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

$('#submit').on('click', function(){
 
  var burger = {
      burger_name: $('#burgerInput').val()
  }
  $.post('/api/burgers', burger, function(data){
      console.log(data)
      window.location = "/"
  })
})