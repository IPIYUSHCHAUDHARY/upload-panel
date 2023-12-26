window.onload = function() {

    let inptFiles = document.querySelectorAll('input[type=file].inpt-gray');
    let inptDates = document.querySelectorAll('input[data-input=date].inpt-gray');

    inptFiles.forEach((item) => {
        item.addEventListener('change', function() {
            if (this.value == '') {
                (this.classList.contains('text-dark')) ? this.classList.remove('text-dark'): '';
            } else {
                (!this.classList.contains('text-dark')) ? this.classList.add('text-dark'): '';
            }
        })
    })

    inptDates.forEach((item) => {
        item.addEventListener('focus', function() {
            this.type = 'date';
        })
        item.addEventListener('blur', function() {
            this.type = 'text';
        })
    })
}