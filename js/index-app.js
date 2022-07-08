// AFFICHAGE POPUP ZOOM PHOTO
// SELECTION PHOTO ON CLIC
document.querySelectorAll('.galerie img').forEach(item=>{
    item.onclick=()=>{
        document.querySelector('.galerie-popup').style.display = 'block';
        document.querySelector('.galerie-popup img').src = item.getAttribute('src');
    }
    });

    document.querySelector('.galerie-popup').onclick = ()=>{
        document.querySelector('.galerie-popup').style.display = 'none';
    };
var i =2;
    document.querySelector('.box-arrow').onclick =()=>{
        if (document.querySelector('.galerie-'+i).style.display ='none')
        {
            document.querySelector('.galerie-'+i).style.display ='flex';
            i++;
        }
    }
// SELECTION PHOTO GALERIE2 - A DUPLIQUER SI AJOUT GALERIE
    document.querySelectorAll('.galerie-2 img').forEach(item=>{
        item.onclick=()=>{
            document.querySelector('.galerie-popup').style.display = 'block';
            document.querySelector('.galerie-popup img').src = item.getAttribute('src');
        }
        });

// GESTION SCROLL UP/DOWN NAVBAR
var lastScrollTop=0;
        navbar=document.querySelector('.header-top');
window.addEventListener("scroll",function(){
    var scrollTop=window.pageYOffset || 
    document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top="-10vh";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop=scrollTop;
});