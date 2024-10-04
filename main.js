function checkKhodam() {
    const name = document.getElementById('nameinput').value.trim();
    const resultDiv = document.getElementById('result');

    if (name === "") {
        resultDiv.innerHTML = "<p style='color:red;'>Nama tidak boleh kosong!</p>";
        return;
    }

    const khodamNames = [
        "tuyul mulet",
        "banteng merah",
        "mas mas jawir",
        "asep kulkas",
        "kak gem", 
        "roger sumatera",
        "laba laba sunda",
        "mas faiz",
        "marsha adidas",
        "kadal mewing",
        "bidadari tanpa sayap",
        "nyi roro kidul",
        "tuyul mohak",
        "sinder bolong",
        "hiled bajra",
        "oray belang",
        "sendal butut",
        "mas tomi",
        "kutu buek",
        "pak vinsent",
        "kucing oyen",
        "tukik oli samping",
        "raja iblis"
        
    ];
    const khodamPresent = Math.random() > 0.5;

    if (khodamPresent) {
        const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
        resultDiv.innerHTML = `<p style='color:green;'>${name}, anda memiliki ${khodamName} yang melindungi anda!</p>`;
    } else {
        resultDiv.innerHTML = `<p style='color:red;'>${name}, anda tidak memiliki khodam</p>`;
    }
}