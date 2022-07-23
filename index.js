
    window.onscroll=function (){
        let scroll = document.documentElement.scrollTop;
        let vw = window.innerWidth;
        let vh=window.innerHeight;
        let nav_height=document.getElementById("MyHeader").offsetHeight;
        if ((scroll > vh-nav_height)) {
            document.getElementById("MyHeader").style.backgroundImage='linear-gradient(45deg,rgba(0, 0, 0, 0.849) 50%,#333333ff 50%)';
            document.getElementById("MyHeader").style.boxShadow='0px 5px 7px 5px rgba(0, 0, 0, 0.233)';
            document.getElementById("navicon").style.transform='translateY(0)';


        }
        else 
        {
            document.getElementById("MyHeader").style.backgroundImage='linear-gradient(45deg,rgba(0, 0, 0, 0) ,transparent )';
            document.getElementById("MyHeader").style.backgroundColor='transparent';
            document.getElementById("MyHeader").style.boxShadow='0px 5px 7px 5px rgba(0, 0, 0, 0)';
            document.getElementById("navicon").style.transform='translateY(-150%)';
        }
        if((scroll>400)&&vw<=1100)
        {
            document.getElementById("nav-title").style.display='block';
        }
        else if(vw>700||scroll<=400)
        {
            document.getElementById("nav-title").style.display='none';
        }

    };
  
