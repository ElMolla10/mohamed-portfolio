# Internal validation checklist

Public case studies use reader-facing **Validation status** notes. Implementation follow-ups belong here, not in the rendered site or its serialized content.

## GAIN

- [x] User-provided real iPhone screen recording, October 15, 2026, 15.603 seconds. Shows workout start, a saved 27.5 kg × 4 set, experimental AI proposing 25 kg, application to the next row, and continued logging.
- [x] Public media identifies the device as iPhone and the model as experimental. Product maturity is Mobile prerelease; this does not imply an App Store release.
- [x] Video is not described as offline evidence: a 5G indicator is visible. Offline architecture is documented independently in the source case study.
- [x] Web video keeps the original H.264 video stream, removes audio and metadata, and moves the MP4 index to the front for streaming. No frames are synthesized or sped up. The original user file is unchanged.
- [x] Poster is extracted from the AI suggestion around 8 seconds. English walkthrough cues and an on-page transcript describe the visible interaction.
- [x] Existing interface screenshots remain explicitly labeled repository web renders with sample data. Added the Arabic Today preview alongside English and logger previews.
- [ ] [TODO_VERIFY: broader iPhone/Android device performance, predictive accuracy and field outcomes]
- [ ] [TODO_VERIFY: on-device Arabic-locale RTL, assistive-technology and large-text checks]

## Retrieval and forecasting

- [ ] [TODO_VERIFY: current RAGBase retrieval-quality and latency benchmarks]
- [ ] [TODO_VERIFY: FPL Edge out-of-sample forecast and decision-quality results]
- [x] RAGBase remains on Railway. Its English-oriented embedding model's Arabic retrieval limitation remains explicit.

## Historical scope

- [ ] [TODO_VERIFY: reconcile price-intelligence CV scope of 17 brands with 11 checked-in targets]
- [x] The public validation note distinguishes the CV-reported historical scope from the current configuration.

## Arabic / English evidence

- [x] GAIN source includes Arabic/English strings, direction-aware layout and string-key parity testing. The source checklist explicitly separates code checks from real-device RTL and accessibility validation.
- [x] Arabic ASR source includes overlapping chunks, normalization and FLEURS WER/CER experiments. No multilingual retrieval-quality or transcription-accuracy claim is inferred from interface localization.
