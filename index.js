function superbowlWin(array) {
  const winningYear = array.find(function (item) {
    return item.result === "W";
  });

  if (winningYear) {
    return winningYear.year;
  } else {
    return undefined;
  }
}
