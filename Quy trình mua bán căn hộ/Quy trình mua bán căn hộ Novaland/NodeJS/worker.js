const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");
const sendMail = require("./sendEmail.js");
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

const client = new Client(config);
  client.subscribe("visit", async function ({ task, taskService }) {
    // Put your business logic
    const customerName = task.variables.get("name");
    const customerGender = task.variables.get("gender");
    const url = "https://www.novagroup.vn/";
    const data = {
      gender: customerGender,
      url,
    };
    try {
      const sendEmailToCustomer = new sendMail(customerName, data);
      await sendEmailToCustomer.visit();
      await taskService.complete(task);
    } catch (err) {
      console.log(err);
    }
  });
  client.subscribe("SendMail", async function ({ task, taskService }) {
    // Put your business logic
    const customerName = task.variables.get("name");
    const customerGender = task.variables.get("gender");
    const url = "https://www.novagroup.vn/";
    const data = {
      gender: customerGender,
      url,
    };
    try {
      const sendEmailToCustomer = new sendMail(customerName, data);
      await sendEmailToCustomer.sendResponseMail();
      await taskService.complete(task);
    } catch (err) {
      console.log(err);
    }
    // complete the task
  });
  const random = function (arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  };
  client.subscribe("SchelduleDateD", async function ({ task, taskService }) {
    // Put your business logic
    const customerName = task.variables.get("name");
    const customerGender = task.variables.get("gender");
    const url = "https://www.novagroup.vn/";
    const data = {
      gender: customerGender,
      url,
    };
    try {
      const sendEmailToCustomer = new sendMail(customerName, data);
      await sendEmailToCustomer.sendSchelduleDateD();
      await taskService.complete(task);
    } catch (err) {
      console.log(err);
    }
  });
  client.subscribe("SchelduleDateH", async function ({ task, taskService }) {
    // Put your business logic
    const customerName = task.variables.get("name");
    const customerGender = task.variables.get("gender");
    const url = "https://www.novagroup.vn/";
    const data = {
      gender: customerGender,
      url,
    };
    try {
      const sendEmailToCustomer = new sendMail(customerName, data);
      await sendEmailToCustomer.sendSchelduleDateH();
      await taskService.complete(task);
    } catch (err) {
      console.log(err);
    }
  });
/* const random = function (arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};
async function temp() {
  const data = await crawlData.crawler();
  console.log(random(data));
};
temp(); */