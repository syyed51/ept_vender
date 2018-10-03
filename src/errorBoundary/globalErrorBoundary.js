/* eslint-disable */
import CONFIG from '../config';
window.onerror = function (message, source, lineno, colno, error) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', CONFIG.API_ERROR_LOG_ENPOINT, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			//TODO: redirect to error page
			console.error("Global error boundry window.onerror");
		}
	};
	// var data = JSON.stringify({message: message, source: source, lineno: lineno, colno: colno,});
	// xhr.send(data);
	return false;
};
