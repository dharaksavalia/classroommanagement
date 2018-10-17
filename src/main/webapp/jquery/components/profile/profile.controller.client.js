(function(){
    $(init);
    var $usernameFld,$messageFld,$phoneFld;
    var $emailFld,$roleFld,$dateOfBirthFld;
    var $updateBtn;
    var userService = new UserServiceClient();
    function init() {
        userService
            .getProfile()//change it self id
            .then(renderUser)
            .catch(fail);
        $phoneFld=$("#phoneFld");
        $usernameFld=$('#staticUsername');
        $messageFld=$('#messageFld');
        $emailFld=$("#emailFld");
        $roleFld=$("#roleFld");
        $messageFld.hide();
        $dateOfBirthFld=$("#dateOfBirth");
        $updateBtn=$('#updateBtn')
            .click(updateProfile);
    }
    function renderUser(user){
        console.log(user);
        $usernameFld.val(user.username);
        $phoneFld.val(user.phone);
        $emailFld.val(user.email);
        $dateOfBirthFld.val(user.dateOfBirth);
        $roleFld.val(user.role);
    }
    function updateProfile(){
        var user = {
            username:$usernameFld.val(),
            phone: $phoneFld.val(),
            email: $emailFld.val(),
            dateOfBirth:$dateOfBirthFld.val(),
            role:$roleFld.val(),
        }
        console.log(user);
        userService
            .updateProfile(user)
            .then(success)
            .catch(fail);
    }
    function success() {
        $messageFld.show();
        $messageFld.val("Profile Updated");
    }
    function fail(){
        alert("failed");
    }
})();