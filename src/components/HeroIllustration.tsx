export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
      >
        {/* Background decorative colorful circles */}
        <circle cx="300" cy="250" r="210" fill="#F0F7FF" />
        <circle cx="530" cy="110" r="14" fill="#FF5252" />
        <circle cx="550" cy="90" r="8" fill="#FFC107" />
        <circle cx="100" cy="100" r="10" fill="#42A5F5" />
        <circle cx="70" cy="120" r="6" fill="#FF7043" />
        
        {/* Top yellow arched backdrop shape like screenshot */}
        <path
          d="M 370,120 Q 420,70 470,120 L 480,200 L 360,200 Z"
          fill="#FFCA28"
          opacity="0.85"
        />
        <rect x="250" y="80" width="30" height="30" rx="15" fill="#4DD0E1" opacity="0.6" />

        {/* Group of 4 Students Illustration */}
        
        {/* Person 1 (Far Left - Yellow Sweater, Glasses, looking at book) */}
        <g id="person-1">
          {/* Body */}
          <path d="M 120,400 C 120,290 170,260 210,250 C 230,300 220,400 220,400 Z" fill="#FBC02D" />
          {/* Arms holding book */}
          <path d="M 145,290 L 190,320 L 175,340 Z" fill="#F57F17" />
          {/* Head */}
          <ellipse cx="180" cy="180" rx="26" ry="32" fill="#8D5B4C" />
          {/* Hair */}
          <path d="M 152,175 C 150,140 180,120 210,135 C 215,160 190,170 180,170 Z" fill="#212121" />
          {/* Glasses */}
          <circle cx="170" cy="180" r="10" stroke="#1976D2" strokeWidth="3" fill="none" />
          <circle cx="192" cy="180" r="10" stroke="#1976D2" strokeWidth="3" fill="none" />
          <line x1="180" y1="180" x2="182" y2="180" stroke="#1976D2" strokeWidth="3" />
        </g>

        {/* Person 2 (Center Left - Pink/Red Shirt, Blonde Hair, reading open book) */}
        <g id="person-2">
          {/* Body */}
          <path d="M 210,400 C 210,280 250,260 290,270 L 290,400 Z" fill="#FF5252" />
          {/* Head */}
          <ellipse cx="255" cy="205" rx="24" ry="28" fill="#F5CBA7" />
          {/* Blonde Long Hair */}
          <path d="M 225,200 C 220,150 280,140 285,190 C 290,250 230,260 225,200 Z" fill="#E67E22" />
          {/* Open Book in hand */}
          <path d="M 220,310 Q 250,300 280,310 L 275,370 Q 250,355 220,370 Z" fill="#37474F" />
          <path d="M 225,315 Q 250,307 275,315 L 272,365 Q 250,352 225,365 Z" fill="#FFFFFF" />
        </g>

        {/* Person 3 (Center Right - Yellow/Orange Top, Dark Hair, with Laptop) */}
        <g id="person-3">
          {/* Body */}
          <path d="M 290,400 C 290,260 340,250 370,270 L 370,400 Z" fill="#FFB74D" />
          {/* Head */}
          <ellipse cx="330" cy="190" rx="25" ry="30" fill="#D78D63" />
          {/* Hair */}
          <path d="M 305,185 C 300,140 355,140 355,185 Z" fill="#1C2833" />
          {/* Laptop */}
          <polygon points="340,320 395,310 405,365 350,375" fill="#37474F" />
          <polygon points="345,325 390,317 398,360 353,368" fill="#90CAF9" />
          <path d="M 330,375 L 415,360 L 410,370 L 325,385 Z" fill="#78909C" />
        </g>

        {/* Person 4 (Far Right - Blue Top, Dark Hair, holding pen/notebook) */}
        <g id="person-4">
          {/* Body */}
          <path d="M 360,400 C 365,240 440,230 460,260 L 460,400 Z" fill="#1E88E5" />
          {/* Head */}
          <ellipse cx="405" cy="190" rx="24" ry="28" fill="#E59866" />
          {/* Dark Hair with pony tail */}
          <path d="M 380,185 C 375,135 435,135 430,185 C 435,210 425,230 410,230 Z" fill="#17202A" />
        </g>

        {/* Foreground Elements: Books Stack & Coffee Cups (matching screenshot baseline) */}
        {/* Table line */}
        <path d="M 80,410 C 250,400 400,400 520,410 L 520,440 L 80,440 Z" fill="#00838F" opacity="0.9" />

        {/* Books stack on left */}
        <rect x="140" y="380" width="60" height="12" rx="2" fill="#E53935" />
        <rect x="145" y="368" width="55" height="12" rx="2" fill="#FBC02D" />
        <rect x="150" y="356" width="50" height="12" rx="2" fill="#1E88E5" />

        {/* Red Coffee Cup */}
        <rect x="220" y="365" width="18" height="25" rx="3" fill="#D32F2F" />
        <rect x="218" y="362" width="22" height="5" rx="2" fill="#424242" />

        {/* Open Study Books in center */}
        <path d="M 270,395 Q 310,380 350,395 L 345,415 Q 310,400 275,415 Z" fill="#FFFFFF" stroke="#B0BEC5" strokeWidth="2" />
        <line x1="310" y1="388" x2="310" y2="408" stroke="#CFD8DC" strokeWidth="2" />

        {/* Right Books & Pencil Pouch */}
        <rect x="420" y="380" width="70" height="14" rx="2" fill="#FB8C00" />
        <rect x="425" y="366" width="60" height="14" rx="2" fill="#43A047" />
        <rect x="430" y="352" width="55" height="14" rx="2" fill="#E53935" />
      </svg>
    </div>
  );
}
