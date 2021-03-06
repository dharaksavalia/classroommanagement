function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.login = login;
    this.logout=logout;
    this.register=register;
    this.searchUsers=searchUsers;
    this.getProfile=getProfile;
    this.updateProfile=updateProfile;
    this.url =window.location.origin+'/api';
    var self = this;
    function createUser(user){
        /*
        *
         */
        return fetch(self.url+'/user',{
            method: 'post',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        }).then(response=>response.json());
    }
    function getProfile(){
        return fetch(self.url+'/profile')
            .then(response=>response.json());
    }
    function findAllUsers(){
        console.log("find the users");
        return fetch(self.url+'/user')
            .then(response=>response.json());
    }
    function deleteUser(userId){
        return fetch(self.url+'/user'+'/' + userId ,{
            method: 'delete',
            headers:{
                'content-type':'application/json'
            }
        });
    }
    function findUserById(userId){
        return fetch(self.url+'/user'+'/'+userId)
            .then(response=>response.json());
    }
    function updateProfile(user){
        //console.log("upateUser");
        return fetch(self.url+'/profile',{
            method:'put',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        }).then(response=>response.json());
    }
    function updateUser(userId,user){
        //console.log("upateUser");
        return fetch(self.url+'/user'+'/'+userId,{
            method:'put',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        }).then(response=>response.json());
    }
    function login(username,password) {
        return fetch(self.url+'/login',{
            method:'post',
            body:JSON.stringify({
                username:username,
                password:password
            }),
            headers:{
                'content-type':'application/json'
            }
        }).then(response=>response.json());
    }
    function register(user) {
        return fetch(
            self.url+'/register',{
                body:JSON.stringify(user),
                method:'post',
                headers:{
                    'content-type':'application/json'
                }
            }
        ).then(response=>response.json());
    }
    function searchUsers(user) {
        return fetch(self.url+'/user?'+createQuery(user))
            .then(response=>response.json());
    }
    function createQuery(object) {
        return $.param(object);
    }
    function logout(){
        return fetch(self.url+'/logout');
    }

}
//this has funny behaviour what context, original instant of class we use this
