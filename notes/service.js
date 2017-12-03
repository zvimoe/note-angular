'use strict'
app.service('noteservice',function(){

   this.insertNote=function(note){
      var notes = this.getNotes();
     // console.log(typeof notes);
      notes.push(note)
    localStorage.setItem('notes', JSON.stringify(notes));

   }
   this.deleteNote=function(id){
    var notes= this.getNotes()
    if(notes>id){
        notes.splice(id+1,1)
    }
  localStorage.setItem('notes',notes)
    }
   


  this.getNotes=function(){
    var notes= localStorage.getItem('notes') || [];
     
  }.then(onsucsess(notes))

       

        
   
})