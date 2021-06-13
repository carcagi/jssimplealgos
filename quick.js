const quicksort = arr =>
  arr.length <= 1
    ? arr
    : [
        ...quicksort(arr.slice(1).filter((el) => el < arr[0])),
        arr[0],
        ...quicksort(arr.slice(1).filter((el) => el >= arr[0])),
      ];

      let arr = [64,25,22,22,11,57,21,78,1,87,73];
      console.log(arr);
      console.log(quicksort(arr));