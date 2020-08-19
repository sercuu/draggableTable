const setArrayPosition = (arr, x, y) => {
    var swap = arr[y];
    arr[y] = arr[x];
    arr[x] = swap;

    return arr;
};
export default setArrayPosition;
