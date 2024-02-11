export class CameraController{

    constructor(videoEl){

        this._videoEl = videoEl;

        navigator.mediaDevices.getUserMedia({
            video:true
        }).then(stream=>{


            this._stream = stream;
            //this._videoEl.src = URL.createObjectURL(stream); - // URL.createObjectURL(stream) nâo é mais suportado e foi usado na aula
            this._videoEl.srcObject = stream;
            this._videoEl.play();

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


