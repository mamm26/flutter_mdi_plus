const util = require("@mdi/util");

const meta = util.getMeta(true);

const find = /(\-\w)/g;
const convert = function (matches) {
  return matches[1].toUpperCase();
};

const lines = meta.map((icon) => {
  let name = icon.name.replace(find, convert);
  name = `${name[0].toLowerCase()}${name.slice(1)}`;

  if (["null", "switch", "sync", "factory"].includes(name)) {
    name = `${name}Icon`;
  }

  return `  /// Icon for ${icon.name}.
  static const ${name} = IconData(0x${icon.codepoint}, fontFamily: _fontFamily, fontPackage: _packageName);
`;
});

const output = `// Material Design Icons v${util.getVersion()}

import 'package:flutter/widgets.dart';

const _fontFamily = 'Material Design Icons';
const _packageName = 'mdi_plus';

/// Mdi is a collection of icons provided by
/// [Material Design Icons](https://materialdesignicons.com/).
class Mdi {
${lines.join("\n")}
}
`;

util.write("mdi_plus/lib/mdi_plus.dart", output);
