# Teacher Guide Workflow for PFL Academy

This document outlines the comprehensive workflow for creating teacher guides for all standards and chapters in the PFL Academy curriculum. When starting a new development session, refer to this guide for a systematic approach to creating teacher guides.

> **STRUCTURAL ALIGNMENT PRINCIPLE:** Teacher guides must align section-by-section with the student-facing content structure to provide targeted teaching support for each specific content component. The Content Guide (Day 1) section of each teacher guide follows the exact same sections as the student content: Learning Objectives, Introduction, Key Concepts, Deeper Exploration, Real-World Examples, Summary, Reflection Prompt, and Skill Builder Activity.

## Quick Start Guide

1. **Prepare your environment**:
   ```bash
   cd /Users/justin/pfl-academy
   ```

2. **Select a standard and chapter to work on** (e.g., Standard 4, Chapter 4.1)

3. **Create resources directory for the chapter**:
   ```bash
   mkdir -p /Users/justin/pfl-academy/Sync-90/resources/chapter-X-Y/downloads
   mkdir -p /Users/justin/pfl-academy/Sync-90/resources/chapter-X-Y/additional-resources
   ```

4. **Create directory for markdown files**:
   ```bash
   mkdir -p /Users/justin/pfl-academy/Sync-90/Teacher-guides/Standard-X
   ```

5. **Follow the detailed workflow steps below** to create markdown files for both Day 1 and Day 2 content.

## Overview of Teacher Guide Structure

Each chapter's teacher guide consists of two markdown files:
1. **Day 1 (Content Guide)**: `chapter-X-Y-teacher-day1.md`
2. **Day 2 (Learning Lab)**: `chapter-X-Y-teacher-day2.md`

These markdown files contain comprehensive lesson plans, facilitation notes, resources, and support materials that will later be converted to HTML by the development team.

### Key Structural Alignment Principle

**The Content Guide (Day 1) section strictly follows the exact same section structure as the student-facing content.** This section-by-section alignment ensures that:

1. Teachers can quickly find guidance for any section they're teaching
2. All components of the student-facing content have specific teaching support
3. The teacher guide maintains consistent structure across all chapters
4. There's clear connection between student materials and teacher guidance

The standard student content structure that the teacher guide follows is:
- Learning Objectives
- Introduction
- Key Concepts
- Deeper Exploration
- Real-World Examples
- Summary
- Reflection Prompt
- Skill Builder Activity

The Skill Builder Activity section is significantly enhanced, as it serves as the cornerstone connecting Day 1 and Day 2 content.

## Markdown File Structure

### Day 1 (Content Guide) Structure

The Day 1 markdown file (`chapter-X-Y-teacher-day1.md`) follows this structure:

```markdown
# Teacher Guide: Chapter X.Y: [Chapter Title]

## Lesson Overview
...

## Materials Needed
...

## Pre-Class Setup
...

## Lesson Timeline
...

## Section-by-Section Teaching Notes
### Learning Objectives
...
### Introduction
...
### Key Concepts
...
### Deeper Exploration
...
### Real-World Examples
...
### Summary
...
### Reflection Prompt
...
### Skill Builder Activity
...

## Conclusion and Next Steps
...

## Discussion Prompts
...

## Differentiation Strategies
...

## Assessment Opportunities
...

## Summative Assessment Guide
...
```

### Day 2 (Learning Lab) Structure

The Day 2 markdown file (`chapter-X-Y-teacher-day2.md`) follows this structure:

```markdown
# Learning Lab Teacher Guide: Chapter X.Y: [Chapter Title]

## Learning Lab Overview
...

## Learning Objectives
...

## Materials Needed
...

## Pre-Class Setup
...

## Learning Lab Structure
...

## Detailed Facilitation Notes
### Warm-up & Review
...
### Activity 1: [Activity 1 Title]
...
### Activity 2: [Activity 2 Title]
...
### Activity 3: [Activity 3 Title]
...
### Reflection & Wrap-up
...

## Differentiation Strategies
...

## Assessment Strategies
...

## Summative Assessment Guide
...
```

## Detailed Workflow Steps

### 1. Gather Source Materials and Review Final Implementations

For each chapter, collect and review the following source materials:

#### Source Content Materials
   - Student content for Day 1 (`/content-complete/Standard-X/X.Y/student/day1.md`)
   - Student content for Day 2 (`/content-complete/Standard-X/X.Y/student/day2.md`)
   - Teacher guide for Day 1 (`/content-complete/Standard-X/X.Y/teacher/guide-day1.md`)
   - Teacher guide for Day 2 (`/content-complete/Standard-X/X.Y/teacher/guide-day2.md`)
   - Architecture JSON file (`/content-complete/Standard-X/X.Y/architecture.json`)
   - Asset specifications (`/content-complete/Standard-X/X.Y/assets/assets.md`)

You can use these file paths to access the source content:
```bash
# View the source content files
cat /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/student/day1.md
cat /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/student/day2.md
cat /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/teacher/guide-day1.md
cat /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/teacher/guide-day2.md
cat /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/assets/assets.md
```

#### Review Final Day 2 Learning Lab Implementations
Review the final Day 2 Learning Lab implementations to understand how the activities were built out. This helps ensure the teacher guide accurately references the activities students will be working with.

**Important Note**: For Standards 2 and 3, use the directories with dashes (Standard-2 and Standard-3), not the spaces (Standard 2 and Standard 3).

```bash
# View the final Day 2 implementation
# For most standards:
cat /Users/justin/pfl-academy/Day\ 2\ Learning\ Labs/Standard-X/chapter-X-Y-day2.html

# For Standards 1, 2, and 3, double-check which directory contains the final version
ls /Users/justin/pfl-academy/Day\ 2\ Learning\ Labs/Standard-2/
ls /Users/justin/pfl-academy/Day\ 2\ Learning\ Labs/Standard-3/
```

#### Comprehensive Chapter Understanding

1. **Review student content first**: This gives you the best understanding of what students will be learning and doing, which is essential for creating a teacher guide that properly supports instruction.

2. **Examine the final Day 2 implementation**: Understanding how the interactive elements were implemented helps you accurately describe activities in the teacher guide.

3. **Check architecture.json for template details**: This file indicates whether the chapter follows standard, project-based, or case-study format.

4. **Review assets.md thoroughly**: This provides details about all interactive components, downloadable resources, and supplementary materials that should be referenced in the teacher guide.

### 2. Create Directory Structure (if needed)

Ensure the appropriate directory structure exists:
```bash
mkdir -p /Users/justin/pfl-academy/Sync-90/Teacher-guides/Standard-X
mkdir -p /Users/justin/pfl-academy/Sync-90/resources/chapter-X-Y/downloads
mkdir -p /Users/justin/pfl-academy/Sync-90/resources/chapter-X-Y/additional-resources
```

### 3. Create Day 1 (Content Guide) Markdown File

1. Create a new markdown file using the standardized template:
   ```bash
   touch /Users/justin/pfl-academy/Sync-90/Teacher-guides/Standard-X/chapter-X-Y-teacher-day1.md
   ```

2. Fill in the markdown file with content that follows the standardized template structure, including:
   - Lesson Overview
   - Materials Needed
   - Pre-Class Setup
   - Lesson Timeline
   - Section-by-Section Teaching Notes
   - Conclusion and Next Steps
   - Discussion Prompts
   - Differentiation Strategies
   - Assessment Opportunities
   - Summative Assessment Guide

### 4. Create Day 2 (Learning Lab) Markdown File

1. Create a new markdown file using the standardized template:
   ```bash
   touch /Users/justin/pfl-academy/Sync-90/Teacher-guides/Standard-X/chapter-X-Y-teacher-day2.md
   ```

2. Fill in the markdown file with content that follows the standardized template structure, including:
   - Learning Lab Overview
   - Learning Objectives
   - Materials Needed
   - Pre-Class Setup
   - Learning Lab Structure
   - Detailed Facilitation Notes
   - Differentiation Strategies
   - Assessment Strategies
   - Summative Assessment Guide

### 5. Creating and Managing Downloadable Resources

Each teacher guide should include downloadable resources for teachers and students. These resources should be stored in a standardized location and properly referenced in the markdown files.

### Resource Templates and Standards

We've created standardized templates to maintain consistency across all chapters:

1. **Resource HTML Template**: Located at `/Users/justin/pfl-academy/templates/resource-template.html`
   - Standard HTML structure with print-friendly styling
   - Examples of different resource types (worksheet, rubric, case study, reference guide)
   - Print-specific CSS for proper formatting when printed/saved as PDF
   - Instructions for teachers on saving as PDF

2. **Additional Resources Template**: Located at `/Users/justin/pfl-academy/templates/additional-resources-template.html`
   - Modern card-based design with responsive grid layout
   - Color-coded resource type tags
   - "Back to Chapter" navigation
   - CSS variables for easy theming

3. **Additional Resources Content Template**: Located at `/Users/justin/pfl-academy/templates/additional-resources-markdown-template.md`
   - Content structure for resource listings by category
   - Metadata framework for each resource (title, description, tags, URL)

For more detailed information about the resource system and templates, refer to the Resources README:
`/Users/justin/pfl-academy/Sync-90/resources/README.md`

### Resource Directory Structure

For each chapter, maintain the following directory structure within the Sync-90 folder:

```
/Sync-90/resources/chapter-X-Y/
  ├── downloads/                 # Downloadable materials
  │   ├── chapter-X-Y-materials.zip  # Complete packaged materials
  │   └── [individual files]     # Individual worksheets, guides, etc.
  │
  └── additional-resources/      # External resources
      └── index.html             # HTML page with curated external links
```

### Required Downloadable Resources

Each chapter should include the following downloadable resources at minimum:

1. **Individual HTML Files**: 
   - **Worksheets**: HTML files with interactive or fillable content related to activities in the chapter
   - **Assessment Rubrics**: HTML files with clear evaluation criteria for student work
   - **Reference Guides**: HTML files summarizing key concepts from the chapter
   - **Case Studies**: HTML files containing real-world examples referenced in the chapter

2. **Optional ZIP Package**: A ZIP file containing all HTML resources for bulk download (useful for teachers who want to download everything at once)

### Creating Downloadable Resources

1. **Generate Individual Files as HTML**:
   - Create HTML worksheets based on the student-facing activities
   - Use the template at `/templates/resource-template.html` as a starting point
   - Customize the content while maintaining the standard structure
   - Ensure all resources have print-friendly styling
   
2. **Package Resources as ZIP** (for bulk downloads):
   ```bash
   # Navigate to the downloads directory
   cd /Users/justin/pfl-academy/Sync-90/resources/chapter-X-Y/downloads
   
   # Create ZIP file with all resources
   zip -r chapter-X-Y-materials.zip *.html
   ```

3. **Create Additional Resources Content**:
   - Create a markdown file based on `additional-resources-markdown-template.md`
   - Organize resources by category (tools, guides, articles, etc.)
   - Include detailed descriptions and proper tagging
   - Pass to development team for HTML generation using the template

### Resource Types and Tag Colors

When categorizing resources in the additional resources page, use these standard resource types and colors:

- **Tool** (Blue): Interactive applications, platforms, or utilities
- **Guide** (Green): Step-by-step instructions or comprehensive references
- **Article** (Orange): Text-based informational content
- **Video** (Red): Visual/multimedia instructional content
- **Calculator** (Purple): Computational tools for specific financial calculations

### Referencing Resources in Teacher Guides

In both Day 1 and Day 2 markdown files, include references to the resources:

```markdown
## Materials Needed

- Access to downloadable resources:
  - [Financial Goal Timeline Worksheet](/Sync-90/resources/chapter-X-Y/downloads/Timeline_Worksheet.html)
  - [Complete materials package](/Sync-90/resources/chapter-X-Y/downloads/chapter-X-Y-materials.zip)
- Additional external resources available at the [Resource Page](/Sync-90/resources/chapter-X-Y/additional-resources/index.html)
```

### 6. Test and Validate

1. Review the markdown files to ensure they follow the standardized structure
2. Verify all content is appropriately referenced from source materials
3. Check that resource references are accurate and complete
4. Ensure all section-by-section teaching notes align with student content
5. Validate that the detailed facilitation notes for Learning Lab activities are clear and comprehensive

## Reference Examples

For reference, review the teacher guide HTML files that have already been completed:

- `/Users/justin/pfl-academy/Sync-90/Teacher-guides/Standard 1/chapter-1-1-teacher.html`

You can view this file with a text editor to see how the content should be structured in your markdown files.

## Standardized Template Files

Two standardized markdown templates are maintained for reference:

1. **Day 1 Content Guide Template**: Contains the complete structure for Content Guide teacher guides
2. **Day 2 Learning Lab Template**: Contains the complete structure for Learning Lab teacher guides

These templates are stored in `/Users/justin/pfl-academy/Sync-90/Teacher-guides/teacher-guide-markd.md` and should be used as the starting point for each new chapter.

## Working with Claude

When working with Claude to create teacher guides, follow these steps:

1. Point Claude to this workflow document:
   ```
   Please read '/Users/justin/pfl-academy/TEACHER_GUIDE_WORKFLOW.md' and '/Users/justin/pfl-academy/Sync-90/resources/README.md'
   ```

2. Specify the standard and chapter you want to work on:
   ```
   I'd like to create teacher guide markdown files for Standard X, Chapter X.Y. Let's follow the teacher guide workflow.
   ```

3. Give Claude access to the source files:
   ```
   Please examine the content in:
   - /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/student/day1.md
   - /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/student/day2.md
   - /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/teacher/guide-day1.md
   - /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/teacher/guide-day2.md
   - /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/architecture.json
   - /Users/justin/pfl-academy/content-complete/Standard-X/X.Y/assets/assets.md
   ```

4. Ask Claude to create the markdown files using the standardized templates:
   ```
   Please create the markdown files for chapter-X-Y-teacher-day1.md and chapter-X-Y-teacher-day2.md following the workflow and standardized templates.
   ```

5. Review the markdown content and make any necessary adjustments.

## Tracking Progress

Maintain a list of completed teacher guides to track your progress:

### Completed Teacher Guides
- Standard 1, Chapter 1.1: Jobs vs. Careers
- Standard 1, Chapter 1.2: Paying for Post-Secondary Education
- Standard 1, Chapter 1.3: Income and Taxes
- Standard 1, Chapter 1.4: Financial Goal Setting
- Standard 1, Chapter 1.5: Managing Your Income Effectively

### Teacher Guides in Progress
- [Add chapters as you work on them]

### Remaining Teacher Guides
- [List remaining chapters to complete]