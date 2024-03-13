Ext.define("Voyant.panel.Dream", {
	extend: "Ext.panel.Panel",
	requires: ['Voyant.data.store.DocumentQueryMatches','Voyant.util.Variants'],
	mixins: ['Voyant.panel.Panel'],
	alias: 'widget.dream',
    config: {
    	corpus: undefined,
    	variants: undefined
    },
    statics: {
        api: {
        	documentFormat: 'ORIGINAL',
        	documentFilename: 'pubDate,author,title'
        }
    },
    constructor: function(config) {
        this.callParent(arguments);
    	this.mixins['Voyant.panel.Panel'].constructor.apply(this, arguments);

    },
    initComponent: function() {
        var me = this;
        me.callParent(arguments);
        this.setVariants(Ext.create("Voyant.util.Variants", [["one","two"],["un","deux"]]))
    },
    
	listeners: {
		afterrender: function(container) {
						
			if (!container.getCorpus()) {
				container.body.mask();
			}
			$("#export").click(function(ev) {
				if ($("#total-badge").html()!="0") {
					var format = container.getApiParam("documentFormat");
					// make sure the API value is uppercase if it's set
					if (Ext.isDefined(format) && format!=format.toUpperCase()) {container.setApiParam('documentFormat', format.toUpperCase());}
					
					var fieldLabels = {
							pubDate: 'year',
							title: 'title',
							author: 'author',
							publisher: 'publisher'
					};
					var documentFilenames = container.getApiParam('documentFilename').split(',')
					var filenameHtml = '<table><tr><td>include:</td><td><ul id="filename-use" class="filenamegroup">'
					var seenFilenames = {};
					documentFilenames.forEach(function(field) {
						seenFilenames[field]=true;
						filenameHtml+="<li data-field='"+field+"'>"+fieldLabels[field]+"</li>";
					});
					filenameHtml += '</ul></td></tr><tr><td>exclude:</td><td><ul id="filename-ignore" class="filenamegroup">'
					for (var field in fieldLabels) {
						if (!seenFilenames[field]) {
							filenameHtml+="<li data-field='"+field+"'>"+fieldLabels[field]+"</li>";
						}
					}
					filenameHtml += '</ul></td></tr></table>',

					Ext.create('Ext.window.Window', {
					    title: 'Export DREaM Corpus',
//					    modal: true,
					    width: 500,
					    items: [{
					    	xtype: 'container',
					    	layout: 'hbox',
					    	defaults: {
					    		flex: 1,
					    		margin: 5,
						    	xtype: 'button'
					    	},
					    	items: [{
						    	text: 'Send to Voyant Tools',
			                    glyph: 'xf08e@FontAwesome',
			                    cls: 'send-voyant',
			                    handler: function(button) {
			                    	var dlg = button.findParentByType("window");
			                    	dlg.mask("Creating corpus…");
			                    	container.getAggregateSearchDocumentQueryMatches({
			                    		params: {createNewCorpus: true},
			                    		callback: function(records, operation, success) {
			                    			if (success) {
			                    				var corpus = operation.getProxy().getReader().rawData.documentsFinder.corpus;
			                    				var url = this.getBaseUrl()+"?corpus="+corpus;
			                    				var win = window.open(url);
			                    				if (!win) { // popup blocked
			                    					win = Ext.Msg.show({
			                    						buttons: Ext.MessageBox.OK,
			                    						buttonText: {ok: "Close"},
			                    						icon: Ext.MessageBox.INFO,
			                    						message: "<a href='"+url+"' target='_blank' class='link'>Click here</a> to access your new corpus.",
			                    						buttonText: 'Close'
			                    					});
			                    					Ext.Msg.getEl().dom.querySelector("a").addEventListener("click", function() {
			                    						win.close()
			                    					})
			                    				}
			                    				dlg.destroy();
			                    			}
			                    		}
			                    	})
			                    }
						    },{
						    	text: 'Download a ZIP Archive',
						    	glyph: 'xf019@FontAwesome',
			                    handler: function(button) {
			                    	var dlg = button.findParentByType("window");
			                    	dlg.mask("Creating corpus…");
			                    	container.getAggregateSearchDocumentQueryMatches({
			                    		params: {createNewCorpus: true, temporaryCorpus: true},
			                    		callback: function(records, operation, success) {
			                    			if (success) {
			                    				var data = operation.getProxy().getReader().rawData.documentsFinder;
			                    				var url = this.getTromboneUrl()+"?corpus="+data.corpus+"&tool=corpus.CorpusExporter&outputFormat=zip"+
			                    					"&zipFilename=DreamCorpus-"+data.documentsCount+"Documents.zip"+
			                    					"&documentFormat="+(container.getApiParam("documentFormat"))+
			                    					"&documentFilename="+container.getApiParam("documentFilename")
			                    				var win = window.open(url);
			                    				if (!win) { // popup blocked
			                    					win = Ext.Msg.show({
			                    						buttons: Ext.MessageBox.OK,
			                    						buttonText: {ok: "Close"},
			                    						icon: Ext.MessageBox.INFO,
			                    						message: "<a href='"+url+"' target='_blank' class='link'>Click here to download your new corpus.</a>"
			                    					});
			                    					Ext.Msg.getEl().dom.querySelector("a").addEventListener("click", function() {
			                    						win.close()
			                    					})
			                    				}
			                    				dlg.destroy();
			                    			}
			                    		}
			                    	})
			                    }
						    }]
					    },{
					    	xtype: 'fieldset',
					    	title: 'Download Details',
					    	collapsible: true,
					    	collapsed: true,
					    	items: [{
					    		xtype: 'radiogroup',
					            fieldLabel: 'file format',
					            cls: 'x-check-group-alt',
					            width: 500,
					            labelWidth: 80,
					            items: [
						            {boxLabel: 'DREaM XML', name: 'export-format', inputValue: 'SOURCE', checked: format=="SOURCE"},
						            {boxLabel: 'Voyant XML', name: 'export-format', inputValue: 'ORIGINAL', checked: format=="ORIGINAL" || !format},
					                {boxLabel: 'plain text', name: 'export-format', inputValue: 'TXT', checked: format=="TXT"}
					            ],
					            listeners: {
					            	change: function(radio, newValue) {
					            		debugger
					            		container.setApiParam('documentFormat', newValue['export-format']);
					            	}
					            }
					    	},{
					    		xtype: 'fieldset',
					    		title: 'File Name',
					    		cls: 'filename',
						    	html: filenameHtml,
						    	listeners: {
						    		afterrender: {
						    			fn: function() {
						    				$( "#filename-use, #filename-ignore" ).sortable({
						    				      connectWith: ".filenamegroup",
						    				      update: function( event, ui ) {
						    				    	  if (this.id=="filename-use") {
						    				    		  var items = this.querySelectorAll("li");
						    				    		  var fields = [];
						    				    		  for (var i=0, len=items.length; i<len; i++) {
						    				    			  fields.push(items[i].getAttribute('data-field'))
						    				    		  }
						    				    		  container.setApiParam("documentFilename", fields.length>0 ? fields.join(",") : undefined);
						    				    	  }
						    				      }
						    				    }).disableSelection();
						    			}
						    		}
						    	}
					    	}]
					    }]
					}).show();
				}
				else {
					Ext.Msg.show({
					    title:'Export Error',
					    message: 'No documents match the all of the current selection criteria.',
					    buttons: Ext.Msg.OK,
					    icon: Ext.Msg.ERROR
					});
				}
				ev.preventDefault();
			});
			var extractLast = function(term) {
			      return split( term ).pop();
		    };
			var split = function( val ) {
			      return val.split( /,\s*/ );
		    };
		    $("#slider-pubDate").slider({
		        range: true,
		        min: 1450,
		        max: 1700,
		        values: [ 1450, 1450 ],
		        slide: function( event, ui ) {
		          $( "#pubDate-label" ).html( ui.values[ 0 ] + "-" + ui.values[ 1 ] );
		        },
		        change: function(event, ui) {
		        	container.search(ui.values[0]==ui.values[1] ? new String(ui.values[0]) : "["+ui.values[0]+"-"+ui.values[1]+"]", "pubDate")
		        }
		    
		      });
		    $( "#pubDate-label" ).html(  $( "#slider-pubDate" ).slider( "values", 0 ) +
		    	      "-" + $( "#slider-pubDate" ).slider( "values", 1 ) );
		    
			$(".dream-terms-search")
		      // don't navigate away from the field on tab when selecting an item
		      .bind( "keydown", function( event ) {
		        if ( event.keyCode === $.ui.keyCode.TAB &&
		            $( this ).autocomplete( "instance" ).menu.active ) {
		          event.preventDefault();
		        }
		        if (event.keyCode === $.ui.keyCode.TAB || event.keyCode === $.ui.keyCode.ENTER) {
		        	container.search(this.value, this.name);
			        if (event.keyCode === $.ui.keyCode.ENTER) {
			        	event.preventDefault();
			        }
		        }
		      })
		      .autocomplete({
		        source: function( request, response ) {
		        	var field = this.element[0].name;
		        	var fieldPrefix = field=="lexical" ? "" : field+":";
		        	var term = extractLast( request.term ).trim().replace(/,$/,'');
		        	if (term.charAt(0)=='-') {
		        		fieldPrefix = '-'+fieldPrefix;
		        		term = term.substring(1)
		        	}
		        	var queries = [fieldPrefix+term+"*","^"+fieldPrefix+term+"*"];
		        	
		        	if ($("#variants")[0] && $("#variants")[0].checked) {
			        	var variants = container.getVariants().getVariants(term);
			        	if (Ext.isArray(variants) && variants.length>1) {
				        	for (var i=0, len=variants.length; i<len; i++) {
				        		variants[i] = fieldPrefix+variants[i];
				        	}
				        	queries.push(variants.join("|"))
			        		
			        	}
		        	}
		        	
		        	$.ajax({
		                url: container.getTromboneUrl(),
		                dataType: "json",
		                data: {
				            query: queries,
				            tool: 'corpus.CorpusTerms',
				            sort: 'INDOCUMENTSCOUNT',
				            dir: 'DESC',
				            inDocumentsCountOnly: true,
				            limit: 5,
				            corpus: container.getCorpus().getId()
		                },
		                success: function( data ) {
		                	var terms = [];
		                	var fieldPrefixRegex = new RegExp(field+":","g");
				        	data.corpusTerms.terms.forEach(function(corpusTerm) {
				        		var term = corpusTerm.term.replace(fieldPrefixRegex,"");
				        		  terms.push({id: corpusTerm.term, label: term+ "  ("+corpusTerm.inDocumentsCount+")", value: term})
				        	})
				        	response(terms);
		                }
		              });
		        },
		        search: function() {
		          // custom minLength
		          var term = extractLast( this.value );
		          if ( term.length < 2 ) {
		            return false;
		          }
		        },
		        focus: function() {
		          // prevent value inserted on focus
		          return false;
		        },
		        select: function( event, ui ) {
		          var terms = split( this.value );
		          // remove the current input
		          terms.pop();
		          // add the selected item
		          terms.push( ui.item.value );
		          // add placeholder to get the comma-and-space at the end
		          terms.push( "" );
		          this.value = terms.join( ", " );
		          container.search(this.value, this.name);
		          return false;
		        }
		      });
		},
		loadedCorpus: function(src, corpus) {
			this.body.unmask();
			this.setCorpus(corpus);
		}
	},
	
	getFieldValueSearchQuery: function(value, field) {
		var queries = [];
		var values = value.toLowerCase().trim().replace(/,$/,'').split(/\s*[,|]\s*/).forEach(function(val) {
			val = val.trim();
			if (val.charAt(0)=='-') {queries.push("-"+field+":"+val.substring(1))}
			else {queries.push(field+":"+val)}
		})
		return queries.join("|")
	},
	
	search: function(value, field) {
		var el = Ext.get(this.getEl().dom.querySelector("#"+field+"-badge"));
		el.setDisplayed("initial").update("?");
		var query = this.getFieldValueSearchQuery(value, field)
		if (query.length>0) {
			Ext.create("Voyant.data.store.DocumentQueryMatches", {
				autoDestroy: true,
				autoLoad: false,
				corpus: this.getCorpus()
			}).load({
				scope: this,
				params: {query: query},
				callback: function(records, operation, success) {
					var count = success && records.length>0 ? records[0].getCount() : "0";
					el.dom.innerHTML=count; // update(0) doesn't work
					this.searchAggregate();
				}
			})
		}
		else {
			el.dom.innerHTML=0;
			this.searchAggregate();
		}
	},
	searchAggregate: function() {
		var aggregateQueries = this.getAggregateQueries();

		var el = Ext.get(this.getEl().dom.querySelector("#total-badge"));
		el.setDisplayed("initial").update("?");
		if (aggregateQueries.queries.length>0) {
			// one field, so just copy value until search is complete
			if (aggregateQueries.queries.length==1) {
				el.dom.innerHTML = this.getEl().dom.querySelector("#"+aggregateQueries.fields[0]+"-badge").innerHTML; // only one field, so just copy value
			}
			this.getAggregateSearchDocumentQueryMatches({
				params: {
					withDistributions: true,
					bins: 10
				},
				callback: function(records, operation, success) {
					var count = 0;
					if (success) {
						records.forEach(function(record, i) {
							count+=record.getCount();
							if (i==0) {
								var values = record.getDistributions();
								if (this.aggregateSparkline) {
									this.aggregateSparkline.setValues(values)
								}
								else {
									var ex = Ext.get(this.getEl().dom.querySelector("#export"));
									this.aggregateSparkline = Ext.create({
										xtype: 'sparklineline',
										values: values,
										height: 25,
										width: 100,
										renderTo: ex,
										cls: 'dream-spark'
									});
									ex.appendChild(this.aggregateSparkline.el);
								}
							}
						}, this)
					}
					el.dom.innerHTML=count; // update(0) doesn't work
				}
			})
		}
		else {
			el.dom.innerHTML=0;
		}
	},
	getAggregateQueries: function() {
		var queries = [];
		var fields = [];
		var searches = this.getEl().dom.querySelectorAll(".dream-terms-search");
		for (var i=0,len=searches.length;i<len;i++) {
			var query = this.getFieldValueSearchQuery(searches[i].value, searches[i].name)
			if (query.indexOf('|')>-1) {
				queries.push("+("+query+")")
			}
			else if (query.charAt(0)=='-') {
				queries.push(query)
			}
			else {
				queries.push("+"+query)
			}
		}

		var pubYearSlider = $(this.getEl().dom.querySelector("#slider-pubDate"));
		var values = pubYearSlider.slider("values");
		var min = pubYearSlider.slider("option", "min");
		if (values[1]>min) { // make sure we don't have default end value
			queries.push("+pubDate:"+(values[0]==values[1] ? values[0] : "["+values[0]+"-"+values[1]+"]"))
			fields.push("pubDate");
		}
		return {queries: queries, fields: fields}
	},
	getAggregateSearchDocumentQueryMatches: function(config) {
		var docMatches = this.getCorpus().getDocumentQueryMatches();
		config = config || {};
		
		config.params = config.params || {};
		Ext.applyIf(config.params, {
			withDistributions: true,
			bins: 100,
			query:  this.getAggregateQueries().queries.join(" ")
		});
		docMatches.load(Ext.applyIf(config, {
			scope: this
		}))
	}
	
})
