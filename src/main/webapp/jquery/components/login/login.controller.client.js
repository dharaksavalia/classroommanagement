(function () {
    var $usernameFld;
    var $passwordFld;
    var $loginBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        $usernameFld=$('#username');
        $passwordFld=$('#password');
        $loginBtn=$('#login')
            .click(loginC);

    }
    function loginC() {
        console.log($usernameFld.val()+$passwordFld.val());
        userService
            .login($usernameFld.val(),$passwordFld.val())
            .then(success);
    }
    function success() {
        alert("login successful");
    }
})();
