# Test Plan Document
**About Conduit - A RealWorld Example App**

## 1. Introduction
This Test Plan has been created to communicate the testing approach to all project members. It includes the objectives, scope, risks, and approaches. This document will clearly identify the test deliverables, testing tools, testing methods, and what is deemed in and out of scope. It will be updated as the project evolves to ensure client satisfaction by delivering a product of quality.

### About Conduit
This description is based on the RealWorld GitHub project: https://github.com/thanhdev/realworld-django-rest-framework-angular?tab=readme-ov-file.

Conduit is a Medium.com clone developed as part of the RealWorld Example Apps initiative. The chosen implementation uses Django REST Framework (backend) and Angular (frontend). It demonstrates real-world features such as authentication, CRUD operations, comments, favorites, and user profiles.

This project was selected because it provides production-like functionality and follows the standard RealWorld API specification, making it highly suitable for manual and automated testing. Its coverage of frontend and backend workflows allows QA engineers to validate end-to-end scenarios, API integrity, and UI automation in a realistic application environment.

## 2. Quality Objectives

### a. Primary Objective
Ensure the system meets the key functional requirements for Articles and Comments, including auth, CRUD, favorites, and basic permissions, so users can complete core flows without issues.

### b. Secondary Objectives
- Perform manual testing of features promoted to Ready to Test across environments.
- Collaborate with developers in defect investigation and resolution.
- Create and maintain baseline test cases for manual and automation.
- Identify, track, and communicate risks before release.

## 3. QA Team
Andrés Cruz - QA Engineer - andres.cruz@example.com.

## 4. Ramp-Up Tasks
- Review the tech stack and the main user flows.
- Set up automation tools: Playwright for UI and Postman for API.
- Seed test accounts and initial content for reproducible runs.

## 5. Target Devices and Browsers
- Windows with latest Chrome.
- macOS with latest Chrome and Safari.

## 6. Testing Environments
- Staging for main validation and regression before releases.
- Production for smoke test or sanity post-deploy.
- Local setup for development and QA using test data when needed.

## 7. Test Techniques
- **Smoke Testing:** A brief check that the build is stable enough to continue testing.
- **Functional Testing:** Confirms each feature behaves as the requirements describe, for valid and invalid inputs.
- **Integration Testing:** Confirms different parts of the system work together and exchange information correctly.
- **Exploratory Testing:** Time-boxed sessions where the tester investigates and designs tests on the fly to uncover issues.
- **Sanity Testing:** A short check after a small change to verify the fix and nearby behavior.
- **API Testing:** Checks that requests and responses are correct and that error messages are clear and consistent.
- **Performance Testing:** Checks that responses are quick and consistent under normal use.

## 8. Bug Management
Defects will be tracked in GitHub Issues, Jira, or Azure DevOps. Each bug must include:
- Title and description.
- Steps to reproduce.
- Expected and actual results.
- Evidence logs or screenshots.
- Severity and priority.

## 9. Test Deliverables
- Test cases provided in a CSV file containing: id, title, Gherkin scenario, steps, expected result, priority, type.
- Regression notes and reports after full runs.
- API Postman collection linked to the repo.
- Automated tests repo: Playwright TypeScript that covers critical flows.

## 10. Test Tools
- Playwright TypeScript for UI and E2E.
- Postman for API.
- GitHub Issues, Jira, or Azure DevOps for tracking.

## 11. Automation Strategy with Playwright + TypeScript
- Plan P1 flows: articles, comments, login, sign-up.
- Build a small smoke set to run fast and give quick feedback.
- Expand coverage to P1 flows with positive and negative paths and simple permissions checks.
- Use test users and small data sets to keep runs repeatable.
- Report results with HTML reports.
- Maintain and update the suite when flows or UI change.

## 12. Risks and Contingencies
- **Risk:** Old data shown on screen after actions.
  **Possibility:** Medium.
  **Impact:** Medium; users may see incorrect info and take wrong actions.
  **Solution:** Refresh the view after each action, re-read data from the source, and add a quick check that the screen shows the updated information.

- **Risk:** Environment downtime.
  **Possibility:** Low.
  **Impact:** High; testing and releases are blocked.
  **Solution:** Notify DevOps immediately, switch to tasks that do not depend on the environment, and reschedule tests once service is restored.

- **Risk:** Third-party or API outage.
  **Possibility:** Medium.
  **Impact:** High; key flows cannot be completed.
  **Solution:** Log details and inform the team, retry when the service is back, and, if possible, use a temporary fallback or mock data to continue limited checks.

## 13. Test Cases

| ID   | Title                                           | Gherkin Scenario | Steps | Expected Result | Priority | Type |
|------|-------------------------------------------------|------------------|-------|-----------------|----------|------|
| TC1  | User is able to Register - HP                   | ```gherkin
Given a user at Sign Up screen
When the user sets a valid Username
And the user sets a valid email
And the user sets a valid password
And the user clicks Sign Up button
Then the user is shown with a success label "Registration successful. Redirecting to login page..."
And the user is redirected to Login screen
``` | 1. The user sets a valid Username<br>2. The user sets a valid email<br>3. The user sets a valid password<br>4. The user clicks Sign Up button | The user is shown with a success label "Registration successful. Redirecting to login page..."<br>And the user is redirected to Login screen | High | E2E |
| TC2  | User is not able to Register with Invalid credentials - SP | ```gherkin
Given a user at Sign Up screen
When the user sets a invalid Username
And the user sets a invalid email
And the user sets a invalid password
And the user clicks Sign Up button
Then the user is shown with an error label "Email: A user with that email already exists.
Username: A user with that username already exists."
``` | 1. The user sets a invalid Username<br>2. The user sets a invalid email<br>3. The user sets a valid password<br>4. The user clicks Sign Up button | The user is shown with an error label "Email: A user with that email already exists.<br>Username: A user with that username already exists." | High | UI |
| TC3  | User is able to access Sign In screen from Sign Up - HP | ```gherkin
Given a user at Sign Up screen
When the user clicks "Have an account?" label
Then the user is redirected to Sign In screen
``` | 1. The user clicks "Have an account?" label | The user is redirected to Sign In screen | Medium | E2E |
| TC4  | User is able to Sign In - HP                     | ```gherkin
Given a user at Log In screen
When the user sets a valid email
And the user sets a valid password
And the user clicks the Sign In button
Then the user is redirected to Home screen
And the user is able to see his username name replace Sign In and Sign Up buttons
``` | 1. The user sets a valid email<br>2. The user sets a valid password<br>3. The user clicks the Sign In button | The user is redirected to Home screen<br>And the user is able to see his username name replace Sign In and Sign Up buttons | High | E2E |
| TC5  | User is not able to sign in with invalid credentials - SP | ```gherkin
Given a user at Log In screen
When the user sets a invalid email
And the user sets a invalid password
And the user clicks the Sign In button
Then the user is shown with an error label "Invalid email or password"
``` | 1. The user sets a invalid email<br>2. The user sets a invalid password<br>3. The user clicks the Sign In button | The user is shown with an error label "Invalid email or password" | High | UI |
| TC6  | User is able to access Sign Up screen from Sign In - HP | ```gherkin
Given a user at Sign In screen
When the user clicks "Need an account?" label
Then the user is redirected to Sign Up screen
``` | 1. The user clicks "Need an account?" label | The user is redirected to Sign Up screen | Medium | E2E |
| TC7  | User is able to create a New Article - HP        | ```gherkin
Given a user Home screen
And the user has already logged in to an account
When the user clicks the "New Article" button
And the user sets an Article Title
And the user sets an Article Description
And the user set an Article on Write Your Article input
And the user is able to set tags
And the user clicks the "Publish Article" button
Then the user is shown with a success label "Published successfully!"
And the user is redirected to Home screen
``` | 1. The user clicks the "New Article" button<br>2. The user sets an Article Title<br>3. The user sets an Article Description<br>4. The user set an Article on Write Your Article input<br>5. The user is able to set tags<br>6. The user clicks the "Publish Article" button | The user is shown with a success label "Published successfully!"<br>And the user is redirected to Home screen | High | E2E |
| TC8  | User is able to edit an Article - HP             | ```gherkin
Given a user at an Article screen
And the Article is owned by the user
When the user clicks Edit Article button
And the user updates the Article Title
And the user updates the Article Description
And the user updates the Article on Write Your Article input
And the user updates the tags
And the user clicks the "Publish Article" button
Then the user is shown with a success label "Published successfully!"
And the user is redirected to recently edited article
``` | 1. The user clicks the "Edit Article" button<br>2. The user sets an Article Title<br>3. The user sets an Article Description<br>4. The user set an Article on Write Your Article input<br>5. The user is able to set tags<br>6. The user clicks the "Publish Article" button | The user is shown with a success label "Published successfully!"<br>And the user is redirected to recently edited article | High | E2E |
| TC9  | User is able to delete an Article - SP           | ```gherkin
Given a user at an Article screen
And the article is owned by the user
When the user clicks Delete Article button
And the user confirmes Article Deletion
Then the Article is deleted
And the user is redirected to Home screen
``` | 1. The user clicks Delete Article button<br>2. The user confirmes Article Deletion | The Article is deleted<br>And the user is redirected to Home screen | High | E2E |
| TC10 | User is able to Post Comments - HP               | ```gherkin
Given a user at an Article screen
And the user has logged in before
When the user sets a Comment
And the user clicks the Post Comment button
Then the user is able to see the comment is shown at the article comments section
``` | 1. The user sets a Comment<br>2. The user clicks the Post Comment button | The user is able to see the comment is shown at the article comments section | High | E2E |
| TC11 | User is able to Delete Comments - SP             | ```gherkin
Given a user at an Article screen
And the user has logged in before
And the user has commented before
When the user clicks the delete comment button
And the user confirms the Comment Deletion
Then the user is able to see the comment is deleted
``` | 1. The user clicks the delete comment button<br>2. The user confirms the Comment Deletion | The user is able to see the comment is deleted | High | E2E |

Definitions:
HP = Happy Path
SP = Sad Path
E2E = End to End
UI = User Interface