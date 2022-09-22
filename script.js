$.ajax({
  url:"https://jsonplaceholder.typicode.com/users",
})

.done(function(users){
  users.forEach(user => {

    
  $(`table`).append(`<tr class="table-tr"><td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td><td>${user.phone}</td><td>${user.website}</td></tr>`)
  //$(`table`).append(`<tr class="table-tr"></tr>`);
  //  $('.table-tr').append(`<td>${user.id}</td>`)
  //   //$('.id').append(`<td>${user.id}</td>`)
  });
})