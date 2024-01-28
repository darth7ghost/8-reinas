contador = 1;
const formatBoard = board => {
    let result = [];
    var campo = document.getElementById('tablero');
    campo.innerHTML += '<h3>Solución ' + contador + ':</h3>';
    for(let col = 0; col < board.length; col++){
        let newRow = new Array(board.length).fill(' ');
        newRow[board[col]] = '♕';
        result.push(newRow.join(''));
    }

    // crear tabla y mostrar resultados
    var chessboard = document.getElementById('tablero');
    for (var i = 0; i < 8; i++) {
        var resultRow = result[i];
        var resultCell = resultRow.split("");
        for (var j = 0; j < 8; j++) {
            var chessSquare = document.createElement('div');
            chessSquare.className = 'chess-square';
            if ((i + j) % 2 == 0) {
                chessSquare.style.backgroundColor = '#00A8CC';
            }
            chessSquare.append(resultCell[j]);
            chessboard.appendChild(chessSquare);
        }
    }
    campo.innerHTML += '&nbsp;&nbsp;';

    contador = contador+1;
    return result;
}

function solveNQueens(n){
    //resultado global
    const result = [];

    const dfs = (i, n, slate) => {
        // caso backtracking
        let lastQ = i - 1;

        for(let prevQ = 0; prevQ < lastQ; prevQ++){
            // conflicto en columnas
            if(slate[prevQ] === slate[lastQ]) return;

            // conflicto en diagonal
            let rowDiff = Math.abs(prevQ - lastQ);
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ]);

            if(rowDiff === colDiff) return;
        }

        // caso base
        if(i === n){
            result.push(slate.slice());
            return;
        }
        
        // caso de busqueda por profundidad recursivo
        for(let col = 0; col < n; col++){
            slate.push(col);
            dfs(i + 1, n, slate);
            slate.pop();
        }
    }

    dfs(0, n, []);
    return result.map(board => formatBoard(board));
};

solveNQueens(8);