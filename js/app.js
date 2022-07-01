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

    document.querySelectorAll('.galerie-2 img').forEach(item=>{
        item.onclick=()=>{
            document.querySelector('.galerie-popup').style.display = 'block';
            document.querySelector('.galerie-popup img').src = item.getAttribute('src');
        }
        });