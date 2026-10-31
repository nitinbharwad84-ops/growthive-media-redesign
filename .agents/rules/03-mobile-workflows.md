# Mobile Development Workflows & Standards

This rule governs mobile application development covering **Native Android (Kotlin / Jetpack Compose)**, **React Native / Expo**, and **Flutter**.

---

## 1. Toolchain & Environment Integration

- **Android CLI & Device Hub**:
  - Always utilize `android-cli` (`android run`, `android emulator`, `android sdk`) for building, compiling, and running native Android code.
  - Use `android-device-hub` to inspect connected physical devices and launch Android Virtual Devices (AVDs).
  - Use `compose-preview` sidecar to render `@Preview` composables live without full app recompilation.

- **React Native / Expo**:
  - Favor Expo managed workflows with TypeScript for cross-platform velocity.
  - Organize navigation using Expo Router (file-based routing) or React Navigation.
  - Test on both iOS and Android aspect ratios; ensure Safe Area insets are respected.

- **Flutter**:
  - Keep widgets declarative, following BLoC or Riverpod patterns for state management.
  - Utilize the official `flutter` MCP plugin for auto-fixing compilation issues and hot-reloading.

---

## 2. UI/UX Principles for Mobile

1. **Touch Targets & Ergonomics**:
   - Minimum touch target size must be at least 48x48 dp/pt.
   - Place primary actions in the thumb-accessible bottom zone.
2. **Safe Area & System Bars**:
   - Accommodate notches, dynamic islands, home indicator bars, and status bars using standard insets.
3. **State & Network Resilience**:
   - Provide explicit loading skeletons or spinners.
   - Handle offline states, timeout errors, and pull-to-refresh smoothly.
4. **Haptics & Transitions**:
   - Add subtle feedback on primary interactions to make the app feel responsive and native.

---

## 3. Verification Protocol

1. Run unit and component tests before deploying or packaging APKs/bundles.
2. For Android, inspect rendered layouts using `android layout` or `android screen capture`.
3. Check memory footprints and avoid memory leaks caused by unbound listeners or lingering background timers.
