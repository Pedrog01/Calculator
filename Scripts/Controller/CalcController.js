class CalcController {

    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

 initialize(){

 this.setDisplayDateTime();

    setInterval(()=>{

       this.setDisplayDateTime();

    },1000); 
}

    addEventListenerAll(element, events,fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });  

    }

    clearAll(){

        this._operation = [];

    }

    clearEntry(){
        this._operation.pop();
    }

    getLastOperantion(){

        return this._operation[this._operation.length-1];

    }   

    setLastOperation(valor){

        this._operation[this._operation.length-1] = valor;

    }

    isOperator(valor){

        return(['+','-','*','%','/'].indexOf(valor) > -1);

    }

    addOperation(valor){

        if (isNaN(this.getLastOperantion())){
            
            if(this.isOperator(valor)){

                this.setLastOperation(valor);

            }else if(isNaN(valor)){

                console.log(valor);

            }else {

                this._operation.push(valor);
            
            }

        }else {

            let newValor = this.getLastOperantion().toString() + valor.toString();
            this.setLastOperation(parseInt(newValor));
        }

        console.log(this._operation);

    }

    setError(){

        this.displayCalc = "Error";

    }

execBtn(valor){
    
    switch(valor) {
        case 'ac':
            this.clearAll();
        break;
        case 'ce':
            this.clearEntry();
        break;

        case 'soma':
            this.addOperation ('+');
            break;
        case 'subtracao':
            this.addOperation ('-');
            break;
        case 'divisao':
            this.addOperation ('/');
            break;
        case 'multiplicacao':
            this.addOperation ('*');
            break;
        case 'porcento':
            this.addOperation ('%');
             break;
        case 'igual':
            break;
        case 'ponto':
            this.addOperation ('.');
            break;
        default:
            this.setError();
                break;


        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        
        this.addOperation (parseInt(valor));

        break;

    }

            
        }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn,"click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");
                   
                this.execBtn(textBtn);
                

            });

            this.addEventListenerAll(btn,"mouseover mouseup mousedowm",e =>{

                btn.style.cursor = "pointer";   

            });


        });

    }

setDisplayDateTime()
    {
       this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
    
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }


get displayTime(){
    return this._timeEl.innerHTML;
}
set displayTime(valor){
    return this._timeEl.innerHTML =valor;
}

get displayDate(){
    return this._dateEl.innerHTML;
}

set displayDate(valor){
    return this._dateEl.innerHTML =valor;  
}

get displayCalc(){
return this._displayCalcEl.innerHTML;

}
set displayCalc(valor){
    this._displayCalcEl.innerHTML =valor;
}

get currentDate(){
    return new Date();
}

set currentDate(valor){
     this._currentDate =valor;
    }
}



