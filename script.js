$.ajax({
  url:"https://jsonplaceholder.typicode.com/users",
})

.done(function(users){
  users.forEach(user => {
    $('.id').append(`${user.id}`)
  });
})