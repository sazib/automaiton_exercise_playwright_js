Feature: Login Functionality
  Background:
    Given Open the URL
    Scenario:  Login and Logouut Functionality for site https://www.saucedemo.com/
      Given Open the URL
      When User enters the username "<username>" and password "<password>"
      And User clicks on the login button
      Then User should be logged in successfully
      When User clicks on HamburgerMenu
      And Logout from the application
      Then User should be in login page

      Examples:
      | username | passwords |
      | standard_user | secret_sauce |
      | visual_user   | secret_sauce |