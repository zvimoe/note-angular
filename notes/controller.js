app.controller('form',function($scope,noteservice){
   $scope.note={
        text:'',
        date:'',
        hour:''
    }
    $scope.add=function(){
        console.log($scope.note);
    
var notes=noteservice.getNotes();
$scope.note.id=notes.lengh+1
noteservice.insertNote($scope.note);
    }
})
app.controller('viewnotes',function($scope,noteservice){

 noteservice.getNotes()
 
function onsucsess(notes){
    $scope.notes=notes
}

})