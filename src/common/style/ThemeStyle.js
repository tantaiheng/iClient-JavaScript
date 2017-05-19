/**
 * Class:SuperMap.ThemeStyle
 * 客户端专题图风格类
 */
var SuperMap = require('../SuperMap');
SuperMap.ThemeStyle = SuperMap.Class({
    // {Boolean} 是否填充，不需要填充则设置为 false，默认值为 true。
    // 此属性与 stroke 不能同时为 false，如果 fill 与 stroke 同时为 false，将按 fill 与 stroke 的默认值渲染图层。
    fill: true,
    // {String} 十六进制填充颜色。默认值为 "#000000"。
    fillColor: "#000000",
    // {Number} 填充不透明度。取值范围[0, 1]，默认值 1。
    fillOpacity: 1,
    // {Boolean} 是否描边，不需要描边则设置为false，默认值为 false。
    // 此属性与 fill 不能同时为 false，如果 fill 与 stroke 同时为 false，将按 fill 与 stroke 的默认值渲染图层。
    stroke: false,
    // {String}十六进制描边颜色
    strokeColor: "#000000",
    // {Number} 描边的不透明度。取值范围[0, 1]，默认值 1。
    strokeOpacity: 1,
    // {Number} 线宽度/描边宽度，默认值 1。
    strokeWidth: 1,
    // {String} 线帽样式；strokeLinecap 有三种类型 “butt", "round", "square"; 默认为"butt"。
    strokeLinecap: "butt",
    // {String} 线段连接样式；strokeLineJoin 有三种类型 “miter", "round", "bevel"; 默认为"miter"。
    strokeLineJoin: "miter",
    // {Sting} 虚线类型； strokeDashstyle 有八种类型 “dot",“dash",“dashot",“longdash",“longdashdot",“solid", "dashed", "dotted";
    // 默认值 "solid"。solid 表示实线。
    strokeDashstyle: "solid",
    // {Number} 点半径，默认为 6 （像素）。
    pointRadius: 6,
    // {number} 阴影模糊度，（大于 0 有效; 默认值 0）。注：请将 shadowColor 属性与 shadowBlur 属性一起使用，来创建阴影。
    shadowBlur: 0,
    // {string} 阴影颜色; 默认值 '#000000'。  注：请将 shadowColor 属性与 shadowBlur 属性一起使用，来创建阴影。
    shadowColor: "#000000",
    // {number} 阴影 X 方向偏移值; 默认值 0。
    shadowOffsetX: 0,
    // {number} 阴影 Y 方向偏移值; 默认值 0。
    shadowOffsetY: 0,
    // {String} 专题要素附加文本标签内容。
    label: "",
    // {String} 附加文本字体颜色。
    fontColor: "",
    // {Number} 附加文本字体大小。默认值 12，单位是像素。
    fontSize: 12,
    // {String} 附加文本字体样式。可设值："normal", "italic", "oblique"; 默认值："normal" 。
    fontStyle: "normal",
    // {String} 附加文本字体变体。可设值："normal", "small-caps"; 默认值："normal" 。
    fontVariant: "normal",
    // {String} 附加文本字体粗细。可设值："normal", "bold", "bolder", "lighter"; 默认值："normal" 。
    fontWeight: "normal",
    // {String} 附加文本字体系列。fontFamily 值是字体族名称或/及类族名称的一个优先表，每个值逗号分割，浏览器会使用它可识别的第一个值。
    // 可以使用具体的字体名称（"times"、"courier"、"arial"）或字体系列名称（"serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"）。
    // 默认值："arial,sans-serif".
    fontFamily: "arial,sans-serif",
    // {string} 附加文本位置, 可以是 'inside', 'left', 'right', 'top', 'bottom'; 默认值 'top'。
    labelPosition: "top",
    // {string} 附加文本水平对齐。可以是 'left', 'right', 'center'; 默认值 'center'。
    labelAlign: "center",
    // {string} 附加文本垂直对齐。 可以是 'top', 'bottom', 'middle';默认值 'middle'。
    labelBaseline: "middle",
    // {Number} 附加文本在x轴方向的偏移量。
    labelXOffset: "miter",
    // {Number} 附加文本在y轴方向的偏移量。
    labelYOffset: 0,

    initialize: function (options) {
        options = options || {};
        SuperMap.Util.extend(this, options);
    },

    CLASS_NAME: "SuperMap.ThemeStyle"
});

module.exports = SuperMap.ThemeStyle;