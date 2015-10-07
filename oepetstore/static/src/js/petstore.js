openerp.oepetstore = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.HomePage = instance.Widget.extend({
        start: function() {
            console.log("pet store home page loaded");
        },
    });

    var MyClass = instance.web.Class.extend({
        say_hello: function() {
            console.log("hello", this.name);
        },
    });

    var my_object = new MyClass();
    my_object.name = "Bob";
    my_object.say_hello();

    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
}
