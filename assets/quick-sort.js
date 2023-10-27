async function quickSort() {
    continueSorting = true;
    await quickSortRecursive(0, size - 1);
    setSortedColors(0, size - 1);
}

async function quickSortRecursive(low, high) {
    if (low < high) {
        if (!continueSorting) return;

        var pivotIndex = await partition(low, high);

        if (!continueSorting) return;

        await quickSortRecursive(low, pivotIndex - 1);
        await quickSortRecursive(pivotIndex + 1, high);
    }
}

async function partition(low, high) {
    if (!continueSorting) return;

    var pivot = arr[high];
    setColor(high, COMPARE);
    await sleep(delay);

    var i = low - 1;
    for (var j = low; j < high; j++) {
        if (!continueSorting) return;

        setColor(j, COMPARE);
        await sleep(delay);

        if (arr[j] < pivot) {
            i++;
            await swap(i, j);
        }

        setColor(j, UNSORTED);
    }

    await swap(i + 1, high);

    setSortedColors(low, high);

    return i + 1;
}

async function swap(i, j) {
    if (!continueSorting) return;

    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    await sleep(delay);
    setColor(i, UNSORTED);
    setColor(j, UNSORTED);
}

async function setSortedColors(start, end) {
    for (var i = start; i <= end; i++) {
        if (!continueSorting) return;
        setColor(i, SORTED);
        await sleep(delay);
    }
}

