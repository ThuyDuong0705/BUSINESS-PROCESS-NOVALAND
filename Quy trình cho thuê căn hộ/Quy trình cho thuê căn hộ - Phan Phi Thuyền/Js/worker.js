const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");
const sendMail = require("./sendMail");
const crawlData = require("./crawlData");
// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

  client.subscribe("SendMail", async function ({ task, taskService }) {
    // Put your business logic
    const customerName = task.variables.get("name");
    const customerGender = task.variables.get("gender");
    const url =  "https://www.novagroup.vn/";
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

  client.subscribe("SendProcuduresMail", async function ({ task, taskService }) {
    const customerName = task.variables.get("name");
    const customerGender = task.variables.get("gender");
    const price = task.variables.get("price");
    const data = {
      gender: customerGender,
      price,
    };
    try {
      const sendEmailToCustomer = new sendMail(customerName, data);
      await sendEmailToCustomer.sendProcuduresMail();
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
