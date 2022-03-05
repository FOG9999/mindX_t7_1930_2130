class Clock {
    constructor({
        template
    }) {
        this.template = template;
        this.timer;
    }

    render() {
        let temp = 'h:m:s'
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;

        let output = temp.replace('h', hours).replace('m', minutes).replace('s', seconds);
        clock.innerHTML = output;
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    }
}

let clock1 = new Clock({
    template: 'h:m:s'
});

class ExtendedClock extends Clock {
    constructor({
        template
    }) {
        super(template);
    }
    render() {
        let temp = "h:m:s:t";
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        let milliseconds = date.getMilliseconds();
        milliseconds = milliseconds.toString();
        while (milliseconds.length < 4) {
            milliseconds = "0" + milliseconds;
        }
        let output = temp.replace('h', hours).replace('m', minutes).replace('s', seconds).replace('t', milliseconds);
        clock.innerHTML = output;
    }

    start() {
        super.start();
        this.timer = setInterval(() => {this.render();}, 1);
    }
}
var clock = document.getElementById('clock');

let clock2 = new ExtendedClock({
    template: "h:m:s:t"
})
clock2.start();