/* Tab Changing Functions */

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

function TV() {
		$('body').attr("tab", "TV");
}


/* Page Changing Functions */

function CPU0() {
		$('.page.cpu').attr("page", "0");
}

function CPU1() {
		$('.page.cpu').attr("page", "1");
}

function CPU1_t() {
	if ($('.page.cpu .g_raph').attr("page") == 0) {
		$('.page.cpu .g_raph').attr("page", "1");
	} else if ($('.page.cpu .g_raph').attr("page") == 1) {
		$('.page.cpu .g_raph').attr("page", "2");
	} else {
		$('.page.cpu .g_raph').attr("page", "0");
	}
}

function Disk1_t() {
	if ($('.page.disk .g_raph').attr("page") == 0) {
		$('.page.disk .g_raph').attr("page", "1");
	} else {
		$('.page.disk .g_raph').attr("page", "0");
	}
}

function Network1_t() {
	if ($('.page.network .g_raph').attr("page") == 0) {
		$('.page.network .g_raph').attr("page", "1");
	} else {
		$('.page.network .g_raph').attr("page", "0");
	}
}

function GPU1_t() {
	if ($('.page.gpu .g_raph').attr("page") == 0) {
		$('.page.gpu .g_raph').attr("page", "1");
	} else {
		$('.page.gpu .g_raph').attr("page", "0");
	}
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


function TV0() {
		$('.page.tv').attr("page", "0");
}

function TV1() {
		$('.page.tv').attr("page", "1");
}

function TV2() {
		$('.page.tv').attr("page", "2");
}

function TV3() {
		$('.page.tv').attr("page", "3");
}

/* Section Changing Functions */

function Tab0() {
		$('body').attr("page", "processes");
}

function Tab1() {
		$('body').attr("page", "performance");
}

function Tab2() {
		$('body').attr("page", "user");
}

function Tab3() {
		$('body').attr("page", "details");
}
