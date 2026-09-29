/* Small original SVG illustrations. All text for spoken phrases lives in story.js. */
(function () {
  "use strict";

  function svg(body, extraClass) {
    return '<svg class="' + (extraClass || '') + '" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<defs>' +
      '<linearGradient id="sky" x2="0" y2="1"><stop stop-color="#a9ddf7"/><stop offset="1" stop-color="#eaf8ff"/></linearGradient>' +
      '<linearGradient id="warm" x2="0" y2="1"><stop stop-color="#ffe3b6"/><stop offset="1" stop-color="#fff8e9"/></linearGradient>' +
      '<linearGradient id="night" x2="0" y2="1"><stop stop-color="#99d2e3"/><stop offset="1" stop-color="#d8f0ef"/></linearGradient>' +
      '<radialGradient id="globe"><stop stop-color="#5fbfe5"/><stop offset="1" stop-color="#2b86c4"/></radialGradient>' +
      '<clipPath id="globe-clip"><circle r="194"/></clipPath>' +
      '</defs>' + body + '</svg>';
  }
  function cloud(x, y, scale, action) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + scale + ')"><g' + (action ? ' data-action="' + action + '" class="tap-target"' : '') + '>' +
      '<ellipse cx="0" cy="30" rx="85" ry="28" fill="#fff"/><circle cx="-44" cy="13" r="36" fill="#fff"/><circle cx="5" cy="-8" r="49" fill="#fff"/><circle cx="51" cy="14" r="37" fill="#fff"/>' +
      (action ? '<circle cx="0" cy="17" r="93" fill="transparent"/>' : '') + '</g></g>';
  }
  function star(x, y, r, fill) {
    return '<path class="twinkle" d="M' + x + ' ' + (y-r) + ' Q' + x + ' ' + y + ' ' + (x+r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y+r) + ' Q' + x + ' ' + y + ' ' + (x-r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y-r) + 'Z" fill="' + (fill || '#fff') + '"/>';
  }
  function hills(color) {
    return '<path d="M0 470 Q160 380 325 460 Q475 355 650 456 Q855 350 1035 450 Q1120 420 1200 445 V600 H0Z" fill="' + (color || '#a7d8a1') + '"/>' +
      '<path d="M0 545 Q230 440 465 535 Q680 462 858 515 Q1030 458 1200 520 V600 H0Z" fill="#77bd93" opacity=".8"/>';
  }
  function tree(x, y, scale, snowy) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + scale + ')"><rect x="-11" y="-8" width="22" height="88" rx="7" fill="#966b54"/>' +
      '<path d="M0-180 76-45 H44 L88 12 H-88 L-44-45 H-76Z" fill="#348e74" stroke="#276e64" stroke-width="5" stroke-linejoin="round"/>' +
      (snowy ? '<path d="M0-180 29-127 H-29Z M-73-44 H73 L87 12 H-87Z" fill="#fff" opacity=".92"/>' : '') + '</g>';
  }
  function winterWindow(x) {
    return '<g transform="translate(' + x + ' 113)"><rect x="-35" y="-35" width="70" height="70" fill="#a5ddec" stroke="#533c36" stroke-width="5"/>' +
      '<rect x="-31" y="-31" width="62" height="62" fill="none" stroke="#bd4551" stroke-width="7"/>' +
      '<path d="M0-31V31 M-31 0H31" stroke="#bd4551" stroke-width="6"/></g>';
  }
  function winterHouse(snowy) {
    return '<g transform="translate(750 270)">' +
      '<path d="M86-96 Q62-121 82-144 Q105-166 83-180 Q61-194 75-217" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round"/>' +
      '<rect x="69" y="-90" width="38" height="84" fill="#584844"/><rect x="65" y="-96" width="46" height="13" fill="#493d3a"/>' +
      '<path d="M-160 32 0-77 160 32 V224 H-160Z" fill="#e8dfc4" stroke="#d4c6a8" stroke-width="5"/>' +
      '<path d="M-183 38 0-91 183 38" fill="none" stroke="#ad7969" stroke-width="27" stroke-linecap="round" stroke-linejoin="round"/>' +
      (snowy ? '<path d="M-183 31 0-98 183 31" fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>' : '') +
      winterWindow(-100) + winterWindow(100) +
      '<rect x="-39" y="77" width="78" height="147" fill="#aa7245" stroke="#4b3c34" stroke-width="5"/>' +
      '<rect x="-29" y="88" width="58" height="126" fill="#b6814f" stroke="#8d5e3b" stroke-width="4"/>' +
      '<circle cx="24" cy="151" r="6" fill="#ffcd45"/></g>';
  }
  function traveler(x, y, scale, winter) {
    var shoes = '<path d="M-44 83 Q-48 82-49 91 Q-50 100-38 101 H-8 Q0 101-1 92 L-5 84Z M5 84 Q2 92 8 100 H38 Q50 100 49 91 Q48 83 43 83Z" fill="#fffaf0" stroke="#b7aa8b" stroke-width="3"/>' +
      '<path d="M-47 95 Q-38 99-5 96 M5 96 Q38 99 47 95" fill="none" stroke="#d5c8ac" stroke-width="3"/>' +
      '<circle cx="-25" cy="91" r="4" fill="#f28db1"/><circle cx="26" cy="91" r="4" fill="#f28db1"/>';
    var trousers = '<path d="M-35 31 Q-42 48-43 82 Q-45 90-32 91 H-8 Q-3 81-1 58 L0 36Z M0 36 Q2 61 7 91 H33 Q45 89 43 81 Q41 49 35 31Z" fill="#70dce4" stroke="#3caebd" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M-29 46 Q-33 67-32 82 M29 46 Q33 68 32 82" fill="none" stroke="#aaf1ee" stroke-width="3" opacity=".8"/>';
    var hair = '<path d="M-38-82 Q-52-66-48-41 Q-51-10-58 16 Q-40 23-27 8 L33 10 Q50 25 57 13 Q45-16 46-48 Q48-78 33-92Z" fill="#c99351" stroke="#a36f3d" stroke-width="3"/>' +
      '<path d="M-43-43 Q-47-12-53 12 M43-43 Q45-11 52 12" fill="none" stroke="#e6b873" stroke-width="5" stroke-linecap="round"/>';
    var arms = winter
      ? '<path d="M-36-11 Q-50-8-55 13 L-55 27 L-44 32 Q-33 13-31 1Z M36-11 Q50-8 55 13 L55 27 L44 32 Q33 13 31 1Z" fill="#eac6ae" stroke="#c89f8c" stroke-width="3"/>' +
        '<path d="M-55 22 Q-66 20-65 33 Q-62 44-51 40 L-44 31Z M55 22 Q66 20 65 33 Q62 44 51 40 L44 31Z" fill="#f5a7b7" stroke="#cc758f" stroke-width="3"/>'
      : '<path d="M-46 1 Q-56 16-56 35 Q-54 43-47 42 Q-41 39-42 32 L-35 11Z M46 1 Q56 16 56 35 Q54 43 47 42 Q41 39 42 32 L35 11Z" fill="#f4c393" stroke="#d9a578" stroke-width="3"/>';
    var top = winter
      ? '<path d="M-34-15 Q0-24 34-15 L43 33 Q0 44-43 33Z" fill="#eac6ae" stroke="#c89f8c" stroke-width="3"/>' +
        '<path d="M0-17V37 M-32 30 Q0 39 32 30" fill="none" stroke="#f7e2d2" stroke-width="3"/>'
      : '<path d="M-34-16 Q0-25 34-16 L43 34 Q0 47-43 34Z" fill="#ebc9b6" stroke="#c99d89" stroke-width="3"/>' +
        '<path d="M-34-15 Q-47-16-51 4 L-37 11 L-29-5Z M34-15 Q47-16 51 4 L37 11 L29-5Z" fill="#ebc9b6" stroke="#c99d89" stroke-width="3"/>' +
        '<path d="M0-18 V19" stroke="#f8e3d4" stroke-width="5"/>' +
        '<circle cy="-9" r="2.5" fill="#815d48"/><circle cy="3" r="2.5" fill="#815d48"/><circle cy="15" r="2.5" fill="#815d48"/>';
    var hat = winter
      ? '<path d="M-42-86 Q-39-119 0-121 Q39-119 42-86Z" fill="#a9e9dc" stroke="#6bbdae" stroke-width="3"/>' +
        '<path d="M-29-104 Q-33-94-31-86 M-13-113 Q-16-99-15-85 M4-115 Q4-99 4-85 M22-109 Q25-97 24-85" fill="none" stroke="#d9fff1" stroke-width="2"/>' +
        '<path d="M-43-89 Q0-95 43-89 L43-76 Q0-82-43-76Z" fill="#c9f3e7" stroke="#6bbdae" stroke-width="3"/>'
      : '<path d="M-43-89 Q-38-119 0-121 Q38-119 43-89Z" fill="#b5eee0" stroke="#73bfb0" stroke-width="3"/>' +
        '<path d="M-31-105 Q-34-95-32-86 M-12-113 Q-15-99-14-85 M6-114 Q6-99 6-85 M24-105 Q28-95 27-86" fill="none" stroke="#e5fff3" stroke-width="2"/>' +
        '<path d="M-43-91 Q-52-91-54-83 Q-55-76-46-75 Q-41-68-33-75 Q-21-68-12-76 Q0-70 11-76 Q23-69 33-76 Q41-69 48-75 Q57-77 54-85 Q51-92 43-91 Q0-99-43-91Z" fill="#c9f5e8" stroke="#73bfb0" stroke-width="3"/>';
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + scale + ')"><g class="float">' +
      '<ellipse cy="99" rx="49" ry="8" fill="#46677b" opacity=".17"/>' + shoes + trousers + hair + arms + top +
      '<circle cy="-57" r="37" fill="#f4c393" stroke="#d9a578" stroke-width="3"/>' +
      '<path d="M-38-66 Q-36-99 0-100 Q34-99 38-68 Q23-75 10-84 Q-12-68-38-66Z" fill="#c99351"/>' +
      '<path d="M-38-58 Q-42-27-49-7 M38-58 Q42-27 49-7" fill="none" stroke="#e6b873" stroke-width="7" stroke-linecap="round"/>' +
      '<circle cx="-13" cy="-57" r="3.5" fill="#624438"/><circle cx="14" cy="-57" r="3.5" fill="#624438"/>' +
      '<path d="M-10-39 Q0-29 11-39" fill="none" stroke="#b16658" stroke-width="3.5" stroke-linecap="round"/>' +
      (winter ? '<path d="M-30-24 Q0-7 30-24 L30-13 Q0 3-30-13Z" fill="#f5a7b7" stroke="#cc758f" stroke-width="2"/>' +
        '<path d="M15-14 H30 Q35 6 25 23 L12 20 Q22 2 15-14Z" fill="#f5a7b7" stroke="#cc758f" stroke-width="2"/>' : '') + hat + '</g></g>';
  }
  function father(x, y, scale) {
    return '<g class="family-father" transform="translate(' + x + ' ' + y + ') scale(' + scale + ')">' +
      '<ellipse cy="99" rx="51" ry="8" fill="#46677b" opacity=".17"/>' +
      '<path d="M-30 33 L-29 78 Q-28 86-18 86 Q-9 86-8 77 L-2 45 M15 42 L20 79 Q22 87 32 84 Q39 82 37 74 L32 32" fill="#e6ad80" stroke="#bd805e" stroke-width="3"/>' +
      '<path d="M-37 18 Q0 13 38 18 L42 48 L6 51 L0 36 L-6 51 L-42 48Z" fill="#303540" stroke="#252932" stroke-width="3"/>' +
      '<path d="M-30 82 Q-41 81-44 91 Q-46 99-35 100 H-7 Q-1 99-3 91 L-10 83Z M21 82 L16 91 Q14 99 22 100 H48 Q56 98 50 89 Q43 81 34 82Z" fill="#668f96" stroke="#3e6872" stroke-width="3"/>' +
      '<circle cx="-27" cy="91" r="2" fill="#34535b"/><circle cx="-17" cy="91" r="2" fill="#34535b"/><circle cx="-7" cy="91" r="2" fill="#34535b"/>' +
      '<circle cx="26" cy="91" r="2" fill="#34535b"/><circle cx="36" cy="91" r="2" fill="#34535b"/><circle cx="46" cy="91" r="2" fill="#34535b"/>' +
      '<path d="M-51-44 L-37-35 L-55 12 Q-58 26-68 26 Q-79 23-74 10 L-59-28Z M37-36 L51-46 Q61-30 62-15 L65 11 Q68 26 58 27 Q48 28 47 15 L45-14Z" fill="#e6ad80" stroke="#bd805e" stroke-width="3"/>' +
      '<path d="M-35-71 Q0-82 35-71 L42 21 Q1 34-42 21Z" fill="#6ebde5" stroke="#3c91bd" stroke-width="3"/>' +
      '<path d="M-35-67 L-51-44 L-37-35 L-27-53Z M35-67 L51-46 L37-36 L27-54Z" fill="#6ebde5" stroke="#3c91bd" stroke-width="3"/>' +
      '<path d="M0-68 V26 M-31-37 L-6-34 V-17 L-29-18Z M7-34 L31-37 L29-18 L8-17Z" fill="none" stroke="#4399c5" stroke-width="2.5"/>' +
      '<path d="M-9-73 Q0-63 9-73 L19-64 L6-47 L0-55 L-7-47 L-19-64Z" fill="#dc444b" stroke="#a92f3a" stroke-width="2"/>' +
      '<path d="M-3-56 L-13-34 L-2-38 L5-53Z" fill="#dc444b" stroke="#a92f3a" stroke-width="2"/>' +
      '<path d="M-10-92 L-10-71 Q0-64 10-71 L10-92Z" fill="#e6ad80"/>' +
      '<circle cy="-121" r="31" fill="#e8af82" stroke="#bd805e" stroke-width="3"/>' +
      '<circle cx="-12" cy="-120" r="3.5" fill="#47382f"/><circle cx="13" cy="-120" r="3.5" fill="#47382f"/>' +
      '<path d="M-11-103 Q1-90 14-104Z" fill="#8f403e" stroke="#853c39" stroke-width="2"/><path d="M-7-103 Q1-99 10-103" fill="none" stroke="#fff7e8" stroke-width="3"/>' +
      '<path d="M-33-137 Q-30-169 3-169 Q34-168 35-140 L34-130 Q0-134-35-129Z" fill="#353840" stroke="#252932" stroke-width="3"/>' +
      '<path d="M-36-132 Q-3-143 38-132 Q35-120 19-119 L-31-123Z" fill="#454852" stroke="#252932" stroke-width="3"/>' +
      '</g>';
  }
  function mother(x, y, scale) {
    return '<g class="family-mother" transform="translate(' + x + ' ' + y + ') scale(' + scale + ')">' +
      '<ellipse cy="99" rx="50" ry="8" fill="#46677b" opacity=".17"/>' +
      '<path d="M-30-141 Q-45-112-42-55 Q-42-28-51-15 Q-26-8-13-31 L29-31 Q48-12 55-18 Q42-39 43-69 L37-140Z" fill="#50332a" stroke="#392720" stroke-width="3"/>' +
      '<path d="M-36-70 Q-51-68-54-40 L-62 10 Q-65 24-54 27 Q-44 29-42 15 L-30-37Z M36-70 Q51-68 54-42 L61 18 Q63 30 53 31 Q44 31 42 20 L30-38Z" fill="#e7ae87" stroke="#bf8468" stroke-width="3"/>' +
      '<path d="M-38 85 L-42 96 Q-41 101-31 101 H-9 Q-5 98-10 94 L-20 87Z M17 87 L9 94 Q4 99 10 101 H34 Q43 101 43 96 L37 85Z" fill="#b9794a" stroke="#885b3d" stroke-width="3"/>' +
      '<path d="M-34-72 Q0-82 34-72 L38-25 Q41 10 53 88 Q0 106-53 88 Q-41 10-38-25Z" fill="#fff4df" stroke="#bf947c" stroke-width="3"/>' +
      '<path d="M-30-68 Q-13-78-2-69 Q-13-54-23-35 L-35-27Z M16-73 Q32-74 35-63 L38-28 Q18-35 6-53Z" fill="#e8a18a" opacity=".86"/>' +
      '<path d="M-33-21 Q-13-37 4-25 Q13-10 26 2 Q16 19-6 12 Q-29 7-39 18Z M28 20 Q43 13 46 38 L51 67 Q28 77 12 61 Q13 42 28 20Z" fill="#8fae9c" opacity=".85"/>' +
      '<path d="M-43 48 Q-17 36-7 52 Q1 70-16 91 L-50 87Z M-2 25 Q18 18 23 34 Q19 49 2 57 Q-14 44-2 25Z" fill="#f6bd65" opacity=".88"/>' +
      '<path d="M4 68 Q17 57 32 67 Q39 76 49 88 Q25 98 10 96Z M-22 18 Q-7 10 2 23 Q-6 37-27 36Z" fill="#8eb5c5" opacity=".86"/>' +
      '<path d="M-38-20 Q0-26 38-20 M-48 56 Q0 48 48 56" fill="none" stroke="#d6b59d" stroke-width="2"/>' +
      '<path d="M-10-92 L-10-72 Q0-66 10-72 L10-92Z" fill="#e7ae87"/>' +
      '<circle cy="-125" r="32" fill="#e7ae87" stroke="#bf8468" stroke-width="3"/>' +
      '<path d="M-33-137 Q-32-169 0-171 Q34-169 34-136 Q21-146 14-151 Q0-138-32-135Z" fill="#50332a"/>' +
      '<path d="M-34-137 Q-38-108-42-58 M33-137 Q37-97 43-54" fill="none" stroke="#50332a" stroke-width="12" stroke-linecap="round"/>' +
      '<circle cx="-12" cy="-124" r="3.3" fill="#47382f"/><circle cx="13" cy="-124" r="3.3" fill="#47382f"/>' +
      '<path d="M-10-107 Q1-98 12-108" fill="none" stroke="#a25d55" stroke-width="3" stroke-linecap="round"/>' +
      '</g>';
  }
  function family(fatherX, motherX, childX, y, adultScale, childScale) {
    return father(fatherX, y, adultScale) + mother(motherX, y, adultScale) +
      traveler(childX, y - 8, childScale, false);
  }
  function bear(x, y, scale, visible) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + scale + ')"><g class="bear-body"' + (visible ? '' : ' style="opacity:0"') + '>' +
      '<defs><linearGradient id="bear-fur" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#e58a25"/><stop offset=".52" stop-color="#c56518"/><stop offset="1" stop-color="#923e12"/></linearGradient>' +
      '<linearGradient id="bear-face" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#e99731"/><stop offset="1" stop-color="#b65315"/></linearGradient></defs>' +
      '<ellipse cy="270" rx="113" ry="17" fill="#315d52" opacity=".24"/>' +
      '<path d="M-84 142 Q-105 184-92 234 L-107 255 Q-118 262-111 270 H-28 Q-21 263-33 253 L-27 183Z" fill="#8d3b12" stroke="#71300f" stroke-width="4"/>' +
      '<path d="M83 142 Q105 184 93 234 L108 255 Q119 262 112 270 H29 Q22 263 34 253 L28 183Z" fill="#9b4311" stroke="#71300f" stroke-width="4"/>' +
      '<path d="M-100 263 L-104 270 M-78 263 L-80 270 M-56 263 L-56 270 M57 263 L57 270 M80 263 L82 270 M103 263 L107 270" stroke="#302923" stroke-width="5" stroke-linecap="round"/>' +
      '<g class="bear-arm"><path d="M-88-70 C-119-82-141-108-151-145 Q-163-172-183-166 Q-202-157-194-126 Q-184-75-152-47 Q-129-27-101-33Z" fill="url(#bear-fur)" stroke="#78330f" stroke-width="4"/>' +
      '<ellipse cx="-174" cy="-167" rx="31" ry="40" transform="rotate(-17 -174 -167)" fill="#c86b1c" stroke="#78330f" stroke-width="4"/>' +
      '<ellipse cx="-174" cy="-158" rx="17" ry="19" fill="#71330f"/>' +
      '<ellipse cx="-196" cy="-190" rx="7" ry="9" fill="#71330f"/><ellipse cx="-184" cy="-202" rx="7" ry="9" fill="#71330f"/><ellipse cx="-169" cy="-206" rx="7" ry="9" fill="#71330f"/><ellipse cx="-154" cy="-198" rx="7" ry="9" fill="#71330f"/></g>' +
      '<path d="M-79-102 C-120-89-137-40-133 28 C-140 116-111 202-57 218 Q0 244 65 213 C126 175 136 98 128 27 C124-46 108-88 73-102 Q0-126-79-102Z" fill="url(#bear-fur)" stroke="#78330f" stroke-width="4"/>' +
      '<path d="M-65 27 C-96 59-97 127-72 169 C-42 209 48 210 78 168 C104 126 96 64 63 29 C27 9-30 10-65 27Z" fill="#db8428" opacity=".88"/>' +
      '<path d="M-97-20 Q-115 51-99 119 Q-91 161-65 178 M95-35 Q124 54 101 124 Q91 159 70 178" fill="none" stroke="#8c3c10" stroke-width="5" opacity=".45" stroke-linecap="round"/>' +
      '<path d="M-51 194 Q0 213 51 192 M-67 18 Q-56-1-37-5 M70 19 Q54-1 36-6" fill="none" stroke="#924312" stroke-width="4" opacity=".6" stroke-linecap="round"/>' +
      '<path d="M91-31 C130-30 151 13 143 59 C139 95 98 120 45 131 Q15 136 7 118 Q3 104 28 98 C57 92 96 70 102 42 Q108 20 90 8 Q83-8 91-31Z" fill="url(#bear-fur)" stroke="#78330f" stroke-width="4"/>' +
      '<path d="M88 7 Q126 33 105 73 Q90 99 50 110" fill="none" stroke="#e38a2b" stroke-width="6" opacity=".55" stroke-linecap="round"/>' +
      '<path d="M17 124 15 131 M31 127 31 135 M45 126 48 133" stroke="#4b2818" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="-68" cy="-193" r="28" fill="#b85a16" stroke="#78330f" stroke-width="4"/><circle cx="69" cy="-192" r="28" fill="#b85a16" stroke="#78330f" stroke-width="4"/>' +
      '<ellipse cx="-68" cy="-193" rx="13" ry="16" fill="#77340e"/><ellipse cx="69" cy="-192" rx="13" ry="16" fill="#77340e"/>' +
      '<path d="M-87-91 C-108-119-103-171-85-197 C-55-236 28-237 73-206 C111-178 111-123 86-85 C63-51 9-48-28-56 C-59-62-77-72-87-91Z" fill="url(#bear-face)" stroke="#78330f" stroke-width="4"/>' +
      '<path d="M-86-123 Q-77-92-49-75 M89-123 Q78-90 48-75" fill="none" stroke="#9b4612" stroke-width="7" opacity=".55" stroke-linecap="round"/>' +
      '<path d="M-55-124 C-60-150-35-162-8-151 Q13-160 39-151 C65-143 70-115 54-95 C31-73-34-75-53-99Z" fill="#efad62"/>' +
      '<ellipse cx="-33" cy="-164" rx="19" ry="24" fill="#fff9e8" stroke="#713a1e" stroke-width="3"/><ellipse cx="32" cy="-164" rx="19" ry="24" fill="#fff9e8" stroke="#713a1e" stroke-width="3"/>' +
      '<ellipse cx="-29" cy="-161" rx="10" ry="14" fill="#744322"/><ellipse cx="28" cy="-161" rx="10" ry="14" fill="#744322"/>' +
      '<circle cx="-33" cy="-168" r="4" fill="#fff"/><circle cx="24" cy="-168" r="4" fill="#fff"/>' +
      '<path d="M-54-195 Q-34-207-15-194 M12-194 Q32-207 53-194" fill="none" stroke="#65300e" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M-17-106 Q5-96 39-109 C42-77 22-52 2-60 Q-21-69-17-106Z" fill="#51231e" stroke="#71300f" stroke-width="3"/>' +
      '<path d="M-3-76 Q16-90 31-78 Q22-62 6-62Z" fill="#ee6761"/><path d="M-13-103 Q10-91 31-102" fill="none" stroke="#fff2dd" stroke-width="6" stroke-linecap="round"/>' +
      '<ellipse cx="-9" cy="-125" rx="22" ry="15" fill="#342722"/><ellipse cx="-16" cy="-132" rx="6" ry="3" fill="#fff" opacity=".46"/>' +
      '<path d="M-68-105 Q-55-88-39-85 M67-104 Q56-87 41-84" fill="none" stroke="#ad5318" stroke-width="4" stroke-linecap="round"/>' +
      '</g></g>';
  }
  function globe(x, y, scale, view, flying) {
    var map = view === 'costa' ? window.GlobeMap.costaRica : window.GlobeMap.russia;
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + scale + ')"><g>' +
      '<circle r="194" fill="url(#globe)"/>' +
      '<g clip-path="url(#globe-clip)"><path' + (flying ? ' id="flight-land"' : '') + ' d="' + map.land + '" fill="#82c85b"/>' +
      '<path' + (flying ? ' id="flight-russia"' : '') + (view === 'costa' ? ' opacity="0"' : '') + ' d="' + map.russia + '" fill="#f5b544"/>' + '</g>' +
      (view === 'costa' ? '<g' + (flying ? ' id="flight-costa"' : '') + '><circle cx="-164" cy="-16" r="5" fill="#ffdf79" stroke="#fff" stroke-width="2"/>' +
      '<path d="M-159-12-136 4" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<text x="-96" y="19" text-anchor="middle" font-family="Arial,sans-serif" font-size="17" font-weight="bold" fill="#fff" stroke="#276d9e" stroke-width="3" paint-order="stroke">COSTA RICA</text></g>' :
      '<text x="-70" y="-72" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="bold" fill="#584f36" stroke="#fff8d8" stroke-width="2" paint-order="stroke">RUSSIA</text>') +
      '<circle r="194" fill="none" stroke="#fff" stroke-width="11"/>' +
      '</g></g>';
  }
  function plane(x, y, scale, action, still) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + scale + ')"><g' + (action || !still ? ' class="' + (action ? 'tap-target' : 'fly-in') + '"' : '') + (action ? ' data-action="' + action + '"' : '') + '>' +
      '<g transform="translate(-177 -105)" stroke="#29343a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M124 25H149L215 62L179 68Z" fill="#78a9bf"/>' +
      '<path d="M29 25H49L82 68Q87 76 99 75L75 91Q58 76 49 58Z" fill="#78a9bf"/>' +
      '<path d="M74 88Q87 88 103 94L64 122Q51 129 52 121L70 92Z" fill="#78a9bf"/>' +
      '<path d="M73 84Q89 76 118 72L236 58Q264 54 281 65L318 96Q333 107 325 114Q319 120 289 120H211Q190 120 175 113L98 99Q77 95 72 90Z" fill="#8bb8ca"/>' +
      '<path d="M189 109Q206 108 224 109L241 111Q248 112 242 117L146 186Q142 189 137 185L132 180L177 118Q183 110 189 109Z" fill="#78a9bf"/>' +
      '<circle cx="160" cy="85" r="7" fill="#fffdf8" stroke-width="3"/><circle cx="189" cy="85" r="7" fill="#fffdf8" stroke-width="3"/><circle cx="217" cy="85" r="7" fill="#fffdf8" stroke-width="3"/><circle cx="244" cy="85" r="7" fill="#fffdf8" stroke-width="3"/>' +
      '<path d="M270 80Q287 79 305 89L282 92H275Q269 91 269 85Z" fill="#fffdf8" stroke-width="3"/>' +
      '</g>' + (action ? '<ellipse rx="174" ry="106" fill="transparent"/>' : '') + '</g></g>';
  }
  function flightPoint(t) {
    var one = 1 - t;
    return [one * one * 606 + 2 * one * t * 710 + t * t * 855,
      one * one * 238 + 2 * one * t * 91 + t * t * 207];
  }
  function flightDots() {
    var dots = '';
    for (var i = 0; i <= 24; i++) {
      var point = flightPoint(i / 24);
      dots += '<circle class="flight-dot" cx="' + point[0].toFixed(1) + '" cy="' + point[1].toFixed(1) + '" r="3.5" fill="#fff" opacity="0"/>';
    }
    return '<g aria-hidden="true">' + dots + '</g>';
  }
  function start() {
    return svg('<rect width="1200" height="600" fill="url(#sky)"/>' +
      '<circle cx="1006" cy="100" r="72" fill="#fff2b7" opacity=".9"/>' + cloud(475, 150, .48) + cloud(1130, 194, .66) +
      hills('#c3e5b2') + '<path d="M0 535 Q400 455 812 560 T1200 540 V600 H0Z" fill="#e9d5ac"/>' +
      '<path d="M510 410 Q610 190 800 220" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 19" opacity=".9"/>' +
      globe(860, 315, 1.04, 'russia') + plane(666, 111, .35, null) + traveler(540, 470, .78, false) +
      star(592, 103, 18, '#fff') + star(1058, 340, 15, '#fff'));
  }
  function russia(phase) {
    var done = phase === 'complete';
    var flying = phase === 'flying';
    var position = done ? flightPoint(1) : flightPoint(0);
    return svg('<rect width="1200" height="600" fill="url(#sky)"/>' + cloud(113, 82, .5) + cloud(1072, 108, .65) +
      hills('#bbdda7') +
      globe(778, 289, 1.05, done ? 'russia' : 'costa', flying) + (flying ? flightDots() : '') +
      '<g id="flight-plane" transform="translate(' + position[0] + ' ' + position[1] + ')">' + plane(0, 0, .48, !done && !flying ? 'russia' : null, true) + '</g>' +
      '<path d="M0 547 Q290 475 550 545 T1200 529 V600 H0Z" fill="#e4d4b2"/>' +
      family(326, 437, 540, 455, .8, .75) + (done ? star(1022, 156, 27, '#f9c75d') : ''));
  }
  function flag(x, y, type, scale) {
    var stripes = type === 'russia'
      ? '<rect x="0" y="0" width="257" height="51" fill="#fff" class="flag-white"/><rect x="0" y="51" width="257" height="51" fill="#276ec2" class="flag-blue"/><rect x="0" y="102" width="257" height="51" fill="#e74f5c" class="flag-red"/>'
      : '<rect x="0" y="0" width="257" height="29" fill="#225dba" class="flag-blue"/><rect x="0" y="29" width="257" height="29" fill="#fff" class="flag-white"/><rect x="0" y="58" width="257" height="66" fill="#de4650" class="flag-red"/><rect x="0" y="124" width="257" height="29" fill="#fff" class="flag-white"/><rect x="0" y="153" width="257" height="29" fill="#225dba" class="flag-blue"/>';
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + (scale || 1) + ')"><g class="' + (type === 'russia' ? 'slide-left' : 'slide-right') + '">' +
      '<rect x="-13" y="-20" width="12" height="315" rx="6" fill="#7e7890"/><circle cx="-7" cy="-22" r="12" fill="#f2b74d"/>' +
      '<g transform="translate(0 0)" style="filter:drop-shadow(0 10px 10px #27667c30)">' + stripes + '<rect x="0" y="0" width="257" height="' + (type === 'russia' ? '153' : '182') + '" fill="none" stroke="#d1e3ed" stroke-width="2"/></g>' +
      '<text x="129" y="237" text-anchor="middle" font-size="25" font-weight="bold" fill="#386078" font-family="Arial,sans-serif">' + (type === 'russia' ? 'RUSSIA' : 'COSTA RICA') + '</text></g></g>';
  }
  function flags(selected, done) {
    return svg('<rect width="1200" height="600" fill="url(#sky)"/>' + cloud(979, 104, .54) +
      '<path d="M0 468 Q250 438 480 470 Q800 425 1200 472 V600 H0Z" fill="#b9e5bf"/>' +
      '<path d="M0 528 Q280 490 520 528 Q790 475 1200 521 V600 H0Z" fill="#8ccda9"/>' +
      flag(400, 155, 'russia', .9) + flag(720, 155, 'costa', .9) +
      '<g transform="translate(675 488)">' +
      ['white','blue','red'].map(function (c, i) { return '<g transform="translate(' + ((i-1)*91) + ' 0)"><g data-color="' + c + '" class="tap-target">' +
        '<circle r="37" fill="' + (c === 'white' ? '#fff' : c === 'blue' ? '#347fcb' : '#e96068') + '" stroke="' + (selected.indexOf(c) >= 0 ? '#f6bd53' : '#fff') + '" stroke-width="7"/>' +
        (selected.indexOf(c) >= 0 ? '<path d="M-14 0-2 13 19-15" fill="none" stroke="' + (c === 'white' ? '#577186' : '#fff') + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>' : '') +
        '<circle r="49" fill="transparent"/></g></g>'; }).join('') + '</g>' +
      traveler(340, 495, .58, false) + (done ? star(675, 294, 27, '#f9c64f') : ''),
      (done ? 'flags-complete' : '') + selected.map(function (c) { return ' color-' + c; }).join(''));
  }
  function winter(done) {
    var flakes = '';
    for (var i = 0; i < 30; i++) {
      var x = 160 + ((i * 173) % 990);
      var y = 40 + ((i * 97) % 380);
      flakes += '<circle class="snowflake" cx="' + x + '" cy="' + y + '" r="' + (i % 3 + 3) + '" fill="#fff" style="animation-delay:' + ((i % 7) * .13) + 's"/>';
    }
    return svg('<rect width="1200" height="600" fill="url(#night)"/>' +
      '<circle cx="950" cy="100" r="54" fill="#fff4c8" opacity=".75"/>' +
      '<path d="M0 480 Q260 403 460 480 Q650 404 850 469 Q1040 407 1200 455 V600 H0Z" fill="' + (done ? '#ebf7f8' : '#9fca9b') + '"/>' +
      tree(375, 422, .85, done) + tree(955, 435, .65, done) +
      winterHouse(done) + cloud(630, 125, .78, done ? null : 'snow') + (done ? flakes : '') +
      '<path class="snow-cover" d="M0 522 Q260 450 466 530 Q630 470 864 511 Q1050 457 1200 504 V600 H0Z" fill="#fff" opacity="' + (done ? '1' : '0') + '"/>' +
      traveler(500, 487, .68, true), done ? 'snowy' : '');
  }
  function berryGarnish() {
    return '<g><circle cx="47" cy="-21" r="5" fill="#df3d57"/><circle cx="56" cy="-23" r="5" fill="#e95162"/><circle cx="62" cy="-17" r="5" fill="#d93650"/>' +
      '<circle cx="45" cy="-13" r="5" fill="#eb5868"/><circle cx="54" cy="-14" r="5" fill="#cf3450"/><circle cx="61" cy="-9" r="5" fill="#e3475d"/>' +
      '<circle cx="49" cy="-5" r="5" fill="#d93650"/><circle cx="57" cy="-4" r="5" fill="#ea5164"/>' +
      '<path d="M75-33 C63-36 61-23 69-8 Q76 4 82-8 C91-23 88-36 75-33Z" fill="#ec5057" stroke="#bc3842" stroke-width="2"/>' +
      '<path d="M68-32 72-39 78-34 84-38 83-29 Q75-26 68-32Z" fill="#398d55"/>' +
      '<circle cx="73" cy="-21" r="1.5" fill="#ffe6ae"/><circle cx="81" cy="-23" r="1.5" fill="#ffe6ae"/><circle cx="77" cy="-13" r="1.5" fill="#ffe6ae"/>' +
      '<circle cx="89" cy="-7" r="8" fill="#4a5b9d"/><circle cx="100" cy="-10" r="7" fill="#40518f"/><circle cx="100" cy="1" r="7" fill="#5369aa"/>' +
      '<circle cx="86" cy="-10" r="2" fill="#aeb9e6"/><circle cx="98" cy="-13" r="2" fill="#aeb9e6"/><circle cx="98" cy="-2" r="2" fill="#aeb9e6"/></g>';
  }
  function bliniPlate(x, y, scale, filled) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + scale + ')"><ellipse rx="107" ry="24" fill="#fdf9ed" stroke="#83a6af" stroke-width="7"/>' +
      '<ellipse cx="-22" rx="68" ry="11" fill="#d8a58d" opacity=".35"/>' +
      (filled ? '<g transform="translate(-22 0)"><ellipse cy="-12" rx="66" ry="17" fill="#f5c774" stroke="#da9e59" stroke-width="4"/>' +
      '<ellipse cy="-27" rx="63" ry="17" fill="#f9d58b" stroke="#db9f58" stroke-width="4"/>' +
      '<ellipse cy="-42" rx="60" ry="16" fill="#f5cc7b" stroke="#da9e59" stroke-width="4"/></g>' + berryGarnish() : '') + '</g>';
  }
  function blini(done) {
    return svg('<rect width="1200" height="600" fill="url(#warm)"/>' +
      '<rect y="467" width="1200" height="133" fill="#d2ae90"/><path d="M0 467H1200" stroke="#b58d75" stroke-width="7"/>' +
      '<rect x="455" y="115" width="190" height="192" rx="10" fill="#fff8ea" stroke="#fff" stroke-width="12"/>' +
      '<rect x="467" y="127" width="166" height="168" fill="#bfe5f4"/>' +
      '<path d="M550 127V295 M467 211H633" stroke="#fffaf2" stroke-width="10"/>' +
      '<path d="M458 425 447 317 M533 425 544 317" stroke="#86563e" stroke-width="13" stroke-linecap="round"/>' +
      '<rect x="445" y="309" width="102" height="27" rx="5" fill="#eaa562" stroke="#86563e" stroke-width="5"/>' +
      '<path d="M453 354H540" stroke="#eaa562" stroke-width="16"/>' +
      '<path d="M466 436 451 556 M543 436 550 554" stroke="#86563e" stroke-width="15" stroke-linecap="round"/>' +
      '<path d="M440 415 548 413 563 439 455 443Z" fill="#efa85f" stroke="#86563e" stroke-width="5"/>' +
      '<path d="M946 444 938 556 M1021 444 1032 550" stroke="#86563e" stroke-width="15" stroke-linecap="round"/>' +
      '<path d="M925 427 1029 425 1041 450 938 455Z" fill="#ba7850" stroke="#784834" stroke-width="5"/>' +
      '<path d="M557 416V557 M894 416V557" stroke="#8d5941" stroke-width="20" stroke-linecap="round"/>' +
      '<path d="M520 384H908L950 426H501Z" fill="#ecad6c" stroke="#a76b4b" stroke-width="7" stroke-linejoin="round"/>' +
      '<path d="M506 427H947" stroke="#8d5941" stroke-width="10"/>' +
      bliniPlate(635, 389, 1, done) +
      '<g ' + (done ? '' : 'data-action="flip" class="tap-target"') + '>' +
      '<path d="M916 355 1032 333" stroke="#535c65" stroke-width="24" stroke-linecap="round"/>' +
      '<ellipse cx="845" cy="353" rx="98" ry="43" fill="#45596b" stroke="#2d3c49" stroke-width="7"/>' +
      '<ellipse cx="845" cy="345" rx="82" ry="29" fill="#677786"/>' +
      '<ellipse class="blin-air" cx="845" cy="345" rx="69" ry="21" fill="#f3c773" stroke="#dca156" stroke-width="4"/>' +
      '<ellipse cx="845" cy="351" rx="112" ry="72" fill="transparent"/></g>' +
      traveler(365, 447, 1.08, false), done ? 'flipped' : '');
  }
  function forest(done) {
    return svg('<rect width="1200" height="600" fill="url(#sky)"/>' +
      '<circle cx="620" cy="100" r="47" fill="#fff3bb"/>' +
      '<path d="M0 436 Q280 350 572 428 Q809 360 1200 422 V600 H0Z" fill="#a7d6ad"/>' +
      tree(421, 430, .96, false) + tree(598, 428, 1.18, false) +
      '<path d="M0 526 Q300 427 520 519 T1200 515 V600 H0Z" fill="#73bb89"/>' +
      '<path d="M488 600 Q695 460 1015 600" fill="#e8d6ab"/>' +
      (done ? '<ellipse cx="1015" cy="518" rx="90" ry="43" fill="#438f69"/><circle cx="970" cy="488" r="48" fill="#56a374"/><circle cx="1041" cy="481" r="51" fill="#5fae7b"/>' :
      '<g data-action="bear" class="tap-target">' +
      '<ellipse cx="903" cy="494" rx="181" ry="79" fill="#438f69" stroke="#2f775d" stroke-width="7"/>' +
      '<circle cx="785" cy="453" r="72" fill="#56a374"/><circle cx="872" cy="427" r="79" fill="#5fae7b"/><circle cx="976" cy="448" r="72" fill="#4e9b70"/>' +
      '<circle cx="897" cy="465" r="126" fill="transparent"/></g>') +
      bear(860, 288, .76, done) + traveler(497, 490, .64, false), done ? 'bear-visible' : '');
  }
  function cue(id) {
    var bg = '<rect width="1200" height="600" fill="url(#sky)"/>' + hills('#bbdfb1') +
      '<path d="M0 535 Q220 480 429 533 Q770 470 1200 530 V600 H0Z" fill="#e3d5b0"/>';
    var art;
    if (id === 'russia') art = globe(802, 316, 1.05, 'russia') + plane(965, 172, .4, null);
    else if (id === 'flags') art = flag(530, 205, 'russia', .75) + flag(795, 205, 'costa', .75);
    else if (id === 'winter') art = cloud(807, 172, .8) + tree(690, 450, .85, true) + tree(925, 450, .85, true) +
      '<path d="M0 538 Q250 508 445 534 Q655 486 845 512 Q1050 490 1200 526 V600 H0Z" fill="#fff"/>';
    else if (id === 'blini') art = '<g transform="translate(800 360)"><ellipse rx="190" ry="70" fill="#fdf9ed" stroke="#87a9b4" stroke-width="13"/>' +
      '<g transform="translate(-30 0)"><ellipse cy="-25" rx="136" ry="40" fill="#e7b563"/><ellipse cy="-48" rx="128" ry="36" fill="#f4ca7c"/>' +
      '<ellipse cy="-68" rx="118" ry="33" fill="#f8d894"/></g><g transform="translate(10 -15) scale(1.6)">' + berryGarnish() + '</g></g>';
    else art = bear(822, 261, .78, true);
    return svg(bg + '<circle cx="800" cy="302" r="236" fill="#ffffff77"/>' + art +
      (id === 'russia' ? family(284, 381, 471, 489, .68, .65) : traveler(471, 481, .65, id === 'winter')) +
      star(1054, 129, 18, '#fff'));
  }
  function finale() {
    var confetti = '';
    for (var i = 0; i < 22; i++) {
      var x = 240 + ((i * 137) % 930), y = 70 + ((i * 89) % 375);
      confetti += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 + 4) + '" fill="' + ['#e96c72','#f5bd4d','#68b7a1','#77b9e1'][i%4] + '" class="twinkle"/>';
    }
    return svg('<rect width="1200" height="600" fill="url(#sky)"/>' +
      '<path d="M0 484 Q205 403 431 478 Q700 401 1200 474 V600 H0Z" fill="#b8e3ac"/>' +
      '<path d="M0 550 Q300 490 600 539 Q897 470 1200 528 V600 H0Z" fill="#84c7a1"/>' +
      confetti + globe(694, 178, .38, 'russia') + bear(950, 345, .5, true) + traveler(655, 449, .88, false) +
      bliniPlate(805, 510, .8, true) +
      '<path d="M224 120 Q243 182 301 201" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round"/>' +
      star(320, 138, 27, '#fff') + star(1108, 224, 21, '#fff'));
  }
  window.SceneArt = {
    render: function (scene, state) {
      if (scene === 'start') return start();
      if (scene === 'russia') return russia(state.phase);
      if (scene === 'flags') return flags(state.colors, state.phase === 'complete');
      if (scene === 'winter') return winter(state.phase === 'complete');
      if (scene === 'blini') return blini(state.phase === 'complete');
      if (scene === 'bear') return forest(state.phase === 'complete');
      if (scene === 'recap') return cue(window.STORY.recap[state.recapIndex]);
      return finale();
    },
    flightPoint: flightPoint
  };
}());
