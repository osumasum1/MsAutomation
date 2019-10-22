"use strict";
var computationNotes_1 = require("../app/common/computationNotes");
var chai_1 = require('chai');
require('mocha');
describe("Test addNote function", function () {
    it("Note should be added if it is equal to 0", function () {
        var comp = new computationNotes_1.default();
        chai_1.expect(comp.addNote(0)).to.equal(true);
    });
    it("Note should be added if it is greater than 0", function () {
        var comp = new computationNotes_1.default();
        chai_1.expect(comp.addNote(20)).to.equal(true);
    });
    it("Note should not be added if it is less than 0", function () {
        var comp = new computationNotes_1.default();
        chai_1.expect(comp.addNote(-10)).to.equal(false);
    });
});
describe("Test sumNotes function", function () {
    it("Sum should be equal to the sum of the all array's items if the array has elements", function () {
        var comp = new computationNotes_1.default();
        var expected = 1 + 2 + 3 + 4;
        comp.addNote(1);
        comp.addNote(2);
        comp.addNote(3);
        comp.addNote(4);
        chai_1.expect(comp.sumNotes()).to.equal(expected);
    });
    it("Sum should be equal to 0 if the array of notes is empty", function () {
        var comp = new computationNotes_1.default();
        chai_1.expect(comp.sumNotes()).to.equal(0);
    });
});
describe("Test averageNotes function", function () {
    it("Average should be equal to the sum of the all array's items divided by the amount of items in the array", function () {
        var comp = new computationNotes_1.default();
        var expected = (1 + 2 + 3 + 4) / 4;
        comp.addNote(1);
        comp.addNote(2);
        comp.addNote(3);
        comp.addNote(4);
        chai_1.expect(comp.averageNotes()).to.equal(expected);
    });
});
//# sourceMappingURL=computationNotesSpec.js.map