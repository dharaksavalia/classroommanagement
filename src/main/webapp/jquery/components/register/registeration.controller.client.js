(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $redirectBtn;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        $usernameFld=$('#usernameFld');
        $passwordFld=$('#passwordFld');
        $verifyPasswordFld=$('#verifyPasswordFld');
        $registerBtn=$('#registerBtn');
        $registerBtn.click(register);
        $redirectBtn=('.webdev-login-redirect');
        $redirectBtn.click(redirectToLogin);

    }
    function register() {
        if($verifyPasswordFld.val()===$passwordFld.val()){
        var user={
            username:$usernameFld.val(),
            password:$passwordFld.val()
        }
        userService.register(user)
        .then(success)
        .catch(fail);
    }else{
        alert("password not same");
    }
    }
    function success(){
        alert("user registered");
        redirectToLogin();
    }
    function fail(message){
        alert(message);
    }
    function redirectToLogin(){
        window.location.href = '../login/login.template.client.html';
    }
})();
