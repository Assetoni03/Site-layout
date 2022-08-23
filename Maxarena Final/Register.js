let num=document.querySelectorAll("button").length
for(let i=0;i<num;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("#Unamealert").style.display='none';
        document.querySelector("#Emailalert").style.display='none';
        document.querySelector("#Passwordalert").style.display='none';
        document.querySelector("#PasswordConfirmalert").style.display='none';
        let ans=true;
        for(let i=0;i<=3;i++)
            document.querySelectorAll(".fieldform")[i].style.marginBottom='22px';
        let forms= document.querySelectorAll(".fieldform").length;

        let text=document.getElementsByTagName("input")[0];
        let val=text.value;
        if(val.length==0){
            document.querySelector("#Unamealert").style.display='flex';
            document.querySelectorAll(".fieldform")[0].style.marginBottom='0px';
            ans=false;
        }

        text=document.getElementsByTagName("input")[1];
        val=text.value;
        if(val.length==0){
            document.querySelector("#Emailalert").style.display='flex';
            document.querySelectorAll(".fieldform")[1].style.marginBottom='0px';
            ans=false;
        }
        let ps1=true;
        text=document.getElementsByTagName("input")[2];
        val=text.value;
        if(val.length==0){
            document.querySelector("#Passwordalert").style.display='flex';
            document.querySelectorAll(".fieldform")[2].style.marginBottom='0px';
            ps1=false;
            ans=false;
        }

        let sec=document.getElementsByTagName("input")[3];
        let val2=sec.value;
        if(ps1==false)
        {
            document.querySelector("#PasswordConfirmalert").style.display='flex';
            document.querySelectorAll(".fieldform")[3].style.marginBottom='0px';
            ans=false;
        }
        else if(val!=val2){
            document.querySelector("#PasswordConfirmalert").style.display='flex';
            document.querySelectorAll(".fieldform")[3].style.marginBottom='0px';
            ans=false;
        }
        if(ans==true){
            document.location.href="donate.html";
        }
    })
}
