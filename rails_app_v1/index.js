$(document).ready(function(){


  // *************
  // submit button
  // *************


  $('#submit_btn').on('click', function(){

    var username = $('#username').val()
    var password = $('#password').val()

    var data = {
                  username: username.value,
                  password: password.value

                };
    $.ajax({
        'type':'POST',
        'data': data,
        'success':function() { console.log('post request successful!!!') },
        'error':function(){ console.log('post request unsuccessful!!!!') },
        'url':'http://localhost:3000/user/login'
    })


  })

    // *************
    // New_user button
    // *************

    $('#new_user').on('click', function(){

      var username = $('#username').val()
      var password = $('#password').val()

      var data = {
                    username: username.value,
                    password: password.value

                  };
      $.ajax({
          'type':'GET',
          'data': data,
          'success':function() { console.log('post request successful!!!') },
          'error':function(){ console.log('post request unsuccessful!!!!') },
          'url':'http://localhost:3000/user/new_user'
      })


    })


})
