const generatePage = (userName, githubName) => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protfolio Demo</title>
</head>
<body>
    <H1>${userName}<H1>
    <H2><a href='https://github.com/${githubName}'>GitHub</a></H2>
</body>
</html>
    `};

module.exports = generatePage;