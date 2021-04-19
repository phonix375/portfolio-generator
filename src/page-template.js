module.exports = templateData => {
    //console.log(templateData);
    const {projects, about, ...header} = templateData
    console.log('this is projects:',projects,'this is about:',about,'this is header:',header);
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
    <H1>${templateData.name}<H1>
    <H2><a href='https://github.com/${templateData.github}'>GitHub</a></H2>
</body>
</html>
    `;
};

