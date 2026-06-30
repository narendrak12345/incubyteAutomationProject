Feature: Parabank Registration and Login

  As a new user I want to register an account
  So that I can login successfully

  Scenario: Register a new user and login
    Given I launch the Parabank application
    When I click on Register link
    And I register a new user
    Then I should see succesful registered message
    And I logout from the application
    When I login with the registered credentials
    Then I should see the Accounts Overview page
    Then I should see the account balance