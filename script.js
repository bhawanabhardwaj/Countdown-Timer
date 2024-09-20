const endDate = new Date("25 Sep, 2024 23:31:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
  const now = new Date().getTime();

  const distanceCovered = now - startDate;
  const distancePending = endDate - now;

  const oneDayInMillis = 24 * 60 * 60 * 1000;
  const oneHoursInMillis = 60 * 60 * 1000;
  const oneMinInMillis = 60 * 1000;
  const oneSecoundInMillis = 1000;

  const days = Math.floor(distancePending / oneDayInMillis);
//   console.log("days: ", days);

  const hrs = Math.floor((distancePending % oneDayInMillis) / oneHoursInMillis);
//   console.log("hrs: ", hrs);

  const mins = Math.floor(
    (distancePending % oneHoursInMillis) / oneMinInMillis
  );
//   console.log("mins: ", mins);

  const secs = Math.floor(
    (distancePending % oneMinInMillis) / oneSecoundInMillis
  );
//   console.log("secs: ", secs);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;

  const totalDistance = endDate - startDate;

  const percentageDistance = (distanceCovered / totalDistance) * 100;

  document.getElementById("progress-bar").style.width =
    percentageDistance + "%";

  if (distancePending < 0) {
    clearInterval(x);
    document.getElementByClassName("container").innerHtml = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
  }
}, 1000);
