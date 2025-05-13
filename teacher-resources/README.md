# PFL Academy Resources

This directory contains downloadable materials and external resource links for PFL Academy teacher guides.

## Directory Structure

For each chapter, the following structure is maintained:

```
chapter-X-Y/
  ├── downloads/                 # Downloadable materials
  │   ├── chapter-X-Y-materials.zip  # Complete packaged materials
  │   └── [individual files]     # Individual HTML worksheets, guides, etc.
  │
  └── additional-resources/      # External resources
      └── index.html             # HTML page with curated external links
```

## Standardized Templates

We use standardized templates to maintain consistency across all chapters:

### HTML Templates

- **Additional Resources Template**: `/templates/additional-resources-template.html`
  - Modern card-based design with responsive grid layout
  - Color-coded resource type tags
  - "Back to Chapter" navigation
  - CSS variables for easy theming

### Markdown Templates

- **Additional Resources Content**: `/templates/additional-resources-markdown-template.md`
  - Content structure for resource listings by category
  - Metadata framework for each resource (title, description, tags, URL)

## Recommended Workflow for Adding Resources

When adding resources for a new chapter:

1. Create the directory structure:
   ```bash
   mkdir -p /Users/justin/pfl-academy/Sync-90/resources/chapter-X-Y/downloads
   mkdir -p /Users/justin/pfl-academy/Sync-90/resources/chapter-X-Y/additional-resources
   ```

2. Add downloadable files:
   - Create individual HTML worksheets, guides, and other materials
   - Use the standard HTML template structure with print-friendly styling
   - Create a ZIP file containing all materials

3. Create additional resources content:
   - Create a markdown file based on `additional-resources-markdown-template.md`
   - Populate with chapter-specific resource information
   - Pass to development team for HTML generation using the template

4. Update the teacher guide markdown files:
   - Reference downloadable resources in the "Materials Needed" section
   - Mention the additional resources page where relevant

## Resource Types and Tag Colors

When categorizing resources, use the following standard resource types and their associated colors:

- **Tool** (Blue): Interactive applications, platforms, or utilities
- **Guide** (Green): Step-by-step instructions or comprehensive references
- **Article** (Orange): Text-based informational content
- **Video** (Red): Visual/multimedia instructional content
- **Calculator** (Purple): Computational tools for specific financial calculations

## Linking from Teacher Guides

Example of proper resource referencing in teacher guide markdown:

```markdown
## Materials Needed

- Access to downloadable resources:
  - [Financial Goal Timeline Worksheet](/Sync-90/resources/chapter-X-Y/downloads/Timeline_Worksheet.html)
  - [Complete materials package](/Sync-90/resources/chapter-X-Y/downloads/chapter-X-Y-materials.zip)
- Additional external resources available at the [Resource Page](/Sync-90/resources/chapter-X-Y/additional-resources/index.html)
```

## HTML Generation Workflow for Development Team

For the development team, here's the recommended workflow:

1. Read the markdown content file for a chapter's resources
2. Parse the structured content (sections, resources, metadata)
3. For each resource:
   - Determine appropriate tag styling based on resource type
   - Format resource cards according to template
4. Replace placeholders in the HTML template:
   - `{{CHAPTER_NUMBER}}` with the chapter number
   - `{{CHAPTER_TITLE}}` with the chapter title
   - `{{RESOURCE_SECTIONS}}` with the generated HTML content
5. Output the finished HTML file to the appropriate location

## Existing Resources

Currently, the following chapters have resources available:

- Chapter 1.1: Jobs vs. Careers
- Chapter 1.2: Paying for Post-Secondary Education
- Chapter 1.3: Income and Taxes
- Chapter 1.4: Financial Goal Setting
- Chapter 1.5: Managing Your Income Effectively