export function rubricPassFail(califi) {
  califi = Number(califi);
  return califi >= 5 ? "Pass" : "Fail";
}
