const navslider = () =>{
    const icon = document.querySelector('.menuicon');
    const navmenu = document.querySelector('.navlist');

    icon.addEventListener('click', ()=>{
        
        navmenu.classList.toggle('nav-active');
        navmenu.style.transition = "transform 0.4s ease-in";
        
    });

    document.addEventListener('click', (e)=>{      
                    //removes the navigation container and the icon animation on clicking anywhere    //here if the condition is true two events will occur which are passed in a () separated by , 
    !icon.contains(e.target)? (navmenu.classList.remove('nav-active') , icon.classList.remove('opened')) : '' ; //ternary operator

})

}
navslider();

const sendMail = () =>{
    const mydata = {
        name: document.querySelector('#empname').value,
        mail: document.querySelector('#empmail').value,
        message: document.querySelector('#empmessage').value,
    };

    emailjs.send('gmail','template_9duzy5n',mydata).then(res => console.log('submitted' , res.status));
}

document.querySelector('#submitbtn').addEventListener('click', () =>{
    sendMail();
    alert('your Message has been Successfully Sent');
})

// ============> Dark Mode <=============== //
document.querySelector('.btn-toggle').addEventListener('click', () =>document.body.classList.toggle('light'))