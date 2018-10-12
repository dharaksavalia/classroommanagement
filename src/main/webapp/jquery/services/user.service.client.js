function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    // this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    // this.updateUser = updateUser;
    this.url =
        'http://localhost:8080/api/user';
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
}
//this has funny behaviour what context, original instant of class we use this
