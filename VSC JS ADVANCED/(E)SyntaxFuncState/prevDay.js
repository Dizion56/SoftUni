function prevDay(year, month, day){
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd =  date.getDate();
    console.log(`${yy}-${mm}-${dd}`);
}
prevDay(2016, 9, 30);
prevDay(2015, 5, 10);