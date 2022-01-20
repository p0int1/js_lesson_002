let arr = [1, 12, 55, 2, 3, 4, 5, 6];
function Sort(mas) {
  for (let i = 0; i < mas.length - 1; i++) {
    for (let j = 0; j < mas.length - 1 - i; j++) {
      if (mas[j + 1] > mas[j]) {
        let tmp = mas[j + 1];
        mas[j + 1] = mas[j];
        mas[j] = tmp;
      }
    }
  }
  return mas;
}

for (const a of Sort(arr)) {
  console.log(a);
}

//console.log(Sort(arr));
