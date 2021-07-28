const axios = require('axios');
axios.get('https://reqres.in/api/users?delay=3').then(
    function(response) {
        console.log(response)
    }
)
.catch(function(err) {
       console.log(err)

})
.then(function() {});
