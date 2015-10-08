openerp.oepetstore = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.GreetingsWidget = instance.Widget.extend({
        className: 'oe_petstore_greetings',
        start: function() {
            console.log(this.getParent().$el );
        },
    });

    local.HomePage = instance.Widget.extend({
        className: 'oe_petstore_homepage',
        start: function() {
            var greeting = new local.GreetingsWidget(this);
            greeting.appendTo(this.$el);
            console.log(this.getChildren()[0].$el);
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
