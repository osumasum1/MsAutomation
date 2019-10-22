 export default class ComputationNotes{
    notes: number[];

    constructor(){
       this.notes = [];
    }

    public addNote(note:number){
        
        if (note >= 0) {
            this.notes.push(note);
            return true;    
        }
        else{
            return false;
        }
        
    }

    public sumNotes(){
        let resp = 0;
        this.notes.forEach(element => {
            resp = resp + element;
        });
        return resp;
    }

    public averageNotes(){
        return this.sumNotes()/this.notes.length;
    }

    static sera(){
        return 2;
    }
}