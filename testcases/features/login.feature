Feature: Login Functionality
  Scenario: Login Functionality
    Given User navigates to the application
    When I enter the username "applitoolsautomation@yopmail.com" and password as "Test@123"
    When I click on login button
    Then User should be logged in successfully
    Then Logout from the application
