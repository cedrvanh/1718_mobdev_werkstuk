(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['desktop-nav.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a href=\""
    + alias4(((helper = (helper = helpers.navLink || (depth0 != null ? depth0.navLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navLink","hash":{},"data":data}) : helper)))
    + "\"><li class=\"nav__user-functions\"><img src=\""
    + alias4(((helper = (helper = helpers.navIcon || (depth0 != null ? depth0.navIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navIcon","hash":{},"data":data}) : helper)))
    + "\"/></li></a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a href=\""
    + alias4(((helper = (helper = helpers.navLink || (depth0 != null ? depth0.navLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navLink","hash":{},"data":data}) : helper)))
    + "\">\r\n            <li class=\"menu "
    + alias4(((helper = (helper = helpers.separatorClass || (depth0 != null ? depth0.separatorClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"separatorClass","hash":{},"data":data}) : helper)))
    + "\">\r\n                <img src=\""
    + alias4(((helper = (helper = helpers.navIcon || (depth0 != null ? depth0.navIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navIcon","hash":{},"data":data}) : helper)))
    + "\"/>\r\n            </li>\r\n            <p class=\"menu-item "
    + alias4(((helper = (helper = helpers.separatorClass || (depth0 != null ? depth0.separatorClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"separatorClass","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.navTitle || (depth0 != null ? depth0.navTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navTitle","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a href=\""
    + alias4(((helper = (helper = helpers.navLink || (depth0 != null ? depth0.navLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navLink","hash":{},"data":data}) : helper)))
    + "\"><li class=\"social "
    + alias4(((helper = (helper = helpers.separatorClass || (depth0 != null ? depth0.separatorClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"separatorClass","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = helpers.navIcon || (depth0 != null ? depth0.navIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navIcon","hash":{},"data":data}) : helper)))
    + "\"/></li></a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"desktop-navigation\">\r\n    <ul>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.navFunctionItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.navItems : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.navSocialItems : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n";
},"useData":true});
})();