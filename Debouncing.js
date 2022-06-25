let counter = 1;

function getData() {
    console.log(`Data is Fetching ${counter++}`);
}

function debounce(callback, delay) {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback()
        }, delay);
    }
}

const customDebounce = debounce(getData, 300);