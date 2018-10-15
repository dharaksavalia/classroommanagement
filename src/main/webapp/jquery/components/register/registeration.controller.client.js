(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var userService = new UserService();
    $(main);

    function main() {
        $usernameFld=$('#usernameFld');
        $passwordFld=$('#passwordFld');
        $verifyPasswordFld=$('#verifyPasswordFld');
        $registerBtn=$('#registerBtn');
        $registerBtn.click(register);

    }
    function register() {
        var user={
            username:$usernameFld.val(),
            password:$passwordFld.val()
        }
        userService.register(user).then(success);
    }
    function success(){
        alert("user registered");
    }
})();
