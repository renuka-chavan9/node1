const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Village Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .header {
            background-color: #333;
            color: #fff;
            padding: 15px;
            text-align: center;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .dashboard-item {
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .dashboard-item h3 {
            margin-top: 0;
        }
        .dashboard-item p {
            margin-bottom: 0;
        }
        .footer {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>

<div class="header">
    <h1>Smart Village Dashboard</h1>
</div>

<div class="container">
    <div class="dashboard-item">
        <h3>Welcome to the Dashboard!</h3>
        <p>This dashboard provides access to various features of the Smart Village project.</p>
    </div>

    <div class="dashboard-item">
        <h3>Community Services Directory</h3>
        <p>Access information about local services such as healthcare, education, and agriculture.</p>
        <a href="services.php">Go to Services Directory</a>
    </div>

    <div class="dashboard-item">
        <h3>Infrastructure Monitoring</h3>
        <p>Report issues related to infrastructure such as roads, water supply, and electricity.</p>
        <a href="report_issue.php">Report Infrastructure Issue</a>
    </div>
</div>

<div class="footer">
    <p>&copy; 2024 Smart Village Project</p>
</div>

</body>
</html>
')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
