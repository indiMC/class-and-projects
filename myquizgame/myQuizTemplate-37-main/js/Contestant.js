class Contestant {
    constructor(){
      this.name = "";
      this.answer = 0;
      this.index = null;
    }
  
    getCount(){
      contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static readContestant(){
      database.ref("contestants").on("value",function(data){
        data.val();
        allContestants = data.val();
  
      })
    }
  }
  