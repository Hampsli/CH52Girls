export function rubricExcellent(califi) {
  califi = Number(califi);
  if (califi >= 9) {
    return "Excellent";
  } else if (califi >= 5) {
    return "Pass";
  } else {
    return "Fail";
  }
}
