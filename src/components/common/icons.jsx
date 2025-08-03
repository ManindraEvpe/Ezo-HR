export function SunIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          fill="currentColor"
          fillOpacity={0}
          strokeDasharray={36}
          strokeDashoffset={36}
          d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.9s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="36;0"
          ></animate>
        </path>
        <g>
          <path
            strokeDasharray={2}
            strokeDashoffset={2}
            d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
          >
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.5s"
              dur="0.2s"
              values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
            ></animate>
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.5s"
              dur="0.2s"
              values="2;0"
            ></animate>
          </path>
          <path
            strokeDasharray={2}
            strokeDashoffset={2}
            d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
          >
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.7s"
              dur="0.2s"
              values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
            ></animate>
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="2;0"
            ></animate>
          </path>
          <animateTransform
            attributeName="transform"
            dur="30s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          ></animateTransform>
        </g>
      </g>
    </svg>
  );
}

export function MoonIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray={4}
        strokeDashoffset={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      >
        <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
          <animate
            id="lineMdMoonRisingTwotoneAltLoop0"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s;lineMdMoonRisingTwotoneAltLoop0.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonRisingTwotoneAltLoop0.begin+2s;lineMdMoonRisingTwotoneAltLoop0.begin+4s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonRisingTwotoneAltLoop0.begin+1.2s;lineMdMoonRisingTwotoneAltLoop0.begin+3.2s;lineMdMoonRisingTwotoneAltLoop0.begin+5.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonRisingTwotoneAltLoop0.begin+1.8s"
            to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonRisingTwotoneAltLoop0.begin+3.8s"
            to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonRisingTwotoneAltLoop0.begin+5.8s"
            to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
          ></set>
        </path>
        <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
          <animate
            id="lineMdMoonRisingTwotoneAltLoop1"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.1s;lineMdMoonRisingTwotoneAltLoop1.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonRisingTwotoneAltLoop1.begin+2s;lineMdMoonRisingTwotoneAltLoop1.begin+4s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonRisingTwotoneAltLoop1.begin+1.2s;lineMdMoonRisingTwotoneAltLoop1.begin+3.2s;lineMdMoonRisingTwotoneAltLoop1.begin+5.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonRisingTwotoneAltLoop1.begin+1.8s"
            to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonRisingTwotoneAltLoop1.begin+3.8s"
            to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonRisingTwotoneAltLoop1.begin+5.8s"
            to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
          ></set>
        </path>
        <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
          <animate
            id="lineMdMoonRisingTwotoneAltLoop2"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="2s;lineMdMoonRisingTwotoneAltLoop2.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonRisingTwotoneAltLoop2.begin+2s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonRisingTwotoneAltLoop2.begin+1.2s;lineMdMoonRisingTwotoneAltLoop2.begin+3.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonRisingTwotoneAltLoop2.begin+1.8s"
            to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonRisingTwotoneAltLoop2.begin+5.8s"
            to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
          ></set>
        </path>
      </g>
      <path
        fill="currentColor"
        fillOpacity={0.3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        transform="translate(0 22)"
      >
        <animateMotion
          fill="freeze"
          calcMode="linear"
          dur="0.6s"
          path="M0 0v-22"
        ></animateMotion>
      </path>
    </svg>
  );
}

export function PlaystoreIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      {/* Icon from Famicons by Family - https://github.com/familyjs/famicons/blob/main/LICENSE */}
      <path
        fill="currentColor"
        d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256L55.37 56.42A4.33 4.33 0 0 0 48 59.49M345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50"
      />
    </svg>
  );
}

export function AppStoreIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Simple Icons by Simple Icons Collaborators - https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md */}
      <path
        fill="currentColor"
        d="m8.809 14.92l6.11-11.037c.084-.152.168-.302.244-.459c.069-.142.127-.285.165-.44c.08-.326.058-.666-.066-.977a1.5 1.5 0 0 0-.62-.735a1.42 1.42 0 0 0-.922-.193c-.32.043-.613.194-.844.43c-.11.11-.2.235-.283.368c-.092.146-.175.298-.259.45l-.386.697l-.387-.698c-.084-.151-.167-.303-.259-.449a2.2 2.2 0 0 0-.283-.369a1.45 1.45 0 0 0-.844-.429a1.42 1.42 0 0 0-.921.193a1.5 1.5 0 0 0-.62.735a1.6 1.6 0 0 0-.066.977c.038.155.096.298.164.44c.076.157.16.307.244.459l1.248 2.254l-4.862 8.782H2.03c-.168 0-.336 0-.503.01c-.152.009-.3.028-.448.071c-.31.09-.582.28-.778.548A1.58 1.58 0 0 0 .3 17.404c.197.268.468.457.779.548c.148.043.296.062.448.071c.167.01.335.01.503.01h13.097a2 2 0 0 0 .1-.27c.415-1.416-.616-2.844-2.035-2.844zm-5.696 3.622l-.792 1.5c-.082.156-.165.31-.239.471a2.4 2.4 0 0 0-.16.452a1.7 1.7 0 0 0 .064 1.003c.121.318.334.583.607.755s.589.242.901.197c.314-.044.6-.198.826-.44c.108-.115.196-.242.278-.378c.09-.15.171-.306.253-.462L6 19.464c-.09-.15-.947-1.47-2.887-.922m20.586-3.006a1.47 1.47 0 0 0-.779-.54a2 2 0 0 0-.448-.071c-.168-.01-.335-.01-.503-.01h-3.321L14.258 7.1a4.06 4.06 0 0 0-1.076 2.198a4.64 4.64 0 0 0 .546 3l5.274 9.393c.084.15.167.3.259.444c.084.13.174.253.283.364c.231.232.524.38.845.423s.643-.024.922-.19a1.5 1.5 0 0 0 .621-.726c.125-.307.146-.642.066-.964a2.2 2.2 0 0 0-.165-.434c-.075-.155-.16-.303-.244-.453l-1.216-2.166h1.596c.168 0 .335 0 .503-.009c.152-.009.3-.028.448-.07a1.47 1.47 0 0 0 .78-.541a1.54 1.54 0 0 0 .3-.916a1.54 1.54 0 0 0-.3-.916"
      />
    </svg>
  );
}
