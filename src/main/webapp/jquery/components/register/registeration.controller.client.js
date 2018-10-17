(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        $usernameFld=$('#usernameFld');
        $passwordFld=$('#passwordFld');
        $verifyPasswordFld=$('#verifyPasswordFld');
        $registerBtn=$('#registerBtn');
        $registerBtn.click(register);

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
        window.location.href = '../profile/profile.template.client.html';
    }
    function fail(message){

        alert(message);
    }
})();
