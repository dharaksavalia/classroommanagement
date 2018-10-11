//IIFE

(function hello(){
    var tbody;
    var tr;
    var trl;

    jQuery(main);
    function main(){
    var h1 = jQuery('h1');
        tbody= $('tbody');
        tr= $('.template');
        var promise =fetch('http://localhost:8080/api/user');
        promise.then((response)=>response.json()).then(renderUsers);

    }
    function renderUsers(users){
        for(var i=0;i<users.length;i++){
            var user=users[i];
            tr1 = tr.clone();
            tr1.find('.username').html(user.username);
            trl.find('.password').html(user.password);
            // trl.find('.password').html(user.password);
            // trl.find('.firstname').html(user.firstName);
            // trl.find('.lastname').html(user.lastName);
            console.log(user);
            tbody.append(tr1);
        }
    }

})();
