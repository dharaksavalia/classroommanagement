//IIFE

(function hello(){
    var $usernameFld, $passwordFld;
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

    function findAllUsers(){

            userService.findAllUsers()
                .then(users=>renderUsers(users));
    }
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
        var username =$('#usernameFld').val();
        var password =$('#passwordFld').val();
        var firstName =$('#firstNameFld').val();
        var lastName =$('#lastNameFld').val();
        var role=$('#roleFld').val();
        var user={
            username:username,
            password:password,
            firstName:firstName,
            lastName:lastName,
            role:role
        }
        userService
            .createUser(user)
            .then(findAllUsers());
    }
})();
