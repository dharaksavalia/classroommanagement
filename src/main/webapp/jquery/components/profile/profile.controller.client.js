(function(){
    $(init);
    var userService = new UserServiceClient();
    function init() {
        userService
            .findUserById(31)//change it self id
            .then(renderUser);

    }
    function renderUser(user){
        console.log(user);
    }
})();