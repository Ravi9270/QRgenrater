const qrinput = document.querySelector("#qr-input");
const qrimage = document.querySelector("#qr-image");
const qrbutton = document.querySelector("#qr-button");


console.log(qrinput,qrimage,qrbutton);

qrbutton.addEventListener('click', () => {
    const inputvalue = qrinput.value;
    console.log(inputvalue);

    if( !inputvalue){
        alert("please enter your text");
        return;
    }
    else{
        qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inputvalue}`;
    
        qrimage.alt = `QR code for ${inputvalue}`;
    }
})