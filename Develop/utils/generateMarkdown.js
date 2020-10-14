// function to generate markdown for README
function generateMarkdown(data) {

  return [`# ${data.title}` + "\n" + `# Description` + "\n" + `# Table Of Contents`
  + "\n" + `# Installation` + "\n" + `# Usage` + "\n" + `# License` + "\n" + `# Contrubuting` + "\n" + `# Tests` + "\n" + `# Questions`];
   
}

module.exports = generateMarkdown ;




// ask all the questions 
//start generating the readme file
    //loop process
    //what item of readme am I doing first...next...what am I writing (subheading, link)
    //call that function and pass in the data that it needs, get back markdown code
    //add markdown code to the readme file

    //screen to gif instead of the video 