function CPU0() {
		$('.page.cpu').attr("page", "0");
}

function CPU1() {
		$('.page.cpu').attr("page", "1");
}

function CPU1_t() {
	if ($('.page.cpu .g_raph').attr("page") == 0) {
		$('.page.cpu .g_raph').attr("page", "1");
	} else {
		$('.page.cpu .g_raph').attr("page", "0");
	}
}


function CPU() {
		$('body').attr("tab", "CPU");
}

function RAM() {
		$('body').attr("tab", "MEM");
}

function Disk() {
		$('body').attr("tab", "DSK");
}

function Network() {
		$('body').attr("tab", "NET");
}

function GPU() {
		$('body').attr("tab", "GPU");
}

function Disk0() {
		$('.page.disk').attr("page", "0");
}

function Disk1() {
		$('.page.disk').attr("page", "1");
}

function Disk2() {
		$('.page.disk').attr("page", "2");
}

function Network0() {
		$('.page.network').attr("page", "0");
}

function Network1() {
		$('.page.network').attr("page", "1");
}

function GPU0() {
		$('.page.gpu').attr("page", "0");
}

function GPU1() {
		$('.page.gpu').attr("page", "1");
}
