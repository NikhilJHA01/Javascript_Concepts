function Stopwatch() {
  let duration = 0;
  let startTime, endTime, running;
  this.start = function() {
    if (!running) {
      startTime = Date.now();
      running = true;
    } else console.error("start already started");
  };
  this.stop = function() {
    endTime = date.now();
    running = false;
  };
  this.reset = function() {
    duration = 0;
    running = false;
  };
  Object.defineProperty(this, "duration", {
    get: function() {
      return endTime - startTime;
    }
  });
}
