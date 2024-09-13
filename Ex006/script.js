function separarLetras() {

    const word = document.getElementById("wordInput").value;

    const output = document.gentElementId("output");

    output.innerHTML = '';

    for (let letter of word) {
        const letterDiv = document.createElement('div');
        letterDiv.textContent = letter;

        output.appendchild('letterDiv');


        document.gentElementById('separarButton').addEventListener('click', separarLetras);




    }



}
