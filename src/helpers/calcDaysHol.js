/**
 *
 * @param {holStart, holEnd, workDays} param0
 */

const calcDaysHol = (holStart, holEnd, workDays) => {
  const totalDays = (holEnd - holStart) / 1000 / 60 / 60 / 24;
  let firstDay = holStart.getDay();
  const holDays = [];

  for (let i = 0; i < totalDays; i++) {
    holDays[i] = firstDay;
    firstDay = firstDay + 1;
    if (firstDay === 7) {
      firstDay = 0;
    }
  }

  const calculatedDays = compareDays(workDays, holDays);

  return calculatedDays;
};

function compareDays(workDays, holDays) {
  let finalArray = [];
  workDays.forEach(e1 =>
    holDays.forEach(e2 => {
      if (e1 === e2) {
        finalArray.push(e1);
      }
    })
  );

  return finalArray.length;
}

export default calcDaysHol;
