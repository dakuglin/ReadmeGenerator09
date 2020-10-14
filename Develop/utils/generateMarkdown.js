// function to generate markdown for README
function generateMarkdown(data) {

 return `# ${data.title} 
${licenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)
${data.license}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
  
## Installation 

${data.installation}

## Usage 

${data.usage}

## License

${data.license}

## Contrubuting

${data.contributions}

## Tests

${data.test}

## Questions

GitHub Username: ${data.username}
GitHub Profile: https://github.com/dakuglin

Please email me with additional questions at ${data.email}  

`; 
  
}


function licenseBadge(license) {  //function for markdown license badges 

  if(license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } 
  else if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "BSD 3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
 
}




module.exports = generateMarkdown ;







//do the questions 
//start generating the readme file
    //loop process
    //what item of readme am I doing first...next...what am I writing (subheading, link)
    //call that function and pass in the data that it needs, get back markdown code
    //add markdown code to the readme file

    //screen to gif instead of the video 


    
     