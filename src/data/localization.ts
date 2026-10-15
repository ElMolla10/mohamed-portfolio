export const localization = {
  eyebrow: "AR / EN · LANGUAGE & LOCAL CONTEXT",
  title: "Arabic interfaces. Arabic speech.",
  description:
    "Language is an engineering constraint: interface direction, missing context, transcription errors, and evaluation all need explicit treatment.",
  interface: {
    title: "GAIN · Arabic + English",
    body: "An Arabic/English string layer, direction-aware layout, and language-key parity tests support localization. Arabic interface previews and the source are available; full on-device RTL and assistive-technology validation remain separate checks.",
    tags: ["Arabic / English", "Direction-aware layout", "String-key parity"],
    url: "https://github.com/ElMolla10/gain/tree/main/apps/mobile/src/i18n",
    linkLabel: "Inspect the localization layer",
  },
  speech: {
    title: "MALIK · Arabic ASR",
    body: "Whisper-based long-form transcription uses overlapping audio chunks and Arabic normalization, evaluated with WER and CER on FLEURS. The downstream clipping workflow connects transcripts to Groq-assisted selection and captioned FFmpeg output.",
    tags: ["Whisper / Whisper.cpp", "FLEURS", "WER / CER"],
    url: "https://github.com/ElMolla10/arabic-long-form-asr/blob/main/asr_experiments.py",
    linkLabel: "Inspect Arabic normalization & evaluation",
  },
} as const;
