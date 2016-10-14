class Clock {
  constructor() {
    this.date = new Date();
    this.time = this.date.toString().split(" ")[4];
    this.hour = Number(this.time.split(":")[0]);
    this.minutes = Number(this.time.split(":")[1]);
    this.seconds = Number(this.time.split(":")[2]);
    this.printTime();
    setInterval(Clock.prototype._tick.bind(this), 1000);

    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let formattedTime = `${this.hour}:${this.minutes}:${this.seconds}`;
    console.log(formattedTime);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    // console.log(this);
    this.seconds += 1;
    if (this.seconds > 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes > 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours > 23) {
      this.hours = 0;
    }
    this.printTime();
  }
}

const clock = new Clock();
