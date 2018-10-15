//IIFE

(function hello(){
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new UserServiceClient();

    jQuery(main);
    function main(){
    var h1 = jQuery('h1');
        $tbody= $('tbody');
        template= $('.template');
        $('#createUser').click(createUser);
      //  findAllUsers();
    }
    function findUserById()
    {

    }
    function updateUser()
    {

    }
    function renderUser(user)
    {

    }
    function selectUser() {

    }

    function findAllUsers(){

            userService.findAllUsers()
                .then(users=>renderUsers(users));
    }
    function renderUsers(users){
        console.log("console.log");
        for(var i=0;i<users.length;i++){
            var user=users[i];
            clone = template.clone();
            clone.attr('id',user.id);
            clone.find('.delete').click(deleteUser)
            clone.find('.username')
                .html(user.username);
            console.log(user);
            tbody.append(clone);
        }
    }
    function deleteUser(event){
        console.log(event);
        var deleteBtn = $(event.currentTarget);
        var userId = deleteBtn
            .parent()
            .parent()
            .attr('id');
        userService.deleteUser(userId)
            .then(findAllUsers);

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
