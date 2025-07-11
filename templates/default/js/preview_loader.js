/**
 * @author Fabian Schmid <fabian@sr.solutions>
 */

$(document).ready(function () {
	$('.sr-async-loader').each(function () {
		let item = $(this);
		let url = decodeURI(item.data("asyncUrl"));

		$.get(url, function (data) {
			const element = $(`<div>${data}</div>`);
			element.find("[data-replace-marker='script']").each((idx, s) => $.globalEval(s.innerHTML));
			item.html(element);
		});
	});
});