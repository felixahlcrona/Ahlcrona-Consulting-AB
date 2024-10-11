import React from "react";
import "./Skills.css";

const SkillsBanner = () => {
  const skills = [
    ".NET",
    "Azure",
    "SQL",
    "React",
    "Backend",
    "Frontend",
    "Teamlead",
    "Scrum master",
    "Azure Application Insights",
    "Azure App Service",
    "Azure ARM templates",
    "Azure B2C",
    "Azure Bicep",
    "Azure Cosmos",
    "Azure DevOps",
    "Azure Functions",
    "Azure Logic Apps",
    "Azure Servicebus",
    "Azure SignalR",
    "Azure SQL",
    "Azure Storage",
    "CI/CD",
    "CMS",
    "Episerver",
    "Event driven architecture",
    "Fitbit/Garmin integrations",
    "Identity Providers",
    "Machine learning",
    "Microservices",
    "Microsoft Graph API",
    "ML.NET",
    "MVC",
    "On-prem",
    "Power BI reports",
    "SCSS",
    "Scrum/Agile",
    "Serverless",
    "SSRS reports",
    "TypeScript",
    "YAML",
    "Azure DevOps",
    "Azure storage explorer",
    "GIT",
    "Github",
    "Google Analytics",
    "Grafana",
    "IIS",
    "Jira",
    "Jmeter",
    "LeanSentry",
    "OpenAPI",
    "Octopus Deploy",
    "Postman",
    "Power BI",
    "SQL Server",
    "SQL (SSRS)",
    "Twilio Sendgrid",
    "Ngrok",
  ];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledSkillsList = shuffle(skills);

  return (
    <div>
      <div className="experienceDiv">
        <p className="experienceTitle">Experience in</p>
      </div>
      <div className="skill-container">
        <div>
          {shuffledSkillsList.map((skill, index) => {
            // Generate a random vertical position
            const randomVerticalPos = Math.random() * 150;
            return (
              <a href={`https://www.google.com/search?q=${encodeURIComponent(skill)}`} target="_blank" rel="noopener noreferrer">
                <div
                  key={skill.index}
                  className="skill"
                  style={{
                    animationDelay: `${index * 1.7}s`,
                    top: `${randomVerticalPos}px`,
                  }}
                >
                  <span className="tag is-warning is-medium" id="skillBanner">
                    {skill}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsBanner;
