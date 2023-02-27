//Second, we can’t import conditionally or at run-time:

let obj= await import('./script3.js')
console.log(obj.default())

//Dynamic imports work in regular scripts, they don’t require script type="module"