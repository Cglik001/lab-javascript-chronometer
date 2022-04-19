class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++

      if(typeof callback === 'function') {
        callback()
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  //getMilliseconds() {
   // return (this.currentTime % 60) * 1000
    // > 99

  //}


  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, '0')
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let seconds = this.getSeconds()
    let minutes = this.getMinutes()
   // let milliseconds = this.getMilliseconds()

    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`
    //return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}:${this.computeTwoDigitNumber(milliseconds)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
