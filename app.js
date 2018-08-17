const fs = require("fs");

fs.readFile('./push_button_sound.wav', (err, data) => {
  	if (err) throw err;
	//console.log(data)
	for(var i = 0; i < data.length; i++) {
		var byte = data[i]
		var bits = tobin(byte)
		var bits8 = prefix(bits)
		console.log(byte, bits8)
		if(i == 3) break
	}
});

function prefix(s) {
	var l = s.length
	var diff = 8 - l
	if(diff == 0) {
		return s
	}
	
	var pf = ""
	for(var i = 0; i < diff; i++) {
		pf += "0"
	}
	return pf + s
}

function tobin(n) {
	var s = ""
	for ( ; n >= 0; n /= 2) {
		rem = n % 2
		n -= rem
		s = rem + s
		if (n == 0)
			break
	}
	return s
}