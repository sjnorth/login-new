function clicked() {

	var user = document.getElementById("username");
	var pass = document.getElementById("password");

	var coruser = "test";
	var corpass = "123";

	if(user.value == coruser) {

		if(pass.value == corpass) {

			alert("You are logged in as" + user.value);
			open("http://www.samanthanorth.com");


		} else {

			alert("Incorrect username or password!");
		}

	} else {

		alert("Incorrect username or password!");
	}
	
}