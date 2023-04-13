let btncopy = document.querySelector(".btncopy")
let coupon = document.querySelector(".coupon")

// btncopy.addEventListener("click",(e)=>{
//     coupon.select()
//     coupon.setSelectionRange(0,99999999)
//     navigator.clipboard.writeText(coupon.value)
//     btncopy.textContent="Copy Suscess"
//     setTimeout(()=>{
//         btncopy.textContent="Copy"
//     },3000)
// })

//Dynamic CODE
btncopy.addEventListener("click",(e)=>{
    let txtcopy = document.getElementById('txtcopy');
    txtcopy.setSelectionRange(0,txtcopy.value.lastIndexOf("")+1);
    navigator.clipboard.writeText(coupon.value);
    btncopy.textContent="Copy Suscess";
    setTimeout(()=>{
        btncopy.textContent="Copy";
    },3000)
})