
// Function to handle skill tag click
function onSkillTagClick() {
    alert(`You clicked on the skill tag!`);
}


// Get the button element
const backToTopButton = document.getElementById('backToTop');

// Show button when user scrolls down 300px
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set name dynamically
var texttoType = "Raheem Crayton";
var index = 0;
var speed = 100; // typing speed in milliseconds

const nameElement = document.getElementById("name");

function typetext() {
    if (index < texttoType.length) {
        nameElement.textContent += texttoType.charAt(index);
        index++;
        setTimeout(typetext, speed);
    }else{
        setTimeout(function() {
            document.querySelector('.cursor').style.display = 'none';
        }, 1000);
    }
}

window.addEventListener('load', typetext);



const skillProjects = {
    "Python": {
        title: "Python Projects",
        projects: [
            {
                name: "Workout Tracker App (Fitagotchi)",
                description: "Created a gamified fitness tracker that rewards users for completing workouts, integrated with Apple Health data.",
                technologies: ["Python", "Flask", "SQLite"],
                github: "https://github.com/rkcrayton/Fitagotchi.git",
                accomplishments: [
                    "Designed backend APIs with Flask",
                    "Used SQLite to store and track users' progress",
                    "Built Tamagotchi-style virtual pet that evolves based on user activity"
                ]
            }
            // Add more Python projects here
        ]
    },
    "Swift": {
        title: "Swift Projects",
        projects: [
            {
                name: "Fitagotchi iOS App",
                description: "iOS frontend for workout tracking app",
                technologies: ["Swift", "iOS"],
                github: "https://github.com/rkcrayton/Fitagotchi.git",
                accomplishments: [
                    "Integrated with Apple Health data",
                    "Tested communication with backend using RESTful endpoints"
                ]
            }
        ]
    },
    "React": {
        title: "React Projects",
        projects: [
            {
                name: "Workout Logger Application",
                description: "Built a React-based workout logging system",
                technologies: ["React", "JavaScript"],
                accomplishments: [
                    "Learned React through hands-on project development",
                    "Implemented state management for workout tracking"
                ]
            }
        ]
    },

    "Git": {
        title: "Git",
        projects:[
                {
                name: "Version Control with Git",
                description: "Version control system used across all projects for code management and collaboration.",
                technologies: ["Git", "GitHub"],
                accomplishments: [
                    "Utilized Git for version control in all projects",
                    "Managed code repositories on GitHub"
                ]
            }
        ]
    }
    // Add more skills...
};

// Skill projects data (put the data structure from Step 1 here)

// Get modal elements
const modal = document.getElementById('skillModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// Get all skill tags
const skillTags = document.querySelectorAll('.skills-tag');

// Add click event to each skill tag
skillTags.forEach(tag => {
    tag.addEventListener('click', function() {
        const skillName = this.getAttribute('data-skill');
        showSkillModal(skillName);
    });
});

// Function to display modal with skill projects
function showSkillModal(skillName) {
    const skillData = skillProjects[skillName];
    
    if (!skillData) {
        // If no projects for this skill yet
        modalTitle.textContent = skillName;
        modalBody.innerHTML = '<p>Projects coming soon for this skill!</p>';
    } else {
        modalTitle.textContent = skillData.title;
        
        // Build HTML for projects
        let projectsHTML = '';
        skillData.projects.forEach(project => {
            projectsHTML += `
                <div class="project-card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    
                    <div class="tech-tags">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                    
                    <h4>Key Accomplishments:</h4>
                    <ul>
                        ${project.accomplishments.map(item => 
                            `<li>${item}</li>`
                        ).join('')}
                    </ul>
                    
                    ${project.github ? 
                        `<p><strong>GitHub:</strong> <a href="${project.github}" target="_blank">${project.github}</a></p>` 
                        : ''}
                </div>
            `;
        });
        
        modalBody.innerHTML = projectsHTML;
    }
    
    // Show the modal
    modal.style.display = 'block';
}

// Close modal when X is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});