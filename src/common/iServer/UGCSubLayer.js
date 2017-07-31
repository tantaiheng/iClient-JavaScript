﻿/**
 * Class: SuperMap.UGCSubLayer
 * 地图服务图层属性信息类，影像图层(Image)、专题图层(ServerTheme)、栅格图层(Grid)、矢量图层(Vector)等图层均继承该类。
 *
 * Inherits from:
 *  - <SuperMap.UGCMapLayer>
 */

require('../REST');
require('./UGCMapLayer');
var SuperMap = require('../SuperMap');
var JoinItem = require('./JoinItem');
var DatasetInfo = require('./DatasetInfo');

SuperMap.UGCSubLayer = SuperMap.Class(SuperMap.UGCMapLayer, {

    /**
     * APIProperty: datasetInfo
     * {SuperMap.DatasetInfo} 数据集信息。
     */
    datasetInfo: null,

    /**
     * APIProperty: displayFilter
     * {String} 图层显示过滤条件。
     */
    displayFilter: null,

    /**
     * APIProperty: joinItems
     * {SuperMap.JoinItem} 连接信息类。
     */
    joinItems: null,

    /**
     * APIProperty: representationField
     * {String} 存储制图表达信息的字段。
     */
    representationField: null,

    /**
     * APIProperty: ugcLayerType
     * {SuperMap.LayerType} 图层类型。
     */
    ugcLayerType: null,

    /**
     * Constructor: SuperMap.UGCSubLayer
     * 地图服务图层属性信息类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * datasetInfo - {SuperMap.DatasetInfo} 数据集信息。
     * displayFilter - {String} 图层显示过滤条件。
     * joinItems - {SuperMap.JoinItem} 连接信息类。
     * representationField - {String} 存储制图表达信息的字段。
     * ugcLayerType - {SuperMap.LayerType} 图层类型。
     */
    initialize: function (options) {
        options = options || {};
        SuperMap.UGCMapLayer.prototype.initialize.apply(this, [options]);
    },


    /**
     * Method: fromJson
     * 将服务端JSON对象转换成当前客户端对象
     * Parameters:
     * jsonObject - {Object} 要转换的 JSON 对象。
     */
    fromJson: function (jsonObject) {
        SuperMap.UGCMapLayer.prototype.fromJson.apply(this, [jsonObject]);
        if (this.datasetInfo) {
            this.datasetInfo = new DatasetInfo(this.datasetInfo);
        }
        if (this.joinItems && this.joinItems.length) {
            var newJoinItems = [];
            for (var i = 0; i < this.joinItems.length; i++) {
                newJoinItems[i] = new JoinItem(this.joinItems[i]);
            }
            this.joinItems = newJoinItems;
        }
    },

    destroy: function () {
        SuperMap.UGCMapLayer.prototype.destroy.apply(this, arguments);
        SuperMap.Util.reset(this);
    },

    /**
     * Method: toServerJSONObject
     * 转换成对应的 JSON 格式对象。
     */
    toServerJSONObject: function () {
        var jsonObject = SuperMap.UGCMapLayer.prototype.toServerJSONObject.apply(this, arguments);
        if (jsonObject.joinItems) {
            var joinItems = [];
            for (var i = 0; i < jsonObject.joinItems.length; i++) {
                if (jsonObject.joinItems[i].toServerJSONObject) {
                    joinItems[i] = jsonObject.joinItems[i].toServerJSONObject();
                }

            }
            jsonObject.joinItems = joinItems;
        }
        if (jsonObject.datasetInfo) {
            if (jsonObject.datasetInfo.toServerJSONObject) {
                jsonObject.datasetInfo = jsonObject.datasetInfo.toServerJSONObject();
            }
        }
        return jsonObject;
    },

    CLASS_NAME: "SuperMap.UGCSubLayer"
});
module.exports = SuperMap.UGCSubLayer;
