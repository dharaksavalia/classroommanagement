//IIFE

(function hello(){

    jQuery(main);
    function main(){
    var h1 = jQuery('h1');
    h1.css('color','red');
    h1.html('User Administration !');
    var tr = $('.template');
    var tr1 = tr.clone();
    var tbody = $('tbody');
        var users = [
            {username: 'bob'},
            {username: 'charlie'}
        ];
        for(var i=0;i<users.length;i++){
            var user=users[i];
            console.log(user);
            tr1 = tr.clone();
            tr1.find('.username').html(user.username);
            tbody.append(tr1);
        }
    }

    
})();
