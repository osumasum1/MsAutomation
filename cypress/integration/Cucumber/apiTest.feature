Feature: Test Api

    Scenario: Verify that it is possible to post a course
        When I post a course in API with the following information:
            | attributes | values            |
            | title      | Executeautomation |
            | author     | Osmar             |
        Then I verify that the course is posted with the correct data

    Scenario: Verify that it is not possible to get a course by id
        Given I post a course in API with the following information:
            | attributes | values            |
            | title      | Executeautomation |
            | author     | Osmar             |
        When I get the course created by id in API
        Then I verify that the course is posted with the correct data