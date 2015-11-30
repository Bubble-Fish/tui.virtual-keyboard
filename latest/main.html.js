ne.util.defineNamespace("fedoc.content", {});
fedoc.content["main.html"] = "<div id=\"main\" class=\"main\">\n\n\n\n    \n\n\n    <h3> </h3>\n\n\n\n\n\n\n\n\n\n\n    \n\n\n\n\n    <section class=\"main-content\">\n        <article><div class=\"readme\"><h1>Virtual Keyboard</h1><p>Virtual Keyboard Component<br>\nCreate virtual keyboard that support number, english, korean, symbol.<br>\nUser can use the virtual keyboard like real keyboard in browser.<br>\nIf you use this component on PC, you can click the buttons else on mobile, you can touch the buttons.</p>\n<h2>Feature</h2><ul>\n<li>Support virtual keys to input letters by click or touch</li>\n<li>Support mobile, PC both.</li>\n<li>Change english/korean, number, symbol</li>\n<li>Shuffles the keys</li>\n<li>When the keys are clicked/touched, this component run the callback functions with index.</li>\n<li>When this component toggle or shuffle the keys this component run the callback functions</li>\n</ul>\n<h2>Documentation</h2><ul>\n<li><strong>API</strong> : https://nhnent.github.io/tui.component.virtual-keyboard/latest</li>\n<li><strong>Tutorial</strong> : https://github.com/nhnent/tui.component.virtual-keyboard/wiki/Virtual-Keyboard-Tutorial</li>\n<li><strong>Sample</strong> - https://nhnent.github.io/tui.component.virtual-keyboard/latest/tutorial-desktop.html</li>\n</ul>\n<h2>Sample Image</h2><ul>\n<li>Regular keyboard<br>\n<img src=\"https://nhnent.github.io/tui.component.virtual-keyboard/vknormal.png\" alt=\"alt tag\"><br><br></li>\n<li>Numeric keyboard<br>\n<img src=\"https://nhnent.github.io/tui.component.virtual-keyboard/vksample.png\" alt=\"alt tag\"></li>\n</ul>\n<h2>Dependency</h2><ul>\n<li>jquery: ~1.8.3</li>\n<li>tui-code-snippet: ~1.0.2</li>\n</ul>\n<h2>Test environment</h2><ul>\n<li>PC<ul>\n<li>IE7~11</li>\n<li>Chrome</li>\n<li>Firefox</li>\n</ul>\n</li>\n</ul>\n<h2>Download/Install</h2><ul>\n<li>Bower:<ul>\n<li>latest : <code>bower install tui-component-virtual-keyboard#master</code></li>\n<li>each version : <code>bower install tui-component-virtual-keyboard[#tag]</code></li>\n</ul>\n</li>\n<li>Download: https://github.com/nhnent/tui.component.virtual-keyboard</li>\n</ul>\n<h2>History</h2><table>\n<thead>\n<tr>\n<th>Version</th>\n<th>Description</th>\n<th>Date</th>\n<th>Developer</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.0.0b</td>\n<td>isClickOnly option added</td>\n<td>2015.11</td>\n<td>NHN Ent. FE de team. <a href=\"&#109;&#x61;&#105;&#108;&#x74;&#x6f;&#x3a;&#100;&#108;&#95;&#106;&#97;&#118;&#x61;&#x73;&#99;&#114;&#105;&#112;&#x74;&#64;&#110;&#x68;&#x6e;&#x65;&#110;&#116;&#x2e;&#x63;&#111;&#x6d;\">&#100;&#108;&#95;&#106;&#97;&#118;&#x61;&#x73;&#99;&#114;&#105;&#112;&#x74;&#64;&#110;&#x68;&#x6e;&#x65;&#110;&#116;&#x2e;&#x63;&#111;&#x6d;</a></td>\n</tr>\n<tr>\n<td>1.0.0a</td>\n<td>Namespace changed</td>\n<td>2015.10</td>\n<td>NHN Ent. FE de team. <a href=\"&#109;&#97;&#105;&#108;&#116;&#111;&#x3a;&#x64;&#108;&#95;&#106;&#x61;&#118;&#97;&#x73;&#99;&#x72;&#105;&#x70;&#116;&#x40;&#110;&#x68;&#110;&#101;&#x6e;&#x74;&#x2e;&#99;&#111;&#109;\">&#x64;&#108;&#95;&#106;&#x61;&#118;&#97;&#x73;&#99;&#x72;&#105;&#x70;&#116;&#x40;&#110;&#x68;&#110;&#101;&#x6e;&#x74;&#x2e;&#99;&#111;&#109;</a></td>\n</tr>\n<tr>\n<td>1.0.0a</td>\n<td>defnieNamespace apply</td>\n<td>2015.05</td>\n<td>NHN Ent. FE dev team. <a href=\"&#x6d;&#97;&#105;&#x6c;&#x74;&#111;&#x3a;&#100;&#108;&#x5f;&#x6a;&#x61;&#118;&#97;&#x73;&#x63;&#114;&#105;&#x70;&#116;&#64;&#x6e;&#x68;&#110;&#101;&#110;&#x74;&#46;&#99;&#111;&#x6d;\">&#100;&#108;&#x5f;&#x6a;&#x61;&#118;&#97;&#x73;&#x63;&#114;&#105;&#x70;&#116;&#64;&#x6e;&#x68;&#110;&#101;&#110;&#x74;&#46;&#99;&#111;&#x6d;</a></td>\n</tr>\n<tr>\n<td><a href=\"https://nhnent.github.io/pages/tui.component.virtual-keyboard/1.0.0\">1.0.0</a></td>\n<td>Realese</td>\n<td>2015.03</td>\n<td>NHN Ent. FE dev team. <a href=\"&#109;&#x61;&#105;&#108;&#x74;&#111;&#58;&#100;&#108;&#x5f;&#x6a;&#97;&#118;&#x61;&#x73;&#x63;&#x72;&#105;&#112;&#116;&#64;&#110;&#x68;&#x6e;&#101;&#110;&#116;&#x2e;&#99;&#111;&#x6d;\">&#100;&#108;&#x5f;&#x6a;&#97;&#118;&#x61;&#x73;&#x63;&#x72;&#105;&#112;&#116;&#64;&#110;&#x68;&#x6e;&#101;&#110;&#116;&#x2e;&#99;&#111;&#x6d;</a></td>\n</tr>\n</tbody>\n</table>\n<h2>LICENSE</h2><p><a href=\"LICENSE\">MIT LICENSE</a></p></div></article>\n    </section>\n\n\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        VirtualKeyboard.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>The module that capture keys typed from user.</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-author\">Author:</dt>\n    <dd class=\"tag-author\">\n        <ul>\n            <li>NHN Ent. FE dev team. &lt;dl_javascript@nhnent.com></li>\n        </ul>\n    </dd>\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"