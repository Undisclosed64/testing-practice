
const analyzeArr = (arr) => {

    average = () =>{
        let total = 0;
        for(let i = 0;i<arr.length;i++){
          total = arr[i] + total;
        }
        const avg = Math.floor(total/arr.length);
        return avg;
      }

      min = () => {
        return Math.min.apply(null, arr);
      }

     max = () => {
        return Math.max.apply(null, arr);
     }

     return {
        average:average(),
        min:min(),
        max:max(),
        length:arr.length,
     }

}

module.exports = analyzeArr;

  
      