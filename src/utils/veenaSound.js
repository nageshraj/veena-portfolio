// Veena sound synthesizer using Web Audio API

let audioContext = null;
let noteIndex = 0;

// Mohanam Raga scale (Pentatonic: C, D, E, G, A)
// Frequencies relative to C4 (approx 261.63 Hz)
const scale = [
    261.63, // Sa (C4)
    293.66, // Ri (D4)
    329.63, // Ga (E4)
    392.00, // Pa (G4)
    440.00, // Dha (A4)
    523.25, // Sa (C5)
    440.00, // Dha (A4)
    392.00, // Pa (G4)
    329.63, // Ga (E4)
    293.66  // Ri (D4)
];

export const playVeenaSound = () => {
    // Initialize AudioContext on first user interaction
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const t = audioContext.currentTime;
    const frequency = scale[noteIndex % scale.length];
    noteIndex++;

    // Create nodes
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filterNode = audioContext.createBiquadFilter();

    // Configure Oscillator (Sawtooth for string harmonics)
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(frequency, t);

    // Subtle pitch bend (Gamaka effect) - start slightly lower and slide up
    oscillator.frequency.exponentialRampToValueAtTime(frequency, t + 0.05);
    oscillator.frequency.exponentialRampToValueAtTime(frequency + 2, t + 0.3); // Vibrato-ish drift

    // Configure Filter (Lowpass to dampen the harsh sawtooth)
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(800, t);
    filterNode.frequency.exponentialRampToValueAtTime(2000, t + 0.1); // "Pluck" brightness
    filterNode.frequency.exponentialRampToValueAtTime(500, t + 1.5); // Dampen over time

    // Configure Envelope (Pluck shape)
    gainNode.gain.setValueAtTime(0, t);
    gainNode.gain.linearRampToValueAtTime(0.3, t + 0.02); // Fast attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, t + 2.0); // Long decay (resonance)

    // Connect graph
    oscillator.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Play
    oscillator.start(t);
    oscillator.stop(t + 2.0);
};

let isMuted = false;

export const toggleMute = () => {
    isMuted = !isMuted;
    return isMuted;
};

export const getMuteState = () => isMuted;

// Wrap the original play function to check for mute
const originalPlayVeenaSound = playVeenaSound;
export const playVeenaSoundWithMuteCheck = () => {
    if (isMuted) return;
    originalPlayVeenaSound();
};
