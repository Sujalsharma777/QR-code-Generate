let qrtext = document.querySelector('.text') 
let qrimg = document.querySelector('.qr-code-img')
let qrcode = document.querySelector('#qr-code')
function generateQR(){
    if (qrtext.value.length > 4) {
        qrimg.src =  'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + qrtext.value;
        
    } else { setTimeout(() => {
        qrcode.style. display = "block"
    }, 100);
        
    }
}