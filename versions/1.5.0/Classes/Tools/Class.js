function Class(){}Class.prototype.construct=function(){};Class.extend=function(e){var t=function(){if(arguments[0]!==Class){this.construct.apply(this,arguments)}};var n=new this(Class);var r=this.prototype;for(var i in e){var s=e[i];if(s instanceof Function)s.$=r;n[i]=s}t.prototype=n;t.extend=this.extend;return t}