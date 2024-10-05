
const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

const modeToggleBtn = document.getElementById('modeToggle');
const body = document.body;



const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}


menuItems.forEach(item =>{
    item.addEventListener('click' , () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block' ;
            document.querySelector('#notifications .notification-count').style.display = 'none';

        }

    })
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }else{
            user.style.display = 'none';
        }
    })
}




messageSearch.addEventListener('keyup' , searchMessage);


messagesNotification.addEventListener('click' , () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2500);
})

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click',closeThemeModal);

theme.addEventListener('click', openThemeModal);

const removeSizeSelector = () =>{
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
        size.addEventListener('click' , () =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px' ;
            root.style.setProperty('----sticky-top-left' , '5.4rem');
            root.style.setProperty('----sticky-top-right' , '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px' ;
            root.style.setProperty('----sticky-top-left' , '5.4rem');
            root.style.setProperty('----sticky-top-right' , '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px' ;
            root.style.setProperty('----sticky-top-left' , '-2rem');
            root.style.setProperty('----sticky-top-right' , '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px' ;
            root.style.setProperty('----sticky-top-left' , '-5rem');
            root.style.setProperty('----sticky-top-right' , '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px' ;
            root.style.setProperty('----sticky-top-left' , '-12rem');
            root.style.setProperty('----sticky-top-right' , '-35rem');
        }
    

    document.querySelector('html').style.fontSize = fontSize;
    })

})

const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}



colorPalette.forEach(color =>{
    color.addEventListener('click',() =>{
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primary = 198;
        } else if(color.classList.contains('color-2')){
            primary = 0;
        }
        else if(color.classList.contains('color-3')){
            primary = 150;
        }
        else if(color.classList.contains('color-4')){
            primary = 255;
        }
        else if(color.classList.contains('color-5')){
            primary = 99;
        }
        color.classList.add('active');
        root.style.setProperty('--change-color', primary);
    })
})




// Function to set light mode
function setLightMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
}

modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save the current mode in localStorage for persistence
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check localStorage for saved mode preference on page load
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'true') {
    body.classList.add('dark-mode');
} else {
    setLightMode(); // Ensure light mode is set if no preference is saved
}

