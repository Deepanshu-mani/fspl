
1 · OBJECTIVE
This assessment evaluates your ability to translate a UI/UX design reference into a production-grade React
application. You will receive three screens from an existing product and are expected to recreate them
accurately, covering layout, spacing, typography, color, and interactive behavior.
Screens to implement:
• Screen 1 — Login page
• Screen 2 — Main Dashboard (scan list overview)
• Screen 3 — Active Scan Detail (live console and finding log)
All three screens must be implemented in both dark mode and light mode. The design reference attached to
this document is your single source of truth.
2 · DESIGN REFERENCE
The design reference contains three screens from a B2B SaaS security platform. Study each screen
carefully before writing any code. The screens are connected and must feel like a single cohesive product.
Screen 1 — Login (Sign-up page)
A split-layout page. The left side has a dark gradient background with the product name, tagline, and a
feature list. The right side has a white card with a sign-up form containing First name, Last name, Email,
and Password fields, a terms checkbox, a Create account button, and social login options (Apple,
Google, Meta). The overall feel is dark, premium, and modern.
Screen 2 — Dashboard (Scan list)
A full application layout with a left sidebar containing navigation links (Dashboard, Projects, Scans,
Schedule, Notifications, Settings, Support) and a user profile at the bottom. The main area shows an
org-level stats bar at the top with four severity counters (Critical, High, Medium, Low) each showing a
count and a percentage change. Below that is a scan table with columns for Scan Name, Type, Status,
Progress, Vulnerability counts, and Last Scan time. Status chips use distinct colors: green for Completed,
gray for Scheduled, and red for Failed. Vulnerability counts are shown as colored number badges (red,
orange, yellow, green). The toolbar above the table has a search input, Filter and Column buttons, and a
teal New Scan button.
Screen 3 — Active Scan Detail (Live console)
Uses the same sidebar layout as Screen 2. The top section shows a circular progress indicator (0% In
Progress) alongside a horizontal step tracker (Spidering, Mapping, Testing, Validating, Reporting) with
the active step highlighted in teal. A metadata row below shows Scan Type, Targets, Started At,
Credentials, Files, and Checklists. The lower section is split into two panels. The left panel is a Live Scan
Console with two tabs (Activity Log and Verification Loops) showing timestamped terminal-style log
output with colored inline highlights for URLs, headers, and keywords. The right panel is a Finding Log
showing vulnerability cards stacked vertically, each with a severity badge (Critical in red, High in orange,
Medium in yellow), a timestamp, a title, an endpoint path in teal, and a short description. A status bar at
the bottom shows Sub-agents, Parallel Executions, Operations, and per-severity counts.
3 · DESIGN AESTHETIC
The application must look and feel like a professional B2B SaaS product. Use the design reference as the
baseline and apply the following principles throughout.
Typography — Use a clean sans-serif font (Inter or equivalent). Maintain a clear hierarchy with
consistent heading sizes, body text, and label sizes. Avoid decorative fonts.
Color — The primary accent is teal (#0CC8A8). Use it for active states, CTAs, links, and progress
indicators. Severity colors are fixed: red for Critical, orange for High, yellow or amber for Medium, and
green for Low. Dark mode background is near-black (#0F0F0F to #1A1A1A). Light mode background is
white to light gray (#F5F5F5).
Spacing and Layout — Use consistent spacing units. The sidebar, header, and content area must align
precisely. Cards and table rows should have sufficient padding — nothing should feel cramped.
Components — Buttons, badges, chips, and inputs must look intentional and polished. Rounded
corners, subtle borders, and hover states are expected. Avoid default browser styling on any element.
Dark and Light Mode — Both modes must feel native, not inverted. Dark mode is not just
white-on-black. Surfaces, borders, and shadows must be adjusted per mode. The theme toggle must
apply changes instantly across all screens.
4 · REQUIREMENTS
R1 Recreate the UI
Implement all three screens matching the design reference closely. Pay attention to colors, spacing, font
weights, badge styles, and component sizes. Both dark mode and light mode must be fully functional
across all screens and togglable from within the app.
R2 Connect Screens With Navigation
The three screens must be connected through logical navigation. Clicking a scan row on the Dashboard
should open the Scan Detail screen. The Login screen should transition into the Dashboard on submit.
You are not given a flow diagram — figuring out sensible transitions is part of the task.
R3 Add Interactivity
