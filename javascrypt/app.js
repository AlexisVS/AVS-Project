function initConsoleJs () {

        // Je cree un element "P" et je lui donne l'id paragraphe
        let newParagraphe = document.createElement('p');
        newParagraphe.id = 'paragraphe';

        // Je prend la valeur de mon input
        let code = document.getElementById('code').value;

        // Je cree une node de texte et je lui assigne mon element P
        let texteNode = document.createTextNode(code);
        newParagraphe.appendChild(texteNode);

        // Je target une DIV
        let section2 = document.getElementById('section2')

        //Je place mon paragraphe avant ma div Container2
        document.body.insertBefore(newParagraphe, section2);
    }

function initConsoleJs2 () {

        // Je cree un element "P" et je lui donne l'id paragraphe
        let newParagraphe = document.createElement('p');
        newParagraphe.id = 'paragraphe';

        // Je prend la valeur de mon input
        let code = document.getElementById('code').value;

        // Je cree une node de texte et je lui assigne mon element P
        let texteNode = document.createTextNode(code);
        newParagraphe.appendChild(texteNode);

        // Je target une DIV
        let section2 = document.getElementById('section2')

        //Je place mon paragraphe avant ma div Container2
        document.body.insertBefore(newParagraphe, section2);

        console.log(code);
}

function initConsoleJs3 () {

        // Je cree un element "P" et je lui donne l'id paragraphe
        let newParagraphe = document.createElement('p');
        newParagraphe.id = 'paragraphe';

        // Je prend la valeur de mon input
        let code = document.getElementById("code").value;

        // Je cree une node de texte et je lui assigne mon element P
        let texteNode = document.createTextNode(code);
        newParagraphe.appendChild(texteNode);

        // Je target une DIV
        let section2 = document.getElementById('section2')

        //Je place mon paragraphe avant ma div Container2
        document.body.insertBefore(newParagraphe, section2);

        console.log(code);
}