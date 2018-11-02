export class HomeController{
  constructor(){

  }
}

export class AboutController{
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
