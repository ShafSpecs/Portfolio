//@ts-nocheck
const _ = require('lodash');

try {
	// Node js will throw an error
	this === window;

	const Clipboard = require('clipboard');
	new Clipboard('.markdown-it-code-copy');
}
catch (_err) {
}

if(typeof String.prototype.replaceAll === "undefined") {
    String.prototype.replaceAll = function(match, replace) {
       return this.replace(new RegExp(match, 'g'), () => replace);
    }
}

const defaultOptions = {
	buttonStyle: 'position: absolute; top: 0.625rem; right: 0.625rem; cursor: pointer; outline: none;',
	buttonClass: 'copy-btn'
};

function renderCode(origRule, options) {
	options = _.merge(defaultOptions, options);
	return (...args) => {
		const [tokens, idx] = args;
		const content = tokens[idx].content
			.replaceAll('"', '&quot;')
			.replaceAll("'", "&lt;");
		const origRendered = origRule(...args);

		if (content.length === 0)
			return origRendered;

		return `
			<div style="position: relative">
				${origRendered}
				<button class="markdown-it-code-copy ${options.buttonClass}" id="copy-btn" data-clipboard-text="${content}" style="${options.buttonStyle}" title="Copy"></button>
			</div>
		`;
	};
}

module.exports = (md, options) => {
	md.renderer.rules.code_block = renderCode(md.renderer.rules.code_block, options);
	md.renderer.rules.fence = renderCode(md.renderer.rules.fence, options);
};