# Mobile Development Standards & Workflows

This rule governs mobile application development covering **Native Android (Kotlin / Jetpack Compose)**, **React Native / Expo**, and **Flutter**.

---

## 1. Toolchain & Sidecar Integration

- **Android CLI & Device Hub**:
  - Always utilize `android-cli` (`android run`, `android emulator`, `android sdk`) for compiling, building, and running native Android projects.
  - Use `android-device-hub` to inspect physical USB-connected devices and launch Android Virtual Devices (AVDs).
  - Use `compose-preview` sidecar to render `@Preview` composables live without full app recompilation.

- **React Native / Expo**:
  - Prioritize Expo managed workflows with TypeScript for cross-platform speed and stability.
  - Use Expo Router for file-based routing.
  - Ensure Safe Area insets (`react-native-safe-area-context`) are respected across notches, dynamic islands, and home indicators.

- **Flutter**:
  - Maintain clean separation with BLoC or Riverpod state management.
  - Run `flutter analyze` and `flutter test` before completing tasks.

---

## 2. Mobile Ergonomics & UI Principles

1. **Touch Targets**: All interactive elements must measure at least **48x48 dp/pt** to ensure effortless thumb interaction.
2. **Thumb Zone Architecture**: Position primary navigation and calls-to-action in the bottom 40% of the screen.
3. **Resilience & Offline States**:
   - Every network call must have a loading skeleton/spinner, an explicit empty state, and a graceful error/retry state.
4. **Platform-Native Feel**:
   - Provide subtle haptic feedback on primary interactions.
   - Support dark mode and dynamic system theme switching.

---

## 3. Verification Protocol

1. Run unit/widget tests before packaging APKs or bundles.
2. For Android, inspect rendered layouts using `android layout` or `android screen capture`.
3. Check memory footprints to avoid memory leaks caused by unbound listeners or background timers.
