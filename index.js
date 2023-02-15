const sidebarItems =  document.querySelectorAll('.menu-item');
const notification_count = document.querySelector("#notification-count");


//remove active classes 
const changeActive = () =>{
    sidebarItems.forEach(item =>{
        item.classList.remove('active');
    })

}

sidebarItems.forEach(item => {
    item.addEventListener('click', () =>{
        changeActive();
        item.classList.add('active');
             
    })

})


const notification_item = document.querySelector("#notification-item");
const notification_popup = document.querySelector(".notification-popup");
const sidebar = document.querySelector('.sidebar');


const openNotificationCard = () => {
    notification_popup.style.display = "block";
    notification_count.style.display = "none";
}

notification_item.addEventListener("click", openNotificationCard);

const closeNotificationCard = (e) => {

    if(e.target.classList.contains('notification-popup'))
    {
        notification_popup.style.display = "none";
    }
   
}
sidebar.addEventListener("click", closeNotificationCard);






//messages popup

const messageNotifications =  document.getElementById("messages-notification");
const messages = document.querySelector(".messages");


messageNotifications.addEventListener("click", () =>{

    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotifications.querySelector('#notification-count').style.display = "none";
    setTimeout(() =>{
       
        messages.style.boxShadow = "none";

    }, 3000);

})


//search message
const message = messages.querySelectorAll('.message');
const messagesSearch = document.querySelector('#messages-search');

const searchMessage = () => {

    const msgValue =  messagesSearch.value.toLowerCase();    // msgValue = ranjan
    message.forEach(chat => {    
        
        // in every msg => chat => h5 => Ranjan => ranjan => name => name = msgValue => h5 is flex
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(msgValue) != -1){
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }   

    })
}
messagesSearch.addEventListener('keyup', searchMessage);


// Theme Customization
const theme = document.querySelector('#theme-item');
const themeModel = document.querySelector('.theme');
const openThemeCard = () =>{
    themeModel.style.display = "grid";
}
theme.addEventListener('click', openThemeCard)

//close the card
const closeTheCard = (e) => {
    if(e.target.classList.contains('theme')){
        themeModel.style.display = "none";
    }
}

themeModel.addEventListener('click', closeTheCard)



// theme events

const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');

const removeActiveSize = () =>{
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
   
    let font_Size;

    
    size.addEventListener('click', () => {
        removeActiveSize();
        size.classList.toggle('active');

       
        if(size.classList.contains('font-size-1')){
            font_Size = "10px";
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            font_Size = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            font_Size = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            font_Size = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            font_Size = '22px';
            root.style.setProperty('--sticky-top-left', '12rem');
            root.style.setProperty('--sticky-top-right', '-33rem');
        }
    })

    document.querySelector('html').style.fontSize = font_Size;
})


const colorPalette = document.querySelectorAll('.choose-color span');

//color active class remove

const removeColorActive = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    
   
    color.addEventListener('click', () => {
        let primaryHue;
        removeColorActive();
        if(color.classList.contains('color-1')){
            primaryHue = 120;
            
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 342;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 44;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 0;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-Hue', primaryHue);
        
    })

})



//bg change
const bg_1 = document.querySelector('.bg-1');
const bg_2 = document.querySelector('.bg-2');
const bg_3 = document.querySelector('.bg-3');

let lightColor;
let whiteColor;
let darkColor;



const changeBg = () => {
    root.style.setProperty('--light-ln', lightColor);
    root.style.setProperty('--dark-ln', darkColor);
    root.style.setProperty('--white-ln', whiteColor);

}


bg_1.addEventListener('click', () => {
    lightColor = '15%';
    whiteColor = '20%';
    darkColor = '95%';
    
    bg_1.classList.add('active');
    bg_1.classList.remove('active');
    bg_3.classList.remove('active');
    window.location.reload();
})








bg_2.addEventListener('click', () => {
    lightColor = '15%';
    whiteColor = '20%';
    darkColor = '95%';
    
    bg_2.classList.add('active');
    bg_1.classList.remove('active');
    bg_3.classList.remove('active');
    changeBg();
})

bg_3.addEventListener('click', () => {
    lightColor = '0%';
    whiteColor = '10%';
    darkColor = '95%';
    
    bg_3.classList.add('active');
    bg_2.classList.remove('active');
    bg_1.classList.remove('active');
    changeBg();
})

