const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// TS/TSX uzantilarini resolver'a garanti et
config.resolver.sourceExts = Array.from(
  new Set([...config.resolver.sourceExts, "ts", "tsx"])
);

module.exports = config;
