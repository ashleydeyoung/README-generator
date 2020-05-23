function generateMarkdown(data) {
  return `
  ## ${data.title}
  [![GitHub License](https://img.shields.io/badge/license-${data.badge}-blueviolet.svg)](${data.url})
  
  ## Description
  
  ${data.description}
  
  ## Table Of Contents
  
  *[Installation](#installation)
  
  *[Usage](#usage)
  
  *[License](#license)
  
  *[Contributing](#contributing)
  
  *[Tests](#tests)
  
  *[Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following commad:
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This project is licensed under the ${data.license} License.
  
  ## Contributing
  
  ${data.author}
  
  ## Tests
  
  To run tests, run the following command:
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions about this project, please contact ${data.author} at ${data.email}.
  
`;
}

module.exports = generateMarkdown;
