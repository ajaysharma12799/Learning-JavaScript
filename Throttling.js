let counter = 1;

function expensive() {
    console.log(`Counter : ${counter++}`);
}

const throttle = (callback, delay) => {
    let flag = true;
    return function() {
        if(flag) {
            callback();
            flag = false;
        }
        else {
            setTimeout(() => {
                flag = true;
            }, delay);
    
        }
    }
}

const customThrottle = throttle(expensive, 1000);

window.addEventListener('resize', () => {
    customThrottle();
});