const sudokuChecker = (arr) => {
    

    const rowChecker = (arr) => {

        const rowSet = new Set

        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                rowSet.add(arr[i][j])
            }

            if(rowSet.size !== 9){
                return false
            }

            rowSet.size = 0
        }

        return true
    }


    colChecker = (arr) => {
        const colSet = new Set

        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                colSet.add(arr[j][i])
            }

            if(colSet.size !== 9){
                return false
            }

            colSet.size = 0
        }

        return true
    }

    gridChecker = (arr) => {
        const gridSet = new Set

        


    }

    // let row = rowChecker(arr)
    // let col = colChecker(arr)


    // if(row && col){
    //     console.log("validated")
    // }

    gridChecker(arr)


}


const sudoku_data = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
  ];


  sudokuChecker(sudoku_data)