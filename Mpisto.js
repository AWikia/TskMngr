(function () {

		document.querySelector("head").insertAdjacentHTML('afterbegin', 
		'<link rel="manifest" href="manifest.json" crossorigin="use-credentials">' +
		'<link rel="shortcut icon" href="favicon.ico">' +
		'<link rel="icon" href="favicon.ico">' +
		'<link rel="favicon" href="favicon.ico">'
		);
	if (getKey('tm-default-page') === '-1') {
		insertKey('tm-default-page', 'processes' );
	}
		/* Active Theme */
		if (getKey('device-theme') === 'light' ) {
			active_tm_theme =  (getKey('color-style-behavior') === 'duo' ) ? 'auto' : 'light'
		} else if ( (getKey('device-theme') === 'dark' ) ) {
			active_tm_theme =  (getKey('color-style-behavior') === 'duo' ) ? 'auto-dark' : 'dark'
		} else if ( (getKey('device-theme') === 'auto' ) || (getKey('device-theme') === 'auto-dark' ) ) {
			active_tm_theme = 'custom';
		} else {
			active_tm_theme = 'auto';
		}
		document.getElementById("AppTheme" + ['01','02','03','04','05'][ ['auto','auto-dark','light','dark','custom'].indexOf(active_tm_theme) ]).checked=true;
		/* Default Page */
		default_page = getKey('tm-default-page');
		$('body').attr("page",  default_page);
		document.getElementById("LandingPage" + ['01','02','03','04','05','06'][ ['processes','performance','history','startup','users','details'].indexOf(default_page) ]).checked=true;
		SetPage(page=0);

})();

   /** When the document is ready, this self-executing function will be run. **/
    (function() {

        var ajax = new XMLHttpRequest();
//        ajax.open("GET", "https://static.wikia.nocookie.net/pkmn/images/a/a6/TMP_EveTM_Graphs.svg/revision/latest?cb=20230330211512&path-prefix=el", true);
        ajax.open("GET", "graphs.svg", true);
        ajax.send();

        /**
         * Append the external SVG to this very SVG.
         *
         * Notice the use of an SVG selector on the document derived from the AJAX result.
         *  This is because the full cannot be included directly into the SVG.
         *  Trying to include to do so would result in:
         *      `HierarchyRequestError: Node cannot be inserted at the specified point in the hierarchy` in Firefox;
         *      `Nodes of type '#document' may not be inserted inside nodes of type 'svg'.` in Chrome.
         */
        ajax.onload = function(e) {
            var parser = new DOMParser();
            var ajaxdoc = parser.parseFromString( ajax.responseText, "image/svg+xml" );
            document.getElementsByTagName('body')[0].appendChild( ajaxdoc.getElementsByTagName('svg')[0] );
        }

    })();   /* END (anonymous function) */


/* Page Changing Functions */
function SetPage(page=0) {
		$('.page.performancepage').attr("page", page);
		$('.page.performancepage .left .button.selected, .page .right').removeClass("selected");
		$('.page.performancepage .left .button.p' + page + ', .page .right.p'+ page).addClass("selected");
}




function CPU1_t() {
	if ($('.page box.right.cpu .g_raph').attr("page") == 0) {
		$('.page box.right.cpu .g_raph').attr("page", "1");
	} else if ($('.page box.right.cpu .g_raph').attr("page") == 1) {
		$('.page box.right.cpu .g_raph').attr("page", "2");
	} else if ($('.page box.right.cpu .g_raph').attr("page") == 2) {
		$('.page box.right.cpu .g_raph').attr("page", "3");
	} else {
		$('.page box.right.cpu .g_raph').attr("page", "0");
	}
}

function Disk1_t() {
	if ($('.page box.right.disk .g_raph').attr("page") == 0) {
		$('.page box.right.disk .g_raph').attr("page", "1");
	} else {
		$('.page box.right.disk .g_raph').attr("page", "0");
	}
}

function Network1_t() {
	if ($('.page box.right.network .g_raph').attr("page") == 0) {
		$('.page box.right.network .g_raph').attr("page", "1");
	} else {
		$('.page box.right.network .g_raph').attr("page", "0");
	}
}

function GPU1_t() {
	if ($('.page box.right.gpu .g_raph').attr("page") == 0) {
		$('.page box.right.gpu .g_raph').attr("page", "1");
	} else if ($('.page box.right.gpu .g_raph').attr("page") == 1) {
		$('.page box.right.gpu .g_raph').attr("page", "2");
	} else if ($('.page box.right.gpu .g_raph').attr("page") == 2) {
		$('.page box.right.gpu .g_raph').attr("page", "3");
	} else {
		$('.page box.right.gpu .g_raph').attr("page", "0");
	}
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

function Tab4() {
		$('body').attr("page", "history");
}

function Tab5() {
		$('body').attr("page", "startup");
}

function Tab6() {
		$('body').attr("page", "settings");
}
