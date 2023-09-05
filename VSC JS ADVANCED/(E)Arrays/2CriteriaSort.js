function sortByTwoCriteria(arr){
    const sorted = arr.sort((a,b) => {
        const firstCriteria = a.length - b.length;
        const secondCriteria = a.localeCompare(b);
        return firstCriteria || secondCriteria;
    });

    console.log(sorted.join('\n'));
}
sortByTwoCriteria(['alpha',
'beta','gamma']);