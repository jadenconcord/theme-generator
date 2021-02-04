var content = new Template('main .content .template');
var popup = new Prompter({closeIcon:true, width: 700})
var alertBox = new Prompter({width: 400})
var sass = new Sass();
var currentOptions = {};
var lastUpdate = {getTime(){return 0}};


function sum(a) {
    var s = 0;
    for (var i = 0; i < a.length; i++) s += a[i];
    return s;
}

function degToRad(a) {
    return Math.PI / 180 * a;
}

function meanAngleDeg(a) {
    return 180 / Math.PI * Math.atan2(
        sum(a.map(degToRad).map(Math.sin)) / a.length,
        sum(a.map(degToRad).map(Math.cos)) / a.length
    );
}


function generateScss(){
  var data = content.getData();
  data.useShadow = data.useShadow ? 'disabled' : false;
  data.themeName = data.themeName || 'My Theme';
  return RenderTemplate(`// {themeName} //

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

  $radius0: $radius1 / 2;
  $radius3: $radius2 * 2;

  $shadow-color-black: rgba($black1, $shadow-opacity);
  $shadow-color-white: rgba($white1, $shadow-opacity/1.5);

  $bg0: var(--bg0);
  $bg1: var(--bg1);
  $bg2: var(--bg2);
  $bg3: var(--bg3);
  $bg4: var(--bg4);
  $bg5: var(--bg5);

  $fg0: var(--fg0);
  $fg1: var(--fg1);
  $fg2: var(--fg2);
  $fg3: var(--fg3);
  $fg4: var(--fg4);
  $fg5: var(--fg5);

  @mixin navigator{{
    @if ($theme-type == 1 or $theme-type == 3 or $theme-type == 4){{
      --bg0: #{{$black0}};
      --bg1: #{{$black1}};
      --bg2: #{{$black2}};
      --bg3: #{{$black3}};
      --bg4: #{{$black4}};
      --bg5: #{{$black5}};

      --fg0: #{{$white0}};
      --fg1: #{{$white1}};
      --fg2: #{{$white2}};
      --fg3: #{{$white3}};
      --fg4: #{{$white4}};
      --fg5: #{{$white5}};
    }}
    @else {{
      --bg0: #{{$white0}};
      --bg1: #{{$white1}};
      --bg2: #{{$white2}};
      --bg3: #{{$white3}};
      --bg4: #{{$white4}};
      --bg5: #{{$white5}};

      --fg0: #{{$black0}};
      --fg1: #{{$black1}};
      --fg2: #{{$black2}};
      --fg3: #{{$black3}};
      --fg4: #{{$black4}};
      --fg5: #{{$black5}};
    }}
    color: $fg2;
  }}

  @mixin content{{
    @if ($theme-type == 1){{
      --bg0: #{{$black0}};
      --bg1: #{{$black1}};
      --bg2: #{{$black2}};
      --bg3: #{{$black3}};
      --bg4: #{{$black4}};
      --bg5: #{{$black5}};

      --fg0: #{{$white0}};
      --fg1: #{{$white1}};
      --fg2: #{{$white2}};
      --fg3: #{{$white3}};
      --fg4: #{{$white4}};
      --fg5: #{{$white5}};
    }}
    @else {{
      --bg0: #{{$white0}};
      --bg1: #{{$white1}};
      --bg2: #{{$white2}};
      --bg3: #{{$white3}};
      --bg4: #{{$white4}};
      --bg5: #{{$white5}};

      --fg0: #{{$black0}};
      --fg1: #{{$black1}};
      --fg2: #{{$black2}};
      --fg3: #{{$black3}};
      --fg4: #{{$black4}};
      --fg5: #{{$black5}};
    }}
    color: $fg2;
  }}

  @mixin section{{
    @if ($theme-type == 1 or $theme-type == 4){{
      --bg0: #{{$black0}};
      --bg1: #{{$black1}};
      --bg2: #{{$black2}};
      --bg3: #{{$black3}};
      --bg4: #{{$black4}};
      --bg5: #{{$black5}};

      --fg0: #{{$white0}};
      --fg1: #{{$white1}};
      --fg2: #{{$white2}};
      --fg3: #{{$white3}};
      --fg4: #{{$white4}};
      --fg5: #{{$white5}};
    }}
    @else {{
      --bg0: #{{$white0}};
      --bg1: #{{$white1}};
      --bg2: #{{$white2}};
      --bg3: #{{$white3}};
      --bg4: #{{$white4}};
      --bg5: #{{$white5}};

      --fg0: #{{$black0}};
      --fg1: #{{$black1}};
      --fg2: #{{$black2}};
      --fg3: #{{$black3}};
      --fg4: #{{$black4}};
      --fg5: #{{$black5}};
    }}
    color: $fg2;
  }}

  @mixin sidebar{{
    @if ($theme-type == 1 or $theme-type == 3 or $theme-type == 4 or $theme-type == 5){{
      --bg0: $black0;
      --bg1: $black1;
      --bg2: $black2;
      --bg3: $black3;
      --bg4: $black4;
      --bg5: $black5;

      --fg0: $white0;
      --fg1: $white1;
      --fg2: $white2;
      --fg3: $white3;
      --fg4: $white4;
      --fg5: $white5;
    }}
    @else {{
      --bg0: $white0;
      --bg1: $white1;
      --bg2: $white2;
      --bg3: $white3;
      --bg4: $white4;
      --bg5: $white5;

      --fg0: $black0;
      --fg1: $black1;
      --fg2: $black2;
      --fg3: $black3;
      --fg4: $black4;
      --fg5: $black5;
    }}
    color: $fg2;
  }}

  @mixin input{{
    // @include section;
  }}

  @mixin clickable{{
    @include section;
  }}

  body{{
    @if ($theme-type == 1 or $theme-type == 3){{
      --bg0: #{{$black0}};
      --bg1: #{{$black1}};
      --bg2: #{{$black2}};
      --bg3: #{{$black3}};
      --bg4: #{{$black4}};
      --bg5: #{{$black5}};

      --fg0: #{{$white0}};
      --fg1: #{{$white1}};
      --fg2: #{{$white2}};
      --fg3: #{{$white3}};
      --fg4: #{{$white4}};
      --fg5: #{{$white5}};
    }}
    @else {{
      --bg0: #{{$white0}};
      --bg1: #{{$white1}};
      --bg2: #{{$white2}};
      --bg3: #{{$white3}};
      --bg4: #{{$white4}};
      --bg5: #{{$white5}};

      --fg0: #{{$black0}};
      --fg1: #{{$black1}};
      --fg2: #{{$black2}};
      --fg3: #{{$black3}};
      --fg4: #{{$black4}};
      --fg5: #{{$black5}};
    }}
    color: $fg2;
    background: $bg1;
  }}`, data);
}


function generate(){
  let scss = generateScss();
  popup.show(`
    <h2>Results for theme</h2>
    <textarea style="height: 500px">
    ${scss.replaceAll('{', '{{').replaceAll('}', '}}')}
    </textarea>
  `);
  updateTheme(scss);
}

async function updateTheme(){
  let currentTime = new Date();
  var seconds = (currentTime.getTime() - lastUpdate.getTime()) / 1000;
  if(seconds < 1)return;
  lastUpdate = new Date();
  var data = content.getData();
  if(JSON.stringify(data) == currentOptions)return;
  currentOptions = JSON.stringify(data);
  let scss = generateScss();
  await fetcher('https://jadenconcord.github.io/a/elementalcss/0-9/elemental.scss')(elemental => {
    fetcher('css/get.scss')(text => {
      text = scss + elemental + text;
      sass.compile(text, (result) => {
        // var styleSheet = document.createElement("style")
        // styleSheet.type = "text/css"
        // styleSheet.innerText = result.text;
        // document.head.appendChild(styleSheet)
        document.querySelector('#style').innerText = result.text;
        document.querySelector('#initial')?.remove();
      });
    })
    (alertBox.alert)
  })(alertBox.alert);
}
updateTheme();

document.onclick = updateTheme;
document.onkeyup = updateTheme;


function openDetails(){
  document.querySelectorAll('.detail').forEach(a => a.open = true);
}

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
    `hsl(${black.h}, ${black.s}%, ${black.l}%)`;
  document.querySelector('#colorInput_black2').value =
    `hsl(${black.h}, ${black.s-10}%, ${black.l+10}%)`;

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

function quickTheme(){
  popup.show(`
    <h1>Quick Theme</h1>
    {inputText name="themename" label="Theme Name" value="Unnamed" placeholder="Unnamed"/}
    {inputSelect name="themetype" label="Theme Type"
    options="disabled:Select Option,!1:Dark Theme,2:Light Theme,3:Dark with light content,4:Light with dark parts"/}
    {inputSelect name="sharpness" label="Theme Sharpness" options="1:Very Rounded,!2:Normal,3:Sharper,4:Box Sharp"/}
    {inputSelect name="colortype" label="Color Type" options="!1:Flat (bright/dull),2:Vibrant (saturated),3:Contrast"/}
    <br><h3>Branding color (mix colors)</h3>
    {inputCheckbox name="color1r" label="red" value="0"/}
    {inputCheckbox name="color1y" label="yellow" value="45"/}
    {inputCheckbox name="color1g" label="green" value="145"/}
    {inputCheckbox name="color1c" label="cyan" value="180"/}
    {inputCheckbox name="color1b" label="blue" value="220"/}
    {inputCheckbox name="color1p" label="purple" value="280"/}
    <br><h3>Selection color</h3>
    {inputCheckbox name="color2r" label="red" value="0"/}
    {inputCheckbox name="color2y" label="yellow" value="45"/}
    {inputCheckbox name="color2g" label="green" value="145"/}
    {inputCheckbox name="color2c" label="cyan" value="180"/}
    {inputCheckbox name="color2b" label="blue" value="220"/}
    {inputCheckbox name="color2p" label="purple" value="280"/}
    <center><button onclick="submitQuickTheme()">Submit</button></center><br>
  `)
}
function submitQuickTheme(){
  let data = popup.getData();
  popup.hide();
  document.querySelector('[name="themeName"]').value = data.themename;
  document.querySelector('[name="themeType"]').value = data.themetype;
  document.querySelector('[name="units"]').value = 'px';

  let color1 = Math.round(meanAngleDeg([
    data.color1r&&0,data.color1y&&45,data.color1g&&145,
    data.color1c&&180,data.color1b&&220,data.color1p&&280].filter(a => a !== false))) || 0;
  let color2 = Math.round(meanAngleDeg([
    data.color2r&&0,data.color2y&&45,data.color2g&&145,
    data.color2c&&180,data.color2b&&220,data.color2p&&280].filter(a => a !== false))) || 0;
  let colorS = 60;
  let colorL = (data.colortype==1&&60)||50;

  document.querySelector('[name="mainColor"]').value = 'hsl('+color1+','+colorS+'%,'+colorL+'%)';
  document.querySelector('[name="secondaryColor"]').value = 'hsl('+color2+','+colorS+'%,'+colorL+'%)';

  let blackH = color2;
  let blackS = data.colortype==1 ? 7 : 3;
  blackS += 4-data.sharpness
  let blackL = data.colortype==1 ? 15 : 10;

  document.querySelector('[name="black1"]').value = 'hsl('+blackH+','+blackS+'%,'+blackL+'%)';
  document.querySelector('[name="black2"]').value = 'hsl('+blackH+','+(blackS/2)+'%,'+(blackL+(data.colortype==1?8:6))+'%)';

  let whiteH = 360-blackH;
  let whiteS = data.colortype==1 ? 10 : 5;
  let whiteL = data.colortype==1 ? 90 : 95;

  document.querySelector('[name="white1"]').value = 'hsl('+whiteH+','+whiteS+'%,'+whiteL+'%)';
  document.querySelector('[name="white2"]').value = 'hsl('+whiteH+','+(whiteS/2)+'%,'+(whiteL-6)+'%)';

  document.querySelector('[name="borderWidth"]').value = 4-data.sharpness || 1;
  document.querySelector('[name="border1"]').value =
  (data.sharpness==1&&8)||(data.sharpness==2&&4)||(data.sharpness==3&&2)||(data.sharpness==4&&1);
  document.querySelector('[name="border2"]').value =
  (data.sharpness==1&&12)||(data.sharpness==2&&8)||(data.sharpness==3&&4)||(data.sharpness==4&&2);
  document.querySelector('[name="transition"]').value = '0.'+(4-data.sharpness);
}

var rand = (min, max) => Math.round(Math.random() * (max - min) + min);

function fetcher(url, options){
  options = {
    parse: 'text',
    ...options
  }

  return (done) => {
    return (error) => {
      try{
        fetch(url).then(x => x[options.parse]()).then(done).catch(error);
      } catch(err) {
        error(err);
      }
    }
  }
}
