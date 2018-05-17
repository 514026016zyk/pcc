window.onload = function () {
    //轮播
    let tu=document.querySelectorAll('.lunbotu');
    let dian=document.querySelectorAll('.dian');
    // console.log(dian);
    let index=0;
    let t=setInterval(move,2000);
    function move() {
        index++;
        if (index==tu.length){
            index=0
        }
        tu.forEach(function (element) {
            element.style.display='none';

        });
        dian.forEach(function (element) {
            element.className='dian'
        });
            tu[index].style.display='block';
            dian[index].classList.add('hot')
    }

    for (let i=0;i<dian.length;i++){
        dian[i].onclick=function () {
            for (let j=0;j<dian.length;j++){
                dian[j].className='dian';
                tu[j].style.display='none';
            }
            dian[i].classList.add('hot');
            tu[i].style.display='block';
            index=i;
        } ;
    }
    let Tu=document.querySelector('.Tu');
    // console.log(Tu);
    Tu.onmouseenter=function () {
        clearInterval(t);
    };
    Tu.onmouseleave=function () {
        t=setInterval(move,2000);
        //这是个问题！
        // setInterval(move,2000);
    };
    //1，2，3//
    let diyi=document.querySelector('.bbb .diyi');
    let se=document.querySelector('.se');
    diyi.onmouseenter=function () {
        se.style.display='block';
        diyi.classList.add('youkuang')
    };
    diyi.onmouseleave=function () {
        se.style.display='none';
        diyi.classList.remove('youkuang')
    };
    let dier=document.querySelector('.bbb .dier');
    let se2=document.querySelector('.se2');
    dier.onmouseenter=function () {
        se2.style.display='block';
        dier.classList.add('youkuang')
    };
    dier.onmouseleave=function () {
        se2.style.display='none';
        dier.classList.remove('youkuang')
    }


};


