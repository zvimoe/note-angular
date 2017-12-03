app.directive('viewNotes',function(){
    return{
        template:"<div class='note'><p>{{n.text}}</p><p>{{n.date}}  {{n.time}}</p></div>"
      
        
    }
})