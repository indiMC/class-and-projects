class question{
    constructor(){
        this.title = createElement("h1");
        this.input1 = createInput("Enter your name her..");
        this.input2  = createInput("Enter correct option No..");
        this.button = createButton('submit');
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with letter E but has only one letter?");
        this.question.position(150,80);
        this.option1.html("1:everyone");
        this.option1.position(150,100);
        this.option2.html("2:envelope");
        this.option2.position(150,120);
        this.option3.html("3:Estimate");
        this.option3.position(150,140);
        this.option4.html("4:Example");
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input2.position(350,230);

        this.button.position(290,300);
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            gameState = gameState +1;
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount = contestantCount + 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}