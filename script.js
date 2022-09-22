$.ajax({
  url:"https://jsonplaceholder.typicode.com/users",
})

.done(function(users){
  users.forEach(user => {
  $(`tbody`).append(`<tr><td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td><td>${user.phone}</td><td>${user.website}</td></tr>`);

  $(`tbody tr`).even().addClass('even');
  $(`tbody tr`).odd().addClass('odd');
  $(`tbody tr`).addClass('table-tr');
  });
})