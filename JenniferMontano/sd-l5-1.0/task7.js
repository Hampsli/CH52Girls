export function rubricPerfect(califi) {
  califi = Number(califi);
  if (califi === 11) {
    return "Perfect";
  } else if (califi >= 9) {
    return "Excellent";
  } else if (califi >= 5) {
    return "Pass";
  } else {
    return "Fail";
  }
}
