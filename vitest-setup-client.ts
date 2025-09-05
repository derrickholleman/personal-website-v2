/// <reference types="@vitest/browser/matchers" />
/// <reference types="@vitest/browser/providers/playwright" />

// Suppress known SSR transport disconnection warnings
const originalConsoleError = console.error;
console.error = (...args) => {
	if (args[0]?.toString().includes('transport was disconnected, cannot call "fetchModule"')) {
		return;
	}
	originalConsoleError.apply(console, args);
};
