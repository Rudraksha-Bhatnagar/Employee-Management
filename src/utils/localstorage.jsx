

const employees = [
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Prepare Report",
          "description": "Prepare the monthly financial report.",
          "date": "2025-02-21",
          "category": "Finance",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client Meeting",
          "description": "Discuss project updates with the client.",
          "date": "2025-02-22",
          "category": "Meetings",
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code Review",
          "description": "Review the latest code changes.",
          "date": "2025-02-23",
          "category": "Development",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskCount": {
        "active": 2,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstName": "Vihaan",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Fix Bug #123",
          "description": "Resolve the UI bug in the dashboard.",
          "date": "2025-02-20",
          "category": "Development",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Write Documentation",
          "description": "Update API documentation.",
          "date": "2025-02-25",
          "category": "Writing",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskCount": {
        "active": 1,
        "new_task": 0,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstName": "Kabir",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Team Presentation",
          "description": "Prepare slides for team presentation.",
          "date": "2025-02-22",
          "category": "Meetings",
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Security Audit",
          "description": "Conduct security checks on the system.",
          "date": "2025-02-24",
          "category": "Security",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Database Optimization",
          "description": "Optimize database queries for faster response time.",
          "date": "2025-02-26",
          "category": "Database",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskCount": {
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 4,
      "firstName": "Ishaan",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Deploy Application",
          "description": "Deploy the latest version to production.",
          "date": "2025-02-21",
          "category": "Deployment",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Marketing Strategy",
          "description": "Plan next quarter's marketing campaigns.",
          "date": "2025-02-28",
          "category": "Marketing",
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "User Feedback Analysis",
          "description": "Analyze customer feedback from last quarter.",
          "date": "2025-02-23",
          "category": "Customer Relations",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCount": {
        "active": 1,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 5,
      "firstName": "Aryan",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Software Testing",
          "description": "Conduct testing for the new feature release.",
          "date": "2025-02-22",
          "category": "Testing",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Client Onboarding",
          "description": "Help new clients set up their accounts.",
          "date": "2025-02-24",
          "category": "Customer Support",
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "SEO Optimization",
          "description": "Improve website SEO rankings.",
          "date": "2025-02-25",
          "category": "Marketing",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskCount": {
        "active": 0,
        "new_task": 1,
        "completed": 1,
        "failed": 1
      }
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"));
    const admin=JSON.parse(localStorage.getItem('admin'));

    return {employees,admin}
    
}
