//Menu
const OPTION_MENU = document.getElementById('css-option-menu');
const MENU_LIST = document.getElementById('css-menu-option-list');
const MENU_ITEMS = document.getElementsByClassName('js-chose-option');
const AREA_ITEMS = document.getElementsByClassName('main-aria-item');
const MENU_TITLE = document.getElementById('js-menu-title');
var current_option;
for (let i=0; i<MENU_ITEMS.length; i++ ){
    let menu_item = MENU_ITEMS[i];
    menu_item.addEventListener('click', chooseOption);
}
OPTION_MENU.addEventListener('click', closeMenuList);


function chooseOption() {
    MENU_LIST.style.display = "none";
    let option_name = this.getAttribute('data-option-name');
    AREA.style.display = "block";
    let option_to_show = document.getElementById(option_name);

    option_to_show.style.display = "block";
    current_option = option_to_show;
    MENU_TITLE.innerText = "Back to menu";
    showCode();
}

function closeMenuList() {
    for(let i=0; i<AREA_ITEMS.length; i++) {
        AREA_ITEMS[i].style.display = "none";
    }

    AREA.style.display = "none";

    MENU_LIST.style.display = "flex";

    for (let i=0; i<MENU_ITEMS.length; i++ ) {
        let menu_item = MENU_ITEMS[i];
        menu_item.style.display = 'block'
    }
    MENU_TITLE.innerText = "Chose something";
    current_option = null;
}

