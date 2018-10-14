(function(){
    $(init);
    var $staticEmail;
    var $firstName;
    var $lastName;
    var $updateButton;
    var userService = new UserServiceClient();
    function init() {
        userService
            .findUserById(31)//change it self id
            .then(renderUser);
        $staticEmail =$("#staticEmail");
        $firstName=$("#firstName");
        $lastName=$("#lastName");
        $updateButton=$('#updateButton')
            .click(updateUser);


    }
    function renderUser(user){
        console.log(user);
        $staticEmail.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
    }
    function updateUser(){
        var user = {
            firstName: $firstName.val(),
            lastName: $lastName.val()
        }
        userService
            .updateUser(31,user)
            .then(success);
    }
    function success() {
        alert("update success full");
    }
})();