function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.login = login;
    this.register=register;
    this.searchUsers=searchUsers;
    this.url =
        'http://localhost:8080/api';
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
    function findAllUsers(){
        /*
        *
        *
         */
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

}
//this has funny behaviour what context, original instant of class we use this
