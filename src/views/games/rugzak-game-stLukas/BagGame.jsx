import React, { useEffect, useState } from 'react'
import ReactDOM, { render } from 'react-dom';
import Card from './components/Card';
import Bag from './components/Bag';
import Board from './components/Board';
import Finished from './components/Finished'

// STYLE
import '../../../sass/games/_bag.scss'
export default function BagGame() {

    const [gameOver, setGameOver] = useState(false)
    const [matchedOrgans, setMatchOrgans] = useState([])
    
      return (
          <div className="bagGame">
              <div className="title">
                <h2>Wat neem ik mee?</h2>
                <h5>Sleep de juiste benodigdheden in de zak.</h5>
            </div>
          
          <main className="flexbox">
          
                <Bag id="board-1" className="board">               
                <div className="bag organs">
                <svg id="bagsvg" xmlns="http://www.w3.org/2000/svg" width="285.591" height="336.687" viewBox="0 0 285.591 336.687">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_32" data-name="Path 32" d="M-196.553,170.268a23.494,23.494,0,0,1-11.909,5.455c-7.379,1.1-8.645,14.634-19.268,12.734s-31.387,21.766-21.421,26.429,5.013,14.729,16.642,9.276,16.587-20.452,20.251-21.352,12.233-.153,17.591-2.426a79.817,79.817,0,0,1,13.044-3.777Z" fill="none"/>
    </clipPath>
  </defs>
  <g id="Group_78" data-name="Group 78" transform="translate(350.281 -91.179)">
    <rect id="Rectangle_3" data-name="Rectangle 3" width="272.386" height="262.18" transform="translate(-341.575 125.677)" fill="#312411"/>
    <g id="bagbrush"className="fullbag">
      <path id="Path_1" data-name="Path 1" d="M-270.918,152.723c.014.095,1.4,9.546,1.7,15.608a13.741,13.741,0,0,1-.241,3.922c-.159.637-.3,1.272-.437,1.9.359-.188.827-.1,1.232,1.05.785,2.24.962,47.154-.285,49.2-1.146,1.879-2.093,1.893-2.471-.641l-.065,6.129A1.5,1.5,0,0,0-270,231.41l.9.01a1.641,1.641,0,0,0,1.657-1.622l.491-46.105a45.314,45.314,0,0,1,1.413-10.459,17.9,17.9,0,0,0,.357-5.1c-.184-3.742-.75-8.587-1.187-11.963a4,4,0,0,0-4.554-3.446Z" fill="#56b8c4"/>
      <path id="Path_2" data-name="Path 2" d="M-275.053,167.325s4.664.685,6.362-2.78c0,0,1.588-6.36-.347-10.293,0,0-2.631-3.1-5.379-2.323Z" fill="#d5d5d3"/>
      <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="7.684" cy="1.503" rx="7.684" ry="1.503" transform="translate(-276.694 167.241) rotate(-87.378)" fill="#fcf9f4"/>
      <path id="Path_3" data-name="Path 3" d="M-269.893,174.158q-.39,1.836-.644,3.638a45.723,45.723,0,0,0-.452,5.854l-.059,5.511c.507-.511.942-.765,1.171-.625.429.262-.033,1.8-1.032,3.437-.057.093-.114.184-.172.274l-.108,10.108c.49-.484.909-.721,1.131-.585.429.262-.033,1.8-1.031,3.437-.044.072-.088.141-.132.21l-.081,7.524c.645-.748,1.226-1.154,1.5-.985.429.262-.033,1.8-1.032,3.437-.165.271-.335.526-.505.764l-.081,7.607c.378,2.534,1.325,2.52,2.471.641,1.247-2.043,1.07-46.957.285-49.2C-269.066,174.054-269.534,173.97-269.893,174.158Z" fill="#a2d7e4"/>
      <path id="Path_4" data-name="Path 4" d="M-269.8,211.956c-.277-.169-.858.237-1.5.985l-.013,1.276-.021,1.94c.17-.238.34-.493.505-.764C-269.832,213.756-269.37,212.218-269.8,211.956Z" fill="#56b8c4"/>
      <path id="Path_5" data-name="Path 5" d="M-270.058,201.77c-.222-.136-.641.1-1.131.585l-.032,3.062c.044-.069.088-.138.132-.21C-270.091,203.571-269.629,202.032-270.058,201.77Z" fill="#56b8c4"/>
      <path id="Path_6" data-name="Path 6" d="M-269.877,188.536c-.229-.14-.664.114-1.171.625l-.033,3.086c.058-.09.115-.181.172-.274C-269.91,190.336-269.448,188.8-269.877,188.536Z" fill="#56b8c4"/>
      <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.1 164.029) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.675 163.959) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_4" data-name="Ellipse 4" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.221 163.775) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.725 163.631) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.335, 164.682)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_7" data-name="Ellipse 7" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.183 162.655) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.758 162.585) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_9" data-name="Ellipse 9" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.304 162.402) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_10" data-name="Ellipse 10" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.808 162.257) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_11" data-name="Ellipse 11" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.418, 163.309)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_12" data-name="Ellipse 12" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.091 161.211) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_13" data-name="Ellipse 13" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.667 161.141) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_14" data-name="Ellipse 14" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.213 160.958) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_15" data-name="Ellipse 15" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.716 160.813) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_16" data-name="Ellipse 16" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.326, 161.865)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_17" data-name="Ellipse 17" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.133 159.824) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_18" data-name="Ellipse 18" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.708 159.754) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_19" data-name="Ellipse 19" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.254 159.57) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_20" data-name="Ellipse 20" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.758 159.426) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_21" data-name="Ellipse 21" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.368, 160.477)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_22" data-name="Ellipse 22" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.07 158.46) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_23" data-name="Ellipse 23" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.646 158.39) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_24" data-name="Ellipse 24" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.192 158.207) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_25" data-name="Ellipse 25" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.696 158.062) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_26" data-name="Ellipse 26" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.306, 159.114)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_27" data-name="Ellipse 27" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.034 157.042) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_28" data-name="Ellipse 28" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.609 156.972) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_29" data-name="Ellipse 29" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.155 156.788) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_30" data-name="Ellipse 30" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.659 156.643) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_31" data-name="Ellipse 31" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.269, 157.695)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_32" data-name="Ellipse 32" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.783 155.596) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_33" data-name="Ellipse 33" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.359 155.526) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_34" data-name="Ellipse 34" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.904 155.342) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_35" data-name="Ellipse 35" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.408 155.197) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_36" data-name="Ellipse 36" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.018, 156.249)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_37" data-name="Ellipse 37" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-275.715 154.437) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_38" data-name="Ellipse 38" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-275.347 154.377) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_39" data-name="Ellipse 39" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-274.953 154.217) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_40" data-name="Ellipse 40" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-274.523 154.092) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_41" data-name="Ellipse 41" cx="0.526" cy="0.161" rx="0.526" ry="0.161" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.184, 155.004)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_42" data-name="Ellipse 42" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-275.506 153.208) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_43" data-name="Ellipse 43" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-275.138 153.147) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_44" data-name="Ellipse 44" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-274.744 152.988) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_45" data-name="Ellipse 45" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-274.314 152.863) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_46" data-name="Ellipse 46" cx="0.13" cy="0.426" rx="0.13" ry="0.426" transform="translate(-274.919 152.18) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_47" data-name="Ellipse 47" cx="0.13" cy="0.426" rx="0.13" ry="0.426" transform="translate(-274.571 152.078) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_48" data-name="Ellipse 48" cx="0.166" cy="0.543" rx="0.166" ry="0.543" transform="translate(-275.894 165.333) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_49" data-name="Ellipse 49" cx="0.166" cy="0.543" rx="0.166" ry="0.543" transform="translate(-275.514 165.271) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_50" data-name="Ellipse 50" cx="0.166" cy="0.543" rx="0.166" ry="0.543" transform="translate(-275.108 165.106) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_51" data-name="Ellipse 51" cx="0.166" cy="0.543" rx="0.166" ry="0.543" transform="translate(-274.664 164.977) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_52" data-name="Ellipse 52" cx="0.126" cy="0.411" rx="0.126" ry="0.411" transform="translate(-275.579 166.349) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_53" data-name="Ellipse 53" cx="0.129" cy="0.421" rx="0.129" ry="0.421" transform="translate(-275.178 166.236) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_54" data-name="Ellipse 54" cx="0.129" cy="0.421" rx="0.129" ry="0.421" transform="translate(-274.827 166.016) rotate(-2.463)" fill="#d5d5d3"/>
      <path id="Path_7" data-name="Path 7" d="M-273.709,163.351l5.249.413.006-.312Z" fill="#bebdbe"/>
      <path id="Path_8" data-name="Path 8" d="M-273.364,159.509l5.249.413.006-.312Z" fill="#bebdbe"/>
      <path id="Path_9" data-name="Path 9" d="M-273.847,155.082l5.256.326-.093-.284Z" fill="#bebdbe"/>
      <path id="Path_10" data-name="Path 10" d="M-273.707,153.38l4,.176-.233-.221Z" fill="#bebdbe"/>
      <path id="Path_11" data-name="Path 11" d="M-269.813,165.939l-4.453-.165,4.735.047Z" fill="#bebdbe"/>
      <path id="Path_12" data-name="Path 12" d="M-268.245,161.882l-5.24-.579,5.272.375Z" fill="#bebdbe"/>
      <path id="Path_13" data-name="Path 13" d="M-268.136,157.843l-5.24-.579,5.233.417Z" fill="#bebdbe"/>
    </g>
    <g id="bagbook" className="fullbag">
      <path id="Rectangle_4" data-name="Rectangle 4" d="M0,0H38.851A21.723,21.723,0,0,1,60.575,21.723V58.26A21.723,21.723,0,0,1,38.851,79.983H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-152.992 170.42)" fill="#fcfcfd"/>
      <path id="Rectangle_5" data-name="Rectangle 5" d="M0,0H38.851A21.723,21.723,0,0,1,60.575,21.723V58.8A21.723,21.723,0,0,1,38.851,80.523H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-155.322 169.675)" fill="#f0aa00"/>
      <ellipse id="Ellipse_55" data-name="Ellipse 55" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.982 173.288)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_56" data-name="Ellipse 56" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.632 180.321)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_57" data-name="Ellipse 57" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.807 187.354)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_58" data-name="Ellipse 58" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.457 194.386)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_59" data-name="Ellipse 59" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.719 201.419)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_60" data-name="Ellipse 60" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.37 208.452)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_61" data-name="Ellipse 61" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.545 215.485)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_62" data-name="Ellipse 62" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.195 222.518)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_63" data-name="Ellipse 63" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.588 229.55)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_64" data-name="Ellipse 64" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.239 236.583)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_65" data-name="Ellipse 65" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.414 243.616)" fill="#c7c6c6"/>
    </g>
    <g id="bagtowel" className="fullbag" transform="translate(-5 -9)">
      <path id="Path_14" data-name="Path 14" d="M-271.873,194.585c-1.6-1.272-3.475-2.681-5.532-4.069l.218,15.6c1.972,1.34,3.772,2.694,5.314,3.921Z" fill="#fcd58e"/>
      <path id="Path_15" data-name="Path 15" d="M-276.756,210.264l-.193-16.835c-.649,4.194-5.342,13.248-17.846,8.727-13.728-4.963-14.681-13.363-14.747-14.507.045,1.158.387,9.922.8,20.253C-300.854,214.585-287.894,221.79-276.756,210.264Z" fill="#fbb53b"/>
      <path id="Path_16" data-name="Path 16" d="M-276.968,191.744l.019,1.685A3.783,3.783,0,0,0-276.968,191.744Z" fill="#f4d9aa"/>
      <path id="Path_17" data-name="Path 17" d="M-309.542,187.649l-.006-.131S-309.547,187.564-309.542,187.649Z" fill="#f4d9aa"/>
      <path id="Path_18" data-name="Path 18" d="M-276.593,224.558l-.163-14.294c-11.138,11.526-24.1,4.321-31.987-2.362.176,4.422.366,9.13.55,13.652C-300.44,228.165-287.675,235.4-276.593,224.558Z" fill="#f4d9aa"/>
      <path id="Path_19" data-name="Path 19" d="M-276.428,239.008l-.165-14.45c-11.082,10.839-23.847,3.607-31.6-3,.187,4.572.368,8.952.526,12.652C-300.28,240.752-287.63,248.6-276.428,239.008Z" fill="#fbb53b"/>
      <path id="Path_20" data-name="Path 20" d="M-276.412,240.4l-.016-1.391c-11.2,9.589-23.852,1.744-31.239-4.8.251,5.873.443,10.029.5,10.505.227,1.816,4.2,9.305,17.362,9.646S-276.412,240.4-276.412,240.4Z" fill="#f4d9aa"/>
      <path id="Path_21" data-name="Path 21" d="M-279.574,199.353c2.045-2.441,3.058-6.023,2.141-10.814-2.343-12.247-17.362-6.468-17.362-6.468v11.056C-284.211,190.471-280.678,195.062-279.574,199.353Z" fill="#a56903"/>
      <path id="Path_22" data-name="Path 22" d="M-279.574,199.353c-1.1-4.291-4.637-8.882-15.221-6.226v9.029C-289.7,204.383-283.1,203.562-279.574,199.353Z" fill="#d0ab6e"/>
      <path id="Path_23" data-name="Path 23" d="M-294.8,182.93v15.454c6.016.766,12.409,4.2,17.608,7.734l-.218-15.6C-282.564,187.036-288.863,183.686-294.8,182.93Z" fill="none"/>
      <path id="Path_24" data-name="Path 24" d="M-294.8,182.071v.859c5.932.756,12.231,4.106,17.39,7.586l-.028-1.977S-283.561,177.531-294.8,182.071Z" fill="none"/>
      <path id="Path_25" data-name="Path 25" d="M-294.8,182.93v-.859c11.234-4.54,17.362,6.468,17.362,6.468l.028,1.977c2.057,1.388,3.934,4.694,5.532,5.966V184.227A32.9,32.9,0,0,0-286.511,172.2c-10.1-4.312-16.455.113-18.724,1.816s-4.694,3.785-4.313,13.5a11.149,11.149,0,0,0,.3,2.142C-305.581,183.791-300.349,182.223-294.8,182.93Z" fill="#ed9900"/>
      <path id="Path_26" data-name="Path 26" d="M-301.716,198.906a31.371,31.371,0,0,0,6.921,3.25v-3.772A15.828,15.828,0,0,0-301.716,198.906Z" fill="#fcd58e"/>
      <path id="Path_27" data-name="Path 27" d="M-271.873,210.039c-1.542-1.227-3.342-2.581-5.314-3.921l.205,14.683c1.87,1.249,3.6,2.52,5.109,3.7Z" fill="#ed9900"/>
      <path id="Path_28" data-name="Path 28" d="M-309.251,189.66c1,4.184,4.326,7.217,7.535,9.246a15.828,15.828,0,0,1,6.921-.522V182.93C-300.349,182.223-305.581,183.791-309.251,189.66Z" fill="#fcd58e"/>
      <path id="Path_29" data-name="Path 29" d="M-271.873,242.668V224.5c-1.512-1.18-3.239-2.451-5.109-3.7l.23,16.42C-274.256,236.427-271.873,242.668-271.873,242.668Z" fill="#fcd58e"/>
    </g>
    <g id="bagsocks" className="fullbag bagsocks">
      <path id="Path_30" data-name="Path 30" d="M-196.428,170.193a23.5,23.5,0,0,1-11.91,5.456c-7.378,1.1-8.644,14.633-19.267,12.734s-31.388,21.766-21.421,26.429,5.013,14.729,16.642,9.275,16.587-20.451,20.251-21.351,12.232-.153,17.591-2.426a79.818,79.818,0,0,1,13.044-3.777Z" fill="#d2d2d2"/>
      <ellipse id="Ellipse_66" data-name="Ellipse 66" cx="2.511" cy="16.355" rx="2.511" ry="16.355" transform="matrix(0.86, -0.511, 0.511, 0.86, -183.748, 162.655)" fill="#efecec"/>
      <path id="Path_31" data-name="Path 31" d="M-181.59,161.371l-14.838,8.822s4.436,21.587,14.93,26.34l16.624-7.046S-182.32,173.655-181.59,161.371Z" fill="#efecec"/>
      <g id="Group_72" data-name="Group 72">
        <g id="Group_71" data-name="Group 71" clip-path="url(#clip-path)">
          <g id="Group_70" data-name="Group 70">
            <circle id="Ellipse_67" data-name="Ellipse 67" cx="3.703" cy="3.703" r="3.703" transform="translate(-204.165 173.609)" fill="#de1e28"/>
            <circle id="Ellipse_68" data-name="Ellipse 68" cx="3.806" cy="3.806" r="3.806" transform="translate(-200.694 184.499)" fill="#de1e28"/>
            <circle id="Ellipse_69" data-name="Ellipse 69" cx="2.982" cy="2.982" r="2.982" transform="translate(-193.189 192.989)" fill="#de1e28"/>
            <circle id="Ellipse_70" data-name="Ellipse 70" cx="3.703" cy="3.703" r="3.703" transform="translate(-235.985 188.346)" fill="#de1e28"/>
            <circle id="Ellipse_71" data-name="Ellipse 71" cx="3.806" cy="3.806" r="3.806" transform="translate(-231.753 197.625)" fill="#de1e28"/>
            <circle id="Ellipse_72" data-name="Ellipse 72" cx="2.982" cy="2.982" r="2.982" transform="translate(-225.009 207.726)" fill="#de1e28"/>
            <circle id="Ellipse_73" data-name="Ellipse 73" cx="3.703" cy="3.703" r="3.703" transform="translate(-212.151 181.826)" fill="#de1e28"/>
            <circle id="Ellipse_74" data-name="Ellipse 74" cx="3.806" cy="3.806" r="3.806" transform="translate(-207.813 192.2)" fill="#de1e28"/>
            <circle id="Ellipse_75" data-name="Ellipse 75" cx="3.703" cy="3.703" r="3.703" transform="translate(-241.208 197.705)" fill="#de1e28"/>
            <circle id="Ellipse_76" data-name="Ellipse 76" cx="3.806" cy="3.806" r="3.806" transform="translate(-234.427 208.024)" fill="#de1e28"/>
            <circle id="Ellipse_77" data-name="Ellipse 77" cx="2.982" cy="2.982" r="2.982" transform="translate(-217.631 191.455)" fill="#de1e28"/>
            <circle id="Ellipse_78" data-name="Ellipse 78" cx="2.982" cy="2.982" r="2.982" transform="translate(-222.061 181.931)" fill="#de1e28"/>
            <circle id="Ellipse_79" data-name="Ellipse 79" cx="2.982" cy="2.982" r="2.982" transform="translate(-213.38 200.293)" fill="#de1e28"/>
            <circle id="Ellipse_80" data-name="Ellipse 80" cx="2.982" cy="2.982" r="2.982" transform="translate(-226.943 189.575)" fill="#de1e28"/>
            <circle id="Ellipse_81" data-name="Ellipse 81" cx="2.982" cy="2.982" r="2.982" transform="translate(-221.628 199.45)" fill="#de1e28"/>
            <circle id="Ellipse_82" data-name="Ellipse 82" cx="2.982" cy="2.982" r="2.982" transform="translate(-243.019 208.699)" fill="#de1e28"/>
            <circle id="Ellipse_83" data-name="Ellipse 83" cx="2.982" cy="2.982" r="2.982" transform="translate(-249.157 199.313)" fill="#de1e28"/>
            <circle id="Ellipse_84" data-name="Ellipse 84" cx="2.982" cy="2.982" r="2.982" transform="translate(-237.705 218.574)" fill="#de1e28"/>
          </g>
        </g>
      </g>
    </g>
    <g id="bagphone" className="fullbag">
      <rect id="Rectangle_6" data-name="Rectangle 6" width="34.561" height="69.031" rx="12" transform="translate(-199.075 188.571)" fill="#b0afaf"/>
      <rect id="Rectangle_7" data-name="Rectangle 7" width="29.848" height="53.216" rx="12" transform="translate(-196.828 195.034)" fill="#464544"/>
      <circle id="Ellipse_85" data-name="Ellipse 85" cx="2.994" cy="2.994" r="2.994" transform="translate(-184.897 249.834)" fill="#464544"/>
    </g>
    <g id="bagsweatshirt" className="fullbag">
      <path id="Path_33" data-name="Path 33" d="M-240.589,201.443c6.641,0,12.189-2.9,13.556-6.776l-2.4-2.018c0,2.151-5.378,5.259-11.833,5.618s-11.356-5.26-11.356-5.26l-1.52,1.66C-252.778,198.542-247.229,201.443-240.589,201.443Z" fill="#ed9900"/>
      <path id="Path_34" data-name="Path 34" d="M-208.853,202.891a13.2,13.2,0,0,0-.75-1.557l-.053-.109h-.01a13.108,13.108,0,0,0-11.357-6.558h-6.01l-1.326,4.556-11.475,3.466-13.865-3.944-.445-4.078h-6.884a13.118,13.118,0,0,0-12.607,9.5l-.843,1.826h67.117Z" fill="#f4c200"/>
      <path id="Path_35" data-name="Path 35" d="M-239.834,202.689l11.475-3.466,1.326-4.556c-1.367,3.875-6.915,6.776-13.556,6.776s-12.189-2.9-13.555-6.776l.445,4.078Z" fill="#f4c200"/>
      <path id="Path_36" data-name="Path 36" d="M-274.478,205.991s-12.438,22.525,0,30.951Z" fill="#f4c200"/>
      <path id="Path_37" data-name="Path 37" d="M-207.361,205.991s12.438,22.525,0,30.951Z" fill="#f4c200"/>
      <path id="Path_38" data-name="Path 38" d="M-207.361,205.991h-67.117v29.246a10.13,10.13,0,0,0,10.131,10.13h5.282V219.873h12.959V243.03h23.157v2.337h5.457a10.13,10.13,0,0,0,10.131-10.13Z" fill="#f4c200"/>
      <path id="Path_39" data-name="Path 39" d="M-246.106,243.03V219.873h-12.959v25.494h36.116V243.03Z" fill="#ed9900"/>
    </g>
    <g id="Group_77" data-name="Group 77" >
      <path id="Path_40" data-name="Path 40" d="M-105.85,102.4H-309.121a41.16,41.16,0,0,0-41.16,41.16V401.622h285.59V143.565A41.159,41.159,0,0,0-105.85,102.4Zm-55.79,138.049c-74.008.583-128.786-48.367-152.934-50.116-11.849-.858-19.133,1.57-23.486,4.265a75.243,75.243,0,0,1,68.687-44.5h126.046a75.26,75.26,0,0,1,71.735,52.512C-78.508,213.081-102.054,239.985-161.64,240.454Z" fill="#f7b956"/>
      <path id="Path_41" data-name="Path 41" d="M-71.592,203.178c-6.916,10.469-30.462,37.373-90.048,37.842-74.008.583-128.786-48.368-152.934-50.116-11.849-.858-19.133,1.57-23.486,4.265A74.968,74.968,0,0,0-344.6,225.9V401.622H-68.1V225.9A75.183,75.183,0,0,0-71.592,203.178Z" fill="#fcb01b"/>
      <path id="Path_42" data-name="Path 42" d="M-102.543,266.728l13.659-7.7s-3.236,67.65-2.668,98.026.457,40.3.457,40.3l-13.55,3.624Z" fill="#ab7008"/>
      <path id="Path_43" data-name="Path 43" d="M-327.683,259.026h238.8l-13.658,7.7H-314.024Z" fill="#f7b956"/>
      <path id="Path_44" data-name="Path 44" d="M-262.276,109.585v11.356s55.926-38.129,111.852,0l-4.543-12.113S-204.826,68.618-262.276,109.585Z" fill="#fcb01b"/>
      <path id="Path_45" data-name="Path 45" d="M-262.276,120.941h5.678s49.4-31.618,102.01,0h4.164S-197.361,80.806-262.276,120.941Z" fill="#ab7008"/>
      <g id="Group_76" data-name="Group 76">
        <path id="Path_46" data-name="Path 46" d="M-336.8,192.711a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-336.8,192.711Z" fill="#d3d3d3"/>
        <path id="Path_47" data-name="Path 47" d="M-334.1,191.717a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-334.1,191.717Z" fill="#d3d3d3"/>
        <path id="Path_48" data-name="Path 48" d="M-328.706,189.872a1.273,1.273,0,0,0-1.294,1.02,1.257,1.257,0,0,0-1.119-.594,1.39,1.39,0,0,0,0,2.779,1.272,1.272,0,0,0,1.294-1.02,1.258,1.258,0,0,0,1.119.595A1.391,1.391,0,0,0-328.706,189.872Z" fill="#d3d3d3"/>
        <path id="Path_49" data-name="Path 49" d="M-323.454,189.162a1.267,1.267,0,0,0-1.268.916,1.26,1.26,0,0,0-1.145-.632,1.391,1.391,0,0,0,0,2.78,1.267,1.267,0,0,0,1.268-.916,1.26,1.26,0,0,0,1.145.632A1.391,1.391,0,0,0-323.454,189.162Z" fill="#d3d3d3"/>
        <path id="Path_50" data-name="Path 50" d="M-317.918,189.02a1.255,1.255,0,0,0-1.206.763,1.255,1.255,0,0,0-1.207-.763,1.391,1.391,0,0,0,0,2.78,1.255,1.255,0,0,0,1.206-.763,1.255,1.255,0,0,0,1.207.763A1.391,1.391,0,0,0-317.918,189.02Z" fill="#d3d3d3"/>
        <path id="Path_51" data-name="Path 51" d="M-315.221,189.162a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-315.221,189.162Z" fill="#d3d3d3"/>
        <path id="Path_52" data-name="Path 52" d="M-309.685,190.014a1.259,1.259,0,0,0-1.216.783,1.307,1.307,0,0,0-1.339-1.351,1.391,1.391,0,0,0,0,2.78,1.256,1.256,0,0,0,1.215-.784,1.307,1.307,0,0,0,1.34,1.351A1.39,1.39,0,0,0-309.685,190.014Z" fill="#d3d3d3"/>
        <path id="Path_53" data-name="Path 53" d="M-306.846,190.581a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-306.846,190.581Z" fill="#d3d3d3"/>
        <path id="Path_54" data-name="Path 54" d="M-304.15,191.575a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-304.15,191.575Z" fill="#d3d3d3"/>
        <path id="Path_55" data-name="Path 55" d="M-301.6,192.853a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-301.6,192.853Z" fill="#d3d3d3"/>
        <path id="Path_56" data-name="Path 56" d="M-299.04,193.988a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-299.04,193.988Z" fill="#d3d3d3"/>
        <path id="Path_57" data-name="Path 57" d="M-291.942,197.821a1.28,1.28,0,0,0-.953.383,1.345,1.345,0,0,0-1.319-1.661,1.258,1.258,0,0,0-1.108.58,1.349,1.349,0,0,0-1.305-1.715,1.39,1.39,0,0,0,0,2.779,1.258,1.258,0,0,0,1.109-.58,1.349,1.349,0,0,0,1.3,1.716,1.279,1.279,0,0,0,.953-.384,1.345,1.345,0,0,0,1.319,1.661A1.39,1.39,0,0,0-291.942,197.821Z" fill="#d3d3d3"/>
        <path id="Path_58" data-name="Path 58" d="M-289.387,198.956a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-289.387,198.956Z" fill="#d3d3d3"/>
        <path id="Path_59" data-name="Path 59" d="M-286.407,200.234a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-286.407,200.234Z" fill="#d3d3d3"/>
        <path id="Path_60" data-name="Path 60" d="M-283.852,201.795a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-283.852,201.795Z" fill="#d3d3d3"/>
        <path id="Path_61" data-name="Path 61" d="M-280.871,203.356a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-280.871,203.356Z" fill="#d3d3d3"/>
        <path id="Path_62" data-name="Path 62" d="M-277.89,204.492a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-277.89,204.492Z" fill="#d3d3d3"/>
        <path id="Path_63" data-name="Path 63" d="M-275.335,206.2a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-275.335,206.2Z" fill="#d3d3d3"/>
        <path id="Path_64" data-name="Path 64" d="M-272.638,207.757a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-272.638,207.757Z" fill="#d3d3d3"/>
        <path id="Path_65" data-name="Path 65" d="M-269.8,209.176a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-269.8,209.176Z" fill="#d3d3d3"/>
        <path id="Path_66" data-name="Path 66" d="M-266.818,210.6a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-266.818,210.6Z" fill="#d3d3d3"/>
        <path id="Path_67" data-name="Path 67" d="M-264.121,212.015a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-264.121,212.015Z" fill="#d3d3d3"/>
        <path id="Path_68" data-name="Path 68" d="M-261.141,213.434a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-261.141,213.434Z" fill="#d3d3d3"/>
        <path id="Path_69" data-name="Path 69" d="M-258.3,215a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-258.3,215Z" fill="#d3d3d3"/>
        <path id="Path_70" data-name="Path 70" d="M-255.6,215.989a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-255.6,215.989Z" fill="#d3d3d3"/>
        <path id="Path_71" data-name="Path 71" d="M-252.908,216.841a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-252.908,216.841Z" fill="#d3d3d3"/>
        <path id="Path_72" data-name="Path 72" d="M-250.353,218.4a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-250.353,218.4Z" fill="#d3d3d3"/>
        <path id="Path_73" data-name="Path 73" d="M-247.8,219.822a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-247.8,219.822Z" fill="#d3d3d3"/>
        <path id="Path_74" data-name="Path 74" d="M-244.817,220.816a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-244.817,220.816Z" fill="#d3d3d3"/>
        <path id="Path_75" data-name="Path 75" d="M-242.262,221.951a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-242.262,221.951Z" fill="#d3d3d3"/>
        <path id="Path_76" data-name="Path 76" d="M-237.01,223.938a1.264,1.264,0,0,0-1.249.858,1.348,1.348,0,0,0-1.306-1.709,1.39,1.39,0,0,0,0,2.779,1.265,1.265,0,0,0,1.249-.857,1.348,1.348,0,0,0,1.306,1.709A1.391,1.391,0,0,0-237.01,223.938Z" fill="#d3d3d3"/>
        <path id="Path_77" data-name="Path 77" d="M-234.171,225.358a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-234.171,225.358Z" fill="#d3d3d3"/>
        <path id="Path_78" data-name="Path 78" d="M-228.919,226.777a1.257,1.257,0,0,0-1.222.8,1.324,1.324,0,0,0-1.333-1.508,1.391,1.391,0,0,0,0,2.78,1.258,1.258,0,0,0,1.222-.8,1.323,1.323,0,0,0,1.333,1.508A1.391,1.391,0,0,0-228.919,226.777Z" fill="#d3d3d3"/>
        <path id="Path_79" data-name="Path 79" d="M-226.081,228.2a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-226.081,228.2Z" fill="#d3d3d3"/>
        <path id="Path_80" data-name="Path 80" d="M-223.242,229.332a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-223.242,229.332Z" fill="#d3d3d3"/>
        <path id="Path_81" data-name="Path 81" d="M-220.119,230.468a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-220.119,230.468Z" fill="#d3d3d3"/>
        <path id="Path_82" data-name="Path 82" d="M-214.725,231.887a1.258,1.258,0,0,0-1.222.8,1.324,1.324,0,0,0-1.333-1.508,1.391,1.391,0,0,0,0,2.78,1.258,1.258,0,0,0,1.222-.8,1.324,1.324,0,0,0,1.333,1.508A1.391,1.391,0,0,0-214.725,231.887Z" fill="#d3d3d3"/>
        <path id="Path_83" data-name="Path 83" d="M-212.028,232.881a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-212.028,232.881Z" fill="#d3d3d3"/>
        <path id="Path_84" data-name="Path 84" d="M-209.189,233.732a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-209.189,233.732Z" fill="#d3d3d3"/>
        <path id="Path_85" data-name="Path 85" d="M-206.492,234.3a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-206.492,234.3Z" fill="#d3d3d3"/>
        <path id="Path_86" data-name="Path 86" d="M-203.511,234.868a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-203.511,234.868Z" fill="#d3d3d3"/>
        <path id="Path_87" data-name="Path 87" d="M-200.389,235.436a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-200.389,235.436Z" fill="#d3d3d3"/>
        <path id="Path_88" data-name="Path 88" d="M-197.55,236.145a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-197.55,236.145Z" fill="#d3d3d3"/>
        <path id="Path_89" data-name="Path 89" d="M-194.285,236.855a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-194.285,236.855Z" fill="#d3d3d3"/>
        <path id="Path_90" data-name="Path 90" d="M-191.3,237.281a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-191.3,237.281Z" fill="#d3d3d3"/>
        <path id="Path_91" data-name="Path 91" d="M-188.323,238.813c-1.789,0-1.792,1.816,0,1.816S-186.532,238.813-188.323,238.813Z" fill="#d3d3d3"/>
        <path id="Path_92" data-name="Path 92" d="M-185.059,238.275a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-185.059,238.275Z" fill="#d3d3d3"/>
        <path id="Path_93" data-name="Path 93" d="M-181.794,238.7a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-181.794,238.7Z" fill="#d3d3d3"/>
        <path id="Path_94" data-name="Path 94" d="M-178.955,238.984a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-178.955,238.984Z" fill="#d3d3d3"/>
        <path id="Path_95" data-name="Path 95" d="M-175.832,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-175.832,239.41Z" fill="#d3d3d3"/>
        <path id="Path_96" data-name="Path 96" d="M-172.568,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-172.568,239.41Z" fill="#d3d3d3"/>
        <path id="Path_97" data-name="Path 97" d="M-169.445,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-169.445,239.41Z" fill="#d3d3d3"/>
        <path id="Path_98" data-name="Path 98" d="M-166.464,239.694a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-166.464,239.694Z" fill="#d3d3d3"/>
        <path id="Path_99" data-name="Path 99" d="M-163.2,239.552a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-163.2,239.552Z" fill="#d3d3d3"/>
        <path id="Path_100" data-name="Path 100" d="M-160.219,239.694a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-160.219,239.694Z" fill="#d3d3d3"/>
        <path id="Path_101" data-name="Path 101" d="M-156.954,239.552a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-156.954,239.552Z" fill="#d3d3d3"/>
        <path id="Path_102" data-name="Path 102" d="M-153.831,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-153.831,239.41Z" fill="#d3d3d3"/>
        <path id="Path_103" data-name="Path 103" d="M-150.425,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-150.425,239.41Z" fill="#d3d3d3"/>
        <path id="Path_104" data-name="Path 104" d="M-147.3,239.268a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-147.3,239.268Z" fill="#d3d3d3"/>
        <path id="Path_105" data-name="Path 105" d="M-143.9,238.842a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-143.9,238.842Z" fill="#d3d3d3"/>
        <path id="Path_106" data-name="Path 106" d="M-140.914,238.7a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-140.914,238.7Z" fill="#d3d3d3"/>
        <path id="Path_107" data-name="Path 107" d="M-137.933,238.038a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-137.933,238.038Z" fill="#d3d3d3"/>
        <path id="Path_108" data-name="Path 108" d="M-135.1,237.47a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-135.1,237.47Z" fill="#d3d3d3"/>
        <path id="Path_109" data-name="Path 109" d="M-132.256,236.9a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-132.256,236.9Z" fill="#d3d3d3"/>
        <path id="Path_110" data-name="Path 110" d="M-129.228,236.335a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-129.228,236.335Z" fill="#d3d3d3"/>
        <path id="Path_111" data-name="Path 111" d="M-126.2,235.578a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-126.2,235.578Z" fill="#d3d3d3"/>
        <path id="Path_112" data-name="Path 112" d="M-123.171,234.821a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-123.171,234.821Z" fill="#d3d3d3"/>
        <path id="Path_113" data-name="Path 113" d="M-120.143,233.874a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-120.143,233.874Z" fill="#d3d3d3"/>
        <path id="Path_114" data-name="Path 114" d="M-116.926,232.928a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-116.926,232.928Z" fill="#d3d3d3"/>
        <path id="Path_115" data-name="Path 115" d="M-113.708,231.982a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-113.708,231.982Z" fill="#d3d3d3"/>
        <path id="Path_116" data-name="Path 116" d="M-110.491,230.468a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-110.491,230.468Z" fill="#d3d3d3"/>
        <path id="Path_117" data-name="Path 117" d="M-107.084,229.332a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-107.084,229.332Z" fill="#d3d3d3"/>
        <path id="Path_118" data-name="Path 118" d="M-104.056,228.2a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-104.056,228.2Z" fill="#d3d3d3"/>
        <path id="Path_119" data-name="Path 119" d="M-100.65,226.493a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-100.65,226.493Z" fill="#d3d3d3"/>
        <path id="Path_120" data-name="Path 120" d="M-97.621,224.79a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-97.621,224.79Z" fill="#d3d3d3"/>
        <path id="Path_121" data-name="Path 121" d="M-95.161,223.087a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-95.161,223.087Z" fill="#d3d3d3"/>
        <path id="Path_122" data-name="Path 122" d="M-92.511,221.194a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-92.511,221.194Z" fill="#d3d3d3"/>
        <path id="Path_123" data-name="Path 123" d="M-89.294,219.3a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-89.294,219.3Z" fill="#d3d3d3"/>
        <path id="Path_124" data-name="Path 124" d="M-86.644,217.409a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-86.644,217.409Z" fill="#d3d3d3"/>
        <path id="Path_125" data-name="Path 125" d="M-84.373,215.327a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-84.373,215.327Z" fill="#d3d3d3"/>
        <path id="Path_126" data-name="Path 126" d="M-81.913,213.434a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-81.913,213.434Z" fill="#d3d3d3"/>
        <path id="Path_127" data-name="Path 127" d="M-79.263,210.974a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-79.263,210.974Z" fill="#d3d3d3"/>
        <path id="Path_128" data-name="Path 128" d="M-76.992,209.081a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-76.992,209.081Z" fill="#d3d3d3"/>
        <path id="Path_129" data-name="Path 129" d="M-74.721,206.243a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-74.721,206.243Z" fill="#d3d3d3"/>
        <path id="Path_130" data-name="Path 130" d="M-72.45,203.4a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-72.45,203.4Z" fill="#d3d3d3"/>
      </g>
      <path id="Path_131" data-name="Path 131" d="M-350.281,401.622s121.5,59.049,285.591,0" fill="#6f2c0d"/>
      <path id="Path_132" data-name="Path 132" d="M-101.239,271.176a6.691,6.691,0,0,0-6.671-6.671H-309.073a6.691,6.691,0,0,0-6.671,6.671v31.653h214.5Z" fill="#cd8c19"/>
      <path id="Path_133" data-name="Path 133" d="M-315.744,302.829v92.122a6.691,6.691,0,0,0,6.671,6.671H-107.91a6.691,6.691,0,0,0,6.671-6.671V302.829Z" fill="#fcb01b"/>
    </g>
  </g>
</svg>
                </div>
                </Bag>
                <div className="cards">
                <Board id="board-2" className="board">
                {/* dog */}
                <Card id="dog" className="card organs"draggable="true"><svg id="dog" xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g transform="translate(-28 -241)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(28 241)" fill="#cce7e6"/><g transform="translate(-541.084 131.319)"><path d="M608.894,189.672s-2.708.123-3.077,1.846,3.262,1.6,3.262,1.6,2.031-.247,2.185-1.416-2.37-2.031-2.37-2.031" fill="#f9f2c3"/><path d="M602.071,189.1s-2.708.123-3.078,1.847,3.263,1.6,3.263,1.6,2.031-.246,2.185-1.416-2.37-2.031-2.37-2.031" fill="#e7dfb6"/><path d="M635.549,176.44c.568-6.141-13.874-8.529-17.854-10.349-2.562-1.171-3.286-6.817-3.477-10.693l-7.44.686-1.851,23.442a7.6,7.6,0,0,0,6.329,8.1c8.781,1.467,23.383,3.236,27.818-.266a2.876,2.876,0,0,0,.959-1.421l.064.4a25.941,25.941,0,0,0,.972-3.744C638.4,181.785,635.213,180.062,635.549,176.44Z" fill="#e7dfb6"/><path d="M617.7,166.091c3.98,1.82,18.422,4.208,17.854,10.349-.336,3.622,2.85,5.345,5.52,6.149,2.374-12.612-1.464-31.539-.744-23.207.8,9.211-1.365,19.9-1.365,19.9v.008c-4.016-9.943-16.149-24.684-16.149-24.684l-8.594.792C614.409,159.274,615.133,164.92,617.7,166.091Z" fill="#b47209"/><path d="M620.135,125.3a16.486,16.486,0,0,0-2.471-.76c-.587,2.3-1.58,6.091-2.509,9.221-1.214,4.091,5.709,13.355,8.229,20.8a16.743,16.743,0,0,0,5.173-5.661,3.065,3.065,0,0,0,2.443-.276C636.016,145.932,636.42,130.675,620.135,125.3Z" fill="#d08400"/><path d="M611.668,137.32c1.926-3.246.577-10.007-.308-13.47-16.2.6-20.907,22.145-17.584,25.676,1.693,1.8,4.043,1.743,6.079.069a16.755,16.755,0,0,0,5.748,5.583C605.49,150.639,609.534,140.917,611.668,137.32Z" fill="#d08400"/><path d="M615.155,133.757c.929-3.13,1.922-6.923,2.509-9.221-.424-.1-.854-.176-1.29-.238l-.082-.017a20.831,20.831,0,0,0-4.932-.431c.885,3.463,2.234,10.224.308,13.47-2.134,3.6-6.178,13.319-6.065,17.858a16.655,16.655,0,0,0,17.781-.625C620.864,147.112,613.941,137.848,615.155,133.757Z" fill="#f9f2c3"/><ellipse cx="1.061" cy="2.426" rx="1.061" ry="2.426" transform="translate(606.961 133.378)" fill="#402f11"/><ellipse cx="1.061" cy="2.426" rx="1.061" ry="2.426" transform="translate(618.03 133.378)" fill="#402f11"/><circle cx="1.744" cy="1.744" r="1.744" transform="translate(610.985 141.187)" fill="#402f11"/><path d="M607.41,147.953a5.5,5.5,0,0,0,.661.819,1.348,1.348,0,0,0,.785.429c.51.031.983-.475,1.342-1.014a11.81,11.81,0,0,0,.968-1.775c.282-.621.546-1.275.768-1.9l.673-1.907.591,1.972a14.1,14.1,0,0,0,1.119,2.771,4,4,0,0,0,.807,1.057,1.093,1.093,0,0,0,.429.234.774.774,0,0,0,.439-.019,1.97,1.97,0,0,0,.518-.3,3.269,3.269,0,0,0,.275-.238l.284-.254a10.1,10.1,0,0,0,1.02-1.119,6.55,6.55,0,0,0,.788-1.3,3.85,3.85,0,0,0,.382-1.5,3.345,3.345,0,0,1,.044,1.635,5.859,5.859,0,0,1-.567,1.572,8.465,8.465,0,0,1-.923,1.4l-.273.316a4.149,4.149,0,0,1-.294.316,2.843,2.843,0,0,1-.8.572,1.99,1.99,0,0,1-1.119.153,2.348,2.348,0,0,1-1-.437,4.87,4.87,0,0,1-1.185-1.4,10.257,10.257,0,0,1-.726-1.532,13.136,13.136,0,0,1-.5-1.6l1.264.065a16.346,16.346,0,0,1-.958,1.99,9.951,9.951,0,0,1-1.293,1.828,4.191,4.191,0,0,1-.912.757c-.094.05-.187.1-.284.142a1.993,1.993,0,0,1-.316.1,1.332,1.332,0,0,1-.34.027l-.171-.012c-.056-.012-.111-.029-.166-.044a1.645,1.645,0,0,1-.91-.782A3.953,3.953,0,0,1,607.41,147.953Z" fill="#402f11"/><path d="M599.855,149.6s-.583-9.7,1.919-15.118c0,0-2.653,13.495.417,18.082C602.191,152.559,599.87,150.308,599.855,149.6Z" fill="#2f2d15"/><path d="M628.557,148.892s-3.9-.705-2.839-8.59c0,0-2.072,8.693,1.971,10.008Z" fill="#2f2d15"/><ellipse cx="5.042" cy="3.032" rx="5.042" ry="3.032" transform="translate(606.778 184.703)" fill="#e7dfb6"/><path d="M635.549,188.986s-17.058,2.957-17.172,1.138-3.411-18.082,11.713-12.168S635.549,188.986,635.549,188.986Z" fill="#f9f2c3"/><ellipse cx="6.425" cy="2.9" rx="6.425" ry="2.9" transform="translate(612.944 186.889)" fill="#f9f2c3"/><path d="M625.777,190.092a5.619,5.619,0,0,0-3.9-2.963s3.986,0,4.5,2.982Z" fill="#e7dfb6"/><path d="M612.125,169.915l-3.57,21.173,2.709.615,6.893-22.773S615.08,164.252,612.125,169.915Z" fill="#f9f2c3"/><path d="M605.708,167.1l-3.976,23.359,3.016.679,7.678-25.125S609,160.848,605.708,167.1Z" fill="#e7dfb6"/><path d="M611.92,171.84s3.437,4.549,1.466,6.621-3.336,2.224-3.437,3.589S611.92,171.84,611.92,171.84Z" fill="#b47209"/><path d="M629.307,189.985s.758-4.246,3.437-3.892,3.083-.253,3.032-.809,2.628-.455,2.527,1.112-3.791,2.982-3.791,2.982Z" fill="#b47209"/></g></g></svg></Card>
                 {/* sweatshirt */}
                <Card id="sweatshirt" className="card" draggable="true"> 
                <svg id="sweatshirt" className="organs" xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g transform="translate(-139.764 -241)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(139.764 241)" fill="#cce7e6"/><g transform="translate(-541.084 131.319)"><path d="M720.771,133.141l.876-.955s2.821,3.234,6.536,3.028,6.812-2,6.812-3.234l1.383,1.161-.764,2.623-6.605,1.995-7.982-2.27Z" fill="#ed9900"/><path d="M754.95,173.333l1.875,3.6,7.55-2.643-1.761-3.657Z" fill="#ed9900"/><path d="M693.78,172.78l6.04,4.153,1.862-3.193-6.281-4.473Z" fill="#ed9900"/><path d="M746.842,137.876a7.457,7.457,0,0,0-.431-.9l-.031-.064h-.005a7.546,7.546,0,0,0-6.538-3.776h-3.459c-.787,2.231-3.981,3.9-7.8,3.9s-7.016-1.67-7.8-3.9h-3.962a7.551,7.551,0,0,0-7.257,5.468L695.4,169.267l6.281,4.473,7.575-12.986v14.669a7.551,7.551,0,0,0,7.551,7.55h23.028a7.55,7.55,0,0,0,7.55-7.55V158.812l7.563,14.521,7.664-2.7Z" fill="#f4c200"/><path d="M720.772,146.92v21.518h16.8V159h-8.494V146.847Z" fill="#ed9900"/></g></g></svg></Card>
                 {/* book */}
                <Card id="book" className="card organs" draggable="true"><svg id="book"  xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g transform="translate(-251.528 -241)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(251.528 241)" fill="#cce7e6"/><g transform="translate(-541.084 131.319)"><path d="M809.083,141.824l-3.756.334a1.819,1.819,0,0,0-1.6,2.254l8.115,32.462a3.042,3.042,0,0,0,3.268,2.288l29.762-3.121,27.405.9a3.213,3.213,0,0,0,3.184-4.131l-8.971-30.05a2.722,2.722,0,0,0-2.657-1.942Z" fill="#f0aa00"/><path d="M844.189,175.809l-29.026.464L805.357,139.5h28.6Z" fill="#c2bcb3"/><path d="M873.789,175.693H844.015l-9.806-36.772h28.6Z" fill="#c2bcb3"/><path d="M844.48,175.519h-28.6l-10.23-36.307h28.6Z" fill="#dcd6cc"/><path d="M873.339,175.258l-29.1.2-9.594-36.62,28.378.157Z" fill="#dcd6cc"/><path d="M844.476,175.229l-27.945-.885L806.3,138.037l27.909.885Z" fill="#f6f1e2"/><path d="M872.294,174.344l-27.818.885-10.267-36.307,28.21-.885Z" fill="#f6f1e2"/><line x2="10.035" y2="36.539" transform="translate(834.209 138.922)" fill="none" stroke="#c4baa2" stroke-miterlimit="10" stroke-width="1"/><path d="M832.983,155.755l-19.329.784L810,141.3l18.894-.174Z" fill="#bcb6a7"/><path d="M866.069,160.718l-19.329.784-3.657-15.237,18.894-.174Z" fill="#bcb6a7"/><path d="M833.418,158.715l-18.981.522-.261-1.132,18.72-.958Z" fill="#bcb6a7"/><path d="M833.854,161.153l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/><path d="M834.463,163.939l-18.981.522-.261-1.132,18.72-.958Z" fill="#bcb6a7"/><path d="M860.583,141.911l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/><path d="M861.367,144.436l-18.981.522-.261-1.132,18.72-.958Z" fill="#bcb6a7"/><path d="M866.678,163.33l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/><path d="M867.375,165.855l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/><path d="M868.333,168.815l-18.981.522-.261-1.132,18.72-.958Z" fill="#bcb6a7"/><path d="M869.029,171.34l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/></g></g></svg></Card>
                </Board>
                <Board id="board-3" className="board">
                     {/* Tv */}
                <Card id="tv" className="card organs" draggable="true"><svg id="tv"  xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g transform="translate(-28 -357.452)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(28 357.452)" fill="#cce7e6"/><g transform="translate(-541.084 131.319)"><path d="M601.052,246.643c.083.416,13.816,13.816,13.816,13.816l13.691-13.691" fill="none" stroke="#636061" stroke-miterlimit="10" stroke-width="4"/><rect width="60.009" height="40.117" transform="translate(586.237 260.292)" fill="#4a4142"/><rect width="46.271" height="30.337" transform="translate(592.921 263.705)" fill="#636061"/><circle cx="2.433" cy="2.433" r="2.433" transform="translate(598.519 244.841)" fill="#4a4142"/><circle cx="2.433" cy="2.433" r="2.433" transform="translate(626.093 244.12)" fill="#4a4142"/><circle cx="1.562" cy="1.562" r="1.562" transform="translate(638.649 295.723)" fill="#636061"/><path d="M646.245,260.292l3.577,6.115v28.836l-3.577,5.166Z" fill="#636061"/></g></g></svg></Card>
                 {/* brush */}
                <Card id="brush" className="card organs" draggable="true"><svg id="brush" xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g transform="translate(-139.764 -357.452)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(139.764 357.452)" fill="#cce7e6"/><g transform="translate(-541.084 131.319)"><path d="M757.808,255.145c-.067.056-6.729,5.6-11.282,8.695a12.511,12.511,0,0,1-3.151,1.667c-.569.178-1.128.367-1.682.562.316.189.471.591-.231,1.45-1.364,1.666-36.06,23.03-38.232,23.03-2,0-2.455-.727-.671-2.217l-4.778,2.846a1.361,1.361,0,0,0-.473,1.866l.419.7a1.488,1.488,0,0,0,2.04.516L735.7,272.856a41.113,41.113,0,0,1,8.768-3.848,16.242,16.242,0,0,0,4.119-2.135c2.811-1.911,6.3-4.639,8.7-6.573a3.63,3.63,0,0,0,.517-5.155Z" fill="#56b8c4"/><path d="M744.546,258.844s1.674,3.935,5.159,3.612c0,0,5.676-1.775,7.807-5.133,0,0,1.156-3.5-.743-5.263Z" fill="#d5d5d3"/><ellipse cx="6.971" cy="1.363" rx="6.971" ry="1.363" transform="translate(743.835 257.533) rotate(-28.773)" fill="#fcf9f4"/><path d="M741.693,266.069q-1.606.564-3.122,1.22a41.63,41.63,0,0,0-4.747,2.417l-4.295,2.558c.636.152,1.038.369,1.038.612,0,.456-1.41.825-3.15.825-.1,0-.2,0-.293,0l-7.879,4.694c.607.15.988.363.988.6,0,.456-1.41.826-3.149.826-.076,0-.151,0-.226,0l-5.864,3.493c.884.147,1.473.4,1.473.7,0,.456-1.41.826-3.149.826-.288,0-.566-.011-.831-.03l-5.928,3.532c-1.784,1.49-1.326,2.217.671,2.217,2.172,0,36.868-21.364,38.232-23.03C742.164,266.66,742.009,266.258,741.693,266.069Z" fill="#a2d7e4"/><path d="M712.467,284c0-.294-.589-.551-1.473-.7L710,283.9l-1.513.9c.265.019.543.03.831.03C711.057,284.83,712.467,284.46,712.467,284Z" fill="#56b8c4"/><path d="M720.233,278.99c0-.236-.381-.449-.988-.6l-2.387,1.422c.075,0,.15,0,.226,0C718.823,279.816,720.233,279.446,720.233,278.99Z" fill="#56b8c4"/><path d="M730.567,272.876c0-.243-.4-.46-1.038-.612l-2.4,1.433c.1,0,.194,0,.293,0C729.157,273.7,730.567,273.332,730.567,272.876Z" fill="#56b8c4"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(745.69 257.089) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(745.945 257.384) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(746.301 257.649) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(746.648 257.965) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 746.932, 258.151)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(746.714 256.375) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(746.969 256.671) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(747.325 256.936) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(747.672 257.252) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 747.956, 257.437)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(747.876 255.764) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(748.13 256.059) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(748.487 256.324) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(748.834 256.64) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 749.117, 256.826)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(748.93 255.076) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(749.185 255.371) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(749.542 255.636) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(749.888 255.952) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 750.172, 256.138)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(750.016 254.48) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(750.271 254.775) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(750.627 255.04) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(750.974 255.356) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 751.258, 255.542)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(751.132 253.838) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(751.387 254.133) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(751.743 254.398) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(752.09 254.714) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 752.374, 254.9)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(752.37 253.348) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(752.625 253.644) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(752.981 253.909) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(753.328 254.225) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 753.612, 254.411)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(753.421 252.772) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(753.642 253.029) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(753.951 253.258) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(754.251 253.532) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="matrix(0.923, -0.386, 0.386, 0.923, 754.497, 253.693)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(754.471 252.353) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(754.692 252.609) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(755.001 252.839) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(755.302 253.113) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.387" cy="0.118" rx="0.387" ry="0.118" transform="translate(755.695 252.22) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.387" cy="0.118" rx="0.387" ry="0.118" transform="translate(755.938 252.442) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.492" cy="0.15" rx="0.492" ry="0.15" transform="translate(744.873 257.8) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.492" cy="0.15" rx="0.492" ry="0.15" transform="translate(745.101 258.064) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.492" cy="0.15" rx="0.492" ry="0.15" transform="translate(745.42 258.301) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.492" cy="0.15" rx="0.492" ry="0.15" transform="translate(745.73 258.584) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.373" cy="0.114" rx="0.373" ry="0.114" transform="translate(744.433 258.391) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.382" cy="0.117" rx="0.382" ry="0.117" transform="translate(744.695 258.658) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.382" cy="0.117" rx="0.382" ry="0.117" transform="translate(745.031 258.826) rotate(-33.858)" fill="#d5d5d3"/><path d="M748.258,258.007l2.161,4.26.245-.143Z" fill="#bebdbe"/><path d="M751.4,256.458l2.161,4.26.245-.143Z" fill="#bebdbe"/><path d="M754.6,253.992l2.232,4.224.176-.206Z" fill="#bebdbe"/><path d="M755.981,253.3l1.755,3.182.061-.285Z" fill="#bebdbe"/><path d="M748.1,262.246l-1.977-3.526,2.2,3.689Z" fill="#bebdbe"/><path d="M751.978,261.543l-2.028-4.331,2.2,4.26Z" fill="#bebdbe"/><path d="M755.158,259.719l-2.028-4.331,2.15,4.25Z" fill="#bebdbe"/></g></g></svg></Card>
                 {/* towel */}
                <Card id="towel" className="card organs" draggable="true"><svg id="towel"   xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g transform="translate(-251.528 -357.452)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(251.528 357.452)" fill="#cce7e6"/><g transform="translate(-541.084 131.319)"><path d="M818.545,265.329a16.616,16.616,0,0,1-2.567-1.913c-1.869,2.371-2.435,3.285-3.911,5.366a16.741,16.741,0,0,0,2.567,1.914C816.11,268.615,816.677,267.7,818.545,265.329Z" fill="#ed9900"/><path d="M858.257,304.082c.328.372.5.557.851.926,1.475-2.081,2.042-3,3.91-5.367-.353-.368-.523-.553-.85-.925C860.3,301.087,859.733,302,858.257,304.082Z" fill="#c87c00"/><path d="M819.65,265.978c-1.868,2.371-2.435,3.285-3.91,5.366,23.241,7.189,29.549,11.988,42.517,32.738,1.476-2.081,2.043-2.995,3.911-5.366C849.2,277.966,842.891,273.167,819.65,265.978Z" fill="#ed9900"/><path d="M818.545,265.329c-1.868,2.371-2.435,3.286-3.911,5.367.438.274.659.4,1.106.648,1.475-2.081,2.042-2.995,3.91-5.366C819.2,265.733,818.982,265.6,818.545,265.329Z" fill="#c87c00"/><path d="M859.108,305.008a24.525,24.525,0,0,0,1.8,1.719c1.476-2.081,2.043-2.995,3.911-5.366a24.344,24.344,0,0,1-1.8-1.72C861.15,302.012,860.583,302.927,859.108,305.008Z" fill="#ed9900"/><path d="M825.012,259.642c-.446-.245-.668-.374-1.105-.649-1.857,2.225-3.494,3.965-5.362,6.336.437.275.658.4,1.105.649C821.518,263.607,823.155,261.866,825.012,259.642Z" fill="#fec66a"/><path d="M823.907,258.993a16.666,16.666,0,0,1-2.567-1.913c-1.857,2.224-3.494,3.965-5.362,6.336a16.616,16.616,0,0,0,2.567,1.913C820.413,262.958,822.05,261.218,823.907,258.993Z" fill="#fcd58e"/><path d="M863.018,299.641a24.344,24.344,0,0,0,1.8,1.72c1.868-2.371,3.505-4.111,5.362-6.336a24.533,24.533,0,0,1-1.8-1.72C866.524,295.53,864.887,297.27,863.018,299.641Z" fill="#fcd58e"/><path d="M862.168,298.716c.327.372.5.557.85.925,1.869-2.371,3.506-4.111,5.363-6.336-.354-.368-.523-.553-.851-.925C865.673,294.6,864.036,296.345,862.168,298.716Z" fill="#fec66a"/><path d="M862.168,298.716c1.868-2.371,3.5-4.112,5.362-6.336-12.969-20.75-19.276-25.549-42.518-32.738-1.857,2.224-3.494,3.965-5.362,6.336C842.891,273.167,849.2,277.966,862.168,298.716Z" fill="#fcd58e"/><path d="M815.74,271.344a59.869,59.869,0,0,1-4.945,6.3c23.241,7.189,29.549,11.987,42.518,32.737a59.61,59.61,0,0,0,4.944-6.294C845.289,283.332,838.981,278.533,815.74,271.344Z" fill="#fcd58e"/><path d="M812.067,268.782a59.51,59.51,0,0,1-4.945,6.294,16.742,16.742,0,0,0,2.568,1.914,59.608,59.608,0,0,0,4.944-6.294A16.741,16.741,0,0,1,812.067,268.782Z" fill="#fcd58e"/><path d="M858.257,304.082a59.61,59.61,0,0,1-4.944,6.294c.327.373.5.558.85.926a59.508,59.508,0,0,0,4.945-6.294C858.754,304.639,858.585,304.454,858.257,304.082Z" fill="#fec66a"/><path d="M814.634,270.7a59.608,59.608,0,0,1-4.944,6.294c.437.275.658.4,1.1.649a59.869,59.869,0,0,0,4.945-6.3C815.293,271.1,815.072,270.97,814.634,270.7Z" fill="#fec66a"/><path d="M854.163,311.3a24.349,24.349,0,0,0,1.8,1.72,59.6,59.6,0,0,0,4.944-6.3,24.525,24.525,0,0,1-1.8-1.719A59.508,59.508,0,0,1,854.163,311.3Z" fill="#fcd58e"/><path d="M874.262,290c1.573-1.945,2.347-2.9,4.781-5.676a24.546,24.546,0,0,1-1.8-1.72c-2.435,2.772-3.208,3.731-4.782,5.676A24.542,24.542,0,0,0,874.262,290Z" fill="#fcd58e"/><path d="M871.613,287.355c.327.372.5.558.85.926,1.574-1.945,2.347-2.9,4.782-5.676-.354-.368-.523-.553-.851-.925C873.96,284.451,873.186,285.411,871.613,287.355Z" fill="#fec66a"/><path d="M832.771,248.293a16.666,16.666,0,0,1-2.567-1.913c-2.435,2.771-3.208,3.731-4.781,5.675a16.691,16.691,0,0,0,2.567,1.914C829.563,252.024,830.337,251.065,832.771,248.293Z" fill="#fcd58e"/><path d="M829.095,254.617c1.573-1.944,2.347-2.9,4.782-5.675-.447-.245-.669-.374-1.106-.649-2.434,2.772-3.208,3.731-4.781,5.676C828.427,254.244,828.648,254.373,829.095,254.617Z" fill="#fec66a"/><path d="M871.613,287.355c1.573-1.944,2.347-2.9,4.781-5.675-12.968-20.75-19.276-25.549-42.517-32.738-2.435,2.771-3.209,3.731-4.782,5.675C852.336,261.807,858.644,266.605,871.613,287.355Z" fill="#fcd58e"/><path d="M829.095,254.617c-.447-.244-.668-.373-1.1-.648-1.6,1.98-2.226,2.8-4.083,5.024.437.275.659.4,1.105.649C826.869,257.417,827.493,256.6,829.095,254.617Z" fill="#c87c00"/><path d="M868.381,293.3c1.857-2.224,2.48-3.044,4.082-5.024-.353-.368-.523-.554-.85-.926-1.6,1.98-2.226,2.8-4.083,5.025C867.858,292.752,868.027,292.937,868.381,293.3Z" fill="#c87c00"/><path d="M825.012,259.642c23.242,7.189,29.549,11.988,42.518,32.738,1.857-2.225,2.481-3.045,4.083-5.025-12.969-20.75-19.277-25.548-42.518-32.738C827.493,256.6,826.869,257.417,825.012,259.642Z" fill="#ed9900"/><path d="M868.381,293.3a24.533,24.533,0,0,0,1.8,1.72c1.857-2.225,2.481-3.044,4.083-5.024a24.542,24.542,0,0,1-1.8-1.72C870.861,290.261,870.238,291.081,868.381,293.3Z" fill="#ed9900"/><path d="M827.99,253.969a16.691,16.691,0,0,1-2.567-1.914c-1.6,1.98-2.226,2.8-4.083,5.025a16.666,16.666,0,0,0,2.567,1.913C825.764,256.769,826.388,255.949,827.99,253.969Z" fill="#ed9900"/></g></g></svg></Card>
                </Board>
                <Board id="board-4" className="board">
                {/* skateboard */}
                <Card id="skateboard" className="card organs" draggable="true"><svg id="skateboard"  xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459">
                <defs>
                    <clipPath id="clip-path">
                    <path id="Path_109" data-name="Path 109" d="M603.812,385.766l-.957,2.513a.685.685,0,0,1-.213.286c-.667.544-2.439.352-3.96-.429-1.286-.661-1.98-1.532-1.759-2.114l.958-2.513c-.222.582.472,1.454,1.759,2.115,1.52.781,3.292.972,3.959.428A.685.685,0,0,0,603.812,385.766Z" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-2">
                    <path id="Path_129" data-name="Path 129" d="M597.519,397.926l-.958,2.512a.676.676,0,0,1-.213.286c-.667.544-2.439.353-3.959-.428-1.287-.661-1.981-1.533-1.759-2.115l.957-2.513c-.222.583.472,1.454,1.759,2.115,1.52.781,3.292.972,3.959.428A.684.684,0,0,0,597.519,397.926Z" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-3">
                    <path id="Path_150" data-name="Path 150" d="M642.579,399.648l-.957,2.513a.689.689,0,0,1-.213.285c-.667.544-2.439.353-3.96-.428-1.286-.661-1.98-1.532-1.759-2.115l.958-2.512c-.222.582.472,1.453,1.759,2.114,1.52.781,3.292.973,3.959.428A.682.682,0,0,0,642.579,399.648Z" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-4">
                    <path id="Path_170" data-name="Path 170" d="M636.286,411.807l-.958,2.513a.676.676,0,0,1-.213.286c-.667.544-2.439.353-3.959-.428-1.287-.661-1.981-1.533-1.759-2.115l.957-2.513c-.222.582.472,1.454,1.759,2.115,1.52.781,3.292.972,3.959.428A.688.688,0,0,0,636.286,411.807Z" fill="none"/>
                    </clipPath>
                </defs>
                <g transform="translate(-28 -474.608)">
                    <circle id="Ellipse_7" data-name="Ellipse 7" cx="48.23" cy="48.23" r="48.23" transform="translate(28 474.608)" fill="#cce7e6"/>
                    <g id="Group_58" data-name="Group 58" transform="translate(-541.084 131.319)">
                    <path id="Path_90" data-name="Path 90" d="M653.667,401.746c-3.057-2.693-7.855-2.7-11.647-3.466a119,119,0,0,1-13.4-3.5c-9.176-2.99-17.281-8.14-26.127-11.875a58.556,58.556,0,0,0-5.628-2.074c-2.893-1.229-6.062-2.41-9.129-2.028a6.347,6.347,0,0,0-5.525,6.973c.427,7.642,8.684,12.8,14.5,16.377a81.362,81.362,0,0,0,46.6,11.95c3.726-.2,8.173-.673,10.955-3.461C656.889,408.018,656.357,404.115,653.667,401.746ZM610.78,391.408l-1.088-.475c-.259-.183-.517-.368-.778-.549Q609.847,390.894,610.78,391.408Zm-17.863-4.216,3.359,1.469q-1.7-.681-3.4-1.373Zm39.615,18.19a1.522,1.522,0,0,0-.091-.169c.265.085.528.174.793.258C633,405.444,632.766,405.412,632.532,405.382Z" fill="#636061"/>
                    <g id="Group_44" data-name="Group 44">
                        <g id="Group_37" data-name="Group 37">
                        <g id="Group_36" data-name="Group 36" style={{isolation: "isolate"}}>
                            <g id="Group_34" data-name="Group 34" style={{isolation: "isolate"}}>
                            <g id="Group_33" data-name="Group 33" clip-path="url(#clip-path)">
                                <g id="Group_32" data-name="Group 32" style={{isolation: "isolate"}}>
                                <path id="Path_91" data-name="Path 91" d="M603.812,385.766l-.957,2.513a.705.705,0,0,1-.034.074l.957-2.513a.705.705,0,0,0,.034-.074" fill="#731b1f"/>
                                <path id="Path_92" data-name="Path 92" d="M603.778,385.84l-.957,2.513a.685.685,0,0,1-.1.138l.958-2.513a.653.653,0,0,0,.1-.138" fill="#781c20"/>
                                <path id="Path_93" data-name="Path 93" d="M603.678,385.978l-.958,2.513a.927.927,0,0,1-.078.074l-.048.036.957-2.513.048-.036a.925.925,0,0,0,.079-.074" fill="#7d1d21"/>
                                <path id="Path_94" data-name="Path 94" d="M603.551,386.088l-.957,2.513a1.113,1.113,0,0,1-.151.089l.957-2.513a1.021,1.021,0,0,0,.151-.089" fill="#821e22"/>
                                <path id="Path_95" data-name="Path 95" d="M603.4,386.177l-.957,2.513a1.483,1.483,0,0,1-.177.072l.957-2.513a1.423,1.423,0,0,0,.177-.072" fill="#871f23"/>
                                <path id="Path_96" data-name="Path 96" d="M603.223,386.249l-.957,2.513a1.7,1.7,0,0,1-.216.057l.958-2.512a1.929,1.929,0,0,0,.215-.058" fill="#8d2024"/>
                                <path id="Path_97" data-name="Path 97" d="M603.008,386.307l-.958,2.512a2.41,2.41,0,0,1-.269.04l.957-2.512a2.641,2.641,0,0,0,.27-.04" fill="#922125"/>
                                <path id="Path_98" data-name="Path 98" d="M602.738,386.347l-.957,2.512a3.54,3.54,0,0,1-.392.015l.958-2.513a3.512,3.512,0,0,0,.391-.014" fill="#982226"/>
                                <path id="Path_99" data-name="Path 99" d="M602.347,386.361l-.958,2.513a5.812,5.812,0,0,1-1.6-.282l.957-2.513a5.812,5.812,0,0,0,1.6.282" fill="#9d2328"/>
                                <path id="Path_100" data-name="Path 100" d="M600.749,386.079l-.957,2.513q-.234-.074-.467-.165l.957-2.513q.234.092.467.165" fill="#982226"/>
                                <path id="Path_101" data-name="Path 101" d="M600.282,385.914l-.957,2.513c-.119-.047-.238-.1-.356-.152l.957-2.513c.118.054.237.105.356.152" fill="#922125"/>
                                <path id="Path_102" data-name="Path 102" d="M599.926,385.762l-.957,2.513c-.1-.044-.192-.09-.287-.139l-.025-.013.957-2.513.026.014c.094.048.19.094.286.138" fill="#8d2024"/>
                                <path id="Path_103" data-name="Path 103" d="M599.614,385.61l-.957,2.513c-.1-.05-.191-.1-.281-.154l.957-2.513c.09.052.184.1.281.154" fill="#871f23"/>
                                <path id="Path_104" data-name="Path 104" d="M599.333,385.456l-.957,2.513c-.091-.053-.177-.107-.26-.161l.957-2.513c.083.054.17.108.26.161" fill="#821e22"/>
                                <path id="Path_105" data-name="Path 105" d="M599.073,385.3l-.957,2.513c-.087-.057-.17-.115-.248-.173l.957-2.513c.079.058.161.116.248.173" fill="#7d1d21"/>
                                <path id="Path_106" data-name="Path 106" d="M598.825,385.122l-.957,2.513c-.088-.066-.171-.132-.249-.2l.957-2.513c.078.067.161.133.249.2" fill="#781c20"/>
                                <path id="Path_107" data-name="Path 107" d="M598.576,384.923l-.957,2.513c-.1-.082-.182-.166-.26-.248l.957-2.513a3.46,3.46,0,0,0,.26.248" fill="#731b1f"/>
                                <path id="Path_108" data-name="Path 108" d="M598.316,384.675l-.957,2.513c-.4-.421-.56-.839-.436-1.166l.958-2.513c-.125.327.039.745.435,1.166" fill="#6d191d"/>
                                </g>
                            </g>
                            </g>
                            <g id="Group_35" data-name="Group 35">
                            <path id="Path_110" data-name="Path 110" d="M602.055,383.653c1.52.781,2.211,1.854,1.544,2.4s-2.439.353-3.959-.428-2.213-1.856-1.547-2.4S600.534,382.872,602.055,383.653Z" fill="#d02b32"/>
                            </g>
                        </g>
                        </g>
                        <g id="Group_43" data-name="Group 43">
                        <g id="Group_42" data-name="Group 42" style={{isolation: "isolate"}}>
                            <g id="Group_40" data-name="Group 40" style={{isolation: "isolate"}}>
                            <g id="Group_39" data-name="Group 39" clip-path="url(#clip-path-2)">
                                <g id="Group_38" data-name="Group 38" style={{isolation: "isolate"}}>
                                <path id="Path_111" data-name="Path 111" d="M597.519,397.926l-.958,2.512a.407.407,0,0,1-.034.074l.958-2.512a.705.705,0,0,0,.034-.074" fill="#731b1f"/>
                                <path id="Path_112" data-name="Path 112" d="M597.485,398l-.958,2.512a.649.649,0,0,1-.1.139l.957-2.513a.714.714,0,0,0,.1-.138" fill="#781c20"/>
                                <path id="Path_113" data-name="Path 113" d="M597.384,398.138l-.957,2.513a.8.8,0,0,1-.079.073.6.6,0,0,1-.048.037l.957-2.513c.017-.012.033-.024.048-.037a.8.8,0,0,0,.079-.073" fill="#7d1d21"/>
                                <path id="Path_114" data-name="Path 114" d="M597.257,398.248l-.957,2.513a1.152,1.152,0,0,1-.151.089l.958-2.513a1.211,1.211,0,0,0,.15-.089" fill="#821e22"/>
                                <path id="Path_115" data-name="Path 115" d="M597.107,398.337l-.958,2.513a1.419,1.419,0,0,1-.177.072l.957-2.513a1.5,1.5,0,0,0,.178-.072" fill="#871f23"/>
                                <path id="Path_116" data-name="Path 116" d="M596.929,398.409l-.957,2.513a2.029,2.029,0,0,1-.215.057l.957-2.513a2.034,2.034,0,0,0,.215-.057" fill="#8d2024"/>
                                <path id="Path_117" data-name="Path 117" d="M596.714,398.466l-.957,2.513a2.413,2.413,0,0,1-.269.04l.957-2.513a2.41,2.41,0,0,0,.269-.04" fill="#922125"/>
                                <path id="Path_118" data-name="Path 118" d="M596.445,398.506l-.957,2.513a3.316,3.316,0,0,1-.392.014l.957-2.513a3.317,3.317,0,0,0,.392-.014" fill="#982226"/>
                                <path id="Path_119" data-name="Path 119" d="M596.053,398.52l-.957,2.513a5.781,5.781,0,0,1-1.6-.282l.958-2.513a5.733,5.733,0,0,0,1.6.282" fill="#9d2328"/>
                                <path id="Path_120" data-name="Path 120" d="M594.456,398.238l-.958,2.513c-.155-.049-.311-.1-.466-.165l.957-2.513c.155.061.311.117.467.165" fill="#982226"/>
                                <path id="Path_121" data-name="Path 121" d="M593.989,398.073l-.957,2.513c-.12-.047-.239-.1-.357-.151l.957-2.513c.118.054.237.1.357.151" fill="#922125"/>
                                <path id="Path_122" data-name="Path 122" d="M593.632,397.922l-.957,2.513c-.1-.044-.191-.09-.286-.139l-.026-.013.957-2.513.026.013c.095.049.19.1.286.139" fill="#8d2024"/>
                                <path id="Path_123" data-name="Path 123" d="M593.32,397.77l-.957,2.513c-.1-.051-.191-.1-.281-.155l.958-2.513c.09.053.183.1.28.155" fill="#871f23"/>
                                <path id="Path_124" data-name="Path 124" d="M593.04,397.615l-.958,2.513c-.09-.053-.177-.106-.259-.161l.957-2.512c.083.054.169.108.26.16" fill="#821e22"/>
                                <path id="Path_125" data-name="Path 125" d="M592.78,397.455l-.957,2.512c-.087-.057-.17-.114-.248-.173l.957-2.512c.078.058.161.116.248.173" fill="#7d1d21"/>
                                <path id="Path_126" data-name="Path 126" d="M592.532,397.282l-.957,2.512c-.089-.065-.172-.132-.249-.2l.957-2.512c.077.066.16.133.249.2" fill="#781c20"/>
                                <path id="Path_127" data-name="Path 127" d="M592.283,397.083l-.957,2.512a3.29,3.29,0,0,1-.261-.248l.958-2.513c.078.083.165.166.26.249" fill="#731b1f"/>
                                <path id="Path_128" data-name="Path 128" d="M592.023,396.834l-.958,2.513c-.4-.421-.559-.839-.435-1.166l.957-2.513c-.124.327.04.745.436,1.166" fill="#6d191d"/>
                                </g>
                            </g>
                            </g>
                            <g id="Group_41" data-name="Group 41">
                            <path id="Path_130" data-name="Path 130" d="M595.761,395.812c1.521.781,2.211,1.855,1.544,2.4s-2.439.353-3.959-.428-2.213-1.856-1.546-2.4S594.241,395.031,595.761,395.812Z" fill="#d02b32"/>
                            </g>
                        </g>
                        </g>
                        <path id="Path_131" data-name="Path 131" d="M598.837,388.15l-4.664,8.633.929.423,4.291-8.761" fill="#e1353d"/>
                    </g>
                    <rect id="Rectangle_39" data-name="Rectangle 39" width="4.514" height="4.74" transform="translate(596.211 388.809) rotate(24.596)" fill="#e1353d"/>
                    <g id="Group_57" data-name="Group 57">
                        <g id="Group_50" data-name="Group 50">
                        <g id="Group_49" data-name="Group 49" style={{isolation: "isolate"}}>
                            <g id="Group_47" data-name="Group 47" style={{isolation: "isolate"}}>
                            <g id="Group_46" data-name="Group 46" clip-path="url(#clip-path-3)">
                                <g id="Group_45" data-name="Group 45" style={{isolation: "isolate"}}>
                                <path id="Path_132" data-name="Path 132" d="M642.579,399.648l-.957,2.513a.813.813,0,0,1-.034.074l.957-2.513a.7.7,0,0,0,.034-.074" fill="#731b1f"/>
                                <path id="Path_133" data-name="Path 133" d="M642.545,399.722l-.957,2.513a.716.716,0,0,1-.1.138l.958-2.513a.71.71,0,0,0,.1-.138" fill="#781c20"/>
                                <path id="Path_134" data-name="Path 134" d="M642.445,399.86l-.958,2.513a.779.779,0,0,1-.078.073l-.048.037.957-2.513.048-.037a.925.925,0,0,0,.079-.073" fill="#7d1d21"/>
                                <path id="Path_135" data-name="Path 135" d="M642.318,399.97l-.957,2.513a1.225,1.225,0,0,1-.151.089l.957-2.513a1.11,1.11,0,0,0,.151-.089" fill="#821e22"/>
                                <path id="Path_136" data-name="Path 136" d="M642.167,400.059l-.957,2.513a1.492,1.492,0,0,1-.177.072l.957-2.513a1.424,1.424,0,0,0,.177-.072" fill="#871f23"/>
                                <path id="Path_137" data-name="Path 137" d="M641.99,400.131l-.957,2.513a2.127,2.127,0,0,1-.216.057l.958-2.513a1.735,1.735,0,0,0,.215-.057" fill="#8d2024"/>
                                <path id="Path_138" data-name="Path 138" d="M641.775,400.188l-.958,2.513a2.411,2.411,0,0,1-.269.04l.957-2.513a2.4,2.4,0,0,0,.27-.04" fill="#922125"/>
                                <path id="Path_139" data-name="Path 139" d="M641.505,400.228l-.957,2.513a3.322,3.322,0,0,1-.392.014l.958-2.512a3.519,3.519,0,0,0,.391-.015" fill="#982226"/>
                                <path id="Path_140" data-name="Path 140" d="M641.114,400.243l-.958,2.512a5.737,5.737,0,0,1-1.6-.282l.957-2.512a5.813,5.813,0,0,0,1.6.282" fill="#9d2328"/>
                                <path id="Path_141" data-name="Path 141" d="M639.516,399.961l-.957,2.512q-.234-.073-.467-.165l.957-2.513q.234.093.467.166" fill="#982226"/>
                                <path id="Path_142" data-name="Path 142" d="M639.049,399.8l-.957,2.513c-.119-.047-.238-.1-.356-.151l.957-2.513c.118.054.237.1.356.151" fill="#922125"/>
                                <path id="Path_143" data-name="Path 143" d="M638.693,399.644l-.957,2.513c-.1-.044-.192-.09-.287-.139l-.025-.013.957-2.513.026.013c.094.049.19.1.286.139" fill="#8d2024"/>
                                <path id="Path_144" data-name="Path 144" d="M638.381,399.492l-.957,2.513c-.1-.051-.191-.1-.281-.155l.957-2.513c.09.053.184.1.281.155" fill="#871f23"/>
                                <path id="Path_145" data-name="Path 145" d="M638.1,399.337l-.957,2.513c-.091-.052-.177-.106-.26-.161l.957-2.512c.083.054.17.108.26.16" fill="#821e22"/>
                                <path id="Path_146" data-name="Path 146" d="M637.84,399.177l-.957,2.512c-.087-.056-.17-.114-.248-.172l.957-2.513c.079.058.161.116.248.173" fill="#7d1d21"/>
                                <path id="Path_147" data-name="Path 147" d="M637.592,399l-.957,2.513c-.088-.066-.171-.133-.249-.2l.957-2.513c.078.067.161.133.249.2" fill="#781c20"/>
                                <path id="Path_148" data-name="Path 148" d="M637.343,398.8l-.957,2.513c-.095-.083-.182-.166-.26-.249l.957-2.513c.078.083.165.166.26.249" fill="#731b1f"/>
                                <path id="Path_149" data-name="Path 149" d="M637.083,398.556l-.957,2.513c-.4-.421-.56-.839-.436-1.166l.958-2.512c-.125.326.039.745.435,1.165" fill="#6d191d"/>
                                </g>
                            </g>
                            </g>
                            <g id="Group_48" data-name="Group 48">
                            <path id="Path_151" data-name="Path 151" d="M640.822,397.535c1.52.78,2.211,1.854,1.544,2.4s-2.439.353-3.959-.428-2.213-1.855-1.547-2.4S639.3,396.754,640.822,397.535Z" fill="#d02b32"/>
                            </g>
                        </g>
                        </g>
                        <g id="Group_56" data-name="Group 56">
                        <g id="Group_55" data-name="Group 55" style={{isolation: "isolate"}}>
                            <g id="Group_53" data-name="Group 53" style={{isolation: "isolate"}}>
                            <g id="Group_52" data-name="Group 52" clip-path="url(#clip-path-4)">
                                <g id="Group_51" data-name="Group 51" style={{isolation: "isolate"}}>
                                <path id="Path_152" data-name="Path 152" d="M636.286,411.807l-.958,2.513a.452.452,0,0,1-.034.074l.958-2.513a.708.708,0,0,0,.034-.074" fill="#731b1f"/>
                                <path id="Path_153" data-name="Path 153" d="M636.252,411.881l-.958,2.513a.621.621,0,0,1-.1.138l.957-2.513a.661.661,0,0,0,.1-.138" fill="#781c20"/>
                                <path id="Path_154" data-name="Path 154" d="M636.151,412.019l-.957,2.513a.8.8,0,0,1-.079.074l-.048.036.957-2.513a.59.59,0,0,0,.048-.036.8.8,0,0,0,.079-.074" fill="#7d1d21"/>
                                <path id="Path_155" data-name="Path 155" d="M636.024,412.129l-.957,2.513a.97.97,0,0,1-.151.089l.958-2.512a1.1,1.1,0,0,0,.15-.09" fill="#821e22"/>
                                <path id="Path_156" data-name="Path 156" d="M635.874,412.219l-.958,2.512a1.419,1.419,0,0,1-.177.072l.957-2.512a1.5,1.5,0,0,0,.178-.072" fill="#871f23"/>
                                <path id="Path_157" data-name="Path 157" d="M635.7,412.291l-.957,2.512a1.821,1.821,0,0,1-.215.058l.957-2.513a2.029,2.029,0,0,0,.215-.057" fill="#8d2024"/>
                                <path id="Path_158" data-name="Path 158" d="M635.481,412.348l-.957,2.513a2.669,2.669,0,0,1-.269.04l.957-2.513a2.67,2.67,0,0,0,.269-.04" fill="#922125"/>
                                <path id="Path_159" data-name="Path 159" d="M635.212,412.388l-.957,2.513a3.555,3.555,0,0,1-.392.014l.957-2.513a3.554,3.554,0,0,0,.392-.014" fill="#982226"/>
                                <path id="Path_160" data-name="Path 160" d="M634.82,412.4l-.957,2.513a5.819,5.819,0,0,1-1.6-.282l.958-2.513a5.768,5.768,0,0,0,1.6.282" fill="#9d2328"/>
                                <path id="Path_161" data-name="Path 161" d="M633.223,412.12l-.958,2.513c-.155-.049-.311-.1-.466-.165l.957-2.513q.233.092.467.165" fill="#982226"/>
                                <path id="Path_162" data-name="Path 162" d="M632.756,411.955l-.957,2.513c-.12-.047-.239-.1-.357-.152l.957-2.512c.118.054.237.1.357.151" fill="#922125"/>
                                <path id="Path_163" data-name="Path 163" d="M632.4,411.8l-.957,2.512c-.1-.044-.191-.09-.286-.138l-.026-.014.957-2.513.026.014c.1.048.19.1.286.139" fill="#8d2024"/>
                                <path id="Path_164" data-name="Path 164" d="M632.087,411.651l-.957,2.513c-.1-.05-.191-.1-.281-.154l.958-2.513c.09.052.183.1.28.154" fill="#871f23"/>
                                <path id="Path_165" data-name="Path 165" d="M631.807,411.5l-.958,2.513c-.09-.053-.177-.107-.259-.161l.957-2.513c.083.055.169.108.26.161" fill="#821e22"/>
                                <path id="Path_166" data-name="Path 166" d="M631.547,411.336l-.957,2.513c-.087-.057-.17-.115-.248-.173l.957-2.513c.078.059.161.116.248.173" fill="#7d1d21"/>
                                <path id="Path_167" data-name="Path 167" d="M631.3,411.163l-.957,2.513c-.089-.066-.172-.132-.249-.2l.957-2.513c.077.067.16.134.249.2" fill="#781c20"/>
                                <path id="Path_168" data-name="Path 168" d="M631.05,410.964l-.957,2.513a3.291,3.291,0,0,1-.261-.248l.958-2.513a3.46,3.46,0,0,0,.26.248" fill="#731b1f"/>
                                <path id="Path_169" data-name="Path 169" d="M630.79,410.716l-.958,2.513c-.395-.421-.559-.839-.435-1.166l.957-2.513c-.124.327.04.745.436,1.166" fill="#6d191d"/>
                                </g>
                            </g>
                            </g>
                            <g id="Group_54" data-name="Group 54">
                            <path id="Path_171" data-name="Path 171" d="M634.528,409.694c1.521.781,2.211,1.855,1.544,2.4s-2.439.353-3.959-.428-2.213-1.856-1.546-2.4S633.008,408.913,634.528,409.694Z" fill="#d02b32"/>
                            </g>
                        </g>
                        </g>
                        <path id="Path_172" data-name="Path 172" d="M637.6,402.032l-4.664,8.633.929.423,4.291-8.761" fill="#e1353d"/>
                    </g>
                    <rect id="Rectangle_40" data-name="Rectangle 40" width="4.514" height="4.74" transform="translate(634.978 402.69) rotate(24.596)" fill="#e1353d"/>
                    </g>
                </g>
                </svg>
</Card>
                 {/* socks */}
                <Card id="socks" className="card organs" draggable="true"><svg id="socks" xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><defs><clipPath id="a"><path d="M737.459,368.5s-6.341-5.927-17.919-3.722c0,0,.965,21.366-4.963,22.331s-20.124-12.544-21.916,2.343c-1.325,11,13.469,14.552,24.059,14.874,1.507-2.871,5.985-9.044,16.028-7.279C736.1,391.18,738.224,381.6,737.459,368.5Z" fill="none"/></clipPath><clipPath id="b"><path d="M761.479,387.484s-7.508-4.354-18.3.393c0,0,5.732,20.6.172,22.874s-22.425-7.71-20.832,7.2c1.177,11.021,16.389,11.16,26.782,9.1.825-3.136,3.8-10.156,13.988-10.688C765.244,409.886,765.162,400.075,761.479,387.484Z" fill="none"/></clipPath></defs><g transform="translate(-139.764 -474.608)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(139.764 474.608)" fill="#cce7e6"/><g transform="translate(-541.084 131.319)"><path d="M720.532,353.151s13.508-4.411,17.919,4l-.965,11.441s-7.857-5.927-17.919-3.722Z" fill="#efecec"/><path d="M716.747,404.416a32.873,32.873,0,0,0,8.747-.677c2.64-.74,5.2-2.957,7.281-6.6C722.732,395.372,718.254,401.544,716.747,404.416Z" fill="#efecec"/><path d="M737.486,368.589s-6.341-5.927-17.919-3.722c0,0,.965,21.366-4.963,22.331s-20.124-12.544-21.916,2.343c-1.325,11,13.469,14.552,24.059,14.875,1.507-2.872,5.985-9.044,16.028-7.28C736.13,391.265,738.251,381.686,737.486,368.589Z" fill="#d2d2d2"/><g clip-path="url(#a)"><rect width="4.227" height="4.227" rx="2.114" transform="translate(717.488 365.712) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(725.676 365.963) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(734.815 366.944) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 730.491, 372.102)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(722.24 372.582) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(717.598 379.281) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 726.892, 379.537)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(736.178 379.884) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(730.744 386.145) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(722.123 385.578) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 712.665, 386.138)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(703.101 384.752) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(695.303 384.257) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(698.928 390.292) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 708.087, 392.104)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(719.2 391.596) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(712.982 397.327) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(702.916 397.465) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 694.362, 395.06)" fill="#de1e28"/></g><path d="M741.615,376.373s12.2-7.284,18.36-.057l1.584,11.371s-8.971-4.046-18.3.327Z" fill="#efecec"/><path d="M749.242,427.209a32.819,32.819,0,0,0,8.382-2.592c2.411-1.3,4.417-4.031,5.644-8.047C753.083,417.066,750.078,424.075,749.242,427.209Z" fill="#efecec"/><path d="M761.559,387.687s-7.492-4.381-18.3.327c0,0,5.658,20.625.09,22.875s-22.4-7.791-20.858,7.124c1.137,11.025,16.349,11.219,26.749,9.2.836-3.134,3.841-10.143,14.026-10.639C765.244,410.1,765.2,400.292,761.559,387.687Z" fill="#d2d2d2"/><g clip-path="url(#b)"><rect width="4.227" height="4.227" rx="2.114" transform="translate(744.046 389.593) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 752.233, 389.844)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 761.372, 390.825)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(757.049 395.983) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(748.797 396.463) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(744.155 403.162) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(753.449 403.418) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(762.736 403.765) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(757.302 410.026) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 748.68, 409.459)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 739.223, 410.019)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(729.658 408.633) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 721.861, 408.138)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 725.486, 414.173)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(734.644 415.985) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(745.758 415.477) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(739.54 421.208) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(729.473 421.346) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(720.92 418.941) rotate(4.977)" fill="#de1e28"/></g></g></g></svg></Card>
                 {/* phone */}
                <Card id="phone" className="card organs" draggable="true"><svg id="phone"  xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><defs><clipPath id="a"><path d="M832.4,421.814l-2.184-1.188a2.387,2.387,0,0,1-1.132-1.869l2.183,1.188A2.391,2.391,0,0,0,832.4,421.814Z" fill="none"/></clipPath><clipPath id="b"><path d="M848.432,358.38l2.183,1.188a1.711,1.711,0,0,0-1.07-.191l-2.183-1.188A1.718,1.718,0,0,1,848.432,358.38Z" fill="none"/></clipPath><clipPath id="c"><path d="M824.688,366.081l-2.183-1.188c-.2-1.661.846-3.329,2.214-3.522l2.183,1.188C825.534,362.751,824.486,364.42,824.688,366.081Z" fill="none"/></clipPath></defs><g transform="translate(-251.528 -474.608)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(251.528 474.608)" fill="#cce7e6"/><g transform="translate(-541.084 131.319)"><path d="M825.836,368.145c-.232.173-.44.338-.629.5l9.009-5.367Z" fill="#c4baa2"/><g style={{isolation: "isolate"}}><g style={{isolation: "isolate"}}><g clip-path="url(#a)"><g style={{isolation: "isolate"}}><path d="M832.4,421.814l-2.184-1.188a2.387,2.387,0,0,1-1.132-1.869l2.183,1.188a2.391,2.391,0,0,0,1.133,1.869" fill="#5f5f5f"/></g></g></g><g style={{isolation: "isolate"}}><g clip-path="url(#b)"><g style={{isolation: "isolate"}}><path d="M849.545,359.377l-2.183-1.188a1.744,1.744,0,0,1,.678.036l2.183,1.188a1.742,1.742,0,0,0-.678-.036" fill="#7c7c7d"/><path d="M850.223,359.413l-2.183-1.188a1.734,1.734,0,0,1,.327.121l2.183,1.188a1.71,1.71,0,0,0-.327-.121" fill="#787878"/><path d="M850.55,359.534l-2.183-1.188.065.034,2.183,1.188c-.021-.012-.043-.023-.065-.034" fill="#747474"/></g></g></g><path d="M826.9,362.559l-2.184-1.188,22.643-3.182,2.183,1.188Z" fill="#888787"/><path d="M831.268,419.945l-2.183-1.188-6.58-53.864,2.184,1.188Z" fill="#5b5b5b"/><g style={{isolation: "isolate"}}><g clip-path="url(#c)"><g style={{isolation: "isolate"}}><path d="M824.688,366.081l-2.183-1.188a3.564,3.564,0,0,1,.2-1.654l2.184,1.188a3.577,3.577,0,0,0-.2,1.654" fill="#5f5f5f"/><path d="M824.885,364.427l-2.184-1.188a3.585,3.585,0,0,1,.207-.459l2.183,1.188a3.4,3.4,0,0,0-.206.459" fill="#636363"/><path d="M825.091,363.968l-2.183-1.188a3.336,3.336,0,0,1,.206-.336l2.184,1.188a3.261,3.261,0,0,0-.207.336" fill="#676768"/><path d="M825.3,363.632l-2.184-1.188a3.229,3.229,0,0,1,.215-.273l2.184,1.187a3.061,3.061,0,0,0-.215.274" fill="#6b6b6c"/><path d="M825.513,363.358l-2.184-1.187a2.818,2.818,0,0,1,.23-.233l2.183,1.188a2.947,2.947,0,0,0-.229.232" fill="#6f7070"/><path d="M825.742,363.126l-2.183-1.188a2.657,2.657,0,0,1,.259-.2L826,362.921a2.775,2.775,0,0,0-.259.205" fill="#747474"/><path d="M826,362.921l-2.183-1.188a2.427,2.427,0,0,1,.327-.189l2.183,1.188a2.391,2.391,0,0,0-.327.189" fill="#787878"/><path d="M826.328,362.732l-2.183-1.188a2.035,2.035,0,0,1,.574-.173l2.183,1.188a2,2,0,0,0-.574.173" fill="#7c7c7d"/></g></g></g><path d="M849.545,359.377a2.064,2.064,0,0,1,2.2,2.061l6.58,53.863c.2,1.661-.846,3.33-2.214,3.522l-22.641,3.182a2.066,2.066,0,0,1-2.2-2.06l-6.58-53.864c-.2-1.661.846-3.33,2.214-3.522Z" fill="#b0afaf"/></g><path d="M855.553,409.175l-22.991,3.3-5.748-42.191,22.991-3.057Z" fill="#464544"/><circle cx="2.996" cy="2.996" r="2.996" transform="translate(841.857 411.865)" fill="#464544"/></g></g></svg>
</Card>
                </Board>
                </div>

            </main> 
            <div className="containerfinished"> 
                <Finished />
            </div>
            </div>  
    )
}
