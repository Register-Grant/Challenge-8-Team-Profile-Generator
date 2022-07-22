// Manager panel with that sexy template literal
const managerPanel = function(manager) {
    return
    `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <h2 class="manager">Manager</h2>
            </div>
        </div>
        <div class="employee">
            <p>Name: ${Manager.name}</p>
            <p>Id: ${Manager.id}</p>
            <p>Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
            <p>Office Number: ${Manager.officeNumber}</p>
        </div>
    </div>`
};

// Engineer panel with that sexy template literal
const engineerPanel = function(engineer) {
    return
    `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
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

const internPanel = function(intern) {
    return
    `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
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

const generateHTML = function(data) {}

module.exports = generateHTML;