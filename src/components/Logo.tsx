import { motion } from "motion/react";

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
      >
        {/* 
           Compass Star Construction:
           - North Point: (50, 0)
           - South Point: (50, 100)
           - East Point: (85, 50)
           - West Point: (15, 50)
           - Diagonals: Small points between axes
           - Circle: Radius ~35, broken at top and bottom by N/S points
           - Split: Diagonal gap running bottom-left to top-right
        */}

        {/* The Circle - Broken at Top and Bottom */}
        {/* Left Arc */}
        <path
          d="M 45 15 A 35 35 0 0 0 45 85"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Right Arc */}
        <path
          d="M 55 85 A 35 35 0 0 0 55 15"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* The Star - Using a mask for the diagonal split effect */}
        <mask id="star-split">
          <rect x="0" y="0" width="100" height="100" fill="white" />
          {/* The diagonal cut line */}
          <path
            d="M 30 70 L 70 30"
            stroke="black"
            strokeWidth="4"
          />
        </mask>

        <g mask="url(#star-split)">
          <path
            d="
              M 50 0 L 60 40 L 90 50 L 60 60 L 50 100 L 40 60 L 10 50 L 40 40 Z
              M 60 40 L 70 30 L 60 20 Z 
            "
            fill="currentColor"
          />
          {/* Refined Star Shape */}
          <path
             d="M 50 0 
                L 58 42 
                L 85 50 
                L 58 58 
                L 50 100 
                L 42 58 
                L 15 50 
                L 42 42 
                Z"
             fill="currentColor"
          />
          
          {/* Diagonal small points */}
          <path
            d="M 65 35 L 58 42 L 65 50 Z" 
            fill="currentColor"
            className="hidden" // Hiding manual construction to stick to the main shape
          />
          
          {/* Adding the small diagonal spikes */}
          <path
            d="M 50 50 L 75 25 L 50 50" // Placeholder for visual check
            stroke="none"
          />
           
           {/* Let's draw the 8-point star properly */}
           <path
             d="
               M 50 0 L 55 35 L 85 50 L 55 65 L 50 100 L 45 65 L 15 50 L 45 35 Z
               M 45 35 L 30 20 L 45 35
               M 55 35 L 70 20 L 55 35
               M 55 65 L 70 80 L 55 65
               M 45 65 L 30 80 L 45 65
             "
             fill="none"
           />
           
           {/* 
             Correct 8-point star shape with long N/S, medium E/W, short diagonals 
             Center is 50,50
           */}
           <path
             d="
               M 50 0 L 56 38 L 85 50 L 56 62 L 50 100 L 44 62 L 15 50 L 44 38 Z
               M 44 38 L 35 25 L 50 50
               M 56 38 L 65 25 L 50 50
               M 56 62 L 65 75 L 50 50
               M 44 62 L 35 75 L 50 50
             "
             fill="currentColor"
           />
        </g>
        
        {/* Re-applying the diagonal cut manually for cleaner look without mask issues if any */}
        <path
           d="M 38 62 L 62 38"
           stroke="black"
           strokeWidth="3"
           className="mix-blend-destination-out"
        />
      </svg>
    </div>
  );
};
