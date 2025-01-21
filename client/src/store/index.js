import { proxy } from "valtio";

const state = proxy({
   intro:true,//are we currently in the home page or not
   color:'#EFBD48',
   isLogoTexture: true,//are we currently displaying logo on our shirt
   isFullTexture:false,
   logoDecal:'./threejs.png',
   fullDecal:'./threejs.png'

})

export default state