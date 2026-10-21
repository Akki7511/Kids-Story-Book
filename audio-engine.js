/* audio-engine.js — Procedural Web Audio API background music + sound effects */

const AudioEngine = (function () {
  let ctx = null;
  let masterGain = null;
  let bgGain = null;
  let sfxGain = null;
  let muted = false;
  let currentMood = null;
  let bgNodes = [];
  let melodyTimer = null;
  let initialized = false;

  /* ── Musical data ─────────────────────────────────────────── */
  const MOODS = {
    forest:    { scale:[261.63,293.66,329.63,392,440,523.25],      bass:65.41,  type:'sine',     tempo:2.2, gain:0.12 },
    savanna:   { scale:[261.63,293.66,329.63,392,440,523.25],      bass:65.41,  type:'sine',     tempo:2.2, gain:0.12 },
    meadow:    { scale:[349.23,392,440,523.25,587.33,659.26],      bass:87.31,  type:'triangle', tempo:1.4, gain:0.14 },
    race:      { scale:[349.23,392,440,523.25,587.33,659.26],      bass:87.31,  type:'triangle', tempo:0.9, gain:0.16 },
    hill:      { scale:[349.23,392,440,523.25,587.33,659.26],      bass:87.31,  type:'triangle', tempo:1.6, gain:0.14 },
    field:     { scale:[261.63,293.66,329.63,392,440,523.25],      bass:65.41,  type:'sine',     tempo:2.0, gain:0.12 },
    garden:    { scale:[293.66,329.63,369.99,440,493.88,587.33],   bass:73.42,  type:'triangle', tempo:1.8, gain:0.14 },
    lesson:    { scale:[293.66,329.63,369.99,440,493.88,587.33],   bass:73.42,  type:'triangle', tempo:2.2, gain:0.12 },
    night:     { scale:[220,261.63,293.66,311.13,349.23,392],      bass:55,     type:'sine',     tempo:3.0, gain:0.10 },
    magic:     { scale:[523.25,587.33,659.26,739.99,830.61,880],   bass:130.81, type:'sine',     tempo:1.2, gain:0.10 },
    ballroom:  { scale:[523.25,587.33,659.26,783.99,880,1046.5],   bass:130.81, type:'sine',     tempo:1.0, gain:0.10 },
    palace:    { scale:[523.25,587.33,659.26,783.99,880,1046.5],   bass:130.81, type:'sine',     tempo:1.4, gain:0.10 },
    sunset:    { scale:[329.63,369.99,415.3,493.88,554.37,659.26], bass:82.41,  type:'sine',     tempo:2.5, gain:0.11 },
    indoor:    { scale:[293.66,329.63,392,440,493.88,587.33],      bass:73.42,  type:'triangle', tempo:2.0, gain:0.12 },
    fireplace: { scale:[220,246.94,261.63,311.13,349.23,392],      bass:55,     type:'sine',     tempo:3.0, gain:0.09 },
    cloud:     { scale:[523.25,587.33,659.26,783.99,880],          bass:130.81, type:'sine',     tempo:2.5, gain:0.09 },
  };

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    if (initialized) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();

      masterGain = ctx.createGain();
      masterGain.gain.value = muted ? 0 : 1;
      masterGain.connect(ctx.destination);

      bgGain = ctx.createGain();
      bgGain.gain.value = 0.22;
      bgGain.connect(masterGain);

      sfxGain = ctx.createGain();
      sfxGain.gain.value = 0.65;
      sfxGain.connect(masterGain);

      initialized = true;
    } catch (e) {
      console.warn('[AudioEngine] init failed:', e);
    }
  }

  /* ── Background music ────────────────────────────────────── */
  function playMusic(mood) {
    if (!initialized) return;
    if (ctx.state === 'suspended') ctx.resume();
    if (mood === currentMood) return;
    stopMusic();
    currentMood = mood;

    const cfg = MOODS[mood] || MOODS.forest;

    // Bass drone
    const bass = ctx.createOscillator();
    bass.type = 'sine';
    bass.frequency.value = cfg.bass;
    const bassGain = ctx.createGain();
    bassGain.gain.value = cfg.gain * 0.5;
    bass.connect(bassGain);
    bassGain.connect(bgGain);
    bass.start();
    bgNodes.push(bass, bassGain);

    // Second harmonic drone (octave up, soft)
    const bass2 = ctx.createOscillator();
    bass2.type = 'sine';
    bass2.frequency.value = cfg.bass * 2;
    const bassGain2 = ctx.createGain();
    bassGain2.gain.value = cfg.gain * 0.25;
    bass2.connect(bassGain2);
    bassGain2.connect(bgGain);
    bass2.start();
    bgNodes.push(bass2, bassGain2);

    // Schedule the melody loop
    scheduleMelody(cfg);
  }

  function scheduleMelody(cfg) {
    if (!initialized || currentMood === null) return;
    const scale = cfg.scale;
    const freq  = scale[Math.floor(Math.random() * scale.length)];

    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    const now  = ctx.currentTime;
    const dur  = cfg.tempo * (0.5 + Math.random() * 0.8);
    const vol  = cfg.gain * (0.6 + Math.random() * 0.4);

    osc.type = cfg.type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(vol, now + 0.06);
    gain.gain.setValueAtTime(vol, now + dur - 0.25);
    gain.gain.linearRampToValueAtTime(0, now + dur);

    // Warm filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1800;
    filter.Q.value = 0.5;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(bgGain);
    osc.start(now);
    osc.stop(now + dur);
    bgNodes.push(osc, gain, filter);

    // Next note
    const nextIn = cfg.tempo * (0.3 + Math.random() * 1.2);
    melodyTimer = setTimeout(() => scheduleMelody(cfg), nextIn * 1000);
  }

  function stopMusic() {
    if (melodyTimer) { clearTimeout(melodyTimer); melodyTimer = null; }
    bgNodes.forEach(n => {
      try { n.disconnect(); } catch (_) {}
      try { if (n.stop) n.stop(); } catch (_) {}
    });
    bgNodes = [];
    currentMood = null;
  }

  /* ── Sound effects ────────────────────────────────────────── */
  function playEffect(name) {
    if (!initialized || muted) return;
    if (ctx.state === 'suspended') ctx.resume();
    const fx = EFFECTS[name];
    if (fx) fx();
  }

  function noteOn(freq, type, vol, startDelay, duration) {
    const now = ctx.currentTime + (startDelay || 0);
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(vol, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(sfxGain);
    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  const EFFECTS = {

    'page-turn': function () {
      const buf    = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * 0.18), ctx.sampleRate);
      const data   = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const env  = Math.pow(1 - i / data.length, 2.5);
        data[i] = (Math.random() * 2 - 1) * env;
      }
      const src    = ctx.createBufferSource();
      src.buffer   = buf;
      const hi     = ctx.createBiquadFilter();
      hi.type      = 'highpass';
      hi.frequency.setValueAtTime(3000, ctx.currentTime);
      hi.frequency.linearRampToValueAtTime(6000, ctx.currentTime + 0.18);
      const gain   = ctx.createGain();
      gain.gain.value = 0.55;
      src.connect(hi); hi.connect(gain); gain.connect(sfxGain);
      src.start();
    },

    'magic': function () {
      [523.25, 659.26, 783.99, 1046.5, 1318.51].forEach((f, i) => {
        noteOn(f, 'sine', 0.28, i * 0.1, 0.6);
      });
      // sparkle top
      [2093, 2637].forEach((f, i) => {
        noteOn(f, 'sine', 0.12, 0.4 + i * 0.08, 0.4);
      });
    },

    'roar': function () {
      const now = ctx.currentTime;

      // ── Distortion waveshaper (heavy saturation) ──
      const dist = ctx.createWaveShaper();
      const cn = 512;
      const cv = new Float32Array(cn);
      for (let i = 0; i < cn; i++) {
        const x = (i * 2) / cn - 1;
        cv[i] = (Math.PI + 600) * x / (Math.PI + 600 * Math.abs(x));
      }
      dist.curve = cv;
      dist.oversample = '4x';

      // ── Filter: starts low, opens mid-roar, falls back ──
      const filt = ctx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.Q.value = 3.5;
      filt.frequency.setValueAtTime(180, now);
      filt.frequency.linearRampToValueAtTime(700, now + 0.35);
      filt.frequency.setValueAtTime(700, now + 0.9);
      filt.frequency.exponentialRampToValueAtTime(120, now + 2.2);

      // ── Master envelope gain ──
      const masterGn = ctx.createGain();
      masterGn.gain.setValueAtTime(0, now);
      masterGn.gain.linearRampToValueAtTime(0.85, now + 0.18);
      masterGn.gain.setValueAtTime(0.80, now + 1.1);
      masterGn.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

      // ── LFO for growl texture (AM at 12 Hz) ──
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(14, now);
      lfo.frequency.linearRampToValueAtTime(8, now + 2.0);
      const lfoGn = ctx.createGain();
      lfoGn.gain.setValueAtTime(0.35, now);
      lfoGn.gain.linearRampToValueAtTime(0.45, now + 0.4);
      lfoGn.gain.linearRampToValueAtTime(0.2, now + 2.2);
      lfo.connect(lfoGn);
      lfoGn.connect(masterGn.gain);   // modulate main volume → growl

      // ── Three harmonic oscillators (fundamental + 2nd + 3rd harmonic) ──
      const fundamentals = [
        { freq: 68,  endFreq: 32,  vol: 0.55 },
        { freq: 136, endFreq: 64,  vol: 0.30 },
        { freq: 204, endFreq: 96,  vol: 0.15 },
      ];
      fundamentals.forEach(({ freq, endFreq, vol }) => {
        const osc = ctx.createOscillator();
        const gn  = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq * 1.15, now + 0.08); // pitch attack
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + 2.2);  // fall off
        gn.gain.value = vol;
        osc.connect(gn);
        gn.connect(dist);
        osc.start(now);
        osc.stop(now + 2.6);
      });

      // ── Breath noise (adds realistic texture) ──
      const bufLen = Math.ceil(ctx.sampleRate * 2.6);
      const nBuf   = ctx.createBuffer(1, bufLen, ctx.sampleRate);
      const nData  = nBuf.getChannelData(0);
      for (let i = 0; i < bufLen; i++) nData[i] = Math.random() * 2 - 1;
      const nSrc  = ctx.createBufferSource();
      nSrc.buffer = nBuf;
      const nFilt = ctx.createBiquadFilter();
      nFilt.type = 'bandpass';
      nFilt.frequency.value = 250;
      nFilt.Q.value = 0.5;
      const nGn = ctx.createGain();
      nGn.gain.setValueAtTime(0, now);
      nGn.gain.linearRampToValueAtTime(0.12, now + 0.25);
      nGn.gain.setValueAtTime(0.10, now + 1.2);
      nGn.gain.exponentialRampToValueAtTime(0.001, now + 2.4);
      nSrc.connect(nFilt); nFilt.connect(nGn); nGn.connect(dist);
      nSrc.start(now);

      // ── Wire dist → filter → master → output ──
      dist.connect(filt);
      filt.connect(masterGn);
      masterGn.connect(sfxGain);

      lfo.start(now); lfo.stop(now + 2.6);
    },

    'squeak': function () {
      const now = ctx.currentTime;

      // Three distinct mouse chirps: quick upward pitch glide with vibrato
      const chirps = [
        { t: 0,    baseFreq: 1100, topFreq: 1900, vol: 0.40, dur: 0.17 },
        { t: 0.30, baseFreq: 1300, topFreq: 2200, vol: 0.38, dur: 0.14 },
        { t: 0.56, baseFreq:  980, topFreq: 1650, vol: 0.32, dur: 0.16 },
      ];

      chirps.forEach(({ t, baseFreq, topFreq, vol, dur }) => {
        const start = now + t;

        const osc = ctx.createOscillator();
        osc.type = 'sine';
        // Pitch glide: snap up then ease back down slightly (natural squeak shape)
        osc.frequency.setValueAtTime(baseFreq, start);
        osc.frequency.linearRampToValueAtTime(topFreq, start + dur * 0.35);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.85, start + dur);

        // Vibrato (makes it sound alive)
        const vib = ctx.createOscillator();
        vib.type = 'sine';
        vib.frequency.value = 22;
        const vibGn = ctx.createGain();
        vibGn.gain.setValueAtTime(0, start);
        vibGn.gain.linearRampToValueAtTime(90, start + 0.03);  // kicks in fast
        vibGn.gain.linearRampToValueAtTime(50, start + dur);
        vib.connect(vibGn);
        vibGn.connect(osc.frequency);

        // Second harmonic for "mousey" timbre
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(baseFreq * 2.05, start);
        osc2.frequency.linearRampToValueAtTime(topFreq * 2.05, start + dur * 0.35);
        osc2.frequency.exponentialRampToValueAtTime(baseFreq * 1.7, start + dur);

        // High-pass to remove any low rumble
        const hp = ctx.createBiquadFilter();
        hp.type = 'highpass';
        hp.frequency.value = 700;

        // Envelope: sharp attack, exponential decay
        const gn = ctx.createGain();
        gn.gain.setValueAtTime(0, start);
        gn.gain.linearRampToValueAtTime(vol, start + 0.012);
        gn.gain.setValueAtTime(vol * 0.85, start + dur * 0.4);
        gn.gain.exponentialRampToValueAtTime(0.001, start + dur + 0.04);

        const gn2 = ctx.createGain();
        gn2.gain.value = 0.18;

        osc.connect(hp);
        osc2.connect(gn2); gn2.connect(hp);
        hp.connect(gn);
        gn.connect(sfxGain);

        osc.start(start);  osc.stop(start + dur + 0.06);
        osc2.start(start); osc2.stop(start + dur + 0.06);
        vib.start(start);  vib.stop(start + dur + 0.06);
      });
    },

    'water-drop': function () {
      const now = ctx.currentTime;
      const osc  = ctx.createOscillator();
      osc.type   = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.35);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      osc.connect(gain); gain.connect(sfxGain);
      osc.start(now); osc.stop(now + 0.45);
    },

    'celebrate': function () {
      [523.25, 587.33, 659.26, 783.99, 880, 1046.5].forEach((f, i) => {
        noteOn(f, 'triangle', 0.32, i * 0.1, 0.45);
      });
      // chord at end
      [523.25, 659.26, 783.99].forEach(f => {
        noteOn(f, 'triangle', 0.22, 0.65, 0.6);
      });
    },

    'sad': function () {
      [440, 392, 349.23, 329.63].forEach((f, i) => {
        noteOn(f, 'sine', 0.22, i * 0.22, 0.55);
      });
    },

    'wolf-howl': function () {
      const now  = ctx.currentTime;
      const osc  = ctx.createOscillator();
      osc.type   = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(440, now + 0.3);
      osc.frequency.setValueAtTime(440, now + 0.3);
      osc.frequency.linearRampToValueAtTime(330, now + 1.0);
      osc.frequency.exponentialRampToValueAtTime(160, now + 1.8);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.5, now + 0.2);
      gain.gain.setValueAtTime(0.5, now + 1.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 600;
      filter.Q.value = 2;
      osc.connect(filter); filter.connect(gain); gain.connect(sfxGain);
      osc.start(now); osc.stop(now + 2.3);
    },
  };

  /* ── Controls ─────────────────────────────────────────────── */
  function toggleMute() {
    if (!initialized) return;
    muted = !muted;
    if (masterGain) {
      masterGain.gain.cancelScheduledValues(ctx.currentTime);
      masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(muted ? 0 : 1, ctx.currentTime + 0.3);
    }
    return muted;
  }

  function isMuted() { return muted; }
  function isReady() { return initialized; }

  return { init, playMusic, stopMusic, playEffect, toggleMute, isMuted, isReady };
})();
