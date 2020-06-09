import { Lightning, Utils } from "wpe-lightning-sdk"


export default class Splash extends Lightning.Component {

    static _template (){

        return {
            Background :{ 
                w: 1920, h: 1080,
                src: Utils.asset('images/background.png')

            },
            /*    
            Logo: {
                //coordinates of the image
                x: 200, y: 100, 
                //center of the image (middle X and middle Y => x,y is the center of the image)
                mount: 0.5, 
                src: Utils.asset('images/logo.png')
            },
            */
            LogoLarge: {
                //coordinates of the image
                x: 960, y: 400, 
                //center of the image (middle X and middle Y => x,y is the center of the image)
                mountX: 0.5, mountY:0.5, 
                src: Utils.asset('images/logo-large.png')

            },

            Spinner: {
                //coordinates of the image
                x: 960, y: 810,
                //center of the image (middle X and middle Y => x,y is the center of the image)
                mountX: 0.5, mountY:0.5, 
                src: Utils.asset('images/spinner.png')
            }

        }

    }

    _init() {
        /*
        this.backGroundAnimation.patch(
            { smooth:{ scale: [10, { duration: 4, delay: 4, timingFunction: 'linear' } ]}
        });
        //this.backGroundAnimation = this.tag('Background').setSmooth('scale', 1);
        */

        //BackGround Animation
        this.backGroundAnimation = this.tag("Background").animation({
            //atributes
            duration: 6, //duration 4 sec
            repeat: -1,  //plays all the time
            //actions
            actions:[{p:'scale', //Object property you wish to animate
                      v:{
                            0:1,     // time = 0% of duration size = 100%
                            0.5:1.2, // time = 50% of duration size = 120%
                            1:1      // time = 100% of duration size = 100%
                        }
                    }]
        });

        //Logo Large Animation
        this.logoLargeUpandDown = this.tag("LogoLarge").animation({
            //atributes
            duration: 6,   //default = 1
            repeat: -1,  //plays all the time
            //actions
            
            actions:[{
                        p: 'y',
                        v: {
                            sm: 0, 
                            0:400, 0.25: 350, 0.5:400, 0.75: 450, 1:400
                        }
                     }
            ]
        });

        //Sipinner Rotation
        this.sipnerRotation = this.tag("Spinner").animation({
            //atributes
            duration: 2,   //default = 1
            repeat: -1,  //plays al the time
            //actions
            actions:[
                        {
                            p:'rotation', //Object property you wish to animate
                            v:{ //values to change
                                sm: 0,
                                0: 0,        // time = 0% of duration ratate = 0
                                //0: { v: 0, sm: 0 },
                                1: 2*Math.PI // time = 50% of duration roate = 2pi
                            }
                        },
                        //see example -> https://rdkcentral.github.io/Lightning/docs/animations/overview
                        //{p: 'scaleX', v: { 0: {v: 1, s: 0}, 0.5: {v: -1, s: 0}, 1: {v: 1, s: 0}}}
                        {p: 'scaleX', v: { 0:1 , 0.5:-1, 1:1} }
                        
                    ]
        });
                
    }

    
    _active() {
        this.backGroundAnimation.start() //start the Back Ground Animation
        this.logoLargeUpandDown.start () //start the Logo Large Animation
        this.sipnerRotation.start() //start the Spinner Rotation
    
    }
    
    _inactive() {
        this.backGroundAnimation.stop() //start the Back Ground Animation
        this.logoLargeUpandDown.stop() //start the Logo Large Animation
        this.sipnerRotation.stop() //start the Spinner Rotation
    }



}