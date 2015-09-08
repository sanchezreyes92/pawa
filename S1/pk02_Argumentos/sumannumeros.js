var val=process.argv.length;
var arg=parseInt(val);
var incr=0;
for(var i=2; i<arg; i++){
	incr=(parseInt(process.argv[i])+incr);
}
console.log(incr);