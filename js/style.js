let totalPrice = 0;
function kitchencard(target) {
    const selectedCard = document.getElementById('display-center');
    const productName = target.childNodes[5].innerText;
    const count = selectedCard.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count+1}.  ${productName}`;
    selectedCard.appendChild(p);
    const value = target.childNodes[7].innerText;
    totalPrice = parseInt(totalPrice) + parseInt(value);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}


document.getElementById('apply-button').addEventListener('click', function () {
    const discountCoupon = document.getElementById("discount-coupon");
    const foundCoupon = discountCoupon.value;

    const discountAmount = document.getElementById('discount-amount');
    const discountAmountValue = discountAmount.innerText;

    const totalPayable = document.getElementById('total-payable');
    let totalPayableAmount = totalPayable.innerText;

    if (totalPrice > 200)  {
        const applyButton = document.getElementById('apply-button')

        applyButton.disabled = true;
        
    }
    else {
        applyButton.disabled = false;
        
    }


    const coupon = "SELL20";

    if (foundCoupon === coupon) {

        const discountValue = 20 / 100;
        const discountedAmount = totalPrice * discountValue;
        discountAmount.innerText = discountedAmount.toFixed(2);
        totalPayableAmount = totalPrice - discountedAmount;
        totalPayable.innerText = totalPayableAmount.toFixed(2);
        
    }
    else {
        alert('please use proper discount coupon');
    }
})


document.getElementById('go-home').addEventListener('click', function () {
    const couponDiscount = document.getElementById('discount-coupon');
    couponDiscount.value = '';

    const displayCenter = document.getElementById('display-center');
    displayCenter.innerText = '';

    const totalPriceValue = document.getElementById('total-price');
    totalPriceValue.innerText = '';
    
    
    const amountOfDiscount = document.getElementById('discount-amount');
    amountOfDiscount.innerText = '0';

    const payableTotal = document.getElementById('total-payable');
    payableTotal.innerText = '0';
})

