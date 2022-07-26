// Manager panel with that sexy template literal
const managersPanel = function (mintedManager) {
    return `
    <div class="container mb-3 card-custom shadow-lg border-primary rounded">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <h2 class="manager">Manager</h2>
            </div>
        </div>
        <div class="employee">
            <p>Name: ${mintedManager.name}</p>
            <p>Id: ${mintedManager.id}</p>
            <p>Email: <a href="mailto:${mintedManager.email}">${mintedManager.email}</a></p>
            <p>Office Number: ${mintedManager.officeNumber}</p>
        </div>
    </div>`
};

// Engineer panel with that sexy template literal
const engineersPanel = function (Engineer) {
    return `
    <div class="container mb-3 card-custom shadow-lg border-primary rounded">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <h2 class="engineer">Engineer</h2>
            </div>
        </div>
        <div class="employee">
            <p>Name: ${Engineer.name}</p>
            <p>Id: ${Engineer.id}</p>
            <p>Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
            <p>Role (in case you couldn't read the heading): ${Engineer.role}</p>
            <p>GitHub: ${Engineer.gitHub}</p>
        </div>
    </div>`
};

const internsPanel = function (Intern) {
    return `
    <div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="manager">Intern</h2>
        </div>
    </div>
    <div class="employee">
        <p>Name: ${Intern.name}</p>
        <p>Id: ${Intern.id}</p>
        <p>Email: <a href="mailto:${Intern.email}">${Intern.email}</a></p>
        <p>Role (because still no read good): ${Intern.role}</p>
        <p>Alma Mater: ${Intern.school}</p>
    </div>
</div>`
};

//CHANGE THIS GRANT
const generateHTML = function(data) {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // Calling managersCard
        if (role === 'Manager') {
            const managerPanel = managersPanel(employee);
            pageArray.push(managerPanel);
        }

        // Calling engineersCard
        if (role === 'Engineer') {
            const engineerPanel = engineersPanel(employee);
            pageArray.push(engineerPanel);
        }

        // Calling internsCard 
        if (role === 'Intern') {
            const internPanel = internsPanel(employee);
            pageArray.push(internPanel);
        }

    }
    const employeePanels = pageArray.join('')
    const generateTeam = generateTeamPage(employeePanels);
    return generateTeam;
};

// Template literal for HTML boiler plate and links/scripts
const generateTeamPage = function(employeePanels) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${employeePanels}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>`
};

module.exports = generateHTML;