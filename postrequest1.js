axios.defaults.baseURL ='https:regres.in/api';
axios.post ('/users', {
    "email": "ajaja@mail.ru", 
    "password": "ghgkgkg"
}).then(
    function(response) {
        console.log(response.status)
        console.log(response)
})
.catch(function (err) {
   console.log(err)
})
.then(function() {})