export const Background = () => (
   <svg
    className="fixed inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 800"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" className="wave-stop-indigo-1" />
        <stop offset="50%" className="wave-stop-indigo-2" />
        <stop offset="100%" className="wave-stop-indigo-3" />
      </linearGradient>

      <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="0%">
        <stop offset="0%" className="wave-stop-cyan-1" />
        <stop offset="50%" className="wave-stop-cyan-2" />
        <stop offset="100%" className="wave-stop-cyan-3" />
      </linearGradient>
    </defs>

    <path
      d="M1440,0 L1440,300 Q1200,250 1000,280 T600,300 Q400,320 200,280 T0,300 L0,0 Z"
      fill="url(#wave-gradient-1)"
    />

    <path
      d="M0,800 L0,500 Q200,550 400,520 T800,500 Q1000,480 1200,520 T1440,500 L1440,800 Z"
      fill="url(#wave-gradient-2)"
    />

    <path
      d="M1440,120 Q1100,80 800,110 T200,140 Q100,150 0,130"
      className="wave-line-indigo-strong"
    />
    <path
      d="M1440,140 Q1100,100 800,130 T200,160 Q100,170 0,150"
      className="wave-line-indigo-medium"
    />
    <path
      d="M1440,160 Q1100,120 800,150 T200,180 Q100,190 0,170"
      className="wave-line-indigo-light"
    />

    <path
      d="M0,660 Q300,620 600,650 T1200,680 Q1300,690 1440,670"
      className="wave-line-cyan-strong"
    />
    <path
      d="M0,680 Q300,640 600,670 T1200,700 Q1300,710 1440,690"
      className="wave-line-cyan-medium"
    />
    <path
      d="M0,700 Q300,660 600,690 T1200,720 Q1300,730 1440,710"
      className="wave-line-cyan-light"
    />
  </svg>
)