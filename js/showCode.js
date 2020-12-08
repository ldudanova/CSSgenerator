
function showCode() {
    let option_id = current_option.id;

    switch (option_id) {
        case 'border-radius': showBorderRadius(); break;
        case 'box-shadow':  showBoxShadow(); break;
        case 'text-shadow':  showTextShadow(); break;
        case 'color-generator': showColorCode(); break;
    }
}
