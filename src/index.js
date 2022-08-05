module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    for (let i = 1; i < matrix.length; i = i + 2) {
        matrix[i].reverse();
    }
    return [].concat(...matrix);
};
