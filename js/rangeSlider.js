//Range slider with number
const RANGE = document.querySelectorAll('.js-range-input');

for(let i=0; i<RANGE.length; i++) {
    RANGE[i].addEventListener('input', function (evt) {
        evt.preventDefault();
        let RANGE_NUM = evt.currentTarget.closest('.range').querySelector('.js-range-num');
        RANGE_NUM.style.opacity = "1";
        RANGE_NUM.innerHTML = this.value;
        if(this.max <= 1 ) {
            RANGE_NUM.style.left = this.value * 115  - 16 + "px";
        }else {
            RANGE_NUM.style.left = this.value / 3.5 + 42  + "px";
        }
    })
}
