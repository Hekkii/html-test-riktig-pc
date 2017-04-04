function init(){
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset ||   document.documentElement.scrollTop, 
        shrinkOn = 300, 
        header = document.querySelector("header");
        if(distanceY > shrinkOn){
            navbar.add(header,"smaller");
        }else{
            if(navbar.has(header, "smaller")){
                navbar.remove(header, "smaller");
            }
        }
    });
}

window.onload = init();