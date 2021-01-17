

var content = new Template('main .content .template');
var popup = new Prompter({closeIcon:true, width: 700})


function generate(){
  var data = content.getData();
  data.useShadow = data.useShadow ? 'disabled' : false;
  data.themeName = data.themeName || 'My Theme';
  popup.show(`
    <h2>Results for theme {themeName}</h2>
    <textarea style="height: 500px">
// {themeName} {{test}}//

// Options
$theme-name: '{themeName.replace("'","\\\\'")}';
$theme-type: {themeType};
$theme: {mainColor};
$theme2: {secondaryColor};
$black1: {black1};
$black4: {black2};
$white1: {white1};
$white4: {white2};
$border-width: {borderWidth}{units};
$radius1: {border1+units};
$radius2: {border2+units};
$transition-time: {transition}s;
$font: {font};
$shadow-x: {useShadow ? shadowX : 0}{units};
$shadow-y: {useShadow ? shadowY : 0}{units};
$shadow-blur: {useShadow ? shadowBlur : 0}{units};
$shadow-spread: {useShadow ? shadowSpread : 0}{units};
$shadow-opacity: {useShadow ? shadowOpacity : 0};


// Calculations
$theme-dark: saturate(darken($theme, 5%), 5%);
$theme-light: desaturate(lighten($theme, 5%), 5%);

$theme2-dark: saturate(darken($theme2, 5%), 5%);
$theme2-light: desaturate(lighten($theme2, 5%), 5%);

$theme-red: adjust-hue($theme, - hue($theme) );
$theme-yellow: adjust-hue($theme, - hue($theme) + 60deg);
$theme-green: adjust-hue($theme, - hue($theme) + 120deg);
$theme-blue: adjust-hue($theme, - hue($theme) + 240deg);

$black2: mix($black1, $black4, 75%);
$black3: mix($black1, $black4, 25%);
$black0: saturate(darken($black1, 5%), 5%);
$black5: mix($black4, $white1, 90%);

$white2: mix($white1, $white4, 75%);
$white3: mix($white1, $white4, 25%);
$white0: desaturate(lighten($white1, 5%), 5%);
$white5: mix($black0, $white4, 10%);

$radius0: $border_radius1 / 2;
$radius3: $border_radius2 * 2;

$shadow-color-black: rgba($black1, $shadow-opacity);
$shadow-color-white: rgba($white1, $shadow-opacity/1.5);

$A0: $black0;
$A1: $black1;
$A2: $black2;
$A3: $black3;
$A4: $black4;
$A5: $black5;

$AA0: $white0;
$AA1: $white1;
$AA2: $white2;
$AA3: $white3;
$AA4: $white4;
$AA5: $white5;

$B0: $black0;
$B1: $black1;
$B2: $black2;
$B3: $black3;
$B4: $black4;
$B5: $black5;

$BB0: $white0;
$BB1: $white1;
$BB2: $white2;
$BB3: $white3;
$BB4: $white4;
$BB5: $white5;

@if $theme-type == 1 {{ // Dark Theme
  $A0: $black0;
  $A1: $black1;
  $A2: $black2;
  $A3: $black3;
  $A4: $black4;
  $A5: $black5;

  $AA0: $white0;
  $AA1: $white1;
  $AA2: $white2;
  $AA3: $white3;
  $AA4: $white4;
  $AA5: $white5;

  $B0: $black0;
  $B1: $black1;
  $B2: $black2;
  $B3: $black3;
  $B4: $black4;
  $B5: $black5;

  $BB0: $white0;
  $BB1: $white1;
  $BB2: $white2;
  $BB3: $white3;
  $BB4: $white4;
  $BB5: $white5;
}}
@else if $theme-type == 2 {{ // Light theme
  $A0: $white0;
  $A1: $white1;
  $A2: $white2;
  $A3: $white3;
  $A4: $white4;
  $A5: $white5;

  $AA0: $black0;
  $AA1: $black1;
  $AA2: $black2;
  $AA3: $black3;
  $AA4: $black4;
  $AA5: $black5;

  $BB0: $black0;
  $BB1: $black1;
  $BB2: $black2;
  $BB3: $black3;
  $BB4: $black4;
  $BB5: $black5;

  $B0: $white0;
  $B1: $white1;
  $B2: $white2;
  $B3: $white3;
  $B4: $white4;
  $B5: $white5;
}}
@else if $theme-type == 3 {{ // Dark with light
  $A0: $black0;
  $A1: $black1;
  $A2: $black2;
  $A3: $black3;
  $A4: $black4;
  $A5: $black5;

  $AA0: $white0;
  $AA1: $white1;
  $AA2: $white2;
  $AA3: $white3;
  $AA4: $white4;
  $AA5: $white5;

  $BB0: $black0;
  $BB1: $black1;
  $BB2: $black2;
  $BB3: $black3;
  $BB4: $black4;
  $BB5: $black5;

  $B0: $white0;
  $B1: $white1;
  $B2: $white2;
  $B3: $white3;
  $B4: $white4;
  $B5: $white5;
}}
@else if $theme-type == 4 {{ // Light with dark
  $A0: $white0;
  $A1: $white1;
  $A2: $white2;
  $A3: $white3;
  $A4: $white4;
  $A5: $white5;

  $AA0: $black0;
  $AA1: $black1;
  $AA2: $black2;
  $AA3: $black3;
  $AA4: $black4;
  $AA5: $black5;

  $B0: $black0;
  $B1: $black1;
  $B2: $black2;
  $B3: $black3;
  $B4: $black4;
  $B5: $black5;

  $BB0: $white0;
  $BB1: $white1;
  $BB2: $white2;
  $BB3: $white3;
  $BB4: $white4;
  $BB5: $white5;
}}


:root{{
  // CSS Variables
  --theme-name: #{{$theme-name}};

  --theme: #{{$theme}};
  --theme-dark: #{{$theme-dark}};
  --theme-light: #{{$theme-light}};
  --theme2: #{{$theme2}};
  --theme2-dark: #{{$theme2-dark}};
  --theme2-light: #{{$theme2-light}};

  --theme-red: #{{$theme-red}};
  --theme-yellow: #{{$theme-yellow}};
  --theme-green: #{{$theme-green}};
  --theme-blue: #{{$theme-blue}};

  --black0: #{{$black0}};
  --black1: #{{$black1}};
  --black2: #{{$black2}};
  --black3: #{{$black3}};
  --black4: #{{$black4}};
  --black5: #{{$black5}};

  --white0: #{{$white0}};
  --white1: #{{$white1}};
  --white2: #{{$white2}};
  --white3: #{{$white3}};
  --white4: #{{$white4}};
  --white5: #{{$white5}};

  --border-width: #{{$border-width}};

  --radius0: #{{$radius0}};
  --radius1: #{{$radius1}};
  --radius2: #{{$radius2}};
  --radius3: #{{$radius3}};

  --transition-time: #{{$transition-time}};
  --font: #{{$font}};

  --shadow-x: #{{$shadow-x}};
  --shadow-y: #{{$shadow-y}};
  --shadow-blur: #{{$shadow-blur}};
  --shadow-spread: #{{$shadow-spread}};
  --shadow-color-black: #{{$shadow-color-black}};
  --shadow-color-white: #{{$shadow-color-white}};

  --A0: #{{$A0}};
  --A1: #{{$A1}};
  --A2: #{{$A2}};
  --A3: #{{$A3}};
  --A4: #{{$A4}};
  --A5: #{{$A5}};

  --AA0: #{{$AA0}};
  --AA1: #{{$AA1}};
  --AA2: #{{$AA2}};
  --AA3: #{{$AA3}};
  --AA4: #{{$AA4}};
  --AA5: #{{$AA5}};

  --B0: #{{$B0}};
  --B1: #{{$B1}};
  --B2: #{{$B2}};
  --B3: #{{$B3}};
  --B4: #{{$B4}};
  --B5: #{{$B5}};

  --BB0: #{{$BB0}};
  --BB1: #{{$BB1}};
  --BB2: #{{$BB2}};
  --BB3: #{{$BB3}};
  --BB4: #{{$BB4}};
  --BB5: #{{$BB5}};
}}

// Shortcuts
$theme: var(--theme);
$theme-dark: var(--theme-dark);
$theme-light: var(--theme-light);
$theme2: var(--theme2);
$theme2-dark: var(--theme2-dark);
$theme2-light: var(--theme2-light);

$theme-red: var(--theme-red);
$theme-yellow: var(--theme-yellow);
$theme-green: var(--theme-green);
$theme-blue: var(--theme-blue);

$black0: var(--black0);
$black1: var(--black1);
$black2: var(--black2);
$black3: var(--black3);
$black4: var(--black4);
$black5: var(--black5);

$white0: var(--white0);
$white1: var(--white1);
$white2: var(--white2);
$white3: var(--white3);
$white4: var(--white4);
$white5: var(--white5);

$border-width: var(--border-width);

$radius0: var(--radius0);
$radius1: var(--radius1);
$radius2: var(--radius2);
$radius3: var(--radius3);

$transition-time: var(--transition-time);
$font: var(--font), sans-serif;

$shadow-x: var(--shadow-x);
$shadow-y: var(--shadow-y);
$shadow-blur: var(--shadow-blur);
$shadow-spread: var(--shadow-spread);
$shadow-color-black: var(--shadow-color-black);
$shadow-color-white: var(--shadow-color-white);

$A0: var(--A0);
$A1: var(--A1);
$A2: var(--A2);
$A3: var(--A3);
$A4: var(--A4);
$A5: var(--A5);

$AA0: var(--AA0);
$AA1: var(--AA1);
$AA2: var(--AA2);
$AA3: var(--AA3);
$AA4: var(--AA4);
$AA5: var(--AA5);

$B0: var(--B0);
$B1: var(--B1);
$B2: var(--B2);
$B3: var(--B3);
$B4: var(--B4);
$B5: var(--B5);

$BB0: var(--BB0);
$BB1: var(--BB1);
$BB2: var(--BB2);
$BB3: var(--BB3);
$BB4: var(--BB4);
$BB5: var(--BB5);
    </textarea>
  `, data);
}

function updateTheme(){
  var data = content.getData();
  document.documentElement.style.setProperty('--theme', data.mainColor);
  document.documentElement.style.setProperty('--theme2', data.secondaryColor);
  document.documentElement.style.setProperty('--black1', data.black1);
  document.documentElement.style.setProperty('--black4', data.black2);
  document.documentElement.style.setProperty('--white1', data.white1);
  document.documentElement.style.setProperty('--white4', data.white2);
  document.documentElement.style.setProperty('--border-width', data.borderWidth+data.units);
  document.documentElement.style.setProperty('--radius1', data.border1+data.units);
  document.documentElement.style.setProperty('--radius2', data.border2+data.units);
  document.documentElement.style.setProperty('--transition-time', data.transition+'s');
  document.documentElement.style.setProperty('--font', data.font);
  document.documentElement.style.setProperty('--shadow-x', data.shadowX+data.units);
  document.documentElement.style.setProperty('--shadow-y', data.shadowY+data.units);
  document.documentElement.style.setProperty('--shadow-blur', data.shadowBlur+data.units);
}
updateTheme();
// setInterval(updateTheme, 50);

document.onclick = updateTheme;
document.onkeyup = updateTheme;




function randomize(){
  var black = {h:rand(290,220), s:rand(0,25), l:rand(15,25)}
  var white = {h:357-black.h, s:rand(0,40), l:rand(94,98)}
  document.querySelector('select [value="'+rand(1, 4)+'"]').selected = true;
  document.querySelector('#form-themeName').value =
  ['Themey', 'Colory', 'Light', 'Sky', 'Sea', 'Bird', 'Earth', 'Snow', 'Flat',
  'Butterfly', 'Wierd Colors', 'Chill', 'Saturation', 'Brightness Lite', 'Rando'][rand(0,14)];
  document.querySelector('#colorInput_mainColor').value =
    `hsl(${rand(0,357)}, ${rand(50,70)}%, ${rand(60,65)}%)`;
  document.querySelector('#colorInput_secondaryColor').value =
    `hsl(${rand(0,357)}, ${rand(50,70)}%, ${rand(60,65)}%)`;

  document.querySelector('#colorInput_black1').value =
    `hsl(${black.h}, ${rand(0,25)}%, ${rand(15,25)}%)`;
  document.querySelector('#colorInput_black2').value =
    `hsl(${black.h}, ${black.s-13}%, ${black.l+13}%)`;

  document.querySelector('#colorInput_white1').value =
    `hsl(${white.h}, ${white.s}%, ${white.l+13}%)`;
  document.querySelector('#colorInput_white2').value =
    `hsl(${white.h}, ${(white.s-13) > 0 ? white.s-8 : 0}%, ${white.l-8}%)`;
  document.querySelector('#form-borderWidth').value = rand(1,4);
  document.querySelector('#form-border1').value = rand(0,8);
  document.querySelector('#form-border2').value = rand(4,12);
  document.querySelector('#form-transition').value = '0.'+rand(0,5);
  document.querySelector('#form-shadowY').value = rand(0,4);
  document.querySelector('#form-shadowBlur').value = rand(0,15);
}

var rand = (min, max) => Math.round(Math.random() * (max - min) + min);
