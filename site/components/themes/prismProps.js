
const lineNumberStyle = {
  fontSize: '90%'
};

const lineNumberContainerStyle = {
  // "backgroundColor": "#23232E",
  "paddingLeft": "0.8em",
  "paddingRight": "0.6em",
  "textAlign": "right",
  "color": "rgba(255,255,255,0.8)"
};

const style =  {
  "code[class*=\"language-\"]": {
    "MozTabSize": "2",
    "OTabSize": "2",
    "tabSize": "2",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
    "color": "#76d9e6",
    "textShadow": "none",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em 0",
    "fontSize": "24px"
  },
  "pre[class*=\"language-\"]": {
    "MozTabSize": "2",
    "OTabSize": "2",
    "tabSize": "2",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
    "color": "#76d9e6",
    "textShadow": "none",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "rgb(40, 44, 52)",
    "position": "relative",
    "borderRadius": "0.3em",
    "overflow": "auto",
    "display": "flex",
    "fontSize": "24px"
  },
  ":not(pre)>code[class*=\"language-\"]": {
    "background": "rgb(40, 44, 52)",
    "padding": "0.15em 0.2em 0.05em",
    "borderRadius": ".3em",
    "border": "0.13em solid #7a6652",
    "boxShadow": "1px 1px 0.3em -0.1em #000 inset"
  },
  "pre[class*=\"language-\"] code": {
    "whiteSpace": "pre",
    "display": "block"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "comment": {
    "color": "#6f705e"
  },
  "prolog": {
    "color": "#6f705e"
  },
  "doctype": {
    "color": "#6f705e"
  },
  "cdata": {
    "color": "#6f705e"
  },
  "operator": {
    "color": "#a77afe"
  },
  "boolean": {
    "color": "#a77afe"
  },
  "number": {
    "color": "#a77afe"
  },
  "attr-name": {
    "color": "#e6d06c"
  },
  "string": {
    "color": "#e6d06c"
  },
  "entity": {
    "color": "#e6d06c",
    "cursor": "help"
  },
  "url": {
    "color": "#e6d06c"
  },
  ".language-css .token.string": {
    "color": "#e6d06c"
  },
  ".style .token.string": {
    "color": "#e6d06c"
  },
  "selector": {
    "color": "#a6e22d"
  },
  "inserted": {
    "color": "#a6e22d"
  },
  "atrule": {
    "color": "#ef3b7d"
  },
  "attr-value": {
    "color": "#ef3b7d"
  },
  "keyword": {
    "color": "#ef3b7d"
  },
  "important": {
    "color": "#ef3b7d",
    "fontWeight": "bold"
  },
  "deleted": {
    "color": "#ef3b7d"
  },
  "regex": {
    "color": "#76d9e6"
  },
  "statement": {
    "color": "#76d9e6",
    "fontWeight": "bold"
  },
  "placeholder": {
    "color": "#fff"
  },
  "variable": {
    "color": "#fff"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "punctuation": {
    "color": "#bebec5"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "code.language-markup": {
    "color": "#f9f9f9"
  },
  "code.language-markup .token.tag": {
    "color": "#ef3b7d"
  },
  "code.language-markup .token.attr-name": {
    "color": "#a6e22d"
  },
  "code.language-markup .token.attr-value": {
    "color": "#e6d06c"
  },
  "code.language-markup .token.style": {
    "color": "#76d9e6"
  },
  "code.language-markup .token.script": {
    "color": "#76d9e6"
  },
  "code.language-markup .token.script .token.keyword": {
    "color": "#76d9e6"
  },
  "pre[class*=\"language-\"][data-line]": {
    "position": "relative",
    "padding": "1em 0 1em 3em"
  },
  "pre[data-line] .line-highlight": {
    "position": "absolute",
    "left": "0",
    "right": "0",
    "padding": "0",
    "marginTop": "1em",
    "background": "rgba(255, 255, 255, 0.08)",
    "pointerEvents": "none",
    "lineHeight": "inherit",
    "whiteSpace": "pre"
  },
  "pre[data-line] .line-highlight:before": {
    "content": "attr(data-start)",
    "position": "absolute",
    "top": ".4em",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0.2em 0.5em",
    "backgroundColor": "rgba(255, 255, 255, 0.4)",
    "color": "black",
    "font": "bold 65%/1 sans-serif",
    "height": "1em",
    "lineHeight": "1em",
    "textAlign": "center",
    "borderRadius": "999px",
    "textShadow": "none",
    "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)"
  },
  "pre[data-line] .line-highlight[data-end]:after": {
    "content": "attr(data-end)",
    "position": "absolute",
    "top": "auto",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0.2em 0.5em",
    "backgroundColor": "rgba(255, 255, 255, 0.4)",
    "color": "black",
    "font": "bold 65%/1 sans-serif",
    "height": "1em",
    "lineHeight": "1em",
    "textAlign": "center",
    "borderRadius": "999px",
    "textShadow": "none",
    "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)",
    "bottom": ".4em"
  }
};


export default {
  lineNumberContainerStyle,
  lineNumberStyle,
  style
};