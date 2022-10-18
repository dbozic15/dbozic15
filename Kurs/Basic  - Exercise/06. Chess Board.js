function solve(n) {
    let code = `
<div class="chessboard"> 
  <div> 
    <span class="black"></span> 
    <span class="white"></span> 
    <span class="black"></span> 
  </div>`
    for (let i = 0; i < n; i++) {
        // i = code;
        console.log(code)
    }
    console.log(`</div>`)
}

solve(3)