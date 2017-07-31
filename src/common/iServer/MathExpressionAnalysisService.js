require('./SpatialAnalystBase');
require('./MathExpressionAnalysisParameters');
var SuperMap = require('../SuperMap');
SuperMap.MathExpressionAnalysisService = SuperMap.Class(SuperMap.SpatialAnalystBase, {
    /**
     * @class SuperMap.MathExpressionAnalysisService
     * @constructs SuperMap.MathExpressionAnalysisService
     * @classdesc
     * 栅格代数运算服务类。
     * @extends {SuperMap.SpatialAnalystBase}
     * @api
     * @example 例如：
     * (start code)
     * var myMathExpressionAnalysisService = new SuperMap.MathExpressionAnalysisService(url);
     * myMathExpressionAnalysisService.on({
     *     "processCompleted": processCompleted,
     *     "processFailed": processFailed
     *     }
     * );
     * (end)
     *
     */

    /**
     * @method SuperMap.MathExpressionAnalysisService.initialize
     * @param options - {Object} 参数。
     * @param url - {String} 服务的访问地址。如 http://localhost:8090/iserver/services/spatialanalyst-changchun/restjsr/spatialanalyst 。
     * Allowed options properties:</br>
     * eventListeners - {Object} 需要被注册的监听器对象。
     */
    initialize: function (url, options) {
        SuperMap.SpatialAnalystBase.prototype.initialize.apply(this, arguments);
    },

    /*
     * APIMethod: destroy
     * 释放资源,将引用资源的属性置空。
     */
    destroy: function () {
        SuperMap.SpatialAnalystBase.prototype.destroy.apply(this, arguments);
    },

    /**
     * APIMethod: processAsync
     * 负责将客户端的查询参数传递到服务端。
     * @method SuperMap.MathExpressionAnalysisService.processAsync
     * @param  parameter - {SuperMap.MathExpressionAnalysisParameters}
     */
    processAsync: function (parameter) {
        var me = this;

        var end = me.url.substr(me.url.length - 1, 1);
        if (end === '/') {

        } else {
            me.url += "/";
        }

        var parameterObject = {};

        if (parameter instanceof SuperMap.MathExpressionAnalysisParameters) {
            me.url += 'datasets/' + parameter.dataset + '/mathanalyst';
        }

        SuperMap.MathExpressionAnalysisParameters.toObject(parameter, parameterObject);
        var jsonParameters = SuperMap.Util.toJSON(parameterObject);

        if (me.isInTheSameDomain) {
            me.url += '.json?returnContent=true';
        } else {
            me.url += '.jsonp?returnContent=true';
        }

        me.request({
            method: "POST",
            data: jsonParameters,
            scope: me,
            success: me.serviceProcessCompleted,
            failure: me.serviceProcessFailed
        });
    },

    CLASS_NAME: "SuperMap.MathExpressionAnalysisService"
});

module.exports = SuperMap.MathExpressionAnalysisService;