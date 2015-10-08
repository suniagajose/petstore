openerp.oepetstore = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.HomePage = instance.Widget.extend({
        start: function() {
            var myWidget = new local.MyWidget(this);
            this.widget = myWidget;
            this.widget.on("change:name", this, this.name_changed);
            this.widget.set("name", "Nicolas");
        },
        name_changed: function() {
            console.log("The new value of the property 'name' is", this.widget.get("name"));
        }
    });

    local.MyWidget = instance.Widget.extend({
    });

    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
}
