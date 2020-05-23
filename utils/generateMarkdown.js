function generateMarkdown(data) {
  return `
  # ${data.title}
  [!GitHub License](license URL)
  
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
  
  ${data.contributors}
  
  ## Tests
  
  To run tests, run the following command:
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions about theis project, please contact ${data.author} at ${data.email}.
  
`;
}

module.exports = generateMarkdown;
