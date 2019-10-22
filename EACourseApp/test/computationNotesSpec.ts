import ComputationNotes from "../app/common/computationNotes";
import { expect } from 'chai';
import 'mocha';



describe("Test addNote function", () => {
   
    it("Note should be added if it is equal to 0", ()=> {
        let comp = new ComputationNotes();
        expect(comp.addNote(0)).to.equal(true);
    });

    it("Note should be added if it is greater than 0",()=>{
        let comp = new ComputationNotes();
        expect(comp.addNote(20)).to.equal(true);
    });

    it("Note should not be added if it is less than 0",()=>{
        let comp = new ComputationNotes();
        expect(comp.addNote(-10)).to.equal(false);
    });
});

describe("Test sumNotes function", () => {
   
    it("Sum should be equal to the sum of the all array's items if the array has elements", ()=> {
        let comp = new ComputationNotes();
        let expected = 1+2+3+4;
        comp.addNote(1);
        comp.addNote(2);
        comp.addNote(3);
        comp.addNote(4);
        expect(comp.sumNotes()).to.equal(expected);
    });

    it("Sum should be equal to 0 if the array of notes is empty",()=>{
        let comp = new ComputationNotes();
        expect(comp.sumNotes()).to.equal(0);
    });
});

describe("Test averageNotes function", () => {
   
    it("Average should be equal to the sum of the all array's items divided by the amount of items in the array", ()=> {
        let comp = new ComputationNotes();
        let expected = (1+2+3+4)/4;
        comp.addNote(1);
        comp.addNote(2);
        comp.addNote(3);
        comp.addNote(4);
        expect(comp.averageNotes()).to.equal(expected);
    });
});