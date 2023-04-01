
type LogoProps = {
   backgroundColour: string,
   darkColour: string,
   highlightColour: string,
}

const ColouredLogo: React.FC<LogoProps> = props => {
   return (
         <svg version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg" transform="translate(8.3,8.3)">
            <defs id="defs2" />
            <g id="layer1" >
               <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141" transform="rotate(90)" d="m 200,-100.02923 a 100,100 0 0 1 -55.32548,89.495354 100,100 0 0 1 -104.781631,-9.54657" />
               <path fill={props.darkColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141-5" transform="rotate(-150)" d="M -37.320435,-24.641611 A 100,100 0 0 1 -86.60154,49.999425 100,100 0 0 1 -175.883,55.359656 l 39.28046,-91.962195 z" />
               <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141-1" transform="rotate(-30)" d="M 135.88434,124.63908 A 100,100 0 0 1 91.701621,220.05367 100,100 0 0 1 -13.39895,223.20422 L 36.602539,136.60254 Z" />
               <path fill={props.highlightColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.99996" stroke={props.highlightColour} strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="path9821" d="m 258.72842,152.63949 -8.86421,15.35326 -8.86421,15.35327 -8.86421,-15.35327 -8.86421,-15.35326 17.72842,0 z" transform="matrix(4.3023589,0,0,4.9679381,-936.8685,-715.8196)" clipPath="none" />
            </g>
            <g id="layer2">
               <rect fill={props.backgroundColour} fillOpacity="1" stroke="#00acab" strokeWidth="0" strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="rect12155" width="108.48437" height="26.665998" x="45.444" y="93.333" />
               <rect fill={props.darkColour} fillOpacity="1" stroke="#00acab" strokeWidth="0" strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="rect12394" width="80" height="26.666" x="60" y="93.333" />
            </g>
         </svg>
   )
}

export default ColouredLogo