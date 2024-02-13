import { ClassEvent } from "../util/ClassEvent";

export class MicrophoneController extends ClassEvent {

    constructor(){

        super();

        this._stream = null; //Adicionado pelo GP para realizar ajuste relacionado a alteração de URL.createObjectURL(stream)
        navigator.mediaDevices.getUserMedia({
            audio:true
        }).then(stream=>{

            this._stream = stream; 

            let audio = new Audio();

           // audio.src = URL.createObjectURL(stream) - não é suportado mais por navegadores 
           audio.srcObject = stream;
            
           audio.play();

          this.trigger('play', audio);

        }).catch(err=>{

            console.error(err);

        });

    }

    stop(){

        this._stream.getTracks().forEach(track => {
            track.stop();

        });
    }


}