//IIFE

(function hello(){
    var $usernameFld, $passwordFld, $roleFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new UserServiceClient();
    var $clone;
    var userModel;
    jQuery(main);
    function main(){
        $tbody= $('.wbdv-tbody');
        $userRowTemplate= $('.wbdv-user');
        $('.wbdv-create').click(createUser);
        $usernameFld=$('#usernameFld');
        $lastNameFld=$('#lastNameFld');
        $passwordFld=$('#passwordFld');
        $firstNameFld=$('#firstNameFld')
        $roleFld=$('#roleFld');
        findAllUsers();
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
    /*
    *called whenever the list of users needs to be refreshed
    *Uses user service findAllUsers() to retrieve all the users and passes response to renderUsers
     */
    function findAllUsers(){
            userService.findAllUsers()
                .then(users=>renderUsers(users));
    }
    /*
    *accepts a user object as parameter and updates the form with the user properties
     */
    function renderUsers(users){
        $tbody.empty();
        console.log(users);
        for(var i=0;i<users.length;i++){
            var user=users[i];
            $clone = $userRowTemplate.clone();
            $clone.find('.wbdv-remove').attr('id',user.id);
            $clone.find('.delete').click(deleteUser)
            $clone.find('.wbdv-username')
                .html(user.username);
            $clone.find('.wbdv-first-name')
                .html(user.firstName);
            $clone.find('.wbdv-last-name')
                .html(user.lastName);
            $clone.find('.wbdv-role')
                .html(user.role);
            $clone.find('.wbdv-remove').click(deleteUser);
            console.log(user);
            $tbody.append($clone);
        }
    }
    function deleteUser(event){
        console.log(event);
        var $deleteBtn = $(event.currentTarget);
        userService
            .deleteUser($deleteBtn.attr("id"))
            .then(findAllUsers);
    }
    function createUser() {
        console.log('create user');
        console.log(new User($usernameFld.val(),$passwordFld.val(),
            $firstNameFld.val(), $lastNameFld.val(), $roleFld.val()));
        var user={
            username:$usernameFld.val(),
            password:$passwordFld.val(),
            firstName:$firstNameFld.val(),
            lastName:$lastNameFld.val(),
            role:$roleFld.val()
        }
        userService
            .createUser(user)
            .then(findAllUsers());
    }
})();
