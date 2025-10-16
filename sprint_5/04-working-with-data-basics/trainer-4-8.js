function getExcelData() {
  const data = [
    [12, 23, 34, 45],
    [56, 67, 78, 89],
    [90, 101, 112, 123],
    [134, 145, 156, 167],
    [178, 189, 190, 200],
  ];

  return data;
}

function addSumRow(data) {
  let sum = [];
  data.forEach((row) => {
    row.forEach((col, index) => {
      if (sum.length <= index) {
        sum.push(0);
      }
      sum[index] = sum[index] + col;
    });
  });
  data.push(sum);
}

let data = getExcelData();
addSumRow(data);

console.log(data);

let percentData = data
  .map((row) => {
    let yearSum = 0;
    row.forEach((value) => (yearSum += value));
    return [...row, yearSum];
  })
  .map((row) => {
    let yearSum = row[row.length - 1];
    if (yearSum === 0) {
      return [];
    }
    return row.map((value) => (value / yearSum) * 100);
  });

console.log(percentData);
