$(document).ready(function(){
    checkCoockie() 
    let bezoeker = $('#bezoeker');

        // Cookie 
        function setCookie(cname, cvalue, exDate){
            const day = new Date();
            day.setTime(day.getTime() + (exDate*24*60*60*1000));
            console.log(day)
            let verloopt = 'verloop='+ day.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + verloopt + ';path=/'
        };
    
    
        function getCookie(cname){
            let name = cname + '=';
            let decodeCookie = decodeURIComponent(document.cookie)
            let ca = decodeCookie.split(';');
            for(let i = 0; i < ca.length; i++){
                let c = ca[i];
                while(c.charAt(0) == ' '){
                    c = c.substring(1);
                }
                if(c.indexOf(name) == 0){
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        }
    
        function checkCoockie(){
            let user = getCookie('username');
            document.getElementById('bezoeker').innerText = user;
            if(user != ''){
                alert('Fijn dat je er weer bent ' + user);
            }  else {
                user = prompt('Ik maak gebruik van Cookies./n Vul uw naam in als u hier mee akkorod gaat/n Wat is uw naam?', '')
                if( user != '' && user != null){
                    setCookie('username', user, 1)
                }
            }
        }

console.log('pagina geladen')
});