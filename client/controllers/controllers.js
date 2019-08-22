export class HomeController{
  constructor(){

  }
}

export class PortfolioController{
  constructor(){
  }
  reverseText(){
        var myString = document.getElementById('myString').value;
        var arr = myString.split('');
            arr.reverse();
        var newString = arr.join('');
            document.getElementById('newString').innerHTML = newString;
  }
  encrypt(){
    var originalText = document.getElementById('originalText').value.toLowerCase();
    var arrEncrypt = originalText.split('');
    var arrLowAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var cypher = ["J", "O", "4", "E", "*", "#", ")", "K", "D", "A", "8", "0", "@", "&", "$", "B", "@", "P", "G", "W", "L", "M", "3", "V", "?", "%"];
    var length = arrEncrypt.length * arrLowAlph.length
    for(let i=0;i< length;i++){
      var y = 0;
     for(let x = 0;x < arrLowAlph.length;x++ ){
       // console.log(arrEncrypt[i])
       // console.log(arrLowAlph[x])
       if(arrEncrypt[i] == arrLowAlph[x]){
         var num = arrLowAlph.indexOf(arrLowAlph[x]);
         arrEncrypt[i] = cypher[num];
         console.log(arrEncrypt);
       }
      var endString = arrEncrypt.join('');
       document.getElementById('encrypted-text').innerHTML = endString;

     }
    }
  }
  decrypt(){
    var encryptedText = document.getElementById('originalText').value;
    var arrDecrypt = encryptedText.split('');
    var arrLowAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var cypher = ["J", "O", "4", "E", "*", "#", ")", "K", "D", "A", "8", "0", "@", "&", "$", "B", "@", "P", "G", "W", "L", "M", "3", "V", "?", "%"];
    var length = arrDecrypt.length * arrLowAlph.length;
    for(let i=0;i< length;i++){
      var y = 0;
     for(let x = 0;x < cypher.length;x++ ){
       // console.log(arrEncrypt[i])
       // console.log(arrLowAlph[x])
       if(arrDecrypt[i] == cypher[x]){
         var num = cypher.indexOf(cypher[x]);
         arrDecrypt[i] = arrLowAlph[num];
         console.log(arrDecrypt);
       }
      var endString = arrDecrypt.join('');
       document.getElementById('encrypted-text').innerHTML = endString;

     }
    }
  }

}

export class ExperienceController{
  constructor(){

  }
}

export class ContactController{
  constructor(ContactService){
    this.ContactService = ContactService;

  }
  sendContactEmail(){
    let contact = JSON.stringify(this.contact);
    //console.log(contact);
    this.ContactService.sendEmail(contact)
  }
}


export class NotFoundController{
  constructor(){

  }
}
