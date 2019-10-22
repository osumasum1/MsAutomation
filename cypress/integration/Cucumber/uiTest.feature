Feature: UI Test

    Scenario: Verify that "Course Created!" alert message is displayed after clickin on Submit button
        Given I open the UI application
        And I click on Create Courses link
        And I fill up the form with the following information:
            | Field    | Value       |
            | Name     | Nuevo Curso |
            | Duration | 2 meses     |
            | Level    | 3           |
        When I click on Submit button
        Then I verify that Course Created! alert message is displayed