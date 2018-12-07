// Convert time from miliseconds into minute(s) and second(s) string
export default function timeFormat(miliseconds) {

	let remaining = miliseconds / 1000;

	remaining %= 3600;

	const mm = parseInt(remaining / 60, 10);
	const ss = parseInt(remaining % 60, 10);

	let mString, sString, cString;

	// Assign the minute(s) string according to the amount:
	if (mm > 1) {
		mString = mm + ' minutes';
	} else if (mm == 1) {
		mString = mm + ' minute';
	} else if (mm == 0) {
		mString = null;
	}

	// Assign the minute(s) string according to the amount:
	if (ss > 1) {
		sString = ss + ' seconds';
	} else if (ss == 1) {
		sString = ss + ' second'
	} else {
		sString = null;
	}

	// Assign the complete string:
	if (mString && sString) {
		cString = mString + ' and' + sString;
	} else if (mString) {
		cString = mString;
	} else if (sString) {
		cString = sString;
	}

	return cString;
}