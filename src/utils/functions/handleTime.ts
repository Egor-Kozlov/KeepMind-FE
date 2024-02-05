/**
 * @param direction  - direction to add or subtract time
 * @param countOfMins  - count of minutes to add or subtract
 * @param getTime  - time in format 'hh:mm:ss'
 * @param setTime  - function to set time
 */

const handleTime = (
  direction: 'inc' | 'dec',
  countOfMins = 5,
  time: string,
  setTime: (time: string) => void,
) => {
  const [hours, mins, secs] = time.split(':').map(Number);
  let newTime = 0;
  if (direction === 'inc') {
    newTime = hours * 3600 + mins * 60 + secs + countOfMins * 60;
  } else {
    newTime = hours * 3600 + mins * 60 + secs - countOfMins * 60;
  }
  if (newTime < 0) {
    newTime = 0;
  }
  const newHours = Math.floor(newTime / 3600);
  const newMins = Math.floor((newTime - newHours * 3600) / 60);
  const newSecs = newTime - newHours * 3600 - newMins * 60;
  setTime(
    `${newHours.toString().padStart(2, '0')}:${newMins
      .toString()
      .padStart(2, '0')}:${newSecs.toString().padStart(2, '0')}`,
  );
};

export default handleTime;
