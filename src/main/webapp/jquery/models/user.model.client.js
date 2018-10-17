function User(username, password, firstName, lastName,role) {
    this.username = username;
    this.password = password;
    this.firstName= firstName;
    this.lastName= lastName;
    this.role=role;
    this.self=this;
    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.getPassword = getPassword;
    this.setPassword = setPassword;
    this.setFirstName= setFirstName;
    this.getFirstName= getFirstName;
    this.setlastName= setLastName;
    this.getlastName= getLastName;
    this.setRole=setRole;
    this.getRole=getRole;
    //this.toString=toString;
    function setRole(role) {
        self.role=role;
    }
    function setUsername(username) {
        self.username = username;
    }
    function getUsername() {
        return self.username;
    }
    function setPassword(password) {
        self.password =password;
    }
    function getPassword() {
        return self.password;
    }
    function setFirstName(firstName) {
        self.firstName =firstName;
    }
    function getFirstName() {
        return self.firstName;
    }
    function setLastName(lastName) {
        return self.lastName =lastName;
    }
    function getLastName() {
        return self.lastName;
    }
    function getRole(){
        return self.getRole;
    }
    function setRole(role) {
        self.role=role;
    }


}
