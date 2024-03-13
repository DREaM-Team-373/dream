Ext.data.JsonP.Spyral_Chart({"tagname":"class","name":"Spyral.Chart","autodetected":{},"files":[{"filename":"spyral.js","href":null}],"members":[{"name":"constructor","tagname":"method","owner":"Spyral.Chart","id":"method-constructor","meta":{}},{"name":"bar","tagname":"method","owner":"Spyral.Chart","id":"method-bar","meta":{}},{"name":"column","tagname":"method","owner":"Spyral.Chart","id":"method-column","meta":{}},{"name":"create","tagname":"method","owner":"Spyral.Chart","id":"method-create","meta":{}},{"name":"line","tagname":"method","owner":"Spyral.Chart","id":"method-line","meta":{}},{"name":"networkgraph","tagname":"method","owner":"Spyral.Chart","id":"method-networkgraph","meta":{}},{"name":"scatter","tagname":"method","owner":"Spyral.Chart","id":"method-scatter","meta":{}},{"name":"bar","tagname":"method","owner":"Spyral.Chart","id":"static-method-bar","meta":{"static":true}},{"name":"column","tagname":"method","owner":"Spyral.Chart","id":"static-method-column","meta":{"static":true}},{"name":"create","tagname":"method","owner":"Spyral.Chart","id":"static-method-create","meta":{"static":true}},{"name":"line","tagname":"method","owner":"Spyral.Chart","id":"static-method-line","meta":{"static":true}},{"name":"networkgraph","tagname":"method","owner":"Spyral.Chart","id":"static-method-networkgraph","meta":{"static":true}},{"name":"scatter","tagname":"method","owner":"Spyral.Chart","id":"static-method-scatter","meta":{"static":true}},{"name":"setSeriesData","tagname":"method","owner":"Spyral.Chart","id":"static-method-setSeriesData","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Spyral.Chart","short_doc":"The Chart class in Spyral. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>The Chart class in Spyral.\nThis class provides methods for creating a variety of charts.\nCharts are created using the <a href=\"https://api.highcharts.com/highcharts/\">Highcharts Library</a>.\nHighcharts have many configuration options and <a href=\"#!/api/Spyral.Chart\" rel=\"Spyral.Chart\" class=\"docClass\">Spyral.Chart</a> helps to streamline the process.\nA simple example:</p>\n\n<pre><code><a href=\"#!/api/Spyral.Chart-method-line\" rel=\"Spyral.Chart-method-line\" class=\"docClass\">Spyral.Chart.line</a>({ series: [{ data: [0,2,1,3] }] })\n</code></pre>\n\n<p>A more complex example:</p>\n\n<pre><code><a href=\"#!/api/Spyral.Chart-method-column\" rel=\"Spyral.Chart-method-column\" class=\"docClass\">Spyral.Chart.column</a>({\n    title: 'Wildflowers',\n    series: [{\n        name: 'Ontario',\n        data: [13, 39, 139, 38]\n    },{\n        name: 'Quebec',\n        data: [14, 33, 94, 30]\n    }],\n    xAxis: {\n        title: 'Number of Petals',\n        categories: [3, 4, 5, 6]\n    }\n})\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Spyral.Chart-method-constructor' class='name expandable'>Spyral.Chart</a>( <span class='pre'>[target], data</span> ) : <a href=\"#!/api/Spyral.Chart\" rel=\"Spyral.Chart\" class=\"docClass\">Spyral.Chart</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Construct a new Chart class ...</div><div class='long'><p>Construct a new Chart class</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : (String|Element) (optional)<div class='sub-desc'><p>An element or ID to use as the chart's target. If not specified, one will be created.</p>\n</div></li><li><span class='pre'>data</span> : Array<div class='sub-desc'><p>An array of data to visualize.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Spyral.Chart\" rel=\"Spyral.Chart\" class=\"docClass\">Spyral.Chart</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-method-bar' class='name expandable'>bar</a>( <span class='pre'>[config]</span> ) : Highcharts.Chart<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a bar chart ...</div><div class='long'><p>Create a bar chart</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-column' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-method-column' class='name expandable'>column</a>( <span class='pre'>[config]</span> ) : Highcharts.Chart<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a column chart ...</div><div class='long'><p>Create a column chart</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-method-create' class='name expandable'>create</a>( <span class='pre'>[target], config</span> ) : Highcharts.Chart<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new chart. ...</div><div class='long'><p>Create a new chart.\nSee <a href=\"https://api.highcharts.com/highcharts/\">Highcharts API</a> for full set of config options.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : (String|Element) (optional)<div class='sub-desc'><p>An element or ID to use as the chart's target. If not specified, one will be created.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>title</span> : (string|object)<div class='sub-desc'>\n</div></li><li><span class='pre'>subtitle</span> : (string|object)<div class='sub-desc'>\n</div></li><li><span class='pre'>credits</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>xAxis</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>yAxis</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>chart</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>series</span> : Array&lt;HighchartsSeriesConfig&gt;<div class='sub-desc'>\n</div></li><li><span class='pre'>plotOptions</span> : Object<div class='sub-desc'>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-line' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-method-line' class='name expandable'>line</a>( <span class='pre'>[config]</span> ) : Highcharts.Chart<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a line chart ...</div><div class='long'><p>Create a line chart</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-networkgraph' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-method-networkgraph' class='name expandable'>networkgraph</a>( <span class='pre'>[config]</span> ) : <a href=\"#!/api/Spyral.NetworkGraph\" rel=\"Spyral.NetworkGraph\" class=\"docClass\">Spyral.NetworkGraph</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a network graph ...</div><div class='long'><p>Create a network graph</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Spyral.NetworkGraph\" rel=\"Spyral.NetworkGraph\" class=\"docClass\">Spyral.NetworkGraph</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-scatter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-method-scatter' class='name expandable'>scatter</a>( <span class='pre'>[config]</span> ) : Highcharts.Chart<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a scatter plot ...</div><div class='long'><p>Create a scatter plot</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-bar' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-static-method-bar' class='name expandable'>bar</a>( <span class='pre'>[target], config</span> ) : Highcharts.Chart<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a bar chart ...</div><div class='long'><p>Create a bar chart</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : (String|Element) (optional)<div class='sub-desc'><p>An element or ID to use as the chart's target. If not specified, one will be created.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-column' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-static-method-column' class='name expandable'>column</a>( <span class='pre'>[target], config</span> ) : Highcharts.Chart<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a column chart ...</div><div class='long'><p>Create a column chart</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : (String|Element) (optional)<div class='sub-desc'><p>An element or ID to use as the chart's target. If not specified, one will be created.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-static-method-create' class='name expandable'>create</a>( <span class='pre'>[target], config</span> ) : Highcharts.Chart<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a new chart. ...</div><div class='long'><p>Create a new chart.\nSee <a href=\"https://api.highcharts.com/highcharts/\">Highcharts API</a> for full set of config options.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : (String|Element) (optional)<div class='sub-desc'><p>An element or ID to use as the chart's target. If not specified, one will be created.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>title</span> : (string|object)<div class='sub-desc'>\n</div></li><li><span class='pre'>subtitle</span> : (string|object)<div class='sub-desc'>\n</div></li><li><span class='pre'>credits</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>xAxis</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>yAxis</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>chart</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>series</span> : Array&lt;HighchartsSeriesConfig&gt;<div class='sub-desc'>\n</div></li><li><span class='pre'>plotOptions</span> : Object<div class='sub-desc'>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-line' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-static-method-line' class='name expandable'>line</a>( <span class='pre'>[target], config</span> ) : Highcharts.Chart<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a line chart ...</div><div class='long'><p>Create a line chart</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : (String|Element) (optional)<div class='sub-desc'><p>An element or ID to use as the chart's target. If not specified, one will be created.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-networkgraph' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-static-method-networkgraph' class='name expandable'>networkgraph</a>( <span class='pre'>[target], config</span> ) : <a href=\"#!/api/Spyral.NetworkGraph\" rel=\"Spyral.NetworkGraph\" class=\"docClass\">Spyral.NetworkGraph</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a network graph ...</div><div class='long'><p>Create a network graph</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : (String|Element) (optional)<div class='sub-desc'><p>An element or ID to use as the chart's target. If not specified, one will be created.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Spyral.NetworkGraph\" rel=\"Spyral.NetworkGraph\" class=\"docClass\">Spyral.NetworkGraph</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-scatter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-static-method-scatter' class='name expandable'>scatter</a>( <span class='pre'>[target], config</span> ) : Highcharts.Chart<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a scatter plot ...</div><div class='long'><p>Create a scatter plot</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : (String|Element) (optional)<div class='sub-desc'><p>An element or ID to use as the chart's target. If not specified, one will be created.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Highcharts.Chart</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-setSeriesData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spyral.Chart'>Spyral.Chart</span><br/></div><a href='#!/api/Spyral.Chart-static-method-setSeriesData' class='name expandable'>setSeriesData</a>( <span class='pre'>config, data</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Add the provided data to the config as a series ...</div><div class='long'><p>Add the provided data to the config as a series</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});