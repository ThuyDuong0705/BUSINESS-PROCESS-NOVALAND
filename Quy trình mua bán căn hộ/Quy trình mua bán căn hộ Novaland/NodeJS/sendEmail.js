const nodemailer = require("nodemailer");
const ejs = require("ejs");
module.exports = class Email {
  constructor(user, data) {
    (this.to = "haminhthong0811@gmail.com"), (this.customerName = user);
    this.data = data;
    // send mail from
    this.from = "haminhthong123@gmail.com";
  }
  newTransporter() {
    return nodemailer.createTransport({
      service:"gmail",
        auth:{
        user:"haminhthong123@gmail.com",
        pass:"08112002",
  }});
  }
  async send(template, subject) {
    // Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html: template,
    };
    //3) create a tranport and send email
    await this.newTransporter().sendMail(mailOptions);
  }
  async visit() {
    const html = `<h4>Dear, ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}</h4>
    <p>   
      Novaland thank you for your trust and interest in our services.
    </p>
    <p>
      We are informed that you have signed up to participate in a visit to a project of your interest to us. 
      We would like to invite you to this tour on June 1, 2022 at 7:30 am. 
      Expect customers to arrive 30 minutes earlier at the owner's office to start the trip.
      Thanks ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}
    </p>
    <p>If you want more informations please visit our site</p>
    <a href="${this.data.url}"><button>Our site here</button></a>
    <p>Best of luck!</p>
    <p>${this.customerName},</p>`;
    await this.send(html, "Novaland,thank you for your attention");
  }
  async sendResponseMail() {
    const html = `<h4>Dear, ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}</h4>
    <p>
      On behalf of my team, we’re all happy with your contact for infomation
      about Novaland Aparment for rent. We’re pleased to collaborate with
      you all this time and hope our information was useful.
    </p>
    <p>
      I hope we’ll stay in touch and get to work together again in the future.
      Please don’t hesitate to provide feedback and suggestions to help us
      improve, even from afar.
    </p>
    <p>If you want more informations please visit our site</p>
    <a href="${this.data.url}"><button>Our site here</button></a>
    <p>Best of luck!</p>
    <p>${this.customerName},</p>`;
    await this.send(html, "Novaland,thank you for your attention");
  }
  async sendSchelduleDateD() {
    const html = `<h4>Dear, ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}</h4>
    <p>
      On behalf of my team, we’re all happy with you contact for infomation
      about Novaland Office for sale. We’re pleased to have collaborated with
      you all this time and hope our infomations were useful.
    </p>
    <p>
      As a follow-up on our conversation. I am looking forward to meeting you on 15/6/2022 at 07:30 am in my office. 
      I hope that you available at that time so we can sign the deposit agreement. 
      Thanks ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}
    </p>
    <p>If you want more informations please visit our site</p>
    <a href="${this.data.url}"><button>Our site here</button></a>
    <p>Best of luck!</p>
    <p>${this.customerName},</p>`;
    await this.send(html, "Novaland,thank you for your attention");
  }
  async sendSchelduleDateH() {
    const html = `<h4>Dear, ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}</h4>
    <p>
      On behalf of my team, we’re all happy with you contact for infomation
      about Novaland Office for sale. We’re pleased to have collaborated with
      you all this time and hope our infomations were useful.
    </p>
    <p>
      Following up on our conversation. I am looking forward to meeting you on 30/6/2022 at 09:00 am at my office. 
      I hope that you available at that time so we can handover the apartment and also the house ownership certificate. 
      Thanks ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}
    </p>
    <p>If you want more informations please visit our site</p>
    <a href="${this.data.url}"><button>Our site here</button></a>
    <p>Best of luck!</p>
    <p>${this.customerName},</p>`;
    await this.send(html, "Novaland,thank you for your attention");
  }
};

