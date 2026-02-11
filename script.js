
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
                name: "Backend (Fitagotchi)",
                description: "Created a gamified fitness tracker that rewards users for completing workouts, integrated with Apple Health data.",
                technologies: ["Python", "FastApi", "SQLite"],
                github: "https://github.com/rkcrayton/Fitagotchi_react.git",
                accomplishments: [
                    "Designed backend APIs with Flask",
                    "Used SQLite to store and track users' progress",
                    "Built Tamagotchi-style virtual pet that evolves based on user activity"
                ]
            },
            {
                name: "Kanye Qoutes App",
                description: "Created a Kanye Qoutes App",
                technologies: ["Python"],
                github: "https://github.com/rkcrayton/Kanye-quotes-app.git",
                accomplishments: [
                    "Designed api connections"
                ]
            }

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
                name: "Fitagochi Application",
                description: "Built Fitagochi Application reworked with React Native for cross platform",
                technologies: ["React", "JavaScript"],
                github: "https://github.com/rkcrayton/Fitagotchi_react.git",
                accomplishments: [
                    "Learned React through hands-on project development",
                    "Implemented state management for workout tracking",
                    "Implement Health data from user built in health kit"
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
    },
    "Kali": {
        title: "Kali",
        projects: [
            {
                name: "Kali",
                description: "Use Kali Linux for penetration testing",
                technologies: ["Kali"],
                accomplishments: [
                    "Hacked over 20 machines in HackTheBox",
                ]

            }
        ]
    },
    "C++": {
        title: "C++ Projects",
        projects: [
            {
                name: "Circular Dynamic Array",
                description: "This array used linked list to make an array that grew and shrunk in size. Ran in O(N) time.",
                technologies: ["C++"],
                accomplishments: [
                    ""
                ]
            },
            {
              name: "Lisp Interpreter",
              description: "Designed and implemented a C++ Lisp Interpreter with support for s-expressions, scoped evaluation, conditionals, lambdas, and user defined functions.",
              technologies: ["C++"],
              github: "https://github.com/rkcrayton/Lisp-Interpreter.git",
              accomplishments: [
                  "Core S-expression data structure (Value), constructors (cons, car, cdr), and type predicates (isNil, isNumber, etc.).",
                  "Extended constructors and accessors, including sexp(string), isString, and robust equality (eq).",
                  "Arithmetic, comparison, and logical functions (add, sub, lt, gte, not, etc.) with error handling.",
                  "Implemented the core eval function along with an environment for symbol lookup and assignment, enabling evaluation of atoms, special forms (quote, set, etc.), and function calls using built-in operations.",
                  "Added short-circuiting logic and conditionals—implementing and, or, if, and cond so only the necessary branches/arguments are evaluated (with and/or short-circuit behavior and cond selecting the first true clause).",
                  "User-defined functions with define, parameter binding, and local scope handling.",
                  "Added support for lambda functions, enabling anonymous, user-defined functions that can be created, passed as arguments, returned from other functions, and evaluated with their own local environments"
              ]
            }
        ]
    },
    "C": {
        title: "C Projects",
        projects: [
            {
                name: "",
                description: "",
                technologies: ["C"],
                accomplishments: [
                    ""
                ]
            }
        ]
    },
    "Java": {
        title: "Java Projects",
        projects: [
            {
                name: "",
                description: "",
                technologies: ["Java"],
                accomplishments: [
                    ""
                ]
            }
        ]
    },
    "Linux": {
        title: "Linux",
        projects: [
            {
                name: "Enterprise Systems Administration",
                description: "Managed and maintained Linux-based systems as part of IT engineering role at Phifer Incorporated.",
                technologies: ["Linux", "Bash", "Networking"],
                accomplishments: [
                    "Maintained security patching and OS updates for 1000+ workstations",
                    "Built Python monitoring scripts to collect system and network metrics",
                    "Configured and managed file servers including permissions and access protocols"
                ]
            }
        ]
    },
    "Flask": {
        title: "Flask Projects",
        projects: [
            {
                name: "",
                description: "",
                technologies: ["Flask"],
                accomplishments: [
                ]
            }
        ]
    },
    "Full Stack": {
        title: "Full Stack Projects",
        projects: [
            {
                name: "Fitagotchi",
                description: "Developed a React Native fitness app with a FastAPI backend and SQLite database leveraging gamification to promote workout consistency.",
                technologies: ["React Native", "FastAPI", "Python", "SQLite", "Swift"],
                github: "https://github.com/rkcrayton/Fitagotchi_react.git",
                accomplishments: [
                    "Built frontend with React Native for cross-platform support",
                    "Designed backend APIs with FastAPI",
                    "Used SQLite to store and track users' progress",
                    "Integrated with Apple Health data",
                    "Built Tamagotchi-style virtual pet that evolves based on user activity"
                ]
            }
        ]
    },
    "Pytorch": {
        title: "Pytorch Projects",
        projects: [
            {
                name: "Mnist Digit Classifier",
                description: "Implemented and trained a convolutional neural network in PyTorch, focusing on data preprocessing pipeline, model evaluation, and performance optimization",
                technologies: ["Pytorch"],
                accomplishments: [
                    ""
                ]
            }
        ]
    },
    "Ros2": {
        title: "Ros2 Projects",
        projects: [
            {
                name: "Automous tag collector bot",
                description: "I used Ros2 to program a bot through a maze to collect tags.",
                technologies: ["Ros2"],
                accomplishments: [
                    ""
                ]
            }
        ]
    },
    "Gaezbo": {
        title: "Gazebo Projects",
        projects: [
            {
                name: "Autonomous Tag Collector Bot",
                description: "Used ROS2 and Gazebo to simulate and program a bot to navigate through a maze and collect tags.",
                technologies: ["Gazebo", "ROS2"],
                accomplishments: [
                    "Programmed a bot to autonomously navigate through a maze",
                    "Simulated robot behavior in Gazebo environment",
                    "Collected tags using sensor-based navigation"
                ]
            }
        ]
    },
    "Unity": {
        title: "Unity Projects",
        projects: [
            {
                name: "Zombie Slayer",
                description: "Created a Unity based top-down shooter featuring wave-based zombie AI, combat mechanics, and survival gameplay.",
                technologies: ["Unity", "C#"],
                accomplishments: [
                    "Implemented wave-based zombie AI",
                    "Designed combat mechanics and survival gameplay",
                    "Built top-down shooter game from the ground up"
                ]
            }
        ]
    },
    "C#": {
        title: "C# Projects",
        projects: [
            {
                name: "Zombie Slayer",
                description: "Created a Unity based top-down shooter featuring wave-based zombie AI, combat mechanics, and survival gameplay.",
                technologies: ["C#", "Unity"],
                accomplishments: [
                    "Implemented wave-based zombie AI",
                    "Designed combat mechanics and survival gameplay",
                    "Built top-down shooter game from the ground up"
                ]
            }
        ]
    }
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