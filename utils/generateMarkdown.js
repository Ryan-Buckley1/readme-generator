// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //   return console.log(license);
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Artistic") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else if (license === "Do What The F*ck You Want To Public License") {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
    return licenseLink;
  } else if (license === "Artistic") {
    licenseLink = "https://opensource.org/licenses/Artistic-2.0";
    return licenseLink;
  } else if (license === "The Unlicense") {
    licenseLink = "http://unlicense.org/";
    return licenseLink;
  } else if (license === "Do What The F*ck You Want To Public License") {
    licenseLink = "http://www.wtfpl.net/about/";
    return licenseLink;
  } else {
    licenseLink = "";
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `
## License


This project used ${license} license

${renderLicenseLink(license)}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installInst}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  ### GitHub:
  https://github.com/${data.github}
  ### Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
