//Sets
function stockPairs(stocksProfit, target) {
    let seen = new Set();
    //set for unique values
    let count = 0;
    //count unique pairs
    
    for (let profit of stocksProfit) {
        /*  profit = individual item in array

            of stocksProfit specifies loop will iterate 
            over each element in this array
        */
        let remainder = target - profit;
        
        if (seen.has(remainder) && !seen.has(profit)) {
            count ++;
            seen.add(remainder);
            seen.add(profit);
        } else {
            seen.add(profit);
        }
    }   
    return count;
 
}