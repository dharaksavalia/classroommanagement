function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.login = login;
    this.url =
        'http://localhost:8080/api/user';
    this.loginUrl=
        'http://localhost:8080/api/login';
    var self = this;
    function createUser(user){
        return fetch(self.url,{
            method: 'post',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });
    }
    function findAllUsers(){
        console.log("find the users");
        return fetch(self.url)
            .then(response=>response.json());
    }
    function deleteUser(userId){
        return fetch(self.url +'/' + userId ,{
            method: 'delete',
            headers:{
                'content-type':'application/json'
            }
        });
    }
    function findUserById(userId){
        return fetch(self.url+'/'+userId)
            .then(response=>response.json());
    }
    function updateUser(userId,user){
        //console.log("upateUser");
        return fetch(self.url+'/'+userId,{
            method:'put',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        }).then(response=>response.json());
    }
    function login(username,password) {
        return fetch(self.loginUrl,{
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
}
//this has funny behaviour what context, original instant of class we use this
