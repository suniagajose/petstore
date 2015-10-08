openerp.oepetstore = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.HomePage = instance.Widget.extend({
        start: function() {
            this.$el.append("<div>Hello dear Odoo user!</div>");
        },
    });

    var MyClass = instance.web.Class.extend({
        init: function(name) {
            this.name = name;
        },
        say_hello: function() {
            console.log("hello", this.name);
        },
    });

    var MySpanishClass = MyClass.extend({
        say_hello: function() {
            this._super();
            console.log("translation in Spanish: hola", this.name);
        },
    });

    var my_object = new MySpanishClass("Bob");
    my_object.say_hello();

    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
}
