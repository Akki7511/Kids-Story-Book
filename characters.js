/* characters.js — Cartoon SVG character library for KidsStory
   Each entry in CHARS is an inline SVG string.
   getChar(id) returns the SVG string or '' if not found.
   SVG size is controlled by the wrapper .scene-char div width.
   Each character with a face has an internal eye-blink animation.
   Animation class names are prefixed per-character to avoid conflicts. */

const CHARS = {};

/* ══════════════════ ANIMALS ══════════════════ */

CHARS.lion = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 108" width="100%" height="100%" overflow="visible">
<defs><style>
.ln_e{animation:ln_e 3.5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes ln_e{0%,90%,100%{transform:scaleY(1)}93%{transform:scaleY(0.06)}}
</style></defs>
<path d="M74,72 Q96,54 89,36" stroke="#C8660A" stroke-width="5.5" fill="none" stroke-linecap="round"/>
<ellipse cx="90" cy="34" rx="8" ry="6" fill="#E67E22"/>
<circle cx="49" cy="60" r="36" fill="#D4660A"/>
<circle cx="49" cy="57" r="28" fill="#F39C12"/>
<ellipse cx="49" cy="95" rx="25" ry="13" fill="#FDBCB4"/>
<circle cx="49" cy="52" r="23" fill="#FDBCB4"/>
<circle cx="28" cy="33" r="10" fill="#D4660A"/>
<circle cx="70" cy="33" r="10" fill="#D4660A"/>
<circle cx="28" cy="33" r="6" fill="#F5A04A"/>
<circle cx="70" cy="33" r="6" fill="#F5A04A"/>
<g class="ln_e">
<ellipse cx="40" cy="48" rx="6.5" ry="7.5" fill="white"/>
<ellipse cx="58" cy="48" rx="6.5" ry="7.5" fill="white"/>
<circle cx="41" cy="50" r="4.5" fill="#3D2007"/>
<circle cx="59" cy="50" r="4.5" fill="#3D2007"/>
<circle cx="42.5" cy="48" r="1.8" fill="white"/>
<circle cx="60.5" cy="48" r="1.8" fill="white"/>
</g>
<path d="M44,59 Q49,63 54,59 L52,64 Q49,66 46,64 Z" fill="#C0392B"/>
<ellipse cx="47" cy="62" rx="1.4" ry="1" fill="#922B21"/>
<ellipse cx="51" cy="62" rx="1.4" ry="1" fill="#922B21"/>
<path d="M42,67 Q49,74 56,67" stroke="#922B21" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<line x1="12" y1="57" x2="40" y2="58" stroke="#C8A97A" stroke-width="1.3" opacity="0.7"/>
<line x1="12" y1="63" x2="40" y2="63" stroke="#C8A97A" stroke-width="1.3" opacity="0.7"/>
<line x1="58" y1="58" x2="86" y2="57" stroke="#C8A97A" stroke-width="1.3" opacity="0.7"/>
<line x1="58" y1="63" x2="86" y2="63" stroke="#C8A97A" stroke-width="1.3" opacity="0.7"/>
<ellipse cx="33" cy="105" rx="12" ry="5.5" fill="#FDBCB4" stroke="#C0906A" stroke-width="1"/>
<ellipse cx="65" cy="105" rx="12" ry="5.5" fill="#FDBCB4" stroke="#C0906A" stroke-width="1"/>
</svg>`;

CHARS['lion-angry'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 108" width="100%" height="100%" overflow="visible">
<defs><style>
.la_e{animation:la_e 2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes la_e{0%,85%,100%{transform:scaleY(1)}90%{transform:scaleY(0.08)}}
</style></defs>
<path d="M74,68 Q98,46 92,26" stroke="#9B4A08" stroke-width="5.5" fill="none" stroke-linecap="round"/>
<ellipse cx="93" cy="24" rx="8" ry="6" fill="#D4660A"/>
<circle cx="49" cy="60" r="36" fill="#8B3A06"/>
<circle cx="49" cy="57" r="28" fill="#C0560A"/>
<ellipse cx="49" cy="95" rx="25" ry="13" fill="#FDBCB4"/>
<circle cx="49" cy="52" r="23" fill="#FDBCB4"/>
<circle cx="27" cy="31" r="10" fill="#8B3A06"/>
<circle cx="71" cy="31" r="10" fill="#8B3A06"/>
<circle cx="27" cy="31" r="6" fill="#C0604A"/>
<circle cx="71" cy="31" r="6" fill="#C0604A"/>
<g class="la_e">
<ellipse cx="40" cy="48" rx="6.5" ry="7.5" fill="white"/>
<ellipse cx="58" cy="48" rx="6.5" ry="7.5" fill="white"/>
<circle cx="41" cy="51" r="4.5" fill="#1A0A00"/>
<circle cx="59" cy="51" r="4.5" fill="#1A0A00"/>
<circle cx="39.5" cy="49" r="1.8" fill="white"/>
<circle cx="57.5" cy="49" r="1.8" fill="white"/>
</g>
<path d="M33,40 L44,44" stroke="#7A3A0A" stroke-width="3.5" stroke-linecap="round"/>
<path d="M65,40 L54,44" stroke="#7A3A0A" stroke-width="3.5" stroke-linecap="round"/>
<path d="M44,59 Q49,63 54,59 L52,64 Q49,66 46,64 Z" fill="#922B21"/>
<path d="M40,66 Q49,75 58,66" stroke="#922B21" stroke-width="2" fill="#B03030"/>
<rect x="43" y="65" width="4" height="5" rx="1.5" fill="white"/>
<rect x="49" y="65" width="4" height="5" rx="1.5" fill="white"/>
<line x1="12" y1="57" x2="40" y2="58" stroke="#A87A5A" stroke-width="1.3" opacity="0.6"/>
<line x1="12" y1="63" x2="40" y2="63" stroke="#A87A5A" stroke-width="1.3" opacity="0.6"/>
<line x1="58" y1="58" x2="86" y2="57" stroke="#A87A5A" stroke-width="1.3" opacity="0.6"/>
<line x1="58" y1="63" x2="86" y2="63" stroke="#A87A5A" stroke-width="1.3" opacity="0.6"/>
<ellipse cx="33" cy="105" rx="12" ry="5.5" fill="#FDBCB4" stroke="#C0906A" stroke-width="1"/>
<ellipse cx="65" cy="105" rx="12" ry="5.5" fill="#FDBCB4" stroke="#C0906A" stroke-width="1"/>
</svg>`;

CHARS.mouse = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 90" width="100%" height="100%" overflow="visible">
<defs><style>
.ms_e{animation:ms_e 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes ms_e{0%,88%,100%{transform:scaleY(1)}92%{transform:scaleY(0.06)}}
</style></defs>
<path d="M62,72 Q80,65 88,50 Q92,38 78,32" stroke="#E91E8C" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="40" cy="72" rx="26" ry="18" fill="#AAB7B8"/>
<circle cx="40" cy="52" r="20" fill="#BDC3C7"/>
<circle cx="20" cy="34" r="12" fill="#AAB7B8"/>
<circle cx="60" cy="34" r="12" fill="#AAB7B8"/>
<circle cx="20" cy="34" r="8" fill="#F8BBD0"/>
<circle cx="60" cy="34" r="8" fill="#F8BBD0"/>
<g class="ms_e">
<circle cx="33" cy="50" r="5.5" fill="white"/>
<circle cx="47" cy="50" r="5.5" fill="white"/>
<circle cx="33.5" cy="51" r="3.5" fill="#2C3E50"/>
<circle cx="47.5" cy="51" r="3.5" fill="#2C3E50"/>
<circle cx="34.5" cy="49.5" r="1.3" fill="white"/>
<circle cx="48.5" cy="49.5" r="1.3" fill="white"/>
</g>
<ellipse cx="40" cy="58" rx="3.5" ry="2.5" fill="#E91E8C"/>
<line x1="14" y1="56" x2="34" y2="57" stroke="#7F8C8D" stroke-width="1" opacity="0.7"/>
<line x1="14" y1="61" x2="34" y2="61" stroke="#7F8C8D" stroke-width="1" opacity="0.7"/>
<line x1="46" y1="57" x2="66" y2="56" stroke="#7F8C8D" stroke-width="1" opacity="0.7"/>
<line x1="46" y1="61" x2="66" y2="61" stroke="#7F8C8D" stroke-width="1" opacity="0.7"/>
<ellipse cx="28" cy="84" rx="7" ry="4" fill="#9DA9AA"/>
<ellipse cx="52" cy="84" rx="7" ry="4" fill="#9DA9AA"/>
</svg>`;

CHARS.hare = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 118" width="100%" height="100%" overflow="visible">
<defs><style>
.hr_e{animation:hr_e 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes hr_e{0%,88%,100%{transform:scaleY(1)}92%{transform:scaleY(0.06)}}
</style></defs>
<ellipse cx="55" cy="100" rx="8" ry="5" fill="#ECEFF1"/>
<path d="M22,36 Q18,10 26,4 Q32,0 34,8 Q36,20 32,36" fill="#FAFAFA" stroke="#CFD8DC" stroke-width="1.5"/>
<path d="M48,36 Q44,10 52,4 Q58,0 60,8 Q62,20 58,36" fill="#FAFAFA" stroke="#CFD8DC" stroke-width="1.5"/>
<path d="M22,36 Q18,14 26,8 Q32,4 34,12 Q36,22 32,36" fill="#F8BBD0" opacity="0.6"/>
<path d="M48,36 Q44,14 52,8 Q58,4 60,12 Q62,22 58,36" fill="#F8BBD0" opacity="0.6"/>
<ellipse cx="35" cy="92" rx="25" ry="22" fill="#FAFAFA" stroke="#CFD8DC" stroke-width="1.5"/>
<circle cx="35" cy="56" r="20" fill="#FAFAFA" stroke="#CFD8DC" stroke-width="1.5"/>
<g class="hr_e">
<circle cx="27" cy="53" r="5.5" fill="white" stroke="#CFD8DC" stroke-width="0.5"/>
<circle cx="43" cy="53" r="5.5" fill="white" stroke="#CFD8DC" stroke-width="0.5"/>
<circle cx="27.5" cy="54" r="3.5" fill="#1A5276"/>
<circle cx="43.5" cy="54" r="3.5" fill="#1A5276"/>
<circle cx="28.5" cy="52.5" r="1.3" fill="white"/>
<circle cx="44.5" cy="52.5" r="1.3" fill="white"/>
</g>
<ellipse cx="35" cy="62" rx="4" ry="3" fill="#F8BBD0"/>
<path d="M30,67 Q35,72 40,67" stroke="#C0607A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<ellipse cx="56" cy="100" rx="7" ry="4.5" fill="#FAFAFA" stroke="#CFD8DC" stroke-width="1"/>
</svg>`;

CHARS.tortoise = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80" width="100%" height="100%" overflow="visible">
<defs><style>
.tt_e{animation:tt_e 5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes tt_e{0%,88%,100%{transform:scaleY(1)}92%{transform:scaleY(0.07)}}
</style></defs>
<ellipse cx="50" cy="50" rx="16" ry="8" fill="#58D68D"/>
<ellipse cx="90" cy="50" rx="14" ry="8" fill="#58D68D"/>
<ellipse cx="22" cy="52" rx="13" ry="7" fill="#58D68D"/>
<ellipse cx="78" cy="54" rx="13" ry="7" fill="#58D68D"/>
<ellipse cx="60" cy="44" rx="38" ry="28" fill="#27AE60"/>
<ellipse cx="60" cy="42" rx="34" ry="24" fill="#2ECC71"/>
<path d="M60,18 L60,50 M42,24 L78,50 M78,24 L42,50 M38,40 L82,40" stroke="#1A7A42" stroke-width="1.8" fill="none" opacity="0.6"/>
<ellipse cx="60" cy="36" rx="14" ry="10" fill="none" stroke="#1A7A42" stroke-width="1.5" opacity="0.5"/>
<circle cx="90" cy="42" r="12" fill="#58D68D"/>
<circle cx="90" cy="42" r="9" fill="#7DCEA0"/>
<g class="tt_e">
<circle cx="86" cy="39" r="3.5" fill="white"/>
<circle cx="94" cy="39" r="3.5" fill="white"/>
<circle cx="86.5" cy="39.5" r="2" fill="#1A5276"/>
<circle cx="94.5" cy="39.5" r="2" fill="#1A5276"/>
</g>
<path d="M84,47 Q90,51 96,47" stroke="#1A7A42" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<ellipse cx="90" cy="50" rx="9" ry="5" fill="#58D68D"/>
</svg>`;

CHARS.crow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 100" width="100%" height="100%" overflow="visible">
<defs><style>
.cr_e{animation:cr_e 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes cr_e{0%,90%,100%{transform:scaleY(1)}93%{transform:scaleY(0.07)}}
</style></defs>
<path d="M44,72 Q38,82 30,88 Q38,86 44,80 Q50,86 58,88 Q50,82 56,72 Z" fill="#1C2833"/>
<ellipse cx="45" cy="56" rx="28" ry="36" fill="#1C2833"/>
<path d="M18,60 Q10,72 14,82 Q20,78 22,68 Q28,74 30,66 Q26,62 18,60 Z" fill="#2C3E50"/>
<circle cx="52" cy="42" r="18" fill="#1C2833"/>
<path d="M60,46 Q70,48 68,52 Q65,55 58,53 Z" fill="#E67E22"/>
<g class="cr_e">
<circle cx="48" cy="38" r="8" fill="#F9E400"/>
<circle cx="48.5" cy="38.5" r="5" fill="#1A2035"/>
<circle cx="50" cy="37" r="1.8" fill="#F9E400" opacity="0.6"/>
</g>
<line x1="38" y1="92" x2="34" y2="100" stroke="#1C2833" stroke-width="2" stroke-linecap="round"/>
<line x1="52" y1="92" x2="56" y2="100" stroke="#1C2833" stroke-width="2" stroke-linecap="round"/>
<line x1="34" y1="100" x2="26" y2="98" stroke="#1C2833" stroke-width="1.5" stroke-linecap="round"/>
<line x1="34" y1="100" x2="32" y2="106" stroke="#1C2833" stroke-width="1.5" stroke-linecap="round"/>
<line x1="56" y1="100" x2="64" y2="98" stroke="#1C2833" stroke-width="1.5" stroke-linecap="round"/>
<line x1="56" y1="100" x2="58" y2="106" stroke="#1C2833" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

CHARS.wolf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 100" width="100%" height="100%" overflow="visible">
<defs><style>
.wf_e{animation:wf_e 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes wf_e{0%,88%,100%{transform:scaleY(1)}92%{transform:scaleY(0.08)}}
</style></defs>
<path d="M80,62 Q98,48 96,34 Q94,26 88,30 Q86,38 80,44 Z" fill="#95A5A6"/>
<ellipse cx="52" cy="72" rx="36" ry="22" fill="#95A5A6"/>
<circle cx="52" cy="52" r="26" fill="#95A5A6"/>
<circle cx="52" cy="52" r="22" fill="#BDC3C7"/>
<path d="M30,30 Q28,16 36,12 Q42,8 44,18 L44,32 Z" fill="#7F8C8D"/>
<path d="M74,30 Q76,16 68,12 Q62,8 60,18 L60,32 Z" fill="#7F8C8D"/>
<ellipse cx="52" cy="64" rx="18" ry="10" fill="#D5DBDB"/>
<g class="wf_e">
<ellipse cx="40" cy="48" rx="7" ry="8" fill="white"/>
<ellipse cx="64" cy="48" rx="7" ry="8" fill="white"/>
<circle cx="41" cy="50" r="5" fill="#F39C12"/>
<circle cx="65" cy="50" r="5" fill="#F39C12"/>
<circle cx="40" cy="50" r="3" fill="#1A1A1A"/>
<circle cx="64" cy="50" r="3" fill="#1A1A1A"/>
<circle cx="41.5" cy="48.5" r="1.2" fill="white"/>
<circle cx="65.5" cy="48.5" r="1.2" fill="white"/>
</g>
<ellipse cx="52" cy="68" rx="6" ry="4" fill="#5D6D7E"/>
<path d="M44,64 Q52,70 60,64" stroke="#5D6D7E" stroke-width="2" fill="none" stroke-linecap="round"/>
<rect x="47" y="63" width="3" height="5" rx="1" fill="white"/>
<rect x="52" y="63" width="3" height="5" rx="1" fill="white"/>
<ellipse cx="30" cy="92" rx="14" ry="6" fill="#7F8C8D"/>
<ellipse cx="74" cy="92" rx="14" ry="6" fill="#7F8C8D"/>
</svg>`;

CHARS.sheep = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="100%" height="100%" overflow="visible">
<defs><style>
.sh_e{animation:sh_e 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes sh_e{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
</style></defs>
<rect x="28" y="62" width="8" height="18" rx="3" fill="#2C3E50"/>
<rect x="42" y="64" width="8" height="16" rx="3" fill="#2C3E50"/>
<rect x="56" y="62" width="8" height="18" rx="3" fill="#2C3E50"/>
<rect x="70" y="64" width="8" height="16" rx="3" fill="#2C3E50"/>
<circle cx="30" cy="44" r="18" fill="#FAFAFA"/>
<circle cx="50" cy="36" r="22" fill="#FAFAFA"/>
<circle cx="70" cy="42" r="18" fill="#FAFAFA"/>
<circle cx="50" cy="56" r="16" fill="#FAFAFA"/>
<circle cx="38" cy="54" r="13" fill="#FAFAFA"/>
<circle cx="62" cy="54" r="13" fill="#FAFAFA"/>
<ellipse cx="20" cy="40" rx="12" ry="9" fill="#2C3E50"/>
<ellipse cx="20" cy="38" rx="8" ry="6" fill="#2C3E50"/>
<circle cx="16" cy="34" r="4" fill="#5D6D7E"/>
<circle cx="24" cy="34" r="4" fill="#5D6D7E"/>
<g class="sh_e">
<circle cx="16" cy="34" r="3" fill="white"/>
<circle cx="24" cy="34" r="3" fill="white"/>
<circle cx="16.5" cy="34" r="1.5" fill="#1A1A1A"/>
<circle cx="24.5" cy="34" r="1.5" fill="#1A1A1A"/>
</g>
<path d="M12,40 Q20,44 28,40" stroke="#2C3E50" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`;

/* ══════════════════ HUMANS ══════════════════ */

CHARS.cinderella = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 140" width="100%" height="100%" overflow="visible">
<defs><style>
.cd_e{animation:cd_e 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes cd_e{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
</style></defs>
<path d="M40,43 Q22,50 18,80 Q16,110 20,130 Q40,134 60,130 Q64,110 62,80 Q58,50 40,43 Z" fill="#9E9E9E"/>
<path d="M34,55 Q30,70 28,100 Q36,104 44,104 Q44,70 40,55 Z" fill="#F5F5F5" opacity="0.8"/>
<circle cx="40" cy="25" r="18" fill="#FDBCB4"/>
<path d="M22,20 Q24,8 40,7 Q56,8 58,20 Q52,14 40,14 Q28,14 22,20 Z" fill="#6B3A2A"/>
<path d="M22,18 Q20,28 24,34" stroke="#6B3A2A" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M58,18 Q60,28 56,34" stroke="#6B3A2A" stroke-width="4" fill="none" stroke-linecap="round"/>
<g class="cd_e">
<ellipse cx="33" cy="23" rx="5" ry="6" fill="white"/>
<ellipse cx="47" cy="23" rx="5" ry="6" fill="white"/>
<circle cx="33.5" cy="24" r="3.5" fill="#4A2708"/>
<circle cx="47.5" cy="24" r="3.5" fill="#4A2708"/>
<circle cx="35" cy="22.5" r="1.3" fill="white"/>
<circle cx="49" cy="22.5" r="1.3" fill="white"/>
</g>
<ellipse cx="40" cy="31" rx="3" ry="2" fill="#E8A090"/>
<path d="M34,36 Q40,41 46,36" stroke="#C0706A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<line x1="20" y1="58" x2="10" y2="84" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<line x1="60" y1="58" x2="70" y2="84" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<rect x="28" y="126" width="10" height="8" rx="3" fill="#7B7B7B"/>
<rect x="44" y="126" width="10" height="8" rx="3" fill="#7B7B7B"/>
</svg>`;

CHARS.princess = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 144" width="100%" height="100%" overflow="visible">
<defs><style>
.ps_e{animation:ps_e 3.5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes ps_e{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
</style></defs>
<path d="M46,48 Q16,56 8,90 Q4,118 8,138 Q46,144 84,138 Q88,118 84,90 Q76,56 46,48 Z" fill="#3498DB"/>
<path d="M46,48 Q26,54 22,72 Q40,68 46,68 Q52,68 70,72 Q66,54 46,48 Z" fill="#D4AC0D"/>
<ellipse cx="46" cy="25" rx="18" ry="19" fill="#FDBCB4"/>
<path d="M28,20 Q30,4 46,3 Q62,4 64,20 Q58,12 46,12 Q34,12 28,20 Z" fill="#6B3A2A"/>
<path d="M28,18 Q26,28 30,34" stroke="#6B3A2A" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M64,18 Q66,28 62,34" stroke="#6B3A2A" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M32,12 L30,4 L36,10 L40,2 L44,10 L48,2 L52,10 L56,4 L54,12" fill="#D4AC0D" stroke="#B8860B" stroke-width="1.2" stroke-linejoin="round"/>
<g class="ps_e">
<ellipse cx="38" cy="23" rx="5" ry="6" fill="white"/>
<ellipse cx="54" cy="23" rx="5" ry="6" fill="white"/>
<circle cx="38.5" cy="24" r="3.5" fill="#4A2708"/>
<circle cx="54.5" cy="24" r="3.5" fill="#4A2708"/>
<circle cx="40" cy="22.5" r="1.3" fill="white"/>
<circle cx="56" cy="22.5" r="1.3" fill="white"/>
</g>
<ellipse cx="46" cy="31" rx="3" ry="2" fill="#E8A090"/>
<path d="M40,36 Q46,41 52,36" stroke="#C0706A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<line x1="24" y1="62" x2="14" y2="86" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<line x1="68" y1="62" x2="78" y2="86" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<ellipse cx="30" cy="86" rx="8" ry="4" fill="#3498DB" opacity="0.5"/>
<ellipse cx="62" cy="86" rx="8" ry="4" fill="#3498DB" opacity="0.5"/>
</svg>`;

CHARS.fairy = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 144" width="100%" height="100%" overflow="visible">
<defs><style>
.fy_e{animation:fy_e 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes fy_e{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
</style></defs>
<path d="M10,62 Q2,50 6,38 Q16,42 20,56 Z" fill="#A9CCE3" opacity="0.7"/>
<path d="M74,62 Q82,50 78,38 Q68,42 64,56 Z" fill="#A9CCE3" opacity="0.7"/>
<path d="M42,48 Q22,54 18,80 Q16,108 20,128 Q42,132 64,128 Q68,108 66,80 Q62,54 42,48 Z" fill="#8E44AD"/>
<path d="M42,48 Q28,54 26,68 Q38,64 42,64 Q46,64 58,68 Q56,54 42,48 Z" fill="#6C3483"/>
<circle cx="42" cy="26" r="17" fill="#FDBCB4"/>
<path d="M26,22 Q28,8 42,7 Q56,8 58,22 Q53,14 42,14 Q31,14 26,22 Z" fill="#C0C0C0"/>
<path d="M26,20 Q22,32 26,38" stroke="#C0C0C0" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M58,20 Q62,32 58,38" stroke="#C0C0C0" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M26,22 Q20,16 22,10 Q26,14 28,20" fill="#C0C0C0"/>
<path d="M58,22 Q64,16 62,10 Q58,14 56,20" fill="#C0C0C0"/>
<g class="fy_e">
<ellipse cx="35" cy="24" rx="5" ry="6" fill="white"/>
<ellipse cx="49" cy="24" rx="5" ry="6" fill="white"/>
<circle cx="35.5" cy="25" r="3.5" fill="#4A2708"/>
<circle cx="49.5" cy="25" r="3.5" fill="#4A2708"/>
<circle cx="37" cy="23.5" r="1.3" fill="white"/>
<circle cx="51" cy="23.5" r="1.3" fill="white"/>
</g>
<ellipse cx="42" cy="31" rx="3" ry="2" fill="#E8A090"/>
<path d="M36,37 Q42,42 48,37" stroke="#C0706A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M26,20 Q24,14 28,10" stroke="#A0A0A0" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M56,20 Q58,14 54,10" stroke="#A0A0A0" stroke-width="2" fill="none" stroke-linecap="round"/>
<line x1="24" y1="62" x2="12" y2="88" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<line x1="62" y1="56" x2="76" y2="64" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<line x1="76" y1="64" x2="88" y2="56" stroke="#D4AC0D" stroke-width="2.5" stroke-linecap="round"/>
<path d="M86,52 L90,48 L88,54 L94,52 L89,56 L92,62 L86,58 L84,64 L82,58 L76,62 L79,56 L74,54 L80,52 L78,46 Z" fill="#FFD700" stroke="#D4AC0D" stroke-width="0.8"/>
</svg>`;

CHARS.prince = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 140" width="100%" height="100%" overflow="visible">
<defs><style>
.pr_e{animation:pr_e 3.5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes pr_e{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
</style></defs>
<path d="M36,44 Q18,50 16,76 Q14,104 18,128 Q36,132 54,128 Q58,104 56,76 Q54,50 36,44 Z" fill="#2E86C1"/>
<path d="M44,44 Q54,52 60,76 Q64,104 58,128 Q52,128 52,120 Q56,100 56,80 Q52,56 44,44 Z" fill="#1A5276" opacity="0.5"/>
<circle cx="36" cy="25" r="18" fill="#FDBCB4"/>
<path d="M18,20 Q20,6 36,5 Q52,6 54,20 Q48,13 36,13 Q24,13 18,20 Z" fill="#6B3A2A"/>
<path d="M18,18 Q16,28 20,34" stroke="#6B3A2A" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M54,18 Q56,28 52,34" stroke="#6B3A2A" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M22,14 L20,6 L26,12 L30,4 L34,12 L38,4 L42,12 L46,6 L44,14" fill="#FFD700" stroke="#D4AC0D" stroke-width="1.2" stroke-linejoin="round"/>
<g class="pr_e">
<ellipse cx="29" cy="23" rx="5" ry="6" fill="white"/>
<ellipse cx="43" cy="23" rx="5" ry="6" fill="white"/>
<circle cx="29.5" cy="24" r="3.5" fill="#4A2708"/>
<circle cx="43.5" cy="24" r="3.5" fill="#4A2708"/>
<circle cx="31" cy="22.5" r="1.3" fill="white"/>
<circle cx="45" cy="22.5" r="1.3" fill="white"/>
</g>
<ellipse cx="36" cy="31" rx="3" ry="2" fill="#E8A090"/>
<path d="M30,36 Q36,41 42,36" stroke="#C0706A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<rect x="30" y="56" width="12" height="5" rx="2" fill="#D4AC0D"/>
<line x1="16" y1="58" x2="8" y2="84" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<line x1="56" y1="58" x2="64" y2="84" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<rect x="24" y="104" width="10" height="28" rx="4" fill="#1A4E7C"/>
<rect x="38" y="104" width="10" height="28" rx="4" fill="#1A4E7C"/>
</svg>`;

CHARS.boy = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 140" width="100%" height="100%" overflow="visible">
<defs><style>
.by_e{animation:by_e 3.5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes by_e{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
</style></defs>
<line x1="64" y1="42" x2="60" y2="130" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/>
<path d="M60,42 Q56,36 60,32 Q64,28 64,34 Q68,38 64,42 Z" stroke="#8B6914" stroke-width="2" fill="#A0784A"/>
<path d="M36,44 Q18,50 16,76 Q14,104 18,128 Q36,132 54,128 Q58,104 56,76 Q54,50 36,44 Z" fill="#C9963A"/>
<path d="M16,76 Q18,90 22,104 Q22,100 28,92 Q24,84 16,76 Z" fill="#A87030" opacity="0.5"/>
<circle cx="36" cy="25" r="18" fill="#FDBCB4"/>
<path d="M18,20 Q20,6 36,5 Q52,6 54,20 Q48,12 36,12 Q24,12 18,20 Z" fill="#4A235A"/>
<path d="M18,18 Q15,24 18,30" stroke="#4A235A" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M54,18 Q57,24 54,30" stroke="#4A235A" stroke-width="5" fill="none" stroke-linecap="round"/>
<g class="by_e">
<ellipse cx="29" cy="23" rx="5" ry="6" fill="white"/>
<ellipse cx="43" cy="23" rx="5" ry="6" fill="white"/>
<circle cx="29.5" cy="24" r="3.5" fill="#4A2708"/>
<circle cx="43.5" cy="24" r="3.5" fill="#4A2708"/>
<circle cx="31" cy="22.5" r="1.3" fill="white"/>
<circle cx="45" cy="22.5" r="1.3" fill="white"/>
</g>
<ellipse cx="36" cy="31" rx="3" ry="2" fill="#E8A090"/>
<path d="M30,36 Q36,41 42,36" stroke="#C0706A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<line x1="16" y1="58" x2="6" y2="84" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<line x1="56" y1="58" x2="64" y2="76" stroke="#FDBCB4" stroke-width="6" stroke-linecap="round"/>
<rect x="22" y="104" width="10" height="28" rx="4" fill="#8B6914"/>
<rect x="40" y="104" width="10" height="28" rx="4" fill="#8B6914"/>
</svg>`;

CHARS.girl = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 140" width="100%" height="100%" overflow="visible">
<defs><style>
.gl_e{animation:gl_e 3.5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes gl_e{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
</style></defs>
<path d="M36,44 Q18,50 16,76 Q14,104 18,128 Q36,132 54,128 Q58,104 56,76 Q54,50 36,44 Z" fill="#E91E63"/>
<path d="M36,44 Q18,50 20,70 Q28,66 36,66 Q44,66 52,70 Q54,50 36,44 Z" fill="#AD1457"/>
<path d="M18,78 Q16,96 16,114 Q24,110 28,104 Q30,92 28,80 Z" fill="#CE93D8"/>
<circle cx="36" cy="25" r="18" fill="#D4845A"/>
<path d="M18,22 Q18,8 36,6 Q54,8 54,22" fill="#2C3E50"/>
<path d="M18,22 Q14,30 16,38 L22,42" stroke="#2C3E50" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M54,22 Q58,30 56,38 L50,42" stroke="#2C3E50" stroke-width="5" fill="none" stroke-linecap="round"/>
<circle cx="36" cy="18" r="3.5" fill="#C0392B"/>
<g class="gl_e">
<ellipse cx="29" cy="25" rx="5" ry="6" fill="white"/>
<ellipse cx="43" cy="25" rx="5" ry="6" fill="white"/>
<circle cx="29.5" cy="26" r="3.5" fill="#4A2708"/>
<circle cx="43.5" cy="26" r="3.5" fill="#4A2708"/>
<circle cx="31" cy="24.5" r="1.3" fill="white"/>
<circle cx="45" cy="24.5" r="1.3" fill="white"/>
</g>
<ellipse cx="36" cy="32" rx="3" ry="2" fill="#C06040"/>
<path d="M30,37 Q36,42 42,37" stroke="#A04030" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<line x1="16" y1="58" x2="8" y2="84" stroke="#D4845A" stroke-width="6" stroke-linecap="round"/>
<line x1="56" y1="58" x2="64" y2="84" stroke="#D4845A" stroke-width="6" stroke-linecap="round"/>
<rect x="22" y="104" width="10" height="28" rx="4" fill="#7B1FA2"/>
<rect x="40" y="104" width="10" height="28" rx="4" fill="#7B1FA2"/>
</svg>`;

CHARS.grandmother = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 140" width="100%" height="100%" overflow="visible">
<defs><style>
.gm_e{animation:gm_e 5s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes gm_e{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
</style></defs>
<path d="M36,44 Q18,50 16,76 Q14,104 18,128 Q36,132 54,128 Q58,104 56,76 Q54,50 36,44 Z" fill="#E8D5B7"/>
<path d="M36,44 Q20,50 22,66 Q32,62 36,62 Q40,62 50,66 Q52,50 36,44 Z" fill="#C4A882"/>
<circle cx="36" cy="26" r="17" fill="#C8926C"/>
<circle cx="36" cy="14" r="14" fill="#EEEEEE"/>
<path d="M22,22 Q20,30 22,38" stroke="#DDDDDD" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M50,22 Q52,30 50,38" stroke="#DDDDDD" stroke-width="5" fill="none" stroke-linecap="round"/>
<circle cx="36" cy="10" r="8" fill="#F5F5F5" stroke="#CCCCCC" stroke-width="1"/>
<line x1="24" y1="29" x2="29" y2="27" stroke="#B07840" stroke-width="1.5" opacity="0.5"/>
<line x1="43" y1="27" x2="48" y2="29" stroke="#B07840" stroke-width="1.5" opacity="0.5"/>
<line x1="24" y1="34" x2="29" y2="33" stroke="#B07840" stroke-width="1.5" opacity="0.4"/>
<line x1="43" y1="33" x2="48" y2="34" stroke="#B07840" stroke-width="1.5" opacity="0.4"/>
<ellipse cx="28" cy="26" rx="6" ry="3" fill="none" stroke="#888888" stroke-width="1.5"/>
<ellipse cx="44" cy="26" rx="6" ry="3" fill="none" stroke="#888888" stroke-width="1.5"/>
<line x1="34" y1="26" x2="38" y2="26" stroke="#888888" stroke-width="1.5"/>
<g class="gm_e">
<circle cx="28" cy="26" r="3" fill="white" opacity="0.5"/>
<circle cx="44" cy="26" r="3" fill="white" opacity="0.5"/>
<circle cx="28" cy="26.5" r="2" fill="#4A2708"/>
<circle cx="44" cy="26.5" r="2" fill="#4A2708"/>
</g>
<ellipse cx="36" cy="33" rx="3" ry="2" fill="#C08070"/>
<path d="M30,38 Q36,43 42,38" stroke="#A06050" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<line x1="16" y1="58" x2="8" y2="82" stroke="#C8926C" stroke-width="7" stroke-linecap="round"/>
<line x1="56" y1="58" x2="64" y2="82" stroke="#C8926C" stroke-width="7" stroke-linecap="round"/>
<rect x="24" y="102" width="10" height="28" rx="4" fill="#C4A882"/>
<rect x="38" y="102" width="10" height="28" rx="4" fill="#C4A882"/>
</svg>`;

/* ══════════════════ PROPS & NATURE ══════════════════ */

CHARS.pot = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 90" width="100%" height="100%" overflow="visible">
<ellipse cx="40" cy="18" rx="24" ry="6" fill="#4EC3E0" opacity="0.8"/>
<path d="M16,18 Q10,28 12,52 Q14,72 16,82 Q40,88 64,82 Q66,72 68,52 Q70,28 64,18 Z" fill="#C0834B"/>
<path d="M18,28 Q14,42 16,58 Q18,70 20,78 Q24,80 28,78 Q26,66 26,52 Q24,38 22,28 Z" fill="#E8A06A" opacity="0.5"/>
<ellipse cx="40" cy="18" rx="24" ry="6" fill="none" stroke="#9B6030" stroke-width="2.5"/>
<ellipse cx="40" cy="18" rx="26" ry="7" fill="#A06030" opacity="0.6"/>
<ellipse cx="40" cy="16" rx="24" ry="5" fill="#4EC3E0" opacity="0.9"/>
<ellipse cx="40" cy="15" rx="20" ry="3.5" fill="#74D3E8"/>
<ellipse cx="40" cy="82" rx="22" ry="6" fill="#9B6030"/>
</svg>`;

CHARS.sunflower = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 142" width="100%" height="100%" overflow="visible">
<rect x="27" y="58" width="6" height="84" rx="3" fill="#27AE60"/>
<path d="M20,90 Q8,82 10,70 Q16,74 22,82 Z" fill="#2ECC71"/>
<path d="M40,80 Q52,72 50,60 Q44,64 38,72 Z" fill="#2ECC71"/>
<ellipse cx="30" cy="32" rx="22" ry="22" fill="#F39C12"/>
<circle cx="30" cy="32" r="14" fill="#F39C12"/>
<ellipse cx="30" cy="10" rx="7" ry="13" fill="#F39C12" transform="rotate(-20,30,32)"/>
<ellipse cx="30" cy="10" rx="7" ry="13" fill="#F39C12" transform="rotate(20,30,32)"/>
<ellipse cx="30" cy="10" rx="7" ry="13" fill="#F39C12" transform="rotate(60,30,32)"/>
<ellipse cx="30" cy="10" rx="7" ry="13" fill="#F39C12" transform="rotate(-60,30,32)"/>
<ellipse cx="30" cy="10" rx="7" ry="13" fill="#F39C12" transform="rotate(100,30,32)"/>
<ellipse cx="30" cy="10" rx="7" ry="13" fill="#F39C12" transform="rotate(-100,30,32)"/>
<ellipse cx="30" cy="10" rx="7" ry="13" fill="#F39C12" transform="rotate(140,30,32)"/>
<ellipse cx="30" cy="10" rx="7" ry="13" fill="#F39C12" transform="rotate(-140,30,32)"/>
<circle cx="30" cy="32" r="11" fill="#6D4C41"/>
<circle cx="26" cy="28" r="2" fill="#8D6E63" opacity="0.6"/>
<circle cx="32" cy="27" r="2" fill="#8D6E63" opacity="0.6"/>
<circle cx="36" cy="31" r="2" fill="#8D6E63" opacity="0.6"/>
<circle cx="27" cy="35" r="2" fill="#8D6E63" opacity="0.6"/>
<circle cx="34" cy="36" r="2" fill="#8D6E63" opacity="0.6"/>
</svg>`;

CHARS.sprout = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 72" width="100%" height="100%" overflow="visible">
<ellipse cx="26" cy="65" rx="20" ry="7" fill="#8D6E63"/>
<ellipse cx="26" cy="63" rx="16" ry="5" fill="#A1887F"/>
<rect x="23" y="28" width="6" height="36" rx="3" fill="#4CAF50"/>
<path d="M26,46 Q14,42 12,30 Q20,30 26,40 Z" fill="#66BB6A"/>
<path d="M26,36 Q38,30 40,18 Q32,20 26,30 Z" fill="#4CAF50"/>
<ellipse cx="26" cy="28" rx="5" ry="7" fill="#81C784"/>
</svg>`;

CHARS.tree = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%" overflow="visible">
<rect x="38" y="80" width="24" height="40" rx="6" fill="#8D6E63"/>
<rect x="40" y="80" width="8" height="40" rx="3" fill="#A1887F" opacity="0.5"/>
<ellipse cx="50" cy="56" rx="40" ry="44" fill="#2E7D32"/>
<ellipse cx="50" cy="52" rx="36" ry="40" fill="#388E3C"/>
<ellipse cx="42" cy="44" rx="24" ry="22" fill="#43A047" opacity="0.6"/>
<ellipse cx="60" cy="48" rx="18" ry="16" fill="#1B5E20" opacity="0.3"/>
</svg>`;

CHARS.sun = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" overflow="visible">
<defs><style>
.sn_r{animation:sn_r 8s linear infinite;transform-box:fill-box;transform-origin:50% 50%}
@keyframes sn_r{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
</style></defs>
<g class="sn_r">
<ellipse cx="50" cy="12" rx="6" ry="12" fill="#FFD700"/>
<ellipse cx="50" cy="12" rx="6" ry="12" fill="#FFD700" transform="rotate(30,50,50)"/>
<ellipse cx="50" cy="12" rx="6" ry="12" fill="#FFD700" transform="rotate(60,50,50)"/>
<ellipse cx="50" cy="12" rx="6" ry="12" fill="#FFD700" transform="rotate(90,50,50)"/>
<ellipse cx="50" cy="12" rx="6" ry="12" fill="#FFD700" transform="rotate(120,50,50)"/>
<ellipse cx="50" cy="12" rx="6" ry="12" fill="#FFD700" transform="rotate(150,50,50)"/>
</g>
<circle cx="50" cy="50" r="28" fill="#FFD700"/>
<circle cx="50" cy="50" r="25" fill="#FFEB3B"/>
<circle cx="40" cy="44" r="5" fill="white"/>
<circle cx="60" cy="44" r="5" fill="white"/>
<circle cx="41" cy="45" r="3" fill="#E65100"/>
<circle cx="61" cy="45" r="3" fill="#E65100"/>
<circle cx="42" cy="44" r="1.2" fill="white"/>
<circle cx="62" cy="44" r="1.2" fill="white"/>
<ellipse cx="50" cy="54" rx="4" ry="2.5" fill="#E65100"/>
<path d="M42,60 Q50,67 58,60" stroke="#E65100" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>`;

CHARS.cloud = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 68" width="100%" height="100%" overflow="visible">
<circle cx="34" cy="44" r="22" fill="#ECEFF1"/>
<circle cx="58" cy="34" r="26" fill="#ECEFF1"/>
<circle cx="84" cy="40" r="20" fill="#ECEFF1"/>
<circle cx="104" cy="48" r="14" fill="#ECEFF1"/>
<circle cx="16" cy="50" r="14" fill="#ECEFF1"/>
<rect x="10" y="50" width="100" height="18" fill="#ECEFF1"/>
<circle cx="34" cy="42" r="20" fill="white"/>
<circle cx="58" cy="32" r="24" fill="white"/>
<circle cx="84" cy="38" r="18" fill="white"/>
<circle cx="104" cy="46" r="12" fill="white"/>
<circle cx="16" cy="48" r="12" fill="white"/>
<rect x="14" y="48" width="96" height="16" fill="white"/>
</svg>`;

CHARS.fire = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 80" width="100%" height="100%" overflow="visible">
<defs><style>
.fr_f{animation:fr_f 0.8s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:50% 100%}
@keyframes fr_f{0%{transform:scaleX(1) scaleY(1)}100%{transform:scaleX(0.9) scaleY(1.06)}}
</style></defs>
<g class="fr_f">
<path d="M30,2 Q10,20 8,44 Q8,66 30,78 Q52,66 52,44 Q50,20 30,2 Z" fill="#FF5722"/>
<path d="M30,12 Q14,28 14,48 Q14,64 30,74 Q46,64 46,48 Q46,28 30,12 Z" fill="#FF9800"/>
<path d="M30,24 Q20,36 20,52 Q20,64 30,70 Q40,64 40,52 Q40,36 30,24 Z" fill="#FFEB3B"/>
<path d="M30,38 Q24,46 24,56 Q24,64 30,67 Q36,64 36,56 Q36,46 30,38 Z" fill="white" opacity="0.6"/>
</g>
</svg>`;

CHARS.slipper = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 58" width="100%" height="100%" overflow="visible">
<path d="M8,46 Q8,22 22,14 Q34,8 52,10 Q72,12 88,24 Q96,32 92,42 Q88,50 72,52 Q52,56 30,54 Q12,52 8,46 Z" fill="#B3E5FC" opacity="0.8"/>
<path d="M8,46 Q8,22 22,14 Q34,8 52,10 Q72,12 88,24 Q96,32 92,42 Q88,50 72,52 Q52,56 30,54 Q12,52 8,46 Z" fill="none" stroke="#4FC3F7" stroke-width="2.5"/>
<path d="M8,44 Q18,30 36,26 Q52,24 66,28" stroke="#E1F5FE" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
<path d="M14,48 Q20,50 30,50" stroke="#E1F5FE" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
<path d="M76,16 Q72,10 80,8 Q86,10 84,16 Q88,18 86,22 Q82,24 78,20 Q74,22 72,18 Q70,14 76,16 Z" fill="#FFFFFF" opacity="0.8"/>
<circle cx="46" cy="36" r="3" fill="white" opacity="0.7"/>
<circle cx="56" cy="30" r="2" fill="white" opacity="0.6"/>
</svg>`;

/* ══════════════════ HELPER ══════════════════ */

function getChar(id) {
  return CHARS[id] || '';
}
