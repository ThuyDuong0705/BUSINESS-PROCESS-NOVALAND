const {
  Client,
  logger,
  Variables,
} = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);
// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("SaveData", async function ({ task, taskService }) {
  const researchField = task.variables.get("researchField");
  const jobField = task.variables.get("jobField");
  const locationField = task.variables.get("locationField");
  const goalField = task.variables.get("goalField");
  const planField = task.variables.get("planField");
  const priceField = task.variables.get("priceField");
  const moreField = task.variables.get("moreField");
  const ideaField = task.variables.get("ideaField");
  let text = `Nghiên cứu đánh giá khả năng phát triển dự án mới: ${researchField}
    Các công việc hỗ trợ: ${jobField}
    Địa điểm: ${locationField}
    Mục tiêu nghiên cứu: ${goalField}
    Nội dung kế hoạch và tiến độ thực hiện: ${planField}
    Chi phí ước tính: ${priceField}
    Ghi chú: ${moreField}
    Ý kiến của lãnh đạo: ${ideaField}
    `;
    
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nghiencuuthitruong'
  });
  connection.connect();
  let sql = `INSERT INTO thitruong(research, job, location, goal, plan, price, note, idea)VALUES('${researchField}','${jobField}','${locationField}',' ${goalField}','${planField}',' ${priceField}',' ${moreField}','${ideaField}')`;
  connection.query(sql, function (error, results, fields) { });
  connection.end();
  const processVariables = new Variables();
  await taskService.complete(task, processVariables);
});
