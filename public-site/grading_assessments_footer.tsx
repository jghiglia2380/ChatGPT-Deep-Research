<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customizable Grading & Assessments - PFL Academy</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Custom utilities for 3D transforms and effects */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-2 {
          transform: rotateY(2deg);
        }
        
        .rotate-x-5 {
          transform: rotateX(5deg);
        }
        
        .rotate-z-1 {
          transform: rotateZ(1deg);
        }
        
        .transform {
          transform-style: preserve-3d;
        }
        
        /* Animation keyframes */
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, 10px) rotate(5deg); }
          50% { transform: translate(0, 20px) rotate(0deg); }
          75% { transform: translate(-10px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        .floating-icon {
          position: absolute;
          animation: float infinite linear;
          opacity: 0.2;
          color: white;
          font-size: 3rem;
          pointer-events: none;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
        }
        .popout-content {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            max-width: 600px;
            margin: 0 auto;
            margin-top: 16px;
            z-index: 20;
        }
        .feature-card.active .popout-content {
            display: block;
        }
        .feature-card.active {
            transform: scale(1.1);
            z-index: 10;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .features-grid.has-active .feature-card:not(.active) {
            transform: scale(0.95);
            opacity: 0.5;
        }
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 15;
        }
        .overlay.active {
            display: block;
        }
        /* Additional styles for smooth transitions */
        .feature-card {
            transition: all 0.4s ease;
        }
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
    </style>
</head>
<body class="bg-gray-50">
  <header class="bg-white border-b border-gray-200 shadow-sm fixed w-full z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex items-center">
            <div class="flex justify-center items-center h-10 w-10 rounded bg-indigo-600 text-white font-bold">
              PFL
            </div>
            <span class="ml-3 text-xl font-bold text-gray-900">PFL Academy</span>
          </div>
        </div>
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Home</a>
          <a href="/static-build/standards.html" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Curriculum</a>
          <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Resources</a>
          <a href="/static-build/community-partners.html" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Community Partners</a>
          <a href="/static-build/student-login.html" class="text-indigo-600 font-medium hover:text-indigo-800 text-sm border border-indigo-600 rounded-lg px-4 py-2 transition-colors">Student Portal</a>
        </nav>
      </div>
    </div>
  </header>
  
  <!-- Header Spacer -->
  <div class="h-20"></div>
    <!-- Background Overlay -->
    <div class="overlay" id="overlay"></div>
    
    <!-- Header Section -->
    <section class="bg-indigo-600 text-white py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl font-bold mb-4">Customizable Grading & Assessments</h1>
            <p class="text-xl mb-8 max-w-2xl mx-auto">
                Flexible, standards-aligned grading tools that simplify assessment tracking and student progress evaluation.
            </p>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features-section" class="py-16 px-4 transition-all duration-500">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Grading & Assessment Features</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative features-grid" id="features-grid">
                <!-- Auto-Graded Quizzes Feature -->
                <div class="feature-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer" data-feature="auto-graded">
                    <div class="p-6">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto transition-colors">
                            <div class="text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center mb-2">Auto-Graded Quizzes</h3>
                        <p class="text-gray-600 text-center">Save time with automatically scored multiple-choice and short-answer assessments</p>
                    </div>
                    
                    <!-- Popout Content -->
                    <div class="popout-content bg-white rounded-xl shadow-xl p-6 animate-fadeIn">
                        <button class="close-popout absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h4 class="text-lg font-semibold mb-2">Auto-Graded Assessment System</h4>
                        <p class="mb-4">Create and customize auto-graded assessments that provide immediate feedback to students while saving you hours of manual grading time.</p>
                        <div class="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 mb-3">
                            <div class="font-medium text-indigo-700 mb-1">Key Features</div>
                            <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
                                <li>Multiple choice, true/false, and matching question formats</li>
                                <li>AI-powered short answer grading with customizable answer keys</li>
                                <li>Instant feedback options with explanations for correct/incorrect answers</li>
                                <li>Question banks organized by standard and difficulty level</li>
                                <li>Randomized question ordering and answer choices</li>
                            </ul>
                        </div>
                        <p class="text-sm text-gray-600">Perfect for formative checks, unit tests, and standards-based assessments with objective answers.</p>
                    </div>
                </div>

                <!-- Custom Rubrics Feature -->
                <div class="feature-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer" data-feature="custom-rubrics">
                    <div class="p-6">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto transition-colors">
                            <div class="text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center mb-2">Custom Rubrics</h3>
                        <p class="text-gray-600 text-center">Define custom grading rubrics for projects, presentations, and open-ended assignments</p>
                    </div>
                    
                    <!-- Popout Content -->
                    <div class="popout-content bg-white rounded-xl shadow-xl p-6 animate-fadeIn">
                        <button class="close-popout absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h4 class="text-lg font-semibold mb-2">Customizable Rubric Builder</h4>
                        <p class="mb-4">Create detailed, standards-aligned rubrics for any type of assignment. Share them with students before assignment submission and use them for efficient, consistent grading.</p>
                        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-3">
                            <div class="bg-indigo-100 p-2 text-sm font-semibold text-indigo-700">Sample Rubric: Financial Planning Project</div>
                            <div class="p-3">
                                <div class="border-b border-gray-200 pb-2 mb-2">
                                    <div class="font-medium">Understanding of Financial Concepts (0-4 points)</div>
                                    <div class="text-sm text-gray-600 mt-1">
                                        <span class="font-medium">4:</span> Comprehensive understanding with practical application<br/>
                                        <span class="font-medium">3:</span> Clear understanding of all concepts<br/>
                                        <span class="font-medium">2:</span> Basic understanding with minor misconceptions<br/>
                                        <span class="font-medium">1:</span> Limited understanding with significant gaps<br/>
                                        <span class="font-medium">0:</span> No demonstrated understanding
                                    </div>
                                </div>
                                <div class="text-sm text-gray-600 italic">
                                    Additional criteria would be displayed here...
                                </div>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600">Includes library of pre-built rubrics for common financial literacy projects, fully customizable to meet your specific needs.</p>
                    </div>
                </div>

                <!-- Formative & Summative Assessments Feature -->
                <div class="feature-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer" data-feature="assessments">
                    <div class="p-6">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto transition-colors">
                            <div class="text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center mb-2">Formative & Summative Assessments</h3>
                        <p class="text-gray-600 text-center">Track student growth with pre- and post-assessment options aligned to learning standards</p>
                    </div>
                    
                    <!-- Popout Content -->
                    <div class="popout-content bg-white rounded-xl shadow-xl p-6 animate-fadeIn">
                        <button class="close-popout absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h4 class="text-lg font-semibold mb-2">Comprehensive Assessment System</h4>
                        <p class="mb-4">Our integrated assessment suite provides tools for capturing student understanding at every phase of learning, from diagnostic pre-tests to formative checks and summative evaluations.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="bg-white p-3 rounded-lg shadow-sm border border-indigo-100">
                                <div class="font-medium text-indigo-700 mb-1">Formative Assessment Tools</div>
                                <ul class="list-disc pl-5 text-sm text-gray-700">
                                    <li>Quick knowledge checks</li>
                                    <li>Exit tickets with auto-analysis</li>
                                    <li>Peer review frameworks</li>
                                    <li>Self-assessment guides</li>
                                    <li>Interactive check-ins</li>
                                </ul>
                            </div>
                            <div class="bg-white p-3 rounded-lg shadow-sm border border-indigo-100">
                                <div class="font-medium text-indigo-700 mb-1">Summative Assessment Tools</div>
                                <ul class="list-disc pl-5 text-sm text-gray-700">
                                    <li>Standards-aligned unit tests</li>
                                    <li>Performance tasks with rubrics</li>
                                    <li>Project evaluation tools</li>
                                    <li>Comprehensive chapter exams</li>
                                    <li>Skill mastery demonstrations</li>
                                </ul>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600">Advanced reporting shows individual and class progress over time, highlighting growth and areas needing additional support.</p>
                    </div>
                </div>

                <!-- Grade Export & LMS Sync Feature -->
                <div class="feature-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer" data-feature="lms-sync">
                    <div class="p-6">
                        <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto transition-colors">
                            <div class="text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center mb-2">Grade Export & LMS Sync</h3>
                        <p class="text-gray-600 text-center">Easily export grades or sync with Canvas, Google Classroom, and other LMS platforms</p>
                    </div>
                    
                    <!-- Popout Content -->
                    <div class="popout-content bg-white rounded-xl shadow-xl p-6 animate-fadeIn">
                        <button class="close-popout absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h4 class="text-lg font-semibold mb-2">Seamless Grade Integration</h4>
                        <p class="mb-4">No more double-entry of grades! Our system integrates directly with your school's learning management system, keeping everything in sync and saving you valuable time.</p>
                        <div class="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 mb-3">
                            <div class="font-medium text-indigo-700 mb-1">Supported LMS Integrations</div>
                            <div class="grid grid-cols-2 gap-2 mt-2">
                                <div class="flex items-center bg-gray-50 p-2 rounded">
                                    <img src="https://www.instructure.com/sites/default/files/image/2021-12/Canvas%20by%20Instructure%20logo%20horizontal.png" alt="Canvas LMS" class="h-5 mr-2">
                                    <span class="text-sm">Canvas</span>
                                </div>
                                <div class="flex items-center bg-gray-50 p-2 rounded">
                                    <img src="https://lh3.googleusercontent.com/15FWI5aTSQx-J7Nn8osybenS4hfZJIv2F3sRABnyPDhRbdTcWQiLRVJGjXb-8n2Xw5UxWCkPOQ=w220-h140-e365-rj-sc0x00ffffff" alt="Google Classroom" class="h-5 mr-2">
                                    <span class="text-sm">Google Classroom</span>
                                </div>
                                <div class="flex items-center bg-gray-50 p-2 rounded">
                                    <img src="https://assets.clever.com/resource-icons/apps/production/506995d9738d3cb0b6000008-21e362594d04310cdbe5a4bee8c84cd1.png" alt="Clever" class="h-5 mr-2">
                                    <span class="text-sm">Clever</span>
                                </div>
                                <div class="flex items-center bg-gray-50 p-2 rounded">
                                    <img src="https://www.powerschool.com/wp-content/uploads/PowerSchool_Logo_Bug_RGB.svg" alt="PowerSchool" class="h-5 mr-2">
                                    <span class="text-sm">PowerSchool</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600">In addition to LMS integration, easily export grades in CSV format for use in any gradebook system or spreadsheet program.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-16 px-4 bg-indigo-50">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4 text-gray-800">Streamline Your Grading Process</h2>
            <p class="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
                Join thousands of educators using PFL Academy's customizable grading and assessment tools to track student progress with ease.
            </p>
            <a 
                href="/static-build/dashboard.html"
                class="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition-colors text-lg inline-block"
            >
                Check Out the Instructor Dashboard
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200">
      <div class="mx-auto max-w-6xl py-12 px-6 lg:py-16">
        <div class="grid grid-cols-1 gap-8 xl:grid-cols-5">
          <div class="xl:col-span-2">
            <div class="flex items-center">
              <div class="flex justify-center items-center h-10 w-10 rounded bg-indigo-600 text-white font-bold">
                PFL
              </div>
              <span class="ml-3 text-xl font-bold text-gray-900">PFL Academy</span>
            </div>
            <p class="mt-4 text-base text-gray-600 max-w-md">
              Empowering the next generation with essential financial literacy skills for a secure and successful future.
            </p>
            <div class="mt-6 flex space-x-5">
              <a href="#" class="text-gray-400 hover:text-gray-500" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-8 xl:col-span-3 xl:grid-cols-3">
            <div>
              <h3 class="text-lg font-bold text-gray-900">
                Quick Links
              </h3>
              <ul class="mt-4 space-y-3">
                <li>
                  <a href="/static-build/index101.html" class="text-sm text-gray-600 hover:text-indigo-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/static-build/standards.html" class="text-sm text-gray-600 hover:text-indigo-600">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="/static-build/community-partners.html" class="text-sm text-gray-600 hover:text-indigo-600">
                    Community Partners
                  </a>
                </li>
                <li>
                  <a href="/static-build/student-login.html" class="text-sm text-gray-600 hover:text-indigo-600">
                    Student Portal
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-gray-900">
                Instructor & Student Resources
              </h3>
              <ul class="mt-4 space-y-3">
                <li class="text-sm font-medium text-gray-700">
                  For Instructors:
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Comprehensive Teacher Guides
                  </a>
                </li>
                <li>
                  <a href="/static-build/AIS_footer.html" class="text-sm text-gray-600 hover:text-indigo-600">
                    Adaptive Instructional Support
                  </a>
                </li>
                <li>
                  <a href="/static-build/grading_assessments_footer.html" class="text-sm text-gray-600 hover:text-indigo-600">
                    Customizable Grading & Assessments
                  </a>
                </li>
                <li class="mt-8 pt-4 border-t border-gray-100 text-sm font-medium text-gray-700">
                  For Students:
                </li>
                <li>
                  <a href="/static-build/curriculum-glance.html" class="text-sm text-gray-600 hover:text-indigo-600">
                    Curriculum at a Glance
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Learning Lab Activities
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Assessment & Grading
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-gray-900">
                Support & Legal
              </h3>
              <ul class="mt-4 space-y-3">
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                    Accessibility Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p class="text-sm text-gray-600">
            &copy; 2025 PFL Academy. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">Privacy Policy</a>
            <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">Terms of Service</a>
            <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
        </div>
        
        <div class="mt-8 flex items-center justify-center">
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>2380 California Street, San Francisco, CA 94115</span>
            <span>•</span>
            <span>(415) 990-2754</span>
            <span>•</span>
            <a href="mailto:partners@pflacademy.co" class="hover:text-indigo-600">partners@pflacademy.co</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- JavaScript for Interactivity -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Scroll to features functionality
            const scrollToFeaturesBtn = document.getElementById('scrollToFeatures');
            const featuresSection = document.getElementById('features-section');
            
            scrollToFeaturesBtn.addEventListener('click', function() {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            });
            
            // Feature card interactions
            const featuresGrid = document.getElementById('features-grid');
            const featureCards = document.querySelectorAll('.feature-card');
            const overlay = document.getElementById('overlay');
            
            // Handle clicking on feature cards
            featureCards.forEach(card => {
                card.addEventListener('click', function() {
                    const isActive = card.classList.contains('active');
                    
                    // Reset all cards first
                    resetAllCards();
                    
                    if (!isActive) {
                        // Activate this card
                        card.classList.add('active');
                        featuresGrid.classList.add('has-active');
                        overlay.classList.add('active');
                        
                        // Ensure the popout is visible by scrolling if needed
                        setTimeout(() => {
                            const popout = card.querySelector('.popout-content');
                            const rect = popout.getBoundingClientRect();
                            
                            if (rect.bottom > window.innerHeight) {
                                popout.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }, 100);
                    }
                });
            });
            
            // Close popout when clicking close button
            document.querySelectorAll('.close-popout').forEach(closeBtn => {
                closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent event bubbling
                    resetAllCards();
                });
            });
            
            // Close popout when clicking overlay
            overlay.addEventListener('click', resetAllCards);
            
            // Function to reset all cards
            function resetAllCards() {
                featureCards.forEach(c => c.classList.remove('active'));
                featuresGrid.classList.remove('has-active');
                overlay.classList.remove('active');
            }
        });
    </script>
</body>
</html>