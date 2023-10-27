async function quickSort() {
    await quickSortRecursive(0, size - 1);
    setSortedColors(0, size - 1);
}

async function quickSortRecursive(low, high) {
    if (low < high) {
        var pivotIndex = await partition(low, high);

        await quickSortRecursive(low, pivotIndex - 1);
        await quickSortRecursive(pivotIndex + 1, high);
    }
}

async function partition(low, high) {
    var pivot = arr[high];
    setColor(high, COMPARE);
    await sleep(delay);

    var i = low - 1;
    for (var j = low; j < high; j++) {
        setColor(j, COMPARE);
        await sleep(delay);

        if (arr[j] < pivot) {
            i++;
            await swap(i, j);
        }

        setColor(j, UNSORTED);
    }

    await swap(i + 1, high);

    setColor(i + 1, SORTED);

    return i + 1;
}

async function swap(i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    await sleep(delay);
    setColor(i, UNSORTED);
    setColor(j, UNSORTED);
}

async function setSortedColors(start, end) {
    for (var i = start; i <= end; i++) {
        setColor(i, SORTED);
        await sleep(delay);
    }
}
