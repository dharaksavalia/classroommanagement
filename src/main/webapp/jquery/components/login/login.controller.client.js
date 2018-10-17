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
            .click(login);

    }
    function login() {
        userService
            .login($usernameFld.val(),$passwordFld.val())
            .then(success)
            .catch(fail);
    }
    function success() {
        alert("login successful");
        redirectProfile();
    }
    function fail(){
        alert("username or password doesnot match");
    }
    function redirectProfile(){
        window.location.href = '../profile/profile.template.client.html';
    }
})();
