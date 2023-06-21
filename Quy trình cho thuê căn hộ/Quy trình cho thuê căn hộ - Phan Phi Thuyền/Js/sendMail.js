const nodemailer = require("nodemailer");
const ejs = require("ejs");
module.exports = class Email {
  constructor(user, data) {
    (this.to = "20522005@gm.uit.edu.vn"), (this.customerName = user);
    this.data = data;
    // send mail from
    this.from = "ppt27102002@gmail.com";
  }
  newTransporter() {
    return nodemailer.createTransport({
      service:"gmail",
        auth:{
        user:"ppt27102002@gmail.com",
        pass:"Ppt27102002ppt",
  },tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
},
});
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
  async sendResponseMail() {
    const html = `<h4>Dear, ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}</h4>
    <p>
      On behalf of my team, we’re all happy with you contact for infomation
      about Novaland Aparment for rent. We’re pleased to have collaborated with
      you all this time and hope our infomations were useful.
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
    await this.send(html, "NovaLand,thank you for your attention");
  }
  async sendProcuduresMail () {
    const html = `<h4>Dear, ${this.data.customerGender === 'male' ? 'Mr.': 'Mrs.'} ${this.customerName}</h4>
    <p>
      I am writting to inform you of some necessary procedures for renting an
      apartment in Novaland.
    </p>
    <p>You need:</p>
    <ol type="1">
      <li>Identitty card</li>
      <li>3 months rent deposit is:${new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(this.data.price * 3)}</li>
    </ol>
    <p>
      You can pay directly through the account number:XXXXXXX </p>
    <p> Or: Work directly in our office: XXXXXXX </p>
    </p>
    <p>If you have any questions, please contact to me as soon as possible.</p>
    <p>I look forward to hearing from you</p>
    <p>${this.customerName},</p>`;
    await this.send(html, "NovaLand, notice on apartment rental procedures")
  }
};
