//IIFE

(function hello(){
    var tbody;
    var tr;
    var trl;
    var userService = new UserServiceClient();
    jQuery(main);
    function main(){
    var h1 = jQuery('h1');
        tbody= $('tbody');
        tr= $('.template');
        $('#createUser').click(createUser);
        findAllUsers();
    }
    function findAllUsers(){

            userService.findAllUsers()
                .then(users=>renderUsers(users));
    }
    function renderUsers(users){
        console.log("console.log");
        for(var i=0;i<users.length;i++){
            var user=users[i];
            tr1 = tr.clone();
            tr1.find('.username').html(user.username);
            console.log(user);
            tbody.append(tr1);
        }
    }
    function createUser() {
        console.log('create user');
        var username =$('#usernameFld').val();
        var password =$('#passwordFld').val();
        var firstName =$('#firstNameFldFld').val();
        var lastName =$('#lastNameFldFld').val();
        var user = {
            username: username,
            password: password,
            firstName:firstName,
            lastName:lastName
        };
        userService
            .createUser(user)
            .then(findAllUsers());
    }
})();
