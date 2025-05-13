# PFL Academy - ChatGPT Deep Research Repository

This repository consolidates key components from multiple PFL Academy repositories to facilitate comprehensive analysis and development. It contains curriculum content, interactive components, dashboards, and supporting resources organized in a clean, accessible structure.

## Repository Structure

| Folder | Original Repository | Description | 
|--------|---------------------|-------------|
| `curriculum/day1/` | [Content-updated](https://github.com/jghiglia2380/Content-updated) | Student-facing Day 1 curriculum content and direct instruction materials |
| `curriculum/day2/` | [Day-2-Learning-Labs](https://github.com/jghiglia2380/Day-2-Learning-Labs) | Student-facing Day 2 interactive learning lab activities |
| `skill-builders/` | [pfl-academy-sync-90](https://github.com/jghiglia2380/pfl-academy-sync-90) (`/src/components/skill/`) | Interactive React/TypeScript skill-building components |
| `dashboards/` | [pfl-academy-90-dashboards](https://github.com/jghiglia2380/pfl-academy-90-dashboards) (`/src/pages/dashboards/`) | Admin, Instructor, and Student dashboard interfaces |
| `teacher-guides/` | [pfl-academy-90-teacher-guides](https://github.com/jghiglia2380/pfl-academy-90-teacher-guides) | Comprehensive teacher guides and facilitation materials |
| `teacher-resources/` | [pfl-academy-teacher-resources](https://github.com/jghiglia2380/pfl-academy-teacher-resources) | Supplementary teaching resources and materials |
| `public-site/` | [Updated-public-facing-website](https://github.com/jghiglia2380/Updated-public-facing-website) | Public-facing marketing website and landing pages |

## Component Responsibilities

### Curriculum Content (`curriculum/`)
- **Day 1 (`day1/`)**: Core educational content for direct instruction including:
  - Financial literacy standards (1-15)
  - Chapter-specific educational materials
  - Student-facing learning content
  - Multimedia integration points
  
- **Day 2 (`day2/`)**: Interactive learning lab activities including:
  - Hands-on financial exercises 
  - Applied learning activities
  - Collaborative learning components
  - Portfolio-building exercises

### Interactive Components (`skill-builders/`)
- React/TypeScript components for interactive financial skill development
- Self-contained modules that can be embedded in curriculum pages
- Includes components for budgeting, investing, credit management, career planning, etc.
- Provides real-time feedback and assessment capabilities

### Platform Dashboards (`dashboards/`)
- **Admin Dashboard**: System configuration, assessment management, reporting
  - Includes Assessment Library, Teacher Permission management, Grade weighting
  - Curriculum configuration with state-specific customizations
  
- **Instructor Dashboard**: Class management, assignment delivery, student progress tracking
  - Assessment assignment and grading
  - Student performance monitoring
  - Classroom management
  
- **Student Dashboard**: Course access, assignment completion, portfolio development
  - Progress tracking
  - Assessment completion
  - Portfolio development

### Teacher Support (`teacher-guides/` and `teacher-resources/`)
- **Teacher Guides**: Detailed curriculum facilitation instructions
  - Lesson plans and timelines
  - Discussion guides and activity instructions
  - Differentiation strategies
  
- **Teacher Resources**: Supplementary materials to enhance instruction
  - Additional examples and case studies
  - Assessment rubrics
  - Professional development materials

### Public Website (`public-site/`)
- Marketing materials and public-facing information
- Course descriptions and promotional content
- Implementation information for potential partners

## Dependencies and Integrations

### Frontend Dependencies
- **React/TypeScript**: Primary framework for interactive components
- **TailwindCSS**: Styling framework used across all components
- **Chart.js**: Used for data visualization in dashboards and skill builders
- **React Router**: Navigation between dashboard components

### Backend Dependencies
- **Supabase**: Database and authentication
  - Schema defined in original repo at `/Sync-90/supabase/schema.sql`
  - Tables for users, teachers, standards, chapters, assessments, grade_weighting, activity_log
  
- **Database Requirements**:
  - Need to implement assignments and student_assignments tables for assessment delivery
  - Connection between assessment content and assignment distribution

### Critical Integration Points
1. **Admin → Instructor**: Assessment creation to assignment distribution
2. **Instructor → Student**: Assignment delivery to student completion
3. **Student → Instructor**: Completed work to grading and feedback
4. **Day 1 → Day 2**: Content progression from instruction to application
5. **Skill Builders → Curriculum**: Component embedding in learning materials

## Development Focus Areas
- Dashboard interconnection functionality
- Assessment system completion (creation, distribution, taking, grading)
- User role-based permissions implementation
- Data layer API interfaces

## Notes for Developers
- Maintain existing file structure within each component folder
- New implementations should follow established patterns
- Focus on enhancing functionality rather than restructuring
- Components should be implemented to work with the existing Supabase schema

This repository is intended for analysis and development planning purposes only. Updates should be synchronized back to their respective source repositories for actual deployment.
