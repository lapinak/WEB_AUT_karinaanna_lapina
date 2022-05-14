import BasePage from "./BasePage";

class TestPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get exampleElement() {
        return cy.get("exampleSelector");
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get userEmail() {
        return cy.get("#userEmail");
    }

    static get checkGender() {
        return cy.get("#gender-radio-3");
    }

    static get userNumber() {
        return cy.get("#userNumber");
    }

    static get dateOfBirthInput() {
        return cy.get("#dateOfBirthInput");
    }

    static get monthPicker() {
        return cy.get(".react-datepicker__month-select");
    }

    static get yearPicker() {
        return cy.get(".react-datepicker__year-select");
    }

    static get dayPicker() {
        return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
    }

    static get subjectsInput() {
        return cy.get("#subjectsContainer");
    }

    static get economicsPicker() {
        return cy.get("#react-select-2-option-0");
    }

    static get hobbiesCheckBox() {
        return cy.get("#hobbies-checkbox-3");
    }

    static get uploadPicture() {
        return cy.get('input[type=file]');
    }

    static get currentAddress() {
        return cy.get("#currentAddress");
    }

    static get stateDropdown() {
        return cy.get("#state");
    }

    static get statePicker() {
        return cy.get("#react-select-3-option-0");
    }

    static get cityDropdown() {
        return cy.get("#city");
    }

    static get cityPicker() {
        return cy.get("#react-select-4-option-0");
    }

    static get formSubmit() {
        return cy.get("#submit");
    }

    static get tableRow() {
        return cy.get("tr");
    }
}

export default TestPage;