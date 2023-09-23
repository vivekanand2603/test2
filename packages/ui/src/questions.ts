export const questions = {
    'q0': {
        'title': 'Fill this & get your budget "Now"',
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "Name"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Email"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Phone"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Company"
            }
        ]
    },
    'q1': {
        'title': 'Are you a?',
        "background": "#020202",
        "Text": "#FFFFFF",
        'options': [
            {
                "answer": "a",
                "label": "Small Business",
                "follow-up": "sb1"
            },
            {
                "answer": "b",
                "label": "Professional",
                "follow-up": "p1"
            },
            {
                "answer": "c",
                "label": "Creator",
                "follow-up": "c1"
            },
            {
                "answer": "d",
                "label": "Startup",
                "follow-up": "s1"
            }
        ]
    },
    'sb1': {
        'title': 'Category',
        "background": "#936BFF",
        "Text": "#020202",
        'options': [
            {
                "answer": "a",
                "label": "B2B",
                "follow-up": "sb2"
            },
            {
                "answer": "b",
                "label": "B2C",
                "follow-up": "sb2"
            },
            {
                "answer": "c",
                "label": "D2C",
                "follow-up": "sb2"
            }
        ]
    },
    'sb2': {
        'title': 'Current Stage',
        "background": "#E9D5FF",
        "Text": "#020202",
        'options': [
            {
                "answer": "a",
                "label": "Just started (Pre-Revenue)",
                "follow-up": "sb3"
            },
            {
                "answer": "b",
                "label": "Revenue but not profitable",
                "follow-up": "sb3"
            },
            {
                "answer": "c",
                "label": "Revenue & profitable",
                "follow-up": "sb3"
            }
        ]
    },
    'sb3': {
        'title': 'Do you need Branding?',
        "background": "#020202",
        "Text": "#FFFFFF",
        'options': [
            {
                "answer": "a",
                "label": "Yes",
                "follow-up": "sb4"
            },
            {
                "answer": "b",
                "label": "No",
                "follow-up": "sb4"
            }
        ]
    },
    'sb4': {
        'title': 'Social media presence',
        "background": "#936BFF",
        "Text": "#020202",
        'options': [
            {
                "answer": "a",
                "label": "Yes",
                "follow-up": "sb5"
            },
            {
                "answer": "b",
                "label": "No",
                "follow-up": "sb5"
            }
        ]
    },
    'sb5': {
        'title': 'Website',
        "background": "#E9D5FF",
        "Text": "#020202",
        'options': [
            {
                "answer": "a",
                "label": "Yes",
                "follow-up": "sb6"
            },
            {
                "answer": "b",
                "label": "No",
                "follow-up": "sb6"
            }
        ]
    },
    'sb6': {
        'title': 'Reach',
        "background": "#020202",
        "Text": "#FFFFFF",
        'options': [
            {
                "answer": "a",
                "label": "<10k",
                "follow-up": "sb7"
            },
            {
                "answer": "b",
                "label": "<500k",
                "follow-up": "sb7"
            },
            {
                "answer": "c",
                "label": ">500k",
                "follow-up": "sb7"
            }
        ]
    },
    'sb7': {
        'title': 'Do you want social media management?',
        "background": "#936BFF",
        "Text": "#020202",
        'options': [
            {
                "answer": "a",
                "label": "Yes",
                "follow-up": "sb8"
            },
            {
                "answer": "b",
                "label": "No",
                "follow-up": "sb10"
            }
        ]
    },
    'sb8': {
        'title': 'Target Audience & Market',
        "background": "#E9D5FF",
        "Text": "#020202",
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "Target Audience",
                "follow-up": "sb9"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Industry",
                "follow-up": "sb9"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Geographical region",
                "follow-up": "sb9"
            }
        ]
    },
    'sb9': {
        'title': 'Have you done Marketing yet?',
        "background": "#020202",
        "Text": "#FFFFFF",
        'options': [
            {
                "answer": "a",
                "label": "Yes",
                "follow-up": "sb10"
            },
            {
                "answer": "b",
                "label": "No",
                "follow-up": "sb10"
            }
        ]
    },
    'sb10': {
        'title': 'Current Marketing efforts',
        "background": "#936BFF",
        "Text": "#020202",
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "Channels - Social media / Ads",
                "follow-up": "sb11"
            },
            {
                "type": "text",
                "answer": "",
                "label": "ROI",
                "follow-up": "sb11"
            }
        ]
    },
    'sb11': {
        'title': 'Budget',
        "background": "#E9D5FF",
        "Text": "#020202",
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "Fixed fee / Project based pricing",
                "follow-up": "sb12"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Current expected budget",
                "follow-up": "sb12"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Previous Marketing budget?",
                "follow-up": "sb12"
            }
        ]
    },
    'sb12': {
        'title': 'Desired timeline',
        "background": "#020202",
        "Text": "#FFFFFF",
        'options': [
            {
                "answer": "a",
                "label": "< 6 months",
                "follow-up": "sb13"
            },
            {
                "answer": "b",
                "label": "> 6 months",
                "follow-up": "sb13"
            }
        ]
    },
    'sb13': {
        'title': 'Desired timeline',
        "background": "#936BFF",
        "Text": "#020202",
        'options': [
            {
                "answer": "a",
                "label": "< 6 months",
                "follow-up": "q0"
            },
            {
                "answer": "b",
                "label": "> 6 months",
                "follow-up": "q0"
            }
        ]
    },
    'p1': {
        'title': 'Your Profession?',
        "background": "#936BFF",
        "Text": "#020202",
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "Your profession",
                "follow-up": "p2"
            }
        ]
    },
    'p2': {
        'title': 'Expertise',
        "background": "#E9D5FF",
        "Text": "#020202",
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "Your area of expertise",
                "follow-up": "p3"
            }
        ]
    },
    'p3': {
        'title': 'Current client volume/size',
        "background": "#020202",
        "Text": "#FFFFFF",
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "How many clients do you attend to in a month",
                "follow-up": "p4"
            }
        ]
    },
    'p4': {
        'title': 'Your Fees',
        "background": "#936BFF",
        "Text": "#020202",
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "How much do you charge your clients",
                "follow-up": "p5"
            }
        ]
    },
    'p5': {
        'title': 'Budget',
        "background": "#E9D5FF",
        "Text": "#020202",
        'options': [
            {
                "type": "text",
                "answer": "",
                "label": "Previous Marketing Budget (if any)",
                "follow-up": "p6"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Expected Marketing Budget",
                "follow-up": "p6"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Lead-Based or Monthly-Based",
                "follow-up": "p6"
            }
        ]
    },
    'p6': {
        'title': 'Desired timeline',
        "background": "#020202",
        "Text": "#FFFFFF",
        'options': [
            {
                "answer": "a",
                "label": "< 6 months",
                "follow-up": "q0"
            },
            {
                "answer": "b",
                "label": "> 6 months",
                "follow-up": "q0"
            }
        ]
    },
    'c1': {
        'title': 'Type of content',
        "background": "#936BFF",
        "Text": "#020202",
        'options': [
            {
                "answer": "a",
                "label": "Art & craft",
                "follow-up": "c2"
            },
            {
                "answer": "b",
                "label": "Music",
                "follow-up": "c2"
            },
            {
                "answer": "c",
                "label": "Personal Brand",
                "follow-up": "c2"
            },
            {
                "answer": "d",
                "label": "Informative/Educational",
                "follow-up": "c2"
            },
            {
                "answer": "e",
                "label": "Coaching/Consulting",
                "follow-up": "c2"
            }
        ]
    },
    'c2': {
        'title': 'Reach',
        "background": "#E9D5FF",
        "Text": "#020202",
        'options': [
            {
                "answer": "a",
                "label": "<10k",
                "follow-up": "c3"
            },
            {
                "answer": "b",
                "label": "<500k",
                "follow-up": "c3"
            },
            {
                "answer": "c",
                "label": ">500k",
                "follow-up": "c3"
            }
        ]
    },
    'c3': {
        'title': 'Platforms',
        "background": "#020202",
        "Text": "#FFFFFF",
        'options': [
            {
                "answer": "a",
                "label": "Instagram",
                "follow-up": "c4"
            },
            {
                "answer": "b",
                "label": "Twitter",
                "follow-up": "c4"
            },
            {
                "answer": "c",
                "label": "Facebook",
                "follow-up": "c4"
            },
            {
                "answer": "d",
                "label": "Threads",
                "follow-up": "c4"
            },
            {
                "answer": "e",
                "label": "Youtube",
                "follow-up": "c4"
            },
            {
                "answer": "f",
                "label": "Linkedin",
                "follow-up": "c4"
            }
        ]
    },
    'c4': {
        "title": 'Budget',
        "background": "#936BFF",
        "Text": "#020202",
        "options": [
            {
                "type": "text",
                "answer": "",
                "label": "Fixed fee / Project based pricing",
                "follow-up": "c5"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Current expected budget",
                "follow-up": "c5"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Previous Marketing budget? (if any)",
                "follow-up": "c5"
            }
        ]
    },
    'c5': {
        "title": 'Desired timeline',
        "background": "#E9D5FF",
        "Text": "#020202",
        "options": [
            {
                "answer": "a",
                "label": "< 6 months",
                "follow-up": "c6"
            },
            {
                "answer": "b",
                "label": "< 6 months",
                "follow-up": "c6"
            }
        ]
    },
    'c6': {
        "title": 'Budget',
        "background": "#020202",
        "Text": "#FFFFFF",
        "options": [
            {
                "type": "text",
                "answer": "",
                "label": "Fixed fee / Project based pricing",
                "follow-up": "q0"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Current expected budget",
                "follow-up": "q0"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Previous Marketing budget? (if any)",
                "follow-up": "q0"
            }
        ]
    },
    "s1": {
        "title": "Industry",
        "background": "#936BFF",
        "Text": "#020202",
        "options": [
            {
                "type": "text",
                "answer": "",
                "label": "In which industry are you?",
                "follow-up": "s2"
            }
        ]
    },
    "s2": {
        "title": "Brief Description",
        "background": "#E9D5FF",
        "Text": "#020202",
        "options": [
            {
                "type": "text",
                "answer": "",
                "label": "Brief description about your business",
                "follow-up": "s3"
            }
        ]
    },
    "s3": {
        "title": "Mission & Vision",
        "background": "#020202",
        "Text": "#FFFFFF",
        "options": [
            {
                "type": "text",
                "answer": "",
                "label": "Mission & Vision of your business",
                "follow-up": "s4"
            }
        ]
    },
    "s4": {
        "title": "Goals",
        "background": "#936BFF",
        "Text": "#020202",
        "options": [
            {
                "type": "text",
                "answer": "",
                "label": "Goals of your business",
                "follow-up": "s5"
            }
        ]
    },
    "s5": {
        "title": "Stage",
        "background": "#E9D5FF",
        "Text": "#020202",
        "options": [
            {
                "answer": "a",
                "label": "Very early",
                "follow-up": "s6"
            },
            {
                "answer": "b",
                "label": "Pre-revenue",
                "follow-up": "s6"
            },
            {
                "answer": "c",
                "label": "Growth stage",
                "follow-up": "s6"
            },
            {
                "answer": "d",
                "label": "Scaling up",
                "follow-up": "s6"
            }
        ]
    },
    "s6": {
        "title": "Do you need Branding?",
        "background": "#020202",
        "Text": "#FFFFFF",
        "options": [
            {
                "answer": "a",
                "label": "Yes",
                "follow-up": "s7"
            },
            {
                "answer": "b",
                "label": "No",
                "follow-up": "s7"
            }
        ]
    },
    "s7": {
        "title": "Do you need Social media management?",
        "background": "#936BFF",
        "Text": "#020202",
        "options": [
            {
                "answer": "a",
                "label": "Yes",
                "follow-up": "s8"
            },
            {
                "answer": "b",
                "label": "No",
                "follow-up": "s8"
            }
        ]
    },
    "s8": {
        "title": "Reach",
        "background": "#E9D5FF",
        "Text": "#020202",
        "options": [
            {
                "answer": "a",
                "label": "<10k",
                "follow-up": "s9"
            },
            {
                "answer": "b",
                "label": "<500k",
                "follow-up": "s9"
            },
            {
                "answer": "c",
                "label": ">500k",
                "follow-up": "s9"
            }
        ]
    },
    "s9": {
        "title": "Do you need Web & APP development?",
        "background": "#020202",
        "Text": "#FFFFFF",
        "options": [
            {
                "answer": "a",
                "label": "Website",
                "follow-up": "s10"
            },
            {
                "answer": "b",
                "label": "App",
                "follow-up": "s10"
            },
            {
                "answer": "c",
                "label": "Both",
                "follow-up": "s10"
            },
            {
                "answer": "d",
                "label": "None",
                "follow-up": "s10"
            }
        ]
    },
    "s10": {
        "title": "Target Audience & Market",
        "background": "#936BFF",
        "Text": "#020202",
        "options": [
            {
                "type": "text",
                "answer": "",
                "label": "Target Audience",
                "follow-up": "s11"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Industry",
                "follow-up": "s11"
            },
            {
                "type": "text",
                "answer": "",
                "label": "Geographical region",
                "follow-up": "s11"
            }
        ]
    },
    "s11": {
        "title": "Desired timeline",
        "background": "#E9D5FF",
        "Text": "#020202",
        "options": [
            {
                "answer": "a",
                "label": "< 6 months",
                "follow-up": "q0"
            },
            {
                "answer": "b",
                "label": "> 6 months",
                "follow-up": "q0"
            }
        ]
    }
};