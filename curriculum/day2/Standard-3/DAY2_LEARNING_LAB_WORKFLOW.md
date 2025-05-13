# Day 2 Learning Lab Development Workflow

This document outlines the complete workflow for developing Day 2 Learning Lab pages for the PFL Academy curriculum, including all necessary context, file paths, and implementation instructions.

## Workflow Overview

To create a Day 2 Learning Lab page for any chapter, follow these sequential steps:

1. **Gather Source Content**:
   - Student content for Day 1 and Day 2 from `/content-complete/Standard-X/X.Y/student/`
   - Teacher guides for Day 1 and Day 2 from `/content-complete/Standard-X/X.Y/teacher/`
   - Assets specifications from `/content-complete/Standard-X/X.Y/assets/assets.md`
   - Architecture.json from `/content-complete/Standard-X/X.Y/architecture.json`

2. **Review Template Structure**:
   - Use `/Users/justin/pfl-academy/day2-learning-lab-template.html` as the primary template
   - Study Standard 1 implementations for reference (chapters 1.1-1.5)

3. **Create Learning Lab Page**:
   - Replace template placeholders with chapter-specific content
   - Structure activities as Learning Stations following the Day 2 content
   - Implement interactive components specified in the assets file
   - Ensure proper navigation and section order

4. **Test and Validate**:
   - Check that interactive elements work
   - Verify station progress tracking functionality
   - Ensure consistent styling with other chapters

## Required Directory Structure

Each chapter should follow this standard file structure:
```
/Users/justin/pfl-academy/Standard-X/
  |- chapter-X-Y-day1.html
  |- chapter-X-Y-day2.html
  |- chapter-X-Y-teacher.html
```

## Day 2 Learning Lab Template Structure

The Day 2 Learning Lab MUST follow this exact structure:

1. **Page Head & Styling**
   - Standard title format: `PFL Academy - Chapter X.Y: [Title] - Learning Lab`
   - Required scripts: tailwindcss, chart.js
   - UI component styles

2. **Fixed Header**
   - Purple/indigo gradient background
   - Navigation menu

3. **Sidebar Navigation**
   - Standard info with title and description
   - Day 1/Day 2 toggle
   - Chapter navigation
   - Progress tracker with station indicators
   - Return to Day 1 button

4. **Main Content Structure**
   - Chapter title and description
   - Learning Objectives section
   - Introduction section with Connection to Day 1
   - Podcast Review section
   - Learning Stations (4-5 stations typically)
   - Portfolio Integration section
   - Final Reflection section

5. **Learning Station Structure**
   - Station number with gradient badge
   - Activity timer
   - Instructions
   - Interactive components
   - Save button

6. **Interactive Elements**
   - Progress tracking
   - Toast notifications
   - AI feedback system
   - Navigation highlighting

## Content Implementation Guidelines

1. **Learning Objectives**:
   - Use objectives from the student/day2.md file
   - Format with light blue background

2. **Introduction**:
   - Add gradient underline to section title
   - Include "Important Note" section
   - Include "Connection to Day 1" section
   - Include "Podcast Review" section with audio player

3. **Learning Stations**:
   - Convert activities from student/day2.md into station format
   - Include step-by-step instructions
   - Add appropriate input fields, tables, or interactive elements
   - Add "Save" button to each station
   - Maintain consistent styling across stations

4. **Portfolio Integration**:
   - Use indigo background
   - Reference components from all stations
   - Include portfolio summary field with AI feedback

5. **Reflection**:
   - Use discussion-prompt styling
   - Include AI feedback system
   - Add "Continue to next chapter" button

## Audio Integration

Connect to podcast files in this location:
```
/Users/justin/pfl-academy/finished LM recordings/X.Y - [Title].wav
```

## Reference Implementations

Use these Standard 1 implementations as reference models:
- `/Users/justin/pfl-academy/Standard 1/chapter-1-1-day2.html`
- `/Users/justin/pfl-academy/Standard 1/chapter-1-2-day2.html`
- `/Users/justin/pfl-academy/Standard 1/chapter-1-3-day2.html`
- `/Users/justin/pfl-academy/Standard 1/chapter-1-4-day2.html`
- `/Users/justin/pfl-academy/Standard 1/chapter-1-5-day2.html`

## JavaScript Functionality

The template includes these critical JavaScript functions:
- Station navigation and animation
- Progress tracking in sidebar
- Toast notifications for save actions
- AI feedback system
- Scroll-based station highlighting

## Implementation Process for Standard 2

For Standard 2, follow these specific steps:

1. For each chapter in Standard 2:
   - Check `/content-complete/Standard-2/2.Y/` for source content
   - Create chapter-2-Y-day2.html in `/Users/justin/pfl-academy/Standard-2/`
   - Adapt content from student/day2.md into the Learning Lab format
   - Ensure audio integration with podcast files

2. Address these unique aspects of Standard 2:
   - Tax-related interactive components
   - Specialized visualizations if specified in assets.md
   - Any tax calculation tools specified

## CSS and Style Implementation

Maintain these styling conventions:
- Learning objectives: `background-color: #e6f3ff; border-radius: 0.75rem; padding: 1.5rem;`
- Discussion prompts: `background-color: #e6f0ff; border-left: 4px solid #3b82f6;`
- Activity timers: `border-left: 4px solid #4f46e5; background: linear-gradient(to right, #eef2ff, #ede9fe);`
- Station numbers: `background: linear-gradient(to right, #4f46e5, #6366f1); color: white; border-radius: 9999px;`
- Important notes: `background-color: #fffbeb; border-left: 4px solid #f59e0b;`
- Buttons: `background: linear-gradient(to right, #4f46e5, #6366f1); color: white;`

## Deployment Workflow

After completing a Day 2 Learning Lab page:

1. Test the page by opening it in a browser
2. Verify all interactive elements function correctly
3. Check navigation and progress tracking
4. Ensure proper styling and layout
5. Move to the next chapter following the same workflow