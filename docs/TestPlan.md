# Test Plan Document
**About Conduit – A RealWorld Example App**

## 1. Introduction
This Test Plan has been created to comunicate the testing aproach to all project members. It includes the objectives, scope, risks and aproaches. This document will clearly identify the test deliverables, testing tools, testing methods, and what is deemed in and out of scope. It will be updated as the project evolvs to ensure client satisfaction by delivering a product of quality.

### About Conduit
This description is based on the RealWorld GitHub project: https://github.com/thanhdev/realworld-django-rest-framework-angular?tab=readme-ov-file.

Conduit is a Medium.com clone developped as part of the RealWorld Example Apps initiative. The choosen implementation uses Django REST Framework backend and Angular frontend. It demonstrates real-world features such as authentication, CRUD operations, comments, favorites and user profiles.

This project was selected becuase it provides production like functionality and follows the standard RealWorld API specification, making it highly suitable for manual and automated testing. Its coverage of frontend and backend workflows allows QA enginners to validate end-to-end scenarious, API integrity, and UI automation in a realistic aplication enviroment.

## 2. Quality Objectives

### a. Primary Objective
Ensure the system meets the key functional requirments for Articles and Comments, including auth, CRUD, favorites, and basic permissions, so users can complete core flows without issues.

### b. Secondary Objectives
- Perform manual testing of features promoted to Ready to Test across enviroments.
- Collaborate with developers in defect investigation and resoluction.
- Create and maintain baseline testcases for manual and automation.
- Identify, track and comunicate risks before release.

## 3. QA Team
Andrés Cruz – QA Enginner – andres.cruz@example.com.

## 4. Ramp-Up Tasks
- Review the tech stack and the main user flows.
- Setup automation tools Playwright for UI and Postman for API.
- Seed test acounts and initial content for reproducable runs.

## 5. Target Devices and Browsers
- Windows with Chrome latest.
- MacOS with Chrome latest and Safari latest.

## 6. Testing Environments
- Staging for main validation and regression before releases.
- Production for smoke test or sanity post deploy.
- Local setup for dev and QA using test data when needed.

## 7. Test Techniques
- **Smoke Testing:** A brief check that the build is stable enough to continue testing.
- **Functional Testing:** Confirms each feature behaves as the requirements describe, for valid and invalid inputs.
- **Integration Testing:** Confirms different parts of the system work together and exchange information correctly.
- **Exploratory Testing:** Time-boxed sessions where the tester investigates and designs tests on the fly to uncover issues.
- **Sanity Testing:** A short check after a small change to verify the fix and nearby behavior.
- **API Testing:** Checks that requests and responses are correct and that error messages are clear and consistent.
- **Performance Testing:** Checks that responses are quick and consistent under normal use.

## 8. Bugs Management
Defects will be tracked in GitHub Issues or Jira or Azure Devops. Each bug must include:
- Title and descrption.
- Steps to reproduce.
- Expected and actual results.
- Evidence logs or screenshots.
- Severity and prioirty.

## 9. Test Deliverables
- Testcases provided in a CSV file containing: id, title, gherkin scenario, steps, expected result, priority, type.
- Regression notes and reports after full runs.
- API Postman collection linked to the repo.
- Automated tests repo Playwright Type script that covers critial flows.

## 10. Test Tools
- Playwright Type script for UI and E2E.
- Postman for API.
- GitHub Issues or Jira or Azure Devops for tracking.

## 11. Automation Strategy with Playwright + Type script
- Plan P1 flows: articles, comments, login, sign up.
- Build a small smoke set to run fast and give quick feedback.
- Expand coverage to P1 flows with positive and negative paths and simple permissions checks.
- Use test users and small data sets to keep runs repeatable.
- Report results with html reports.
- Maintain and update the suite when flows or UI change.

## 12. Risks and Contingencies
- **Risk:** Old data shown on screen after actions.
  **Possibility:** Medium.
  **Impact:** Medium; users may see incorrect info and take wrong actions.
  **Solution:** Refresh the view after each action, re-read data from the source, and add a quick check that the screen shows the updated information.

- **Risk:** Env downtime.
  **Possibility:** Low.
  **Impact:** High; testing and releases are blocked.
  **Solution:** Notify DevOps immediately, switch to tasks that do not depend on the env, and re-schedule tests once service is restored.

- **Risk:** Third party or API outage.
  **Possibility:** Medium.
  **Impact:** High; key flows cannot be completed.
  **Solution:** Log details and inform the team, retry when the service is back, and, if possible, use a temporary fallback or mock data to continue limited checks.

