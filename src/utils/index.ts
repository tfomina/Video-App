export const msToTime = (timestamp: number) => {
  const milliseconds = timestamp % 1000;
  const seconds = Math.floor((timestamp / 1000) % 60);
  const minutes = Math.floor((timestamp / (1000 * 60)) % 60);

  const resultMilliseconds = `${
    milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : ""
  }${milliseconds}`;
  const resultSeconds = withZero(seconds);
  const resultMinutes = withZero(minutes);

  return `${resultMinutes}:${resultSeconds}:${resultMilliseconds}`;
};

const withZero = (v: number) => (v < 10 ? "0" + v : v);
